import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "@/lib/sanity.image";
import { WIDE_16_9 } from "@/lib/imageDimensions";

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

// The page itself is a client component that discovers its hero image via a
// client-side fetch, so the browser can't know the real image URL until
// after hydration — this preloads it in parallel instead, well before that
// fetch resolves (the client-fetched value ends up identical, so this just
// gets the bytes in flight much earlier).
async function getHeroPreloadUrl() {
  try {
    const destination = await client.fetch<{ image?: any }>(
      `*[_type == "destination" && name == "Rwanda"][0]{image}`,
    );
    if (!destination?.image) return null;
    return urlForImage(destination.image, WIDE_16_9).url();
  } catch {
    return null;
  }
}

export default async function RwandaLayout({ children }: { children: React.ReactNode }) {
  const heroPreloadUrl = await getHeroPreloadUrl();
  return (
    <>
      {heroPreloadUrl && <link rel="preload" as="image" href={heroPreloadUrl} />}
      {children}
    </>
  );
}
