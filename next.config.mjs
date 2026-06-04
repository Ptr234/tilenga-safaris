/** @type {import('next').NextConfig} */

const nextConfig = {
  // Removed output: "export" to support API routes (Edge Functions) on Cloudflare Pages
  // Removed basePath "/tilenga-safaris" as it's likely causing the white page/broken asset paths on your root domain
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
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
