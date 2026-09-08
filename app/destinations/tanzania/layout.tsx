import type { Metadata } from "next";

const pageTitle = "Tanzania Safaris — Serengeti & Zanzibar";
const fullTitle = "Tanzania Safaris — Serengeti & Zanzibar | Tilenga Safaris";
const pageDescription =
  "Follow the Great Migration across the Serengeti, descend into Ngorongoro Crater, and unwind on Zanzibar's beaches — bespoke Tanzania safaris with Tilenga Safaris.";
const pageUrl = "https://tilengasafaris.africa/destinations/tanzania/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/SerengetiNationaLPark.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Tanzania safari — Serengeti National Park" }],
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

export default function TanzaniaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
