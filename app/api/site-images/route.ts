import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const siteImagesQuery = groq`*[_type == "siteImage"] | order(_createdAt asc) {
  _id,
  key,
  category,
  title,
  altText,
  image,
}`;

export async function GET() {
  try {
    const images = await client.fetch(siteImagesQuery);
    return NextResponse.json(images);
  } catch (error) {
    console.error("Site images fetch error:", error);
    return NextResponse.json(
      { error: "Unable to load site images" },
      { status: 500 },
    );
  }
}
