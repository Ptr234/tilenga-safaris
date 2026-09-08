import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { lodgesQuery } from "@/lib/sanity.queries";
import LodgesPageClient from "@/components/LodgesPageClient";
import { Lodge } from "@/types/sanity";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

const pageTitle = "Our Lodges";
const fullTitle = "Our Lodges | Tilenga Safaris";
const pageDescription =
  "Stay at Tilenga Safaris' own lodges in Uganda — Tilenga Safari Lodge overlooking the Albert Nile in Murchison Falls, and Kikorongo Safari Lodge on the edge of Queen Elizabeth National Park.";
const pageUrl = "https://tilengasafaris.africa/lodges/";
const ogImage = "https://tilengasafaris.africa/photos/og-image.png";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Tilenga Safaris lodges" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

export default async function LodgesPage() {
  const lodges = await client.fetch<Lodge[]>(lodgesQuery);

  return <LodgesPageClient lodges={lodges} />;
}
