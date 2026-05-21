import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { source, email, name, first_name, last_name, ...details } = body;

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const displayName = name || (first_name ? `${first_name} ${last_name}` : 'Valued Guest');
    
    let subject = "";
    if (source === 'quote') subject = `Free Quote Request from ${displayName}`;
    else if (source === 'newsletter') subject = `New Newsletter Subscriber: ${email}`;
    else subject = `New Safari Enquiry from ${displayName}`;

    // Format the dynamic details into a readable list
    const detailsHtml = Object.entries(details)
      .map(([key, value]) => `
        <div style="margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
          <strong style="text-transform: capitalize; color: #2d3a28;">${key.replace(/_/g, ' ')}:</strong> 
          <span style="color: #666;">${value}</span>
        </div>
      `).join('');

    const emailContent = `
      <div style="font-family: sans-serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 10px;">
            ${source === 'quote' ? 'Quote Request' : source === 'newsletter' ? 'Newsletter Signup' : 'Safari Enquiry'}
          </h1>
          <div style="width: 50px; height: 2px; background-color: #c9a96e; margin: 0 auto;"></div>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6;">You have received a new ${source === 'newsletter' ? 'subscriber' : 'request'} from the website.</p>
        
        <div style="background-color: #fff; padding: 30px; border: 1px solid #eee; margin: 30px 0;">
          <h3 style="color: #c9a96e; margin-top: 0; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em;">Details</h3>
          <p><strong>Email:</strong> ${email}</p>
          ${displayName !== 'Valued Guest' ? `<p><strong>Name:</strong> ${displayName}</p>` : ''}
          ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
          ${detailsHtml}
        </div>
        
        <p style="font-size: 14px; color: #666; font-style: italic; text-align: center; margin-top: 40px;">
          This email was generated from the Tilenga Safaris Website.
        </p>
      </div>
    `;

    // 1. Send notification to Tilenga Safaris
    await resend.emails.send({
      from: `Tilenga Website <${fromEmail}>`,
      to: ['destinations@tilengasafaris.africa'],
      subject: subject,
      html: emailContent,
      replyTo: email,
    });

    // 2. Send confirmation to the Guest
    if (source === 'newsletter') {
      await resend.emails.send({
        from: `Tilenga Safaris <${fromEmail}>`,
        to: [email],
        subject: `Welcome to Tilenga Safaris`,
        html: `
          <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
            <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px;">Welcome along</h1>
            <p style="font-size: 18px; line-height: 1.6;">Thank you for subscribing to our newsletter.</p>
            <p style="font-size: 16px; line-height: 1.6;">You'll now be the first to receive safari inspiration, exclusive offers, and wildlife stories from the heart of Africa.</p>
            <div style="border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666;">
              <p>Tilenga Safaris | Kampala, Uganda</p>
            </div>
          </div>
        `,
      });
    } else {
      await resend.emails.send({
        from: `Tilenga Safaris <${fromEmail}>`,
        to: [email],
        subject: `Enquiry Received - Tilenga Safaris`,
        html: `
          <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
            <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px;">Thank You</h1>
            <p style="font-size: 18px; line-height: 1.6;">Dear ${displayName},</p>
            <p style="font-size: 16px; line-height: 1.6;">Thank you for reaching out to Tilenga Safaris. We have received your ${source === 'quote' ? 'quote request' : 'enquiry'} and our specialist team is already reviewing the details.</p>
            <p style="font-size: 16px; line-height: 1.6;">You can expect a personalized response from us within 24 hours.</p>
            <div style="border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666;">
              <p>Tilenga Safaris | Kampala, Uganda</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
