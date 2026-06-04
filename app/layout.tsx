import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: 'Tilenga Safaris',
  description: 'Discover Africa\'s finest safari experiences — from Uganda\'s gorilla treks to Kenya\'s Maasai Mara. Expertly crafted journeys across East and Southern Africa.',
  manifest: `${base}/manifest.json`,
  icons: {
    icon: `${base}/favicon.svg`,
    apple: `${base}/favicon.svg`,
  },
  openGraph: {
    title: 'Tilenga Safaris',
    description: 'Discover Africa\'s finest safari experiences — from Uganda\'s gorilla treks to Kenya\'s Maasai Mara. Expertly crafted journeys across East and Southern Africa.',
    url: 'https://tilengasafaris.africa',
    siteName: 'Tilenga Safaris',
    images: [
      {
        url: 'https://tilengasafaris.africa/photos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tilenga Safaris',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tilenga Safaris',
    description: 'Discover Africa\'s finest safari experiences — expertly crafted journeys across East and Southern Africa.',
    images: ['https://tilengasafaris.africa/photos/og-image.jpg'],
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
