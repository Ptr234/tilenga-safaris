import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Tilenga Safaris — Explore Discover Experience",
  description:
    "Tilenga Safaris crafts personalized adventures across Uganda, Kenya, Tanzania, Rwanda and beyond. Wild luxury. Unforgettable memories.",
  keywords: "safari, Uganda, Kenya, Tanzania, Rwanda, Africa, gorilla trekking, Murchison Falls, luxury travel",
  manifest: `${base}/manifest.json`,
  icons: {
    icon: `${base}/favicon.svg`,
    apple: `${base}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
