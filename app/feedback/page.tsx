import FeedbackForm from "@/components/FeedbackForm";
import { Metadata } from "next";

const ogImage = "https://tilengasafaris.africa/experinces/game-drives-og.jpg";
const pageUrl = "https://tilengasafaris.africa/feedback";
const title = "Share Your Safari Experience";
const fullTitle = "Share Your Safari Experience | Tilenga Safaris";
const description =
  "Your journey matters to us. Share your experience with Tilenga Safaris and help us craft even more extraordinary safaris across East and Southern Africa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: fullTitle,
    description,
    url: pageUrl,
    siteName: "Tilenga Safaris",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 811,
        alt: "A Tilenga Safaris game drive across the African savannah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [ogImage],
  },
};

export default function FeedbackPage() {
  return <FeedbackForm />;
}
