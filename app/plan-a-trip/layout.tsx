import type { Metadata } from "next";

const pageTitle = "Plan Your Africa Safari — Free Custom Itinerary";
const fullTitle = "Plan Your Africa Safari — Free Custom Itinerary | Tilenga Safaris";
const pageDescription =
  "Tell us your dream destination, travel dates and interests — get a tailor-made Uganda, Kenya, Tanzania or Rwanda safari itinerary from Tilenga Safaris within 24 hours.";
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
