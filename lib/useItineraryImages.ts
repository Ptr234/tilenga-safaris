"use client";

import { useEffect, useState } from "react";
import type { Itinerary } from "@/types/sanity";

/** Maps packageName → Sanity image reference (if one exists). */
export type ItineraryImageMap = Record<string, Itinerary["image"]>;

export default function useItineraryImages(category: string) {
  const [images, setImages] = useState<ItineraryImageMap>({});

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/itineraries");
        if (!res.ok) return;
        const list: Itinerary[] = await res.json();
        if (!mounted) return;
        const filtered = list.filter(
          (it) => it.category === category && it.image,
        );
        setImages(
          Object.fromEntries(
            filtered.map((it) => [it.packageName, it.image]),
          ),
        );
      } catch (error) {
        console.warn("Unable to load itinerary images from Sanity", error);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [category]);

  return images;
}
