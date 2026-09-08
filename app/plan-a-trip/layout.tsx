import type { Metadata } from "next";

const pageTitle = "Plan a Trip";
const fullTitle = "Plan a Trip | Tilenga Safaris";
const pageDescription =
  "Tell us your dream destination, travel dates, and interests, and Tilenga Safaris will craft a tailor-made itinerary across East and Southern Africa.";
const pageUrl = "https://tilengasafaris.africa/plan-a-trip/";
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
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Plan a trip with Tilenga Safaris" }],
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

export default function PlanATripLayout({ children }: { children: React.ReactNode }) {
  return children;
}
