import type { Metadata } from "next";

const pageTitle = "Kenya Safaris — Iconic Maasai Mara";
const fullTitle = "Kenya Safaris — Iconic Maasai Mara | Tilenga Safaris";
const pageDescription =
  "Witness the Great Migration in the Maasai Mara, climb Mount Kenya, and relax on Indian Ocean beaches — expertly crafted Kenya safaris with Tilenga Safaris.";
const pageUrl = "https://tilengasafaris.africa/destinations/kenya/";
const ogImage = "https://tilengasafaris.africa/photos/newstock/Masai-Mara.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Kenya safari — Maasai Mara" }],
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

export default function KenyaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
