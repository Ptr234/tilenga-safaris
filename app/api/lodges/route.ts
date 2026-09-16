import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { lodgesQuery } from "@/lib/sanity.queries";

export const runtime = "edge";

export async function GET() {
  try {
    const lodges = await client.fetch(lodgesQuery);
    return NextResponse.json(lodges);
  } catch (error) {
    console.error("Lodges fetch error:", error);
    return NextResponse.json({ error: "Unable to load lodges" }, { status: 500 });
  }
}
