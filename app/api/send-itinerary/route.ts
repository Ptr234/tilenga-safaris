import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

const packageFiles: Record<string, string> = {
  // Uganda
  "5-Day Wildlife Safari to Murchison Falls & Queen Elizabeth": "public/photos/newstock/5-DAY-WILDLIFE-SAFARI-IN-UGANDA-4.pdf",
  "3-Day Gorilla Tracking in Uganda": "public/itineraries/3 DAYS GORILLA TRACKING IN UGANDA -  TILENGA SAFARIS 2026.docx",
  "Lake Mburo National Park": "public/photos/newstock/LAKE-MBURO-NATIONAL-PARK-EXPERIENCE.pdf",
  "8-Day Round Trip Around Uganda": "public/photos/newstock/8-DAY-ROUND-TRIP-AROUND-UGANDA-June.pdf",
  
  // Kenya
  "7-Day Kenya Prime Safari": "public/photos/newstock/7–DAY-KENYA-PRIME-SAFARI-2.pdf",
  "7-Day Magical Kenya Tour": "public/photos/newstock/7-–-DAY-MAGICAL-KENYA-TOUR-1.pdf",
  
  // Tanzania
  "Zanzibar Beach Holiday": "public/photos/newstock/ZANZIBAR-BEACH-HOLIDAY-6-NIGHTS-AND-7-DAYS-2.pdf",
  "Zanzibar Spice Island Escape": "public/photos/newstock/ZANZIBAR-BEACH-HOLIDAY-AND-SNORKELING-1.pdf",
  "12-Day Kenya & Tanzania Safari": "public/photos/newstock/12-DAY-SAFARI-TOUR-AROUND-KENYA-AND-TANZANIA-1-.pdf",
  
  // Rwanda
  "4-Day Remarkable Rwanda": "public/itineraries/RWANDA  - UGANDA - 10 DAYS  - TILENGA SAFARIS 2026.docx",
  "10-Day Rwanda & Uganda Cross-Border": "public/itineraries/RWANDA  - UGANDA - 10 DAYS  - TILENGA SAFARIS 2026.docx",

  // South Africa & Botswana (Using generic high-quality itineraries as fallback if specific ones are missing)
  "7-Day Cape & Kruger Essential": "public/itineraries/EXPERIENCE UGANDA  - 9 DAYS  - TILENGA SAFARIS 2026.docx",
  "10-Day Garden Route Journey": "public/itineraries/PRIMATES EXPERIENCE - TILENGA SAFARIS 2026.docx",
  "7-Day Okavango Delta Safari": "public/itineraries/PRIMATES EXPERIENCE - TILENGA SAFARIS 2026.docx",
  "10-Day Botswana Highlights": "public/itineraries/EXPERIENCE UGANDA  - 9 DAYS  - TILENGA SAFARIS 2026.docx"
};

export async function POST(req: Request) {
  try {
    const { email, packageName } = await req.json();

    if (!email || !packageName) {
      return NextResponse.json({ error: 'Missing email or package name' }, { status: 400 });
    }

    const relativeFilePath = packageFiles[packageName];
    let attachments = [];

    if (relativeFilePath) {
      const filePath = path.join(process.cwd(), relativeFilePath);
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath);
        attachments = [
          {
            filename: path.basename(filePath),
            content: fileContent,
          },
        ];
      }
    }

    const emailContent = `
      <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px;">Your Safari Itinerary</h1>
        </div>
        
        <p style="font-size: 18px; line-height: 1.6;">Thank you for your interest in exploring Africa with Tilenga Safaris.</p>
        
        <p style="font-size: 16px; line-height: 1.6;">We are pleased to provide you with the full, detailed itinerary for:</p>
        <h2 style="color: #c9a96e; font-style: italic; font-size: 24px;">${packageName}</h2>
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          ${attachments.length > 0 
            ? "The complete document has been attached to this email for your convenience." 
            : "Our specialists are finalizing the latest version of this specific itinerary. In the meantime, we have received your request and will follow up with the full document within the next few hours."}
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; margin-top: 40px;">If you have any questions or would like to start tailoring this journey to your specific needs, please simply reply to this email.</p>
        
        <div style="border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.8;">
          <p style="margin: 0;"><strong>Tilenga Safaris</strong></p>
          <p style="margin: 0;">Kampala, Uganda</p>
          <p style="margin: 0;">+256 789 390 350</p>
          <p style="margin: 0;"><a href="mailto:destinations@tilengasafaris.com" style="color: #c9a96e; text-decoration: none;">destinations@tilengasafaris.com</a></p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Tilenga Safaris <onboarding@resend.dev>',
      to: [email],
      subject: `Itinerary: ${packageName} - Tilenga Safaris`,
      html: emailContent,
      attachments: attachments,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Internal Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
