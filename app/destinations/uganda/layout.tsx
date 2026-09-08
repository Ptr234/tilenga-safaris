import type { Metadata } from "next";

const pageTitle = "Uganda Safaris — The Pearl of Africa";
const fullTitle = "Uganda Safaris — The Pearl of Africa | Tilenga Safaris";
const pageDescription =
  "Trek mountain gorillas in Bwindi, cruise the Nile at Murchison Falls, and spot tree-climbing lions in Queen Elizabeth National Park on a tailor-made Uganda safari.";
const pageUrl = "https://tilengasafaris.africa/destinations/uganda/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/UgandaDestinationHero.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Uganda safari — the Pearl of Africa" }],
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

export default function UgandaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
