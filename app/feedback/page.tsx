import FeedbackForm from "@/components/FeedbackForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safari Feedback — Tilenga Safaris",
  description: "We value your feedback. Tell us about your safari experience with Tilenga Safaris.",
};

export default function FeedbackPage() {
  return <FeedbackForm />;
}
