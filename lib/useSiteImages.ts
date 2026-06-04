"use client";

import { useEffect, useState } from "react";
import type { SiteImage } from "@/types/sanity";

export type SiteImageMap = Record<string, SiteImage>;

export default function useSiteImages() {
  const [siteImages, setSiteImages] = useState<SiteImageMap>({});

  useEffect(() => {
    let mounted = true;

    async function loadImages() {
      try {
        const res = await fetch("/api/site-images");
        if (!res.ok) return;
        const data: SiteImage[] = await res.json();
        if (!mounted) return;
        setSiteImages(Object.fromEntries(data.map((item) => [item.key, item])));
      } catch (error) {
        console.warn("Unable to load site images from Sanity", error);
      }
    }

    loadImages();

    return () => {
      mounted = false;
    };
  }, []);

  return siteImages;
}
