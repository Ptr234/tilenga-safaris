"use client";

import { useEffect, useState } from "react";
import type { Itinerary } from "@/types/sanity";

/** Itineraries tagged with the given destination name (e.g. "Uganda"). */
export default function useItinerariesForDestination(destinationName: string) {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/itineraries");
        if (!res.ok) return;
        const list: Itinerary[] = await res.json();
        if (!mounted) return;
        setItineraries(
          list.filter((it) =>
            it.destinations?.some((d) => d.name === destinationName),
          ),
        );
      } catch (error) {
        console.warn("Unable to load itineraries from Sanity", error);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [destinationName]);

  return itineraries;
}
