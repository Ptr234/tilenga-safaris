import type { Metadata } from "next";

const pageTitle = "Botswana Safaris — Okavango Delta";
const fullTitle = "Botswana Safaris — Okavango Delta | Tilenga Safaris";
const pageDescription =
  "Glide through the Okavango Delta by mokoro, watch elephant herds in Chobe National Park, and explore the Kalahari on a tailor-made Botswana safari.";
const pageUrl = "https://tilengasafaris.africa/destinations/botswana/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/Elephantfamily.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Botswana safari — Okavango Delta" }],
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

export default function BotswanaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
