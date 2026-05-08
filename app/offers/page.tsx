"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxSection from "@/components/motion/ParallaxSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── Offers Data ──────────────────────────────────────────────────────────────

const offers = [
  {
    id: "stay-pay",
    label: "Stay Longer",
    title: "4 Nights for the Price of 3",
    image: `${base}/photos/kikorongo_fireplace.jpg`,
    validity: [
      "11th January - 31st May 2026",
      "1st November - 19th December 2026",
      "11th January - 31st May 2027",
    ],
    details: [
      "Applicable at Tilenga Safari Lodge and Kikorongo Safari Lodge during Private Season.",
      "Valid on accommodation rates only (excludes park fees and conservation levies).",
      "Not combinable with other special offers.",
      "For new bookings only.",
    ],
    enquiryLink: "/plan-a-trip?offer=stay-longer",
  },
  {
    id: "multigenerational",
    label: "Family Legacy",
    title: "Bring the Grandparents for 50% Off",
    image: `${base}/offerspageimages/Bring%20the%20Grandparents%20for%2050%25%20Off.jpg`,
    validity: [
      "1st June - 14th June 2026",
      "11th January - 31st March 2027",
      "1st June - 14th June 2027",
    ],
    description: "Family is at the heart of the Tilenga experience. We believe the best memories are the ones made together across generations. To make it easier to bring everyone together, we are introducing a special multigenerational offer.",
    details: [
      "50% off a Luxury Tent/Cottage for grandparents when booking a Family Unit.",
      "Complimentary accommodation for one child under 13.",
      "Private safari vehicle with an expert guide for the whole family.",
      "Complimentary child-minding services and junior ranger activities.",
      "Includes tailored activities: foraging, bush movie nights, and cultural storytelling.",
    ],
    finePrint: "Valid for a maximum of 4 adults and 2 children under 13. Excludes flights and park fees.",
    enquiryLink: "/plan-a-trip?offer=multigen",
  },
  {
    id: "honeymoon",
    label: "Romance in the Wild",
    title: "Honeymoon Offer: 50% Off Partner",
    image: `${base}/offerspageimages/Honeymoon%20Offer%2050%25%20Off%20Partner.jpg`,
    validity: [
      "11th January - 31st May 2026",
      "1st November - 19th December 2026",
      "11th January - 31st May 2027",
    ],
    details: [
      "50% off one partner's accommodation at Tilenga Safari Lodge.",
      "Minimum stay of 4 nights required.",
      "Includes a private bush dinner and sunset sundowners at a secluded viewpoint.",
      "Excludes conservancy and park fees.",
      "Valid for travel within 12 months of the wedding date (marriage certificate required).",
    ],
    enquiryLink: "/plan-a-trip?offer=honeymoon",
  },
  {
    id: "family-comp",
    label: "Seasonal Specials",
    title: "Families with Children: Seasonal Savings",
    image: `${base}/offerspageimages/Families with Children.jpg`,
    validity: ["1st January 2026 - 31st December 2027"],
    details: [
      "Private Season: Up to two children sharing a family unit with at least one adult stay complimentary.",
      "Mid Season: In a Family Unit, one child under 13 stays complimentary.",
      "Peak Season: Special reduced rates for families with children up to 17 years old.",
      "Includes all-inclusive meals and child-friendly game drives.",
    ],
    enquiryLink: "/plan-a-trip?offer=family-seasonal",
  },
];

const faqs = [
  {
    q: "What family offers are available at Tilenga Safaris?",
    a: "We offer seasonal savings where children can stay complimentary in family units, as well as a dedicated multigenerational offer where grandparents receive 50% off their stay.",
  },
  {
    q: "Is there a honeymoon discount?",
    a: "Yes, we offer 50% off for one partner on stays of 4 nights or more, including special romantic touches like private bush dinners.",
  },
  {
    q: "What is the '4 nights for the price of 3' special?",
    a: "This 'Stay Pay' offer allows you to extend your safari experience with a complimentary night when booking three consecutive nights during our private and mid-seasons.",
  },
  {
    q: "When are the offers valid?",
    a: "Validity dates vary by offer but generally focus on our Private and Mid-seasons. Please check the specific validity section on each offer card for details.",
  },
  {
    q: "Can specials be combined?",
    a: "Our special offers are generally not combinable with one another. However, our concierge team can help you identify which offer provides the best value for your specific journey.",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function OfferCard({ offer, index }: { offer: typeof offers[0]; index: number }) {
  return (
    <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-24 mb-40 md:mb-64 items-center`}>
      {/* Image Side with Decorative Border */}
      <div className="w-full md:w-1/2 relative">
        <ImageReveal direction={index % 2 === 1 ? "right" : "left"}>
          <div className="relative p-3 md:p-6 border border-gold/20 bg-white/50 shadow-xl">
            <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden film-frame shadow-inner group">
              <Image 
                src={offer.image} 
                alt={offer.title} 
                fill
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 border-[10px] border-black/5 pointer-events-none" />
            </div>
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40 -translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40 translate-x-1 translate-y-1" />
          </div>
        </ImageReveal>
      </div>
      
      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <FadeIn direction="up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label mb-0">{offer.label}</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-forest uppercase tracking-tight leading-[0.9] mb-10">
            {offer.title.split(':').map((part, i) => (
              <span key={i} className={i === 1 ? "block italic text-gold lowercase mt-2 font-normal" : ""}>
                {part}{i === 0 && offer.title.includes(':') ? ':' : ''}
              </span>
            ))}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 py-8 border-y border-stone-200/60">
            <div>
              <h4 className="font-serif italic text-gold text-lg mb-3">Validity</h4>
              <div className="space-y-1">
                {offer.validity.map((v, i) => (
                  <p key={i} className="text-stone-500 font-sans text-xs uppercase tracking-widest">{v}</p>
                ))}
              </div>
            </div>
            {"description" in offer && (
              <div>
                <h4 className="font-serif italic text-gold text-lg mb-3">The Experience</h4>
                <p className="text-stone-500 font-sans text-xs leading-relaxed italic line-clamp-3">"{offer.description}"</p>
              </div>
            )}
          </div>

          <div className="mb-12">
            <h4 className="font-serif italic text-gold text-lg mb-6 flex items-center gap-3">
              Offer Privileges
              <div className="flex-1 h-px bg-gold/20" />
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {offer.details.map((detail, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <MagneticButton>
              <Link href={offer.enquiryLink} className="btn-primary px-14 py-5 inline-block text-center min-w-[200px]">
                Enquire Now
              </Link>
            </MagneticButton>
            
            {"finePrint" in offer && (
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 max-w-[200px] leading-loose">
                * {offer.finePrint}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-xl md:text-2xl text-forest group-hover:text-gold transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-gold shrink-0 ml-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="body-text text-stone-500 pb-8 max-w-3xl leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function OffersPage() {
  return (
    <main className="bg-cream min-h-screen grain-overlay">
      
      {/* 01. Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <ParallaxSection
          imageUrl={`${base}/Newstock/splendifd.jpg`}
          className="h-full w-full"
          overlayClassName="bg-black/50"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-10 block">
                Exclusive Opportunities
              </span>
            </FadeIn>

            <h1 className="flex flex-col items-center">
              <SplitText
                text="OFFERS"
                className="font-serif text-6xl md:text-9xl text-cream leading-none uppercase tracking-[-0.02em]"
                delay={0.2}
              />
              <span className="flex items-center gap-6 mt-2">
                <div className="w-12 md:w-24 h-px bg-gold/50" />
                <SplitText
                  text="2026 – 2027"
                  className="font-serif italic text-4xl md:text-6xl text-gold leading-none lowercase tracking-normal"
                  delay={0.6}
                />
                <div className="w-12 md:w-24 h-px bg-gold/50" />
              </span>
            </h1>

            <FadeIn direction="up" delay={1.2} className="mt-14 max-w-xl mx-auto">
              <p className="text-cream/70 font-sans text-sm md:text-base leading-relaxed tracking-wide italic">
                From romantic escapes to multigenerational family legacies — 
                discover the perfect gateway to the wild with our seasonal privileges.
              </p>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>

      {/* 02. Offers Grid */}
      <section className="py-24 md:py-48 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:mb-40">
            <FadeIn direction="up">
              <span className="section-label">Tilenga Privileges</span>
              <h2 className="font-serif text-5xl md:text-7xl text-forest uppercase tracking-tight leading-[0.95] mt-6">
                Special <br />
                <em className="text-gold italic lowercase">Opportunities</em>
              </h2>
            </FadeIn>
          </div>

          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} />
          ))}
        </div>
      </section>

      {/* 03. Global FAQ */}
      <section className="py-24 md:py-48 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" className="text-center mb-20">
            <span className="section-label">Enquiry Guidance</span>
            <h2 className="font-serif text-4xl md:text-6xl text-forest uppercase tracking-tight leading-[0.95] mt-6">
              Frequently Asked <br />
              <em className="text-gold italic lowercase">Questions</em>
            </h2>
          </FadeIn>

          <div className="border-t border-stone-200">
            {faqs.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Preparation CTA */}
      <section className="py-32 md:py-48 px-6 text-center bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/40 mx-auto mb-12" />
            <span className="section-label mb-6">Bespoke Itineraries</span>
            <h2 className="font-serif text-5xl md:text-7xl text-forest uppercase tracking-tight leading-[0.95] mb-12">
              Tailor Your <br />
              <em className="text-gold italic lowercase">Wild experience</em>
            </h2>
            <p className="body-text text-stone-500 max-w-xl mx-auto mb-16 leading-relaxed">
              Our specialists can combine these offers into a comprehensive East African 
              itinerary tailored specifically to your family's needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <MagneticButton>
                <Link href="/plan-a-trip" className="btn-primary px-14 py-5">
                  Start Planning
                </Link>
              </MagneticButton>
              <Link href="/faq" className="group flex items-center gap-4 text-stone-400 hover:text-gold transition-colors">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">
                  View Guest FAQ
                </span>
                <div className="relative w-10 h-px bg-current overflow-hidden">
                  <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
