import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = 'noreply@tilengasafaris.africa';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { source, email, name, first_name, last_name, ...details } = body;

    if (!email && source !== 'feedback') {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const displayName = name || (first_name ? `${first_name} ${last_name}` : 'Valued Guest');
    
    let subject = "";
    if (source === 'quote') subject = `Free Quote Request from ${displayName}`;
    else if (source === 'newsletter') subject = `New Newsletter Subscriber: ${email}`;
    else if (source === 'feedback') subject = `New Safari Feedback from ${displayName}`;
    else subject = `New Safari Enquiry from ${displayName}`;

    // Specific formatting for Feedback source
    let mainContentHtml = "";
    if (source === 'feedback') {
      const sections = [
        {
          title: "Experience",
          fields: [
            { label: "Overall Rating", value: `${body.overall_rating}/5 ★` },
            { label: "Expectations", value: body.expectations }
          ]
        },
        {
          title: "Highlights",
          fields: [
            { label: "Trip Highlight", value: body.highlight },
            { label: "Loved about Itinerary", value: body.itinerary_love }
          ]
        },
        {
          title: "Logistics & Service Scores",
          fields: [
            { label: "Accommodation", value: body.sat_acc },
            { label: "Transportation", value: body.sat_trans },
            { label: "Customer Service", value: body.sat_serv },
            { label: "Trip Organization", value: body.sat_org },
            { label: "Activities", value: body.sat_act }
          ]
        },
        {
          title: "Guide & Safety",
          fields: [
            { label: "Guide/Host Rating", value: `${body.guide_rating}/5 ★` },
            { label: "Felt Safe & Cared for", value: body.safety }
          ]
        },
        {
          title: "Future & Growth",
          fields: [
            { label: "Improvements Needed", value: body.improve },
            { label: "Travel Again", value: body.travel_again },
            { label: "Recommend to Others", value: body.recommend },
            { label: "Next Destination", value: body.next_dest }
          ]
        },
        {
          title: "Final Reflections",
          fields: [
            { label: "Additional Comments", value: body.final }
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
    } else {
      // Default formatting for other sources
      mainContentHtml = Object.entries(details)
        .map(([key, value]) => `
          <div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <strong style="text-transform: capitalize; color: #c9a96e; font-size: 12px; letter-spacing: 0.05em;">${key.replace(/_/g, ' ')}</strong> 
            <div style="color: #2d3a28; margin-top: 4px; font-size: 16px; line-height: 1.5;">${value}</div>
          </div>
        `).join('');
    }

    const emailContent = `
      <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://tilengasafaris.africa/tilenga-logo.svg" alt="Tilenga Safaris" style="width: 180px; height: auto; margin-bottom: 20px;" />
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
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px; font-weight: bold;">${displayName}</td>
              </tr>
              ` : ''}
              ${email ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Email:</td>
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px;">${email}</td>
              </tr>
              ` : ''}
              ${body.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Phone:</td>
                <td style="padding: 8px 0; color: #2d3a28; font-size: 15px;">${body.phone}</td>
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
          : `Enquiry Received - Tilenga Safaris`;

      const confirmationHtml = `
        <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://tilengasafaris.africa/tilenga-logo.svg" alt="Tilenga Safaris" style="width: 150px; height: auto; margin-bottom: 20px;" />
            <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px;">
              ${isNewsletter ? 'Welcome Along' : 'Thank You'}
            </h1>
          </div>
          <p style="font-size: 18px; line-height: 1.6;">Dear ${displayName},</p>
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
