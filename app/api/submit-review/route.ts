import { NextResponse } from "next/server";
import { writeClient } from "@/lib/sanity.writeClient";

export const runtime = "edge";

const MIN_PUBLISH_RATING = 4;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, overall_rating, final, highlight, consent } = body;

    const rating = Number(overall_rating);
    const quote = (final || highlight || "").trim();

    if (!consent || !name || !quote || !rating || rating < MIN_PUBLISH_RATING) {
      // Not eligible for publishing -- the full feedback still goes out
      // via the existing email flow, we just don't create a review doc.
      return NextResponse.json({ published: false });
    }

    await writeClient.create({
      _type: "review",
      name,
      rating,
      quote,
      consentToPublish: true,
      published: true,
      source: "feedback-form",
    });

    return NextResponse.json({ published: true });
  } catch (error) {
    console.error("Review submission error:", error);
    // Never fail the guest's feedback submission over this -- it's a
    // secondary, best-effort action.
    return NextResponse.json({ published: false });
  }
}
