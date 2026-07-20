import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { itinerariesQuery } from "@/lib/sanity.queries";

export const runtime = "edge";

export async function GET() {
  try {
    const itineraries = await client.fetch(itinerariesQuery);
    return NextResponse.json(itineraries);
  } catch (error) {
    console.error("Itineraries fetch error:", error);
    return NextResponse.json(
      { error: "Unable to load itineraries" },
      { status: 500 },
    );
  }
}
