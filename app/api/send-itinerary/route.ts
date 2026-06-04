import { Resend } from "resend";
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "noreply@tilengasafaris.africa";

const itineraryQuery = groq`*[_type == "itinerary" && packageName == $packageName][0]{
  packageName,
  file {
    asset->{
      url
      originalFilename,
    }
  }
}`;

export async function POST(req: Request) {
  try {
    const { email, packageName } = await req.json();

    if (!email || !packageName) {
      return NextResponse.json(
        { error: "Missing email or package name" },
        { status: 400 },
      );
    }

    const itinerary = await client.fetch(itineraryQuery, { packageName });
    let attachments: any[] = [];

    if (itinerary?.file?.asset?.url) {
      const filename =
        itinerary.file.asset.originalFilename || `${packageName}.pdf`;

      attachments = [
        {
          filename: decodeURIComponent(filename),
          path: itinerary.file.asset.url,
          contentType: "application/pdf",
        },
      ];
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
          ${
            attachments.length > 0
              ? "The complete document has been attached to this email for your convenience."
              : "Our specialists are finalizing the latest version of this specific itinerary. In the meantime, we have received your request and will follow up with the full document within the next few hours."
          }
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

    const firstSendResponse = await resend.emails.send({
      from: `Tilenga Safaris <${fromEmail}>`,
      to: [email],
      bcc: ["destinations@tilengasafaris.com"],
      subject: `Itinerary: ${packageName} - Tilenga Safaris`,
      html: emailContent,
      attachments: attachments,
    });

    if (firstSendResponse.error) {
      return NextResponse.json(
        { error: firstSendResponse.error },
        { status: 400 },
      );
    }

    // Send a separate warm acknowledgement
    await resend.emails.send({
      from: `Tilenga Safaris <${fromEmail}>`,
      to: [email],
      subject: `Thank You for Exploring Our Itineraries`,
      html: `
        <div style="font-family: serif; color: #060f09; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fcfaf6; border: 1px solid #c9a96e;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2d3a28; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 2px solid #c9a96e; padding-bottom: 20px;">Thank You</h1>
          </div>
          <p style="font-size: 18px; line-height: 1.6;">Hello,</p>
          <p style="font-size: 16px; line-height: 1.6;">Thank you for downloading the <strong>${packageName}</strong> itinerary. We hope this inspires your next African adventure.</p>
          <p style="font-size: 16px; line-height: 1.6;">Our specialist team is available if you have any questions or would like to begin customizing this journey to your preferences. You can expect us to reach out briefly within the next 24 hours to see how we can assist you further.</p>

          <div style="border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.8;">
            <p style="margin: 0;"><strong>Tilenga Safaris</strong></p>
            <p style="margin: 0;">Kampala, Uganda</p>
            <p style="margin: 0;"><a href="https://tilengasafaris.africa" style="color: #c9a96e; text-decoration: none;">www.tilengasafaris.africa</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, result: firstSendResponse });
  } catch (err) {
    console.error("Internal Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
