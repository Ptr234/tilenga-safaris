import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { reviewsQuery } from "@/lib/sanity.queries";

export const runtime = "edge";

export async function GET() {
  try {
    const reviews = await client.fetch(reviewsQuery);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Reviews fetch error:", error);
    return NextResponse.json({ error: "Unable to load reviews" }, { status: 500 });
  }
}
