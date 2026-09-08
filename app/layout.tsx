import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Both optional and unset by default. Neither renders anything until its
// env var is set — no fabricated IDs shipped here.
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";

export const metadata: Metadata = {
  metadataBase: new URL('https://tilengasafaris.africa'),
  title: {
    default: 'Tilenga Safaris',
    template: '%s | Tilenga Safaris',
  },
  description: 'Discover Africa\'s finest safari experiences — from Uganda\'s gorilla treks to Kenya\'s Maasai Mara. Expertly crafted journeys across East and Southern Africa.',
  manifest: `${base}/manifest.json`,
  alternates: {
    canonical: 'https://tilengasafaris.africa',
  },
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
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
        url: 'https://tilengasafaris.africa/photos/og-image.png',
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
    images: ['https://tilengasafaris.africa/photos/og-image.png'],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Tilenga Safaris",
  url: "https://tilengasafaris.africa",
  logo: "https://tilengasafaris.africa/favicon.svg",
  image: "https://tilengasafaris.africa/photos/og-image.png",
  description:
    "Tilenga Safaris crafts expertly guided safari journeys across East and Southern Africa, from Uganda's gorilla treks to Kenya's Maasai Mara.",
  email: "destinations@tilengasafaris.com",
  telephone: "+256789390350",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eseza House, P.O. Box 2599",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  sameAs: ["https://www.instagram.com/tilengasafaris_travel"],
  areaServed: [
    "Uganda",
    "Kenya",
    "Tanzania",
    "Rwanda",
    "South Africa",
    "Namibia",
    "Botswana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {gaMeasurementId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
            </Script>
          </>
        )}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
