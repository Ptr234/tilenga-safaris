import type { Metadata } from "next";

const pageTitle = "Rwanda Safaris — Land of a Thousand Hills";
const fullTitle = "Rwanda Safaris — Land of a Thousand Hills | Tilenga Safaris";
const pageDescription =
  "Track mountain gorillas in Volcanoes National Park, explore Nyungwe Forest, and discover Kigali's culture and history on a tailor-made Rwanda safari.";
const pageUrl = "https://tilengasafaris.africa/destinations/rwanda/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/kigali-city.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Rwanda safari — Land of a Thousand Hills" }],
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

export default function RwandaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
