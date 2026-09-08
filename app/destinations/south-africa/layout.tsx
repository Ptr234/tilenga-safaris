import type { Metadata } from "next";

const pageTitle = "South Africa Safaris — A World in One Country";
const fullTitle = "South Africa Safaris — A World in One Country | Tilenga Safaris";
const pageDescription =
  "Big Five game drives, Cape Town and Table Mountain, and the Garden Route — discover South Africa's diversity on a tailor-made safari with Tilenga Safaris.";
const pageUrl = "https://tilengasafaris.africa/destinations/south-africa/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/Table-Mountain.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "South Africa safari — Table Mountain, Cape Town" }],
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

export default function SouthAfricaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
