import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { isRateLimited } from '@/lib/rateLimit';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = 'noreply@tilengasafaris.africa';

// Every field below comes straight from an unauthenticated public form
// submission and gets spliced into raw HTML email strings -- escape it so a
// guest can't inject markup/links into the email staff read (or their own
// confirmation email).
function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    if (isRateLimited(req, 'send-email', 8, 15 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many requests, please try again later' }, { status: 429 });
    }

    const body = await req.json();
    const { source, email: rawEmail, name, first_name, last_name, package_name, destination, ...details } = body;

    if (!rawEmail && source !== 'feedback') {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // Reject/ignore a malformed or multi-line email rather than let it flow
    // into the replyTo/to headers or the HTML body unchecked.
    const email = typeof rawEmail === 'string' && EMAIL_RE.test(rawEmail.trim()) ? rawEmail.trim() : '';
    if (rawEmail && !email && source !== 'feedback') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const displayName = name || (first_name ? `${first_name} ${last_name}` : 'Valued Guest');

    let subject = "";
    if (source === 'quote') subject = `Free Quote Request from ${displayName}`;
    else if (source === 'newsletter') subject = `New Newsletter Subscriber: ${email}`;
    else if (source === 'feedback') subject = `New Safari Feedback from ${displayName}`;
    else if (source === 'package_enquiry' && package_name) subject = `Package Enquiry: ${package_name} — ${displayName}`;
    else if (source === 'itinerary_request' && destination) subject = `Custom Itinerary Request: ${destination} — ${displayName}`;
    else subject = `New Safari Enquiry from ${displayName}`;

    // Specific formatting for Feedback source
    let mainContentHtml = "";
    if (source === 'feedback') {
      const sections = [
        {
          title: "Experience",
          fields: [
            { label: "Overall Rating", value: `${escapeHtml(body.overall_rating)}/5 ★` },
            { label: "Expectations", value: escapeHtml(body.expectations) }
          ]
        },
        {
          title: "Highlights",
          fields: [
            { label: "Trip Highlight", value: escapeHtml(body.highlight) },
            { label: "Loved about Itinerary", value: escapeHtml(body.itinerary_love) }
          ]
        },
        {
          title: "Logistics & Service Scores",
          fields: [
            { label: "Accommodation", value: escapeHtml(body.sat_acc) },
            { label: "Transportation", value: escapeHtml(body.sat_trans) },
            { label: "Customer Service", value: escapeHtml(body.sat_serv) },
            { label: "Trip Organization", value: escapeHtml(body.sat_org) },
            { label: "Activities", value: escapeHtml(body.sat_act) }
          ]
        },
        {
          title: "Guide & Safety",
          fields: [
            { label: "Guide/Host Rating", value: `${escapeHtml(body.guide_rating)}/5 ★` },
            { label: "Felt Safe & Cared for", value: escapeHtml(body.safety) }
          ]
        },
        {
          title: "Future & Growth",
          fields: [
            { label: "Improvements Needed", value: escapeHtml(body.improve) },
            { label: "Travel Again", value: escapeHtml(body.travel_again) },
            { label: "Recommend to Others", value: escapeHtml(body.recommend) },
            { label: "Next Destination", value: escapeHtml(body.next_dest) }
          ]
        },
        {
          title: "Final Reflections",
          fields: [
            { label: "Additional Comments", value: escapeHtml(body.final) }
          ]
        }
      ];

      mainContentHtml = sections.map(section => `
        <div style="margin-bottom: 25px;">
          <div style="color: #c9a96e; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #c9a96e; padding-bottom: 5px; margin-bottom: 15px;">
            ${section.title}
          </div>
          <div style="padding-left: 10px;">
            ${section.fields.map(f => f.value ? `
              <div style="margin-bottom: 12px; line-height: 1.5;">
                <div style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px;">${f.label}</div>
                <div style="color: #2d3a28; font-size: 15px;">${f.value}</div>
              </div>
            ` : '').join('')}
          </div>
        </div>
      `).join('');
    } else if (source === 'itinerary_request' && destination) {
      // Custom itinerary request — highlight the destination
      mainContentHtml = `
        <div style="background-color: #2d3a28; padding: 20px 25px; margin-bottom: 25px; text-align: center;">
          <div style="color: #c9a96e; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Custom Itinerary Request</div>
          <div style="color: #fcfaf6; font-size: 22px; font-family: serif; line-height: 1.4;">${escapeHtml(destination)}</div>
        </div>
        ${details.travel_dates ? `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">Travel Dates</strong>
          <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${escapeHtml(details.travel_dates)}</div>
        </div>
        ` : ''}
        ${details.travellers ? `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">Number of Travellers</strong>
          <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${escapeHtml(details.travellers)}</div>
        </div>
        ` : ''}
        ${details.budget ? `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">Budget Per Person</strong>
          <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${escapeHtml(details.budget)}</div>
        </div>
        ` : ''}
        ${details.message ? `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">Interests &amp; Preferences</strong>
          <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${escapeHtml(details.message)}</div>
        </div>
        ` : ''}
      `;
    } else if (source === 'package_enquiry' && package_name) {
      // Package enquiry — highlight the package prominently
      mainContentHtml = `
        <div style="background-color: #2d3a28; padding: 20px 25px; margin-bottom: 25px; text-align: center;">
          <div style="color: #c9a96e; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Package of Interest</div>
          <div style="color: #fcfaf6; font-size: 22px; font-family: serif; line-height: 1.4;">${escapeHtml(package_name)}</div>
        </div>
        ${details.message ? `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">Guest Message</strong>
          <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${escapeHtml(details.message)}</div>
        </div>
        ` : ''}
      `;
    } else {
      // Default formatting for other sources
      mainContentHtml = Object.entries(details)
        .map(([key, value]) => `
          <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">${escapeHtml(key.replace(/_/g, ' '))}</strong>
            <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${escapeHtml(value)}</div>
          </div>
        `).join('');
    }

    const emailContent = `
      <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://tilengasafaris.africa/tilenga-logo.png" alt="Tilenga Safaris" style="width: 180px; height: auto; margin-bottom: 20px;" />
          <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px; margin: 0;">
            ${source === 'quote' ? 'Quote Request' : source === 'newsletter' ? 'Newsletter Signup' : source === 'feedback' ? 'Safari Feedback' : 'Safari Enquiry'}
          </h1>
        </div>
        
        <div style="margin-bottom: 30px;">
          <p style="font-size: 16px; line-height: 1.6; color: #2d3a28;">
            A new ${source === 'feedback' ? 'feedback form' : 'enquiry'} has been received from the Tilenga Safaris website.
          </p>
          
          <div style="background-color: #fff; padding: 25px; border: 1px solid #eee; margin: 30px 0;">
            <h3 style="color: #c9a96e; margin-top: 0; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em; border-bottom: 1px solid #eee; padding-bottom: 10px;">Guest Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              ${displayName !== 'Valued Guest' ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px; font-weight: bold;">${escapeHtml(displayName)}</td>
              </tr>
              ` : ''}
              ${email ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Email:</td>
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px;">${escapeHtml(email)}</td>
              </tr>
              ` : ''}
              ${body.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Phone:</td>
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px;">${escapeHtml(body.phone)}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Date:</td>
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          ${mainContentHtml}
        </div>
        
        <div style="border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.8; text-align: center;">
          <p style="margin: 0;"><strong>Tilenga Safaris</strong> | Website Administration</p>
          <p style="margin: 0;">Generated from tilengasafaris.africa</p>
        </div>
      </div>
    `;

    // Prepare email promises
    const emailPromises = [];

    // 1. Send notification to Tilenga Safaris
    emailPromises.push(
      resend.emails.send({
        from: `Tilenga Website <${fromEmail}>`,
        to: ['destinations@tilengasafaris.com'],
        subject: subject,
        html: emailContent,
        replyTo: email || fromEmail,
      })
    );

    // 2. Send confirmation to the Guest
    if (email) {
      const isNewsletter = source === 'newsletter';
      const confirmationSubject = isNewsletter
        ? `Welcome to Tilenga Safaris`
        : source === 'feedback'
          ? `Feedback Received - Tilenga Safaris`
          : source === 'package_enquiry' && package_name
            ? `Your Enquiry for ${package_name} - Tilenga Safaris`
            : source === 'itinerary_request' && destination
              ? `Your Custom ${destination} Itinerary Request - Tilenga Safaris`
              : `Enquiry Received - Tilenga Safaris`;

      const confirmationHtml = `
        <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://tilengasafaris.africa/tilenga-logo.png" alt="Tilenga Safaris" style="width: 180px; height: auto; margin-bottom: 20px;" />
            <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px;">
              ${isNewsletter ? 'Welcome Along' : 'Thank You'}
            </h1>
          </div>
          <p style="font-size: 18px; line-height: 1.6;">Dear ${escapeHtml(displayName)},</p>
          ${source === 'itinerary_request' && destination ? `
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for your interest in exploring <strong>${escapeHtml(destination)}</strong> with Tilenga Safaris.
          </p>
          <div style="background-color: #2d3a28; padding: 18px 25px; margin: 25px 0; text-align: center;">
            <div style="color: #c9a96e; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 6px;">Custom Itinerary Request</div>
            <div style="color: #fcfaf6; font-size: 20px; font-family: serif;">${escapeHtml(destination)}</div>
          </div>
          <p style="font-size: 16px; line-height: 1.6;">
            Your request has been received and one of our dedicated ${escapeHtml(destination)} specialists is now reviewing your preferences. They will personally reach out to you within 24 hours with a selection of tailored itinerary options designed around your interests, travel dates, and group size.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Should you have any urgent questions in the meantime, please do not hesitate to contact us directly at <a href="mailto:destinations@tilengasafaris.com" style="color: #c9a96e; text-decoration: none;">destinations@tilengasafaris.com</a>.
          </p>
          ` : source === 'package_enquiry' && package_name ? `
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for your interest in <strong>${escapeHtml(package_name)}</strong>. We are delighted that this safari experience has caught your attention.
          </p>
          <div style="background-color: #2d3a28; padding: 18px 25px; margin: 25px 0; text-align: center;">
            <div style="color: #c9a96e; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 6px;">Your Selected Package</div>
            <div style="color: #fcfaf6; font-size: 20px; font-family: serif;">${escapeHtml(package_name)}</div>
          </div>
          <p style="font-size: 16px; line-height: 1.6;">
            Your enquiry has been received and assigned to one of our dedicated safari specialists. They will carefully review your requirements and reach out to you personally within the next 24 hours with a tailored response, including detailed pricing, availability, and any customisation options.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            In the meantime, should you have any urgent questions, please do not hesitate to contact us directly at <a href="mailto:destinations@tilengasafaris.com" style="color: #c9a96e; text-decoration: none;">destinations@tilengasafaris.com</a>.
          </p>
          ` : `
          <p style="font-size: 16px; line-height: 1.6;">
            ${isNewsletter
              ? "Thank you for subscribing to our newsletter. You'll now be the first to receive safari inspiration, exclusive offers, and wildlife stories from the heart of Africa."
              : `Thank you for reaching out to Tilenga Safaris. We have received your ${source === 'quote' ? 'quote request' : source === 'feedback' ? 'feedback' : 'enquiry'} and our specialist team is already reviewing the details.`}
          </p>
          ${!isNewsletter ? `
          <p style="font-size: 16px; line-height: 1.6;">
            ${source === 'feedback'
              ? 'Your feedback is invaluable to us as we strive to create exceptional African journeys.'
              : 'You can expect a personalized response from our experts within the next 24 hours.'}
          </p>
          ` : ''}
          `}
          
          <div style="border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.8;">
            <p style="margin: 0;"><strong>Tilenga Safaris</strong></p>
            <p style="margin: 0;">Kampala, Uganda</p>
            <p style="margin: 0;"><a href="https://tilengasafaris.africa" style="color: #c9a96e; text-decoration: none;">www.tilengasafaris.africa</a></p>
          </div>
        </div>
      `;

      emailPromises.push(
        resend.emails.send({
          from: `Tilenga Safaris <${fromEmail}>`,
          to: [email],
          subject: confirmationSubject,
          html: confirmationHtml,
        })
      );
    }

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
