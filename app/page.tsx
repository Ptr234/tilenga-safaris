import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { destinationsQuery } from "@/lib/sanity.queries";
import HomePageClient from "@/components/HomePageClient";
import { Destination } from "@/types/sanity";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export const metadata: Metadata = {
  alternates: { canonical: "https://tilengasafaris.africa/" },
};

export default async function HomePage() {
  // Only destinations gates the hero carousel's initial render, so only it
  // is awaited here — everything else below the fold (lodges, experiences,
  // partners, reviews) is fetched client-side by HomePageClient once
  // mounted, so this page doesn't wait on 5 separate Sanity queries before
  // it can respond (was adding ~2.5s of pure TTFB).
  const destinations = await client.fetch<Destination[]>(destinationsQuery);

  return <HomePageClient destinations={destinations.length > 0 ? destinations : []} />;
}
