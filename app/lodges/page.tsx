import { client } from "@/lib/sanity.client";
import { lodgesQuery } from "@/lib/sanity.queries";
import LodgesPageClient from "@/components/LodgesPageClient";
import { Lodge } from "@/types/sanity";

export default async function LodgesPage() {
  const lodges = await client.fetch<Lodge[]>(lodgesQuery);

  return <LodgesPageClient lodges={lodges} />;
}
