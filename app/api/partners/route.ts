import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { partnersQuery } from "@/lib/sanity.queries";

export const runtime = "edge";

export async function GET() {
  try {
    const partners = await client.fetch(partnersQuery);
    return NextResponse.json(partners);
  } catch (error) {
    console.error("Partners fetch error:", error);
    return NextResponse.json({ error: "Unable to load partners" }, { status: 500 });
  }
}
