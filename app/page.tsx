import { client } from "@/lib/sanity.client";
import { lodgesQuery, experiencesQuery, destinationsQuery, partnersQuery } from "@/lib/sanity.queries";
import HomePageClient from "@/components/HomePageClient";
import { Lodge, Experience, Destination, Partner } from "@/types/sanity";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

// Fallback data for when Sanity is empty or during initial setup
const fallbackLodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    description: "A haven of comfort overlooking the Albert Nile. 26 cottages with private balconies, wildlife encounters, and a world-class chef.",
    image: { _type: 'image', asset: { _type: 'reference', _ref: 'image-placeholder' } },
    href: "/lodges/tilenga-safari-lodge",
    tag: "Murchison Falls",
  },
];

export default async function HomePage() {
  const [lodges, experiences, destinations, partners] = await Promise.all([
    client.fetch<Lodge[]>(lodgesQuery),
    client.fetch<Experience[]>(experiencesQuery),
    client.fetch<Destination[]>(destinationsQuery),
    client.fetch<Partner[]>(partnersQuery),
  ]);

  // If no data is found in Sanity, we could either show an empty state or use some default content.
  // For a "finished to the detail" setup, we expect the user to populate Sanity.
  // If destinations are empty, we might want to show a message or redirect to admin.

  return (
    <HomePageClient 
      lodges={lodges.length > 0 ? lodges : []} 
      experiences={experiences.length > 0 ? experiences : []} 
      destinations={destinations.length > 0 ? destinations : []}
      partners={partners.length > 0 ? partners : []}
    />
  );
}
