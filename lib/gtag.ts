declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// A plain gtag event with no `send_to` goes to every configured tag (GA4 and
// Google Ads alike), so this is safe to call for anything we just want GA4
// to see as an event — Google Ads simply ignores event names it doesn't
// recognize as one of its configured conversion actions.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// Fires the Google Ads "Contact" conversion shared by every enquiry form
// (Plan a Trip, itinerary/package/quote popups), plus a GA4 `generate_lead`
// event alongside it — the Ads conversion is scoped with `send_to` so it
// never reaches GA4 on its own, and GA4 needs its own event to report it
// as a key event.
export function trackContactConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: "AW-18336677114/un-pCJ-9r-AcEPr5zadE",
    value: 1.0,
    currency: "ZAR",
  });
  trackEvent("generate_lead");
}
