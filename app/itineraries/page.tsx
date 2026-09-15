import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { itinerariesQuery } from "@/lib/sanity.queries";
import ItinerariesPageClient from "@/components/ItinerariesPageClient";
import type { Itinerary } from "@/types/sanity";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const pageTitle = "Safari Itineraries";
const fullTitle = "Safari Itineraries | Tilenga Safaris";
const pageDescription =
  "Ready-made safari itineraries across Uganda, Rwanda, Kenya, Tanzania, Botswana, Namibia, and South Africa — gorilla trekking, the Great Migration, and cross-border journeys, all tailor-made.";
const pageUrl = "https://tilengasafaris.africa/itineraries/";
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
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Tilenga Safaris itineraries" }],
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

export default async function ItinerariesPage() {
  const itineraries = await client.fetch<Itinerary[]>(itinerariesQuery);
  return <ItinerariesPageClient itineraries={itineraries} />;
}
