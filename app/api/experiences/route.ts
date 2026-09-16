import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { experiencesQuery } from "@/lib/sanity.queries";

export const runtime = "edge";

export async function GET() {
  try {
    const experiences = await client.fetch(experiencesQuery);
    return NextResponse.json(experiences);
  } catch (error) {
    console.error("Experiences fetch error:", error);
    return NextResponse.json({ error: "Unable to load experiences" }, { status: 500 });
  }
}
