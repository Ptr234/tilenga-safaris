"use client";

import { useState } from "react";

const destinations = ["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa", "Dubai", "Multiple Destinations"];
const interests = [
  "Gorilla Trekking",
  "Game Drives",
  "Boat Safaris",
  "Bird Watching",
  "Cultural Experiences",
  "Mountain Climbing",
  "Beach / Zanzibar",
  "Photography Safari",
  "Honeymoon / Romance",
  "Family Safari",
];
const budgets = [
  "Under $1,500",
  "$1,500 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "To be discussed",
];

export default function PlanATripPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 to-forest-dark/85" />
        <div className="relative z-10 px-6 md:px-16 pb-12">
          <p className="section-label text-gold mb-2">Let&apos;s Create Your Adventure</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream">Plan a Trip</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-12 px-6 md:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-stone font-sans leading-relaxed">
            Share your travel dreams and our specialists will design a bespoke itinerary tailored
            exactly to you — wildlife, culture, budget, and timing. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-cream-dark py-12 px-6 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-forest text-cream p-7">
              <p className="font-serif text-xl mb-4">Speak to a Specialist</p>
              <p className="text-cream/60 font-sans text-sm mb-6">
                Prefer to talk? Our team is happy to discuss your trip by phone or WhatsApp.
              </p>
              <ul className="space-y-4 text-cream/80 font-sans text-sm">
                <li>
                  <a href="tel:+256789390350" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +256 789 390 350
                  </a>
                </li>
                <li>
                  <a href="mailto:destinations@tilengasafaris.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    destinations@tilengasafaris.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/256789390350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-gold transition-colors"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 border border-gold/20">
              <p className="font-serif text-lg text-forest mb-3">Response Time</p>
              <p className="text-stone font-sans text-sm">
                We respond to all enquiries within <strong>24 hours</strong>. For urgent requests,
                please call or WhatsApp us directly.
              </p>
            </div>

            <div className="bg-white p-7 border border-gold/20">
              <p className="font-serif text-lg text-forest mb-3">Our Locations</p>
              <p className="text-stone font-sans text-sm">
                Lungujja, Ssendawula Zone<br />
                Eseza House, P.O. Box 2599<br />
                Kampala, Uganda
              </p>
              <a
                href="https://maps.app.goo.gl/fKpSXwV8UMozRJTs8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-sans text-xs uppercase tracking-wider hover:underline mt-3 inline-block"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white border border-gold/20 p-12 text-center">
                <div className="text-5xl mb-6">✅</div>
                <h2 className="font-serif text-3xl text-forest mb-4">Thank You!</h2>
                <p className="text-stone font-sans leading-relaxed max-w-md mx-auto">
                  We&apos;ve received your enquiry and will be in touch within 24 hours with
                  a personalised safari proposal.
                </p>
                <p className="text-gold font-sans text-sm mt-6">
                  In the meantime, WhatsApp us at +256 789 390 350 for immediate assistance.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gold/10 p-8 space-y-7">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Preferred Destination *</label>
                  <select
                    required
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Travel Dates (approx.)</label>
                    <input
                      type="text"
                      placeholder="e.g. July 2025, 10 days"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Number of Travelers</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-3">Interests (select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`text-xs uppercase tracking-wider font-sans px-3 py-1.5 border transition-colors ${
                          selectedInterests.includes(interest)
                            ? "bg-forest text-cream border-forest"
                            : "bg-white text-stone border-stone/30 hover:border-gold hover:text-forest"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Budget Range (per person)</label>
                  <select className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold">
                    <option value="">Select budget range</option>
                    {budgets.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-forest text-xs uppercase tracking-widest font-sans mb-2">Tell us about your dream safari</label>
                  <textarea
                    rows={5}
                    placeholder="Any special requirements, must-see wildlife, preferred travel style, occasions (honeymoon, birthday, etc.)..."
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm font-sans text-stone focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-primary w-full text-center text-sm py-4">
                    Send My Enquiry
                  </button>
                  <p className="text-stone/50 font-sans text-xs text-center mt-3">
                    We respect your privacy. Your information is never shared with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
