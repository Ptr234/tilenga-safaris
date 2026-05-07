"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeIn from "./motion/FadeIn";
import AnimatedCounter from "./motion/AnimatedCounter";
import { StaggerGrid, StaggerItem } from "./motion/StaggerGrid";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const sustainabilityStats = [
  {
    label: "Wildlife Protected",
    value: "15000+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    )
  },
  {
    label: "Local Jobs Supported",
    value: "250+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    label: "Community Projects",
    value: "12",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    label: "Acres Conserved",
    value: "50000",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C10 14.5 12 15 15 15" />
      </svg>
    )
  },
];

const impactImages = [
  {
    src: `${base}/Newstock/mothernbabyelephant.jpg`,
    label: "Wildlife Protection",
    span: "col-span-8 row-span-2",
    tag: "Conservation",
    heading: "Wildlife Protection",
    body: "We actively safeguard Uganda's most vital ecosystems — protecting elephant corridors, primate habitats, and the biodiversity that defines East Africa's natural heritage for generations to come.",
  },
  {
    src: `${base}/Newstock/tourist.jpg`,
    label: "Local Employment",
    span: "col-span-4 row-span-1",
    tag: "Community",
    heading: "Local Employment",
    body: "Every safari creates lasting livelihoods. We employ and train over 250 community members as guides, rangers, hospitality staff, and conservation stewards — investing in people, not just places.",
  },
  {
    src: `${base}/Newstock/touristsmovinginforest.jpg`,
    label: "Eco-Tourism",
    span: "col-span-4 row-span-1",
    tag: "Responsible Travel",
    heading: "Eco-Tourism",
    body: "Responsible tourism is our compass. We limit guest numbers, use low-impact transport, and design every journey to tread lightly on the land while maximising its meaning.",
  },
  {
    src: `${base}/experinces/culture emersion.jpg`,
    label: "Community Heritage",
    span: "col-span-5 row-span-1",
    tag: "Culture",
    heading: "Community Heritage",
    body: "We partner with the Batwa, Karamojong, and lakeside fishing communities to preserve living traditions — ensuring that culture is celebrated, not commodified.",
  },
  {
    src: `${base}/Newstock/wildanimals.jpg`,
    label: "Biodiversity",
    span: "col-span-7 row-span-1",
    tag: "Wildlife",
    heading: "Biodiversity",
    body: "Uganda hosts over 50% of the world's mountain gorillas and some of Africa's richest bird life. We fund ongoing research and monitoring to protect every species across the ecosystem.",
  },
  {
    src: `${base}/Newstock/Queen Elizabeth NP.jpg`,
    label: "Habitat Preservation",
    span: "col-span-6 row-span-1",
    tag: "Habitat",
    heading: "Habitat Preservation",
    body: "From the shores of Lake George to the Albertine Rift, we help maintain buffer zones around Uganda's national parks — keeping critical wildlife corridors open and intact.",
  },
  {
    src: `${base}/Newstock/elephantcars.jpg`,
    label: "Responsible Operations",
    span: "col-span-6 row-span-1",
    tag: "Sustainability",
    heading: "Responsible Operations",
    body: "Our lodges run on solar energy, harvest rainwater, compost waste, and source food locally. We believe that luxury and environmental responsibility are not opposing forces.",
  },
  {
    src: `${base}/experinces/gorrila treking.jpg`,
    label: "Primate Conservation",
    span: "col-span-12 row-span-1",
    tag: "Primates",
    heading: "Primate Conservation",
    body: "Uganda's great apes face increasing pressure. A portion of every gorilla trek booking directly funds anti-poaching patrols, ranger programmes, and forest restoration efforts.",
  },
];

export default function SustainabilitySection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateS = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Observe each image, update activeIdx to whichever is most in view
  useEffect(() => {
    const ratios = new Array(impactImages.length).fill(0);

    const observers = imageRefs.current.map((el, idx) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratios[idx] = entry.intersectionRatio;
            const best = ratios.indexOf(Math.max(...ratios));
            setActiveIdx(best);
          });
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-forest-dark"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 opacity-20 scale-110">
        <img
          src={`${base}/Newstock/wildanimals.jpg`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark/80 to-forest-dark" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* ─── LEFT COLUMN — sticky, text updates on scroll ─── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeIn direction="up">

              {/* Static heading */}
              <div className="mb-6">
                <h2 className="text-cream font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none uppercase tracking-tighter">
                  Sustainability
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="w-8 h-px bg-gold/40" />
                  <span className="text-gold font-serif italic text-[clamp(1.5rem,3vw,3rem)] leading-none">
                    &amp; Conservation
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-gold/60 font-sans text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                  Communities &amp; Conservation
                </span>
                <div className="w-20 h-px bg-gold/30" />
              </div>

              {/* Dynamic block — updates as images scroll into view */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="mb-10"
                >
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-5 h-px bg-gold/50" />
                    <span className="text-gold/70 font-sans text-[9px] uppercase tracking-[0.45em] font-bold">
                      {impactImages[activeIdx].tag}
                    </span>
                  </div>

                  {/* Image-matched heading */}
                  <h3 className="font-serif text-cream text-3xl md:text-4xl leading-tight mb-5">
                    {impactImages[activeIdx].heading}
                  </h3>

                  {/* Image-matched description */}
                  <p className="text-cream/60 font-sans text-base leading-relaxed max-w-md">
                    {impactImages[activeIdx].body}
                  </p>

                  {/* Progress dots */}
                  <div className="flex items-center gap-2 mt-8">
                    {impactImages.map((_, i) => (
                      <span
                        key={i}
                        className={`block rounded-full transition-all duration-400 ${
                          i === activeIdx
                            ? "w-6 h-1.5 bg-gold"
                            : "w-1.5 h-1.5 bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Our Impact label + stats — always visible */}
              <div className="border-t border-white/10 pt-10">
                <span className="text-gold/60 font-sans text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                  Our Impact
                </span>

                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                  {sustainabilityStats.map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="text-gold/60 mb-3 group-hover:text-gold group-hover:scale-110 transition-all duration-500">
                        {stat.icon}
                      </div>
                      <div className="font-serif text-3xl md:text-4xl text-cream mb-1 tracking-tighter">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-gold/40 text-[9px] uppercase tracking-[0.3em] font-bold group-hover:text-gold/70 transition-colors duration-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 bg-gold hover:bg-cream text-forest-dark px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500"
                >
                  Support Conservation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/plan-a-trip"
                  className="group inline-flex items-center gap-4 border border-cream/20 hover:border-gold text-cream px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500"
                >
                  Travel With Purpose
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* ─── RIGHT COLUMN — image grid, scrolls normally ─── */}
          <div className="lg:col-span-7 relative">
            <StaggerGrid className="grid grid-cols-12 gap-4 auto-rows-min" stagger={0.1}>
              {impactImages.map((img, idx) => (
                <StaggerItem
                  key={idx}
                  className={`${img.span} relative group overflow-hidden rounded-sm`}
                >
                  <div
                    ref={(el) => { imageRefs.current[idx] = el; }}
                    className="relative w-full h-full aspect-square md:aspect-auto md:h-full"
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 transition-colors duration-700 ${
                      idx === activeIdx ? "bg-forest-dark/10" : "bg-forest-dark/40 group-hover:bg-forest-dark/20"
                    }`} />

                    {/* Active indicator */}
                    {idx === activeIdx && (
                      <motion.div
                        layoutId="activeImageBorder"
                        className="absolute inset-0 border-2 border-gold/60"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    )}

                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.span
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold block mb-2"
                      >
                        {img.tag}
                      </motion.span>
                      <motion.h4
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        className="text-cream font-serif text-lg leading-tight"
                      >
                        {img.label}
                      </motion.h4>
                    </div>

                    <div className="absolute inset-0 border border-white/5 group-hover:border-gold/30 transition-colors duration-700" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <motion.div
              style={{ rotate: rotateS }}
              className="absolute -bottom-24 -right-24 w-80 h-80 border border-gold/5 rounded-full pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
