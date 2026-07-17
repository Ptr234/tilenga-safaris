import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const runtime = "edge";

const destinationsQuery = groq`*[_type == "destination"] | order(_createdAt asc) {
  name,
  href,
  image,
  overviewGallery,
  hotspots,
}`;

export async function GET() {
  try {
    const destinations = await client.fetch(destinationsQuery);
    return NextResponse.json(destinations);
  } catch (error) {
    console.error("Destinations fetch error:", error);
    return NextResponse.json(
      { error: "Unable to load destinations" },
      { status: 500 },
    );
  }
}
