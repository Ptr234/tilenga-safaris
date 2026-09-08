/** @type {import('next').NextConfig} */

const nextConfig = {
  // Removed output: "export" to support API routes (Edge Functions) on Cloudflare Pages
  // Removed basePath "/tilenga-safaris" as it's likely causing the white page/broken asset paths on your root domain
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  async redirects() {
    return [
      // Google still has this indexed from a previous version of the site;
      // it 404s today. Rwenzori trekking is a Uganda activity, so send it
      // to the closest current equivalent instead of a dead end.
      {
        source: "/ts-trips/8-day-rwenzori-mountains-trekking-experience",
        destination: "/destinations/uganda/",
        permanent: true,
      },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
