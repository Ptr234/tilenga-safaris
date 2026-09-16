import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "@/lib/sanity.image";
import { WIDE_16_9 } from "@/lib/imageDimensions";

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

// The page itself is a client component that discovers its hero image via a
// client-side fetch, so the browser can't know the real image URL until
// after hydration — this preloads it in parallel instead, well before that
// fetch resolves (the client-fetched value ends up identical, so this just
// gets the bytes in flight much earlier).
async function getHeroPreloadUrl() {
  try {
    const destination = await client.fetch<{ image?: any }>(
      `*[_type == "destination" && name == "Uganda"][0]{image}`,
    );
    if (!destination?.image) return null;
    return urlForImage(destination.image, WIDE_16_9).url();
  } catch {
    return null;
  }
}

export default async function UgandaLayout({ children }: { children: React.ReactNode }) {
  const heroPreloadUrl = await getHeroPreloadUrl();
  return (
    <>
      {heroPreloadUrl && <link rel="preload" as="image" href={heroPreloadUrl} />}
      {children}
    </>
  );
}
