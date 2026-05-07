"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxSection from "@/components/motion/ParallaxSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

const sections = [
  {
    id: "first-time",
    label: "First Time Safari",
    title: "For First Time Safari Visits",
    description: "Everything you need to know before you embark on your very first East African adventure.",
    image: `${base}/Newstock/tourist.jpg`,
    questions: [
      {
        q: "When is the best time to visit the Maasai Mara?",
        a: "The Maasai Mara is spectacular year-round, but the prime season runs July to October when the Great Migration — over 1.5 million wildebeest and zebra — crosses the Mara River. For fewer crowds and lush green scenery, November through April offers exceptional game viewing.",
      },
      {
        q: "Do I need a visa?",
        a: "Most nationalities require a visa to enter Kenya. We recommend applying for an eVisa online at evisa.go.ke before travel — the process takes 2–3 business days. Our concierge team can guide you through the exact requirements.",
      },
      {
        q: "Are vaccinations required for travel to Kenya?",
        a: "Yellow Fever vaccination is required if arriving from an endemic country. We strongly recommend consulting a travel medicine specialist 6–8 weeks before departure for malaria prophylaxis and other boosters.",
      },
      {
        q: "How should I prepare and what should I pack?",
        a: "Neutral earth tones (khaki, olive, tan) are ideal. Essentials: lightweight long-sleeve layers, a fleece for cool mornings, sunscreen, insect repellent, binoculars, and a quality camera. We send a detailed packing guide to all guests.",
      },
      {
        q: "Are Safaris Expensive?",
        a: "A quality safari is an investment in a lifetime experience. Costs range from mid-range ($300–$500/night) to ultra-luxury ($1,500+/night). Our rates are all-inclusive, covering accommodation, meals, game drives, and activities.",
      },
    ],
  },
  {
    id: "choosing",
    label: "Choosing Your Safari",
    title: "Choosing the Right Experience",
    description: "Navigating the options to find the safari that resonates with your personal travel style.",
    image: `${base}/Newstock/elephantcars.jpg`,
    questions: [
      {
        q: "How do I choose which company to go with?",
        a: "Look for operators with certified naturalist guides, transparent all-inclusive pricing, and strong conservation ethics. Verify memberships with ATTA or KATO. We recommend reading guest reviews on TripAdvisor and speaking directly with a specialist.",
      },
      {
        q: "Lodge vs. Tented Camp: What's the difference?",
        a: "A lodge is a permanent stone/timber structure with fixed walls. A luxury tented camp uses high-end canvas on raised platforms, offering a more immersive 'bush feel' without sacrificing comfort. Both offer en-suite facilities and exceptional service.",
      },
      {
        q: "Why Choose Tilenga Safaris?",
        a: "We combine 20+ years of expertise with an owner-operated, personalised approach. Our guides are among the region's best, our lodges are in prime wildlife zones, and our conservation partnerships ensure your journey gives back.",
      },
      {
        q: "Can I book Tilenga Safaris directly?",
        a: "Absolutely. Booking directly means you work with our in-house specialists, avoid agent commissions, and benefit from our full concierge service from first inquiry to departure.",
      },
    ],
  },
  {
    id: "staying",
    label: "The Tilenga Stay",
    title: "Staying With Us",
    description: "From dawn game drives to starlit dinners, discover the rhythm of life at our safari lodges.",
    image: `${base}/photos/tilengasafarilodge/breakfast.png`,
    questions: [
      {
        q: "What is the typical daily schedule?",
        a: "Days begin with a 5:30 am wake-up for a dawn game drive. Return for a full breakfast and leisure time (spa, pool, walks). Afternoon drives depart at 4:00 pm, returning at dusk for sundowners and communal dining under the stars.",
      },
      {
        q: "Will I have Wi-Fi and connectivity?",
        a: "Our lodges offer Wi-Fi in main areas. In-room connectivity is intentionally gentle to help you unplug. Emergency communication is always available, and we can arrange dedicated access if required for work.",
      },
      {
        q: "What kind of food is served?",
        a: "A fusion of East African and international cuisine, farm-to-table where possible. Expect hearty bush breakfasts, elegant multi-course dinners, and signature dishes using local spices and fresh regional produce.",
      },
      {
        q: "Do you cater for specific dietary requirements?",
        a: "Yes. Whether you are vegan, vegetarian, coeliac, or have allergies, our kitchen accommodates all requirements with advance notice. Please inform us at the time of booking.",
      },
      {
        q: "Is there a Spa and swimming pool?",
        a: "Tilenga Safari Lodge features an infinity pool overlooking the wilderness, and we offer in-tent spa treatments including massages and bush-inspired therapies performed by trained specialists.",
      },
    ],
  },
  {
    id: "about-us",
    label: "About Tilenga",
    title: "About Tilenga Safaris",
    description: "Our philosophy, our people, and the practical details of visiting our corner of the world.",
    image: `${base}/photos/kikorongo_outside.jpg`,
    questions: [
      {
        q: "What does the rate include?",
        a: "Our rates are all-inclusive: accommodation, all meals, game drives, guided walks, laundry, select beverages, and park fees. Flights, visas, insurance, and personal expenses are excluded.",
      },
      {
        q: "What languages are spoken?",
        a: "English and Swahili are spoken across all properties. Our guides also speak Luganda, and we can arrange specialist guides in French, Italian, or German with advance notice.",
      },
      {
        q: "Is Tilenga Safaris family friendly?",
        a: "We welcome families warmly. Activities include junior ranger programmes, nature trails, and cultural crafts. All game drives are adapted for younger guests by our expert guides.",
      },
      {
        q: "How can I check availability?",
        a: "Submit an enquiry via our website, email destinations@tilengasafaris.com, or WhatsApp our concierge. We'll confirm availability and hold your preferred dates within 24 hours.",
      },
    ],
  },
  {
    id: "impact",
    label: "Our Impact",
    title: "Conservation & Community",
    description: "How your journey contributes to the preservation of wildlife and the empowerment of local people.",
    image: `${base}/Newstock/touristsmovinginforest.jpg`,
    questions: [
      {
        q: "How can I get involved in conservation?",
        a: "Every stay directly funds community and conservation partnerships. Guests can participate in dedicated conservation drives, school visits, tree-planting, or contribute to our foundation.",
      },
      {
        q: "How do you approach cultural engagement?",
        a: "We believe in mutual, dignified encounters. Our partnerships are fair-exchange models — communities set the terms, receive direct revenue, and our guides serve as genuine bridges.",
      },
    ],
  },
];

// ─── Accordion Item ────────────────────────────────────────────────────────────

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-8 text-left group"
      >
        <span
          className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${
            open ? "text-forest" : "text-stone-700 group-hover:text-gold"
          }`}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="shrink-0 mt-1 text-gold"
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
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="body-text text-stone-500 leading-relaxed pb-8 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Simple intersection observer to track active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0% -60% 0%" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-cream min-h-screen grain-overlay">
      {/* 01. Minimalist Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={`${base}/Newstock/safari.jpg`}
            className="w-full h-full object-cover grayscale"
            alt=""
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <FadeIn direction="up">
            <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-8 block">
              Guest Assistance
            </span>
            <h1 className="font-serif text-6xl md:text-8xl text-cream uppercase tracking-tight leading-none mb-8">
              Common <br />
              <em className="text-gold italic lowercase">Enquiries</em>
            </h1>
            <p className="text-cream/70 font-sans text-sm md:text-lg leading-relaxed max-w-2xl mx-auto italic">
              "Understanding is the beginning of adventure. We've gathered every detail 
              to ensure your journey into the wild is as seamless as the savannah horizon."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 02. Redesigned Layout: Sidebar + Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sidebar Navigation (Sticky) */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32">
              <FadeIn direction="right">
                <div className="mb-12 hidden lg:block">
                  <span className="section-label">Categories</span>
                  <div className="w-12 h-px bg-gold mt-4" />
                </div>
                
                {/* Mobile horizontal scroll for categories */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-4 lg:gap-2 no-scrollbar">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`whitespace-nowrap text-left px-6 py-3 lg:px-0 lg:py-4 border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-500 ${
                        activeSection === section.id
                          ? "border-gold text-forest lg:pl-6 bg-stone-100/50 lg:bg-transparent"
                          : "border-transparent text-stone-400 hover:text-stone-600 lg:pl-0"
                      }`}
                    >
                      <span className="font-serif text-lg md:text-xl uppercase tracking-wider">
                        {section.label}
                      </span>
                    </button>
                  ))}
                </div>
              </FadeIn>

              {/* Contextual Image (Desktop Only) */}
              <div className="mt-16 hidden lg:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="relative aspect-[4/5] overflow-hidden rounded-sm film-frame shadow-2xl"
                  >
                    <img
                      src={sections.find(s => s.id === activeSection)?.image}
                      className="w-full h-full object-cover grayscale-[30%]"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </aside>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            {sections.map((section, sIdx) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-32 last:mb-0 scroll-mt-32"
              >
                <FadeIn direction="up">
                  <div className="mb-12">
                    <span className="text-gold font-serif italic text-xl mb-4 block">
                      0{sIdx + 1}
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-forest uppercase tracking-tight mb-6">
                      {section.title}
                    </h2>
                    <p className="body-text text-stone-500 max-w-xl">
                      {section.description}
                    </p>
                    <div className="w-full h-px bg-stone-200 mt-12" />
                  </div>
                </FadeIn>

                <div className="space-y-2">
                  {section.questions.map((item, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.1}>
                      <AccordionItem q={item.q} a={item.a} />
                    </FadeIn>
                  ))}
                </div>
                
                {/* Mobile/Tablet image between sections */}
                <div className="mt-16 lg:hidden">
                  <ImageReveal direction="bottom">
                    <div className="aspect-[16/9] overflow-hidden rounded-sm">
                      <img
                        src={section.image}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </ImageReveal>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* 03. Global CTA */}
      <section className="bg-forest py-24 md:py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-serif text-5xl md:text-7xl text-cream uppercase tracking-tight mb-12">
              Still seeking <br />
              <em className="text-gold italic lowercase">clarity?</em>
            </h2>
            <p className="text-cream/60 text-lg mb-16 max-w-xl mx-auto font-sans leading-relaxed">
              Our safari specialists are ready to provide the personal guidance 
              your journey deserves.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <MagneticButton>
                <Link href="/plan-a-trip" className="btn-primary px-14 py-5 bg-gold text-forest border-gold hover:bg-cream hover:text-forest">
                  Consult a Specialist
                </Link>
              </MagneticButton>
              <a
                href="mailto:destinations@tilengasafaris.com"
                className="text-gold border-b border-gold/30 pb-1 text-sm uppercase tracking-[0.3em] font-bold hover:border-gold transition-all"
              >
                Send an Email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 04. Visual Closer */}
      <section className="h-[60vh] relative">
        <ParallaxSection
          imageUrl={`${base}/Newstock/greatbeastmigration.jpg`}
          className="h-full"
          overlayClassName="bg-black/40"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-6 block">
                The Wild Awaits
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-cream uppercase tracking-tight">
                Prepare for the <br />
                <em className="text-gold italic lowercase">Unforgettable</em>
              </h2>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>
    </main>
  );
}
