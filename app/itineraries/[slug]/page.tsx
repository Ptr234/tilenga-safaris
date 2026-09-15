import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { itineraryBySlugQuery, itinerarySlugsQuery } from "@/lib/sanity.queries";
import { urlForImage } from "@/lib/sanity.image";
import { WIDE_16_9 } from "@/lib/imageDimensions";
import ItineraryDetailClient from "@/components/ItineraryDetailClient";
import type { Itinerary } from "@/types/sanity";

// Statically generated (not edge/force-dynamic): this is the only bracket
// dynamic route ([slug]) in the app, and Cloudflare Pages' Next.js routing
// only creates a real route for it when it has literal paths to build from
// generateStaticParams — force-dynamic left it resolving to a broken
// `/itineraries/[slug]/?nxtPslug=...` redirect in production (confirmed
// working correctly under plain `next start`, so this was a deployment
// routing gap, not an app bug). New itineraries need a redeploy to appear.
const siteUrl = "https://tilengasafaris.africa";
const fallbackOgImage = `${siteUrl}/photos/og-image.png`;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(itinerarySlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = await client.fetch<Itinerary | null>(itineraryBySlugQuery, { slug });
  if (!itinerary) return {};

  const title = itinerary.seoTitle || itinerary.title;
  const fullTitle = `${title} | Tilenga Safaris`;
  const description = itinerary.seoDescription || itinerary.summary;
  const pageUrl = `${siteUrl}/itineraries/${slug}/`;
  const ogImage = itinerary.heroImage
    ? urlForImage(itinerary.heroImage, WIDE_16_9).url()
    : fallbackOgImage;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: "Tilenga Safaris",
      images: [{ url: ogImage, width: 1200, height: 800, alt: itinerary.title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export default async function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itinerary = await client.fetch<Itinerary | null>(itineraryBySlugQuery, { slug });
  if (!itinerary) notFound();

  const pageUrl = `${siteUrl}/itineraries/${slug}/`;
  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: itinerary.title,
    description: itinerary.summary,
    image: itinerary.heroImage ? urlForImage(itinerary.heroImage, WIDE_16_9).url() : undefined,
    provider: {
      "@type": "TravelAgency",
      name: "Tilenga Safaris",
      url: siteUrl,
    },
    itinerary: itinerary.days?.map((day) => ({
      "@type": "TouristAttraction",
      name: day.dayLabel,
      description: day.body,
    })),
    ...(itinerary.priceFrom
      ? { offers: { "@type": "Offer", price: itinerary.priceFrom, priceCurrency: "USD" } }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Itineraries", item: `${siteUrl}/itineraries/` },
      { "@type": "ListItem", position: 3, name: itinerary.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ItineraryDetailClient itinerary={itinerary} />
    </>
  );
}
