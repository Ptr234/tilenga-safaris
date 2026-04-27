"use client";

import { useState } from "react";

const destinations = ["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa", "Namibia", "Botswana", "Multiple Destinations"];
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
      <section className="grain-overlay relative h-[65vh] min-h-[450px] overflow-hidden flex flex-col justify-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/40 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-gold" />
            <p className="section-label text-gold">Start Your Legacy</p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl text-cream uppercase tracking-[0.1em] md:tracking-[0.15em] leading-[1.05] md:leading-none">Plan Your<br /> <em className="not-italic text-gold">Safari</em></h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-10 md:py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-stone font-sans text-base leading-relaxed mb-4">
            Share your vision with us. Our specialists will craft a bespoke itinerary tailored 
            to your unique rhythm — combining wild adventure with refined comfort.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-cream-dark py-8 md:py-12 px-6 md:px-16 pb-14 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8 order-2 md:order-1">
            <div className="bg-forest-dark text-cream p-6 md:p-10 film-frame">
              <p className="font-serif text-2xl mb-6 uppercase tracking-[0.15em] leading-tight">Speak to a <br />Specialist</p>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-cream/50 font-sans text-sm mb-10 leading-relaxed">
                Every great journey begins with a conversation. Our experts are ready to guide you through the planning process.
              </p>
              <ul className="space-y-6 text-cream/80 font-sans text-sm tracking-wide">
                <li>
                  <a href="tel:+256789390350" className="flex items-center gap-4 hover:text-gold transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    +256 789 390 350
                  </a>
                </li>
                <li>
                  <a href="mailto:destinations@tilengasafaris.com" className="flex items-center gap-4 hover:text-gold transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    Email Enquiries
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-10 border border-gold/10">
              <p className="font-serif text-xl text-forest mb-4 uppercase tracking-wide">Response Time</p>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-stone font-sans text-sm leading-relaxed">
                We take time to craft bespoke proposals. Expect a detailed response within <strong>24 hours</strong>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 order-1 md:order-2">
            {submitted ? (
              <div className="bg-white border border-gold/10 p-8 md:p-16 text-center film-frame">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h2 className="font-serif text-4xl text-forest mb-6 uppercase tracking-[0.15em]">Thank You</h2>
                <p className="text-stone font-sans text-base leading-relaxed max-w-sm mx-auto">
                  We have received your enquiry. A specialist will contact you shortly to begin crafting your journey.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gold/10 p-6 md:p-10 space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-3">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-stone/20 bg-transparent px-0 py-3 text-sm font-sans text-forest focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-3">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-stone/20 bg-transparent px-0 py-3 text-sm font-sans text-forest focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-3">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full border-b border-stone/20 bg-transparent px-0 py-3 text-sm font-sans text-forest focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-3">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      className="w-full border-b border-stone/20 bg-transparent px-0 py-3 text-sm font-sans text-forest focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-3">Preferred Destination *</label>
                  <select
                    required
                    className="w-full border-b border-stone/20 bg-transparent px-0 py-3 text-sm font-sans text-forest focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-6">Interests (select all that apply)</label>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`text-[10px] uppercase tracking-widest font-sans px-4 py-2 border transition-all duration-300 ${
                          selectedInterests.includes(interest)
                            ? "bg-forest text-cream border-forest"
                            : "bg-transparent text-stone/60 border-stone/20 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-forest text-[10px] uppercase tracking-widest font-sans font-bold mb-3">Tell us about your dream safari</label>
                  <textarea
                    rows={4}
                    placeholder="Share your vision..."
                    className="w-full border-b border-stone/20 bg-transparent px-0 py-3 text-sm font-sans text-forest focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button type="submit" className="btn-primary w-full text-center text-sm py-5 tracking-[0.15em] uppercase">
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
