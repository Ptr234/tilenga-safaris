"use client";

import { useEffect, useState } from "react";
import type { Destination } from "@/types/sanity";

type DestinationGalleryMap = Record<string, Destination["overviewGallery"]>;

export default function useDestinationGallery(name: string) {
  const [gallery, setGallery] = useState<DestinationGalleryMap>({});

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/destinations");
        if (!res.ok) return;
        const data: Destination[] = await res.json();
        if (!mounted) return;
        setGallery(
          Object.fromEntries(data.map((d) => [d.name, d.overviewGallery])),
        );
      } catch (error) {
        console.warn("Unable to load destination gallery from Sanity", error);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return gallery[name];
}
