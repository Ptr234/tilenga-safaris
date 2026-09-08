import type { MetadataRoute } from "next";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/destinations/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/lodges/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
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

  return [...staticRoutes, ...destinationRoutes, ...lodgeRoutes];
}
