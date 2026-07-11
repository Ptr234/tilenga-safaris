import { client } from "@/lib/sanity.client";
import { destinationsQuery } from "@/lib/sanity.queries";
import DestinationsPageClient from "@/components/DestinationsPageClient";
import { Destination } from "@/types/sanity";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function DestinationsPage() {
  const destinations = await client.fetch<Destination[]>(destinationsQuery);

  return <DestinationsPageClient destinations={destinations} />;
}
