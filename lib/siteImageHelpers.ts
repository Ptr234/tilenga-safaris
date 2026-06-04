import { urlForImage } from "./sanity.image";
import type { SiteImage } from "@/types/sanity";

export function getSiteImageUrl(
  siteImages: Record<string, SiteImage> | undefined,
  key: string,
  fallback: string,
) {
  const image = siteImages?.[key]?.image;
  return image ? urlForImage(image).url() : fallback;
}
