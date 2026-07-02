import FeedbackForm from "@/components/FeedbackForm";
import { Metadata } from "next";

const ogImage = "https://tilengasafaris.africa/experinces/game-drives-og.jpg";

export const metadata: Metadata = {
  title: "Safari Feedback — Tilenga Safaris",
  description: "We value your feedback. Tell us about your safari experience with Tilenga Safaris.",
  openGraph: {
    title: "Safari Feedback — Tilenga Safaris",
    description: "We value your feedback. Tell us about your safari experience with Tilenga Safaris.",
    url: "https://tilengasafaris.africa/feedback",
    siteName: "Tilenga Safaris",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 811,
        alt: "Tilenga Safaris — Game Drives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Feedback — Tilenga Safaris",
    description: "We value your feedback. Tell us about your safari experience with Tilenga Safaris.",
    images: [ogImage],
  },
};

export default function FeedbackPage() {
  return <FeedbackForm />;
}
