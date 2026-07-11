// Standard width/height buckets for Sanity image hotspot-aware server-side
// cropping. Pick the bucket whose aspect ratio most closely matches the
// element's CSS aspect ratio. See lib/sanity.image.ts / siteImageHelpers.ts.

export const SQUARE = { width: 1000, height: 1000 }; // 1:1
export const PORTRAIT_4_5 = { width: 900, height: 1125 }; // 4:5
export const PORTRAIT_3_4 = { width: 900, height: 1200 }; // 3:4
export const LANDSCAPE_4_3 = { width: 1200, height: 900 }; // 4:3
export const WIDE_16_9 = { width: 1920, height: 1080 }; // 16:9 / hero / full-bleed
export const WIDE_2_1 = { width: 1600, height: 800 }; // 16:8 explicit aspect
export const WIDE_16_11 = { width: 1600, height: 1100 }; // 16:11
