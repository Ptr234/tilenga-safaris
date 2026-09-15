import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity.client";
import { itinerarySlugsQuery } from "@/lib/sanity.queries";

const baseUrl = "https://tilengasafaris.africa";

const destinations = [
  "uganda",
  "kenya",
  "tanzania",
  "rwanda",
  "south-africa",
  "namibia",
  "botswana",
];

const lodges = ["kikorongo-safari-lodge", "tilenga-safari-lodge"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/destinations/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/lodges/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/itineraries/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/plan-a-trip/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/feedback/`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((slug) => ({
    url: `${baseUrl}/destinations/${slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const lodgeRoutes: MetadataRoute.Sitemap = lodges.map((slug) => ({
    url: `${baseUrl}/lodges/${slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  let itineraryRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs = await client.fetch<string[]>(itinerarySlugsQuery);
    itineraryRoutes = slugs.map((slug) => ({
      url: `${baseUrl}/itineraries/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Sitemap: unable to fetch itinerary slugs", error);
  }

  return [...staticRoutes, ...destinationRoutes, ...lodgeRoutes, ...itineraryRoutes];
}
