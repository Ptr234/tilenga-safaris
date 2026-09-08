import type { Metadata } from "next";

const pageTitle = "Namibia Safaris — Desert & Dunes";
const fullTitle = "Namibia Safaris — Desert & Dunes | Tilenga Safaris";
const pageDescription =
  "Climb the towering dunes of Sossusvlei, spot desert-adapted wildlife in Etosha, and explore the Skeleton Coast on a tailor-made Namibia safari.";
const pageUrl = "https://tilengasafaris.africa/destinations/namibia/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/Skeleton-Coast.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Namibia safari — desert and dunes" }],
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

export default function NamibiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
