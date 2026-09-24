declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires the Google Ads "Contact" conversion shared by every enquiry form
// (Plan a Trip, itinerary/package/quote popups). Value and currency come
// straight from the tag Google Ads issued for this account.
export function trackContactConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: "AW-18336677114/un-pCJ-9r-AcEPr5zadE",
    value: 1.0,
    currency: "ZAR",
  });
}
