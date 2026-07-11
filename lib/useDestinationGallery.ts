"use client";

import { useEffect, useState } from "react";
import type { Destination } from "@/types/sanity";

type DestinationExtras = Pick<Destination, "overviewGallery" | "hotspots">;
type DestinationExtrasMap = Record<string, DestinationExtras>;

const EMPTY: DestinationExtras = {};

export default function useDestinationGallery(name: string) {
  const [data, setData] = useState<DestinationExtrasMap>({});

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/destinations");
        if (!res.ok) return;
        const list: Destination[] = await res.json();
        if (!mounted) return;
        setData(
          Object.fromEntries(
            list.map((d) => [
              d.name,
              { overviewGallery: d.overviewGallery, hotspots: d.hotspots },
            ]),
          ),
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

  return data[name] ?? EMPTY;
}
