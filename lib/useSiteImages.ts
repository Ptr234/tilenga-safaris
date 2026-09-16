"use client";

import { useEffect, useState } from "react";
import type { SiteImage } from "@/types/sanity";

export type SiteImageMap = Record<string, SiteImage>;

// Header, Footer, QuotePopup, and every page's HomePageClient/etc. each call
// this hook independently — without a shared cache that meant every one of
// them fired its own /api/site-images request (measured: 3 duplicate
// fetches on the home page alone, ~1.5s each). Cached on globalThis rather
// than a module-scope variable because code-split chunks (Footer/QuotePopup
// are now next/dynamic) can each end up with their own instance of this
// module — a plain module-level cache only dedupes within one chunk.
declare global {
  // eslint-disable-next-line no-var
  var __tilengaSiteImagesPromise: Promise<SiteImageMap> | null | undefined;
}

function loadSiteImages(): Promise<SiteImageMap> {
  if (!globalThis.__tilengaSiteImagesPromise) {
    globalThis.__tilengaSiteImagesPromise = fetch("/api/site-images")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: SiteImage[]) => Object.fromEntries(data.map((item) => [item.key, item])))
      .catch((error) => {
        console.warn("Unable to load site images from Sanity", error);
        globalThis.__tilengaSiteImagesPromise = null; // allow a retry on the next mount
        return {};
      });
  }
  return globalThis.__tilengaSiteImagesPromise;
}

export default function useSiteImages() {
  const [siteImages, setSiteImages] = useState<SiteImageMap>({});

  useEffect(() => {
    let mounted = true;
    loadSiteImages().then((data) => {
      if (mounted) setSiteImages(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return siteImages;
}
