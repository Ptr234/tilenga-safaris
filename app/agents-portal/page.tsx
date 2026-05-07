"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxSection from "@/components/motion/ParallaxSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── Agent FAQ ─────────────────────────────────────────────────────────────────

const agentFaqs = [
  {
    q: "Where are Tilenga Safari Lodge and Kikorongo Safari Lodge located?",
    a: "Tilenga Safari Lodge sits in the heart of the Albertine Rift in western Uganda — one of the world's most biodiverse regions — offering direct access to Queen Elizabeth National Park and Kibale Forest. Kikorongo Safari Lodge is nestled at the edge of Queen Elizabeth National Park near the Kazinga Channel, renowned for outstanding hippo, crocodile, and waterbird sightings. Both lodges are within easy driving or charter flight distance of Entebbe International Airport.",
  },
  {
    q: "How does Tilenga Safaris compare with other properties in the region?",
    a: "Unlike larger, higher-density resorts, our lodges operate on a low-impact, high-exclusivity model. Guest numbers are strictly limited to maintain an intimate atmosphere and reduce pressure on the ecosystem. Our guiding team has an exceptional guide-to-guest ratio, our lodges occupy prime private wildlife corridors, and every itinerary is custom-built. Clients who have stayed at mainstream East African lodges consistently describe Tilenga as the most personally meaningful experience of their journey.",
  },
  {
    q: "What types of accommodation do you offer, and what is your total guest capacity?",
    a: "Tilenga Safari Lodge offers 8 luxury en-suite safari tents and 2 premium villa suites — maximum 20 guests. Kikorongo Safari Lodge offers 6 en-suite cottages — maximum 12 guests. All units feature private decks, hot outdoor showers, premium linen, and uninterrupted bush or water views. Both properties can be booked exclusively for groups, families, or private buyouts.",
  },
  {
    q: "Can I get a map of the Tilenga Safaris properties?",
    a: "Yes — detailed property maps, zone maps, and East Africa destination maps are available for download in our digital assets section above. Maps include lodge layouts, activity zones, airstrip locations, and driving routes from Entebbe. For bespoke itinerary maps tailored to your client's routing, contact our reservations team directly.",
  },
  {
    q: "What wildlife can be reliably seen?",
    a: "Uganda: Mountain gorillas (Bwindi), chimpanzees (Kibale), tree-climbing lions and hippos (Queen Elizabeth NP), shoebill storks (Murchison Falls). The Albertine Rift is a global biodiversity hotspot with over 600 bird species. Kenya extension: The Great Wildebeest Migration (Maasai Mara, Jul–Oct), Big Five game viewing, leopard, cheetah, and Nile crocodile. Our guides are expert trackers — sightings rates for flagship species exceed 90% during prime seasons.",
  },
  {
    q: "What is the quality of the guiding?",
    a: "All Tilenga guides are Uganda Wildlife Authority-certified, with a minimum of 5 years in-field experience. Many are also specialist birding guides and cultural interpreters. We invest in ongoing training through partnerships with ATTA and regional conservation bodies. Guiding language is English; specialist guides in French and German are available on request. Client satisfaction scores for guiding consistently exceed 4.8/5.",
  },
  {
    q: "What are your nett rates, commission structure, and contract terms?",
    a: "We offer competitive nett rates and work with registered agents on a 15–20% commission model depending on volume and partnership tier. Annual rate sheets are released each October for the following year. We operate on a 30% deposit at booking, balance 60 days prior to arrival. Cancellation and amendment policies are flexible by partner tier. Please use the 'Request Nett Rates' button above or email destinations@tilengasafaris.com to receive a full agent rate card.",
  },
  {
    q: "What does the rate include?",
    a: "All rates are fully all-inclusive: accommodation, all meals (breakfast, lunch, dinner, and bush picnics), twice-daily game drives or boat safaris, guided bush walks, laundry, all non-premium beverages (house wines, spirits, soft drinks, local beers), and all park entry fees. Exclusions: international and domestic flights, travel insurance, visa fees, premium spirits, spa treatments, and personal purchases.",
  },
  {
    q: "Do you have up-to-date marketing materials?",
    a: "Yes — our digital asset library is maintained and updated each season. Available for registered agents: high-resolution photography (lodge, wildlife, community), 4K lodge walkthroughs and drone footage, printable and digital fact sheets, current rate cards, sample itineraries, sustainability credentials, and map packs. Access the full library via the assets grid above, or request the Agent Media Pack by emailing destinations@tilengasafaris.com.",
  },
];

// ─── Digital Asset Cards ───────────────────────────────────────────────────────

const assets = [
  {
    label: "Rate Sheets",
    tag: "2025 / 2026",
    description: "Current nett and gross rate cards including all seasonal variations and special offers.",
    image: `${base}/photos/tilengasafarilodge/entrance.png`,
    cta: "Request Rates",
    href: "mailto:destinations@tilengasafaris.com?subject=Rate%20Sheet%20Request",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Fact Sheets",
    tag: "Lodge Profiles",
    description: "Detailed lodge fact sheets covering accommodation types, facilities, activities, and capacity.",
    image: `${base}/photos/kikorongo_room1.jpg`,
    cta: "Download",
    href: "mailto:destinations@tilengasafaris.com?subject=Fact%20Sheet%20Request",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Image Library",
    tag: "Hi-Res Photography",
    description: "Curated hi-resolution images of lodges, wildlife, community, and landscape for print and digital use.",
    image: `${base}/Newstock/cheetah.jpg`,
    cta: "Browse Gallery",
    href: "https://www.instagram.com/tilengasafaris_travel/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Video Library",
    tag: "4K Footage",
    description: "Lodge walkthroughs, drone aerials, wildlife moments, and guest experience reels ready for client presentations.",
    image: `${base}/Newstock/greatbeastmigration.jpg`,
    cta: "View Videos",
    href: "https://www.instagram.com/tilengasafaris_travel/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Property Maps",
    tag: "Destinations & Routes",
    description: "Lodge layout maps, destination zone maps, airstrip locations, and multi-country routing overviews.",
    image: `${base}/Newstock/elephantcars.jpg`,
    cta: "Download Maps",
    href: "mailto:destinations@tilengasafaris.com?subject=Map%20Pack%20Request",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
      </svg>
    ),
  },
  {
    label: "Sustainability Report",
    tag: "Conservation & Community",
    description: "Annual impact report detailing conservation initiatives, community partnerships, and eco-credentials.",
    image: `${base}/Newstock/touristsmovinginforest.jpg`,
    cta: "Download Report",
    href: "mailto:destinations@tilengasafaris.com?subject=Sustainability%20Report%20Request",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// ─── Accordion ─────────────────────────────────────────────────────────────────

function AgentAccordion({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b transition-colors duration-300 ${open ? "border-gold/40" : "border-white/10"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-8 py-8 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-6">
          <span className="text-gold font-serif italic text-base shrink-0 mt-1 opacity-50">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`font-serif text-xl md:text-2xl leading-snug tracking-tight transition-colors duration-300 ${open ? "text-gold" : "text-cream/80 group-hover:text-cream"}`}>
            {q}
          </span>
        </div>
        <div className={`shrink-0 mt-2 flex items-center justify-center w-8 h-8 border border-white/10 rounded-full transition-all duration-500 ${open ? "rotate-180 border-gold/40 bg-gold/5" : "rotate-0 group-hover:border-gold/30"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={open ? "text-gold" : "text-cream/40"}>
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "max-h-[500px] opacity-100 pb-10" : "max-h-0 opacity-0"}`}>
        <p className="text-cream/55 font-sans text-[15px] leading-relaxed pl-12 max-w-3xl border-l border-gold/20 ml-3">{a}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AgentsPortalPage() {
  const [rateFormOpen, setRateFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "370d3a6f-b7ef-47dc-b782-98f868ca3aae");
    formData.append("subject", `Agent Rate Request from ${formData.get("agency")}`);
    formData.append("from_name", "Tilenga Agents Portal");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setSubmitted(true); form.reset(); }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0e1f16] min-h-screen grain-overlay">

      {/* ── 01. Hero ──────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <ParallaxSection
          imageUrl={`${base}/Newstock/safari.jpg`}
          className="h-full w-full"
          overlayClassName="bg-black/60"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-12 block opacity-80">
                Trade & Travel Partners
              </span>
            </FadeIn>
            
            <div className="relative">
              <h1 className="flex flex-col items-center">
                <SplitText
                  text="PARTNERS"
                  className="font-serif text-6xl md:text-[10rem] text-cream leading-[0.8] uppercase tracking-[-0.03em]"
                  delay={0.2}
                />
                <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0">
                  <div className="w-12 md:w-32 h-px bg-gold/40" />
                  <SplitText
                    text="portal"
                    className="font-serif italic text-4xl md:text-8xl text-gold leading-none lowercase tracking-tight"
                    delay={0.6}
                  />
                  <div className="w-12 md:w-32 h-px bg-gold/40" />
                </div>
              </h1>
              
              {/* Overlapping Floating Label */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 hidden lg:block"
              >
                <div className="vertical-text text-gold/30 text-[9px] uppercase tracking-[0.6em] font-bold">
                  Established 2018
                </div>
              </motion.div>
            </div>

            <FadeIn direction="up" delay={1.2} className="mt-16 max-w-2xl mx-auto">
              <p className="text-cream/50 font-sans text-sm md:text-lg leading-relaxed tracking-wide font-light">
                Your exclusive gateway to Africa&apos;s most immersive safari experiences. 
                Access high-res media, live rates, and expert operational support.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={1.4} className="mt-12">
              <MagneticButton>
                <button 
                  onClick={() => setRateFormOpen(true)}
                  className="group flex items-center gap-4 text-cream hover:text-gold transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Access Rates</span>
                  <div className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <svg className="w-4 h-4 translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </MagneticButton>
            </FadeIn>
          </div>
        </ParallaxSection>

        {/* Cinematic bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0e1f16] to-transparent" />
      </section>

      {/* ── 02. Welcome & Savannah ───────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            {/* Left: Introduction */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <span className="section-label mb-8">Global Partnerships</span>
                <h2 className="font-serif text-4xl md:text-7xl text-cream uppercase tracking-tight leading-[0.9] mb-12">
                  Elevate your <br />
                  <em className="text-gold italic lowercase">client experience.</em>
                </h2>
                <div className="w-24 h-0.5 bg-gold/30 mb-12" />
                <div className="space-y-8 text-cream/50 font-sans text-base md:text-lg leading-relaxed font-light max-w-2xl">
                  <p>
                    Tilenga Safaris is more than a lodge operator; we are your strategic partner in 
                    East Africa. This portal provides the tools you need to market and sell our 
                    unique properties with absolute confidence.
                  </p>
                  <p>
                    From the mist-shrouded forests of Bwindi to the golden plains of the Mara, 
                    our resources ensure you can curate the perfect journey for even the most 
                    discerning traveler.
                  </p>
                </div>

                <div className="mt-16 flex flex-wrap items-center gap-10">
                  <MagneticButton>
                    <button onClick={() => setRateFormOpen(true)} className="btn-primary px-14 py-5">
                      Request Rate Card
                    </button>
                  </MagneticButton>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-cream/30">Direct Enquiries</span>
                    <a href="mailto:destinations@tilengasafaris.com" className="text-gold hover:text-cream transition-colors font-sans text-sm tracking-widest">
                      destinations@tilengasafaris.com
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Savannah Feature */}
            <div className="lg:col-span-5 relative">
              <FadeIn direction="left" delay={0.4}>
                <div className="relative group luxury-lift">
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-gold/10 pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-gold/10 pointer-events-none" />
                  
                  <div className="bg-forest/40 backdrop-blur-md border border-white/5 p-10 md:p-14 relative overflow-hidden">
                    {/* Background Graphic */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] select-none pointer-events-none">
                      <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-16 h-16 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center rounded-full">
                        <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-1">WhatsApp Concierge</span>
                        <h3 className="font-serif text-3xl text-cream">Meet Savannah</h3>
                      </div>
                    </div>

                    <p className="text-cream/60 font-sans text-base leading-relaxed mb-10 font-light">
                      Instant answers, 24/7. Our AI specialist Savannah provides real-time support 
                      on product details, logistics, and regional knowledge across all time zones.
                    </p>

                    <div className="bg-[#0e1f16] border border-white/5 p-6 mb-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-cream/30 text-[9px] uppercase tracking-[0.3em] font-bold">Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                          <span className="text-[#25D366] text-[10px] uppercase font-bold tracking-widest">Online Now</span>
                        </div>
                      </div>
                      <p className="text-cream font-sans text-xl tracking-[0.1em] font-medium">+256 789 390 350</p>
                    </div>

                    <a
                      href="https://wa.me/256789390350"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-4 bg-[#25D366] text-white w-full py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#20b558] transition-all"
                    >
                      Start Partnership Chat
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Digital Assets Grid ───────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-16 bg-[#09150f]">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <FadeIn direction="up">
              <span className="section-label mb-6">Media & Documentation</span>
              <h2 className="font-serif text-5xl md:text-8xl text-cream uppercase tracking-tight leading-[0.9]">
                Asset <em className="text-gold italic lowercase">library.</em>
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="max-w-md">
              <p className="text-cream/40 font-sans text-sm md:text-base leading-relaxed">
                Everything you need to showcase the Tilenga collection. Download hi-res media, 
                current rate sheets, and detailed technical profiles.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {assets.map((asset, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <a
                  href={asset.href}
                  target={asset.href.startsWith("http") ? "_blank" : undefined}
                  rel={asset.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block luxury-lift"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={asset.image}
                      alt={asset.label}
                      className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09150f] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-8 left-8">
                      <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2">
                        <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold">{asset.tag}</span>
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors duration-500">
                          {asset.icon}
                        </div>
                        <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors">{asset.label}</h3>
                      </div>
                      <p className="text-cream/50 font-sans text-sm leading-relaxed mb-8 font-light line-clamp-2">{asset.description}</p>
                      
                      <div className="flex items-center gap-4 text-gold overflow-hidden">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{asset.cta}</span>
                        <div className="w-12 h-px bg-gold/30 group-hover:w-20 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── 05. Divider Quote ────────────────────────────────────────── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <ParallaxSection
          imageUrl={`${base}/Newstock/bigelephant.jpg`}
          className="h-full w-full"
          overlayClassName="bg-black/50"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-12 block opacity-60">
                A Shared Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-6xl text-cream max-w-4xl leading-[1.1] italic">
                &ldquo;Luxury is not just where you stay, but <em className="text-gold not-italic">how you feel</em> when you are there.&rdquo;
              </h2>
              <div className="w-16 h-px bg-gold/50 mt-16 mx-auto" />
              <p className="mt-8 text-gold/60 font-sans text-[10px] uppercase tracking-[0.4em] font-bold">
                The Tilenga Way
              </p>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>

      {/* ── 06. Agent FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-16 bg-forest">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24">
            <FadeIn direction="up">
              <span className="section-label text-gold/60 mb-6">Knowledge Base</span>
              <h2 className="font-serif text-4xl md:text-7xl text-cream uppercase tracking-tight leading-[0.9]">
                Partner <br />
                <em className="text-gold italic lowercase">frequently asked.</em>
              </h2>
            </FadeIn>
          </div>

          <div className="border-t border-white/5">
            {agentFaqs.map((item, i) => (
              <AgentAccordion key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 07. Team Contacts ─────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-16 bg-[#0e1f16]">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <FadeIn direction="up">
              <span className="section-label mb-6">Human Connection</span>
              <h2 className="font-serif text-5xl md:text-8xl text-cream uppercase tracking-tight leading-[0.9]">
                Expert <em className="text-gold italic lowercase">support.</em>
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                role: "Reservations & Rates",
                name: "Reservations Team",
                email: "destinations@tilengasafaris.com",
                phone: "+256 789 390 350",
                desc: "Your primary contact for rate enquiries, block bookings, and availability across all properties.",
                image: `${base}/photos/tilengasafarilodge/breakfast.png`,
              },
              {
                role: "Product & Operations",
                name: "Operations Team",
                email: "destinations@tilengasafaris.com",
                phone: "+256 789 390 350",
                desc: "Specialists in logistics, itinerary design, and ground handling across Uganda and Kenya.",
                image: `${base}/photos/kikorongo_ranger.jpg`,
              },
              {
                role: "Marketing & Assets",
                name: "Marketing Team",
                email: "destinations@tilengasafaris.com",
                phone: "+256 789 390 350",
                desc: "For media pack requests, co-branding initiatives, and high-res content acquisition.",
                image: `${base}/Newstock/tourist.jpg`,
              },
            ].map((contact, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="group bg-forest/20 border border-white/5 hover:border-gold/20 transition-all duration-700 overflow-hidden luxury-lift">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={contact.image}
                      alt={contact.role}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f16] via-transparent to-transparent opacity-90" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-10">
                      <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold block mb-4">{contact.role}</span>
                      <h3 className="font-serif text-3xl text-cream mb-6">{contact.name}</h3>
                      <p className="text-cream/40 font-sans text-sm leading-relaxed mb-10 font-light">{contact.desc}</p>
                      
                      <div className="space-y-4 pt-8 border-t border-white/10">
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-cream/60 hover:text-gold transition-colors group/link">
                          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-gold transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="font-sans text-[11px] tracking-[0.1em] uppercase font-bold">{contact.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08. Rate Request Modal ────────────────────────────────────── */}
      <AnimatePresence>
        {rateFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={(e) => { if (e.target === e.currentTarget) setRateFormOpen(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-forest-dark w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border border-gold/10"
            >
              {/* Close */}
              <button
                onClick={() => { setRateFormOpen(false); setSubmitted(false); }}
                className="absolute top-8 right-8 text-cream/30 hover:text-gold transition-all z-10 p-2 hover:bg-white/5 rounded-full"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="p-12 md:p-20">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-10 bg-gold/5">
                      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-4xl text-cream mb-6">Request Confirmed</h3>
                    <p className="text-cream/40 font-sans text-base leading-relaxed max-w-sm mx-auto font-light">
                      Our trade relations team will review your application and send the 2025/26 rate deck within 24 hours.
                    </p>
                    <button 
                      onClick={() => setRateFormOpen(false)}
                      className="mt-12 btn-outline px-12 py-4"
                    >
                      Return to Portal
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="section-label text-gold/60 mb-6">Trade Registration</span>
                    <h3 className="font-serif text-4xl text-cream uppercase tracking-tight mb-4">Request <em className="text-gold italic lowercase">nett rates.</em></h3>
                    <div className="w-16 h-0.5 bg-gold/30 mb-14" />

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-cream/30 block mb-3">Agency / Company *</label>
                          <input name="agency" required className="w-full bg-forest border border-white/5 text-cream font-sans text-sm px-5 py-4 focus:border-gold/50 focus:outline-none transition-all" placeholder="Legal agency name" />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-cream/30 block mb-3">Your Name *</label>
                          <input name="name" required className="w-full bg-forest border border-white/5 text-cream font-sans text-sm px-5 py-4 focus:border-gold/50 focus:outline-none transition-all" placeholder="Full name" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-cream/30 block mb-3">Professional Email *</label>
                          <input name="email" type="email" required className="w-full bg-forest border border-white/5 text-cream font-sans text-sm px-5 py-4 focus:border-gold/50 focus:outline-none transition-all" placeholder="name@agency.com" />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-cream/30 block mb-3">Country of Operation</label>
                          <input name="country" className="w-full bg-forest border border-white/5 text-cream font-sans text-sm px-5 py-4 focus:border-gold/50 focus:outline-none transition-all" placeholder="Primary market" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-cream/30 block mb-3">Primary Interest</label>
                        <div className="grid grid-cols-2 gap-4">
                          {["Tilenga Lodge", "Kikorongo Lodge", "Both Properties", "Multi-Country"].map((opt) => (
                            <label key={opt} className="flex items-center gap-4 cursor-pointer group bg-forest/50 p-4 border border-white/5 hover:border-gold/20 transition-all">
                              <input type="checkbox" name="properties" value={opt} className="w-4 h-4 border border-white/20 bg-transparent accent-gold" />
                              <span className="text-cream/60 font-sans text-[11px] uppercase tracking-widest group-hover:text-cream transition-colors">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-cream/30 block mb-3">Partner Notes</label>
                        <textarea name="notes" rows={3} className="w-full bg-forest border border-white/5 text-cream font-sans text-sm px-5 py-4 focus:border-gold/50 focus:outline-none transition-all resize-none" placeholder="Volume estimates or specific itinerary requirements..." />
                      </div>
                      
                      <div className="pt-6">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full btn-primary py-6 flex items-center justify-center gap-4 disabled:opacity-50"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Processing...
                            </>
                          ) : "Submit Partnership Request"}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 09. Closing CTA ───────────────────────────────────────────── */}
      <section className="h-[75vh] relative overflow-hidden">
        <ParallaxSection
          imageUrl={`${base}/Newstock/splendifd.jpg`}
          className="h-full"
          overlayClassName="bg-black/60"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-10 block opacity-80">
                A World of Opportunity
              </span>
              <h2 className="font-serif text-5xl md:text-8xl text-cream uppercase tracking-tight leading-[0.85] mb-14">
                Let&apos;s build <br />
                <em className="text-gold italic lowercase">the extraordinary.</em>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <MagneticButton>
                  <button onClick={() => setRateFormOpen(true)} className="btn-primary px-16 py-6">
                    Request Nett Rates
                  </button>
                </MagneticButton>
                
                <a
                  href="mailto:destinations@tilengasafaris.com"
                  className="group flex items-center gap-6 text-cream/40 hover:text-gold transition-all"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Direct Liaison</span>
                  <div className="relative w-16 h-px bg-current overflow-hidden">
                    <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>
    </main>
  );
}
