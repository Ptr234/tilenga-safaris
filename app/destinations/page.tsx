import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { destinationsQuery } from "@/lib/sanity.queries";
import DestinationsPageClient from "@/components/DestinationsPageClient";
import { Destination } from "@/types/sanity";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

const pageTitle = "African Safari Destinations";
const fullTitle = "African Safari Destinations | Tilenga Safaris";
const pageDescription =
  "Explore safari destinations across Uganda, Kenya, Tanzania, Rwanda, South Africa, Namibia, and Botswana — gorilla trekking, the Maasai Mara, Serengeti, Okavango Delta, and more.";
const pageUrl = "https://tilengasafaris.africa/destinations/";
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
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Tilenga Safaris destinations" }],
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

export default async function DestinationsPage() {
  const destinations = await client.fetch<Destination[]>(destinationsQuery);

  return <DestinationsPageClient destinations={destinations} />;
}
