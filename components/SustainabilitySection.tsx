"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const images = [
  {
    src: `${base}/Newstock/mothernbabyelephant.jpg`,
    title: "Wildlife Conservation",
    description: "Protecting Uganda's most endangered species across 50,000 acres of vital habitat.",
  },
  {
    src: `${base}/experinces/culture emersion.jpg`,
    title: "Local Communities",
    description: "Empowering the Batwa, Karamojong, and lakeside communities through education, healthcare, and dignified livelihoods.",
  },
  {
    src: `${base}/Newstock/touristsmovinginforest.jpg`,
    title: "Eco-Luxury Experience",
    description: "Every journey is designed to tread lightly — low-impact transport, solar lodges, and zero single-use waste.",
  },
  {
    src: `${base}/Newstock/Queen Elizabeth NP.jpg`,
    title: "African Landscapes",
    description: "From the shores of Lake George to the Albertine Rift — preserving the corridors that sustain life.",
  },
  {
    src: `${base}/Newstock/wildanimals.jpg`,
    title: "Nature Restoration",
    description: "Active reforestation, anti-poaching programmes, and biodiversity monitoring funded by every guest stay.",
  },
  {
    src: `${base}/experinces/gorrila treking.jpg`,
    title: "Primate Conservation",
    description: "Uganda holds over 50% of the world's mountain gorillas. A portion of every trek fee protects them.",
  },
];

export default function SustainabilitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Subtle parallax drift — reduced so text never drifts out of view
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "20px"]);
  // Progress bar width
  const barScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b1a10]"
    >
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full bg-gold/[0.07] blur-[120px]" />
        <div className="absolute bottom-[20%] left-[12%] w-56 h-56 rounded-full bg-forest/[0.4] blur-[80px]" />
        <div className="absolute top-[55%] left-[5%] w-40 h-40 rounded-full bg-gold/[0.05] blur-[60px]" />
      </div>

      <div className="flex items-start w-full">

        {/* ── LEFT PANEL — sticky ── */}
        <div className="hidden lg:block w-[38%] shrink-0 sticky top-0 h-screen overflow-hidden pl-10 xl:pl-20 pr-6">
          <motion.div style={{ y: textY }} className="w-full h-full flex flex-col justify-center py-12">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-5 h-px bg-gold/50" />
              <span className="font-sans text-[9px] uppercase tracking-[0.55em] font-bold text-gold/70">
                Tilenga Safaris
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-cream leading-none mb-5">
              <span className="block text-[clamp(2.4rem,3.8vw,4.4rem)] uppercase tracking-tight">
                Sustainability
              </span>
              <span className="block font-serif italic text-[clamp(1.7rem,2.7vw,3.1rem)] text-gold mt-1">
                &amp; Conservation
              </span>
            </h2>

            {/* Rule */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-gold/30" />
              <div className="w-1 h-1 rotate-45 bg-gold/30" />
            </div>

            {/* Body */}
            <p className="font-sans text-cream/50 text-sm md:text-base leading-[1.75] max-w-sm mb-7">
              Protecting landscapes, empowering communities, and preserving wildlife through
              responsible safari travel.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold font-sans text-[11px] font-bold uppercase tracking-[0.25em] px-8 py-4 transition-all duration-500 mb-8"
            >
              Discover Our Impact
              <svg
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Scroll progress bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans text-[8px] uppercase tracking-[0.45em] text-cream/20 font-bold">
                  Scroll to explore
                </span>
                <span className="font-sans text-[8px] uppercase tracking-[0.45em] text-gold/50 font-bold">
                  {images.length} Stories
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: barScaleX, transformOrigin: "left" }}
                  className="h-full bg-gold rounded-full"
                />
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── RIGHT PANEL — scrolling image gallery ── */}
        <div
          ref={rightRef}
          className="w-full lg:w-[62%] pl-6 pr-10 xl:pr-20 pt-16 md:pt-24 pb-8 space-y-8 md:space-y-10"
        >
          {/* Mobile heading */}
          <div className="lg:hidden mb-12 text-center">
            <span className="font-sans text-[9px] uppercase tracking-[0.55em] font-bold text-gold/70 block mb-4">
              Tilenga Safaris
            </span>
            <h2 className="font-serif text-cream text-4xl leading-none uppercase tracking-tight mb-2">
              Sustainability
            </h2>
            <p className="font-serif italic text-gold text-2xl">&amp; Conservation</p>
            <p className="font-sans text-cream/50 text-sm leading-relaxed mt-6 max-w-md mx-auto">
              Protecting landscapes, empowering communities, and preserving wildlife through responsible safari travel.
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 mt-8 border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold font-sans text-[10px] font-bold uppercase tracking-[0.25em] px-7 py-3.5 transition-all duration-500">
              Discover Our Impact
            </Link>
          </div>

          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.05,
              }}
              viewport={{ once: true, margin: "-80px" }}
              // Outer frame — dark mat border effect
              className="p-[6px] rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_4px_16px_rgba(0,0,0,0.3)] border border-gold/20 bg-[#0e1f16]"
            >
              {/* Inner image container */}
              <div className="relative rounded-[18px] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-[58vw] md:h-[46vw] lg:h-[42vw] max-h-[620px] object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04]"
                />

                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f0f]/80 via-[#0f1f0f]/15 to-transparent" />

                {/* Index number — watermark */}
                <div className="absolute top-5 left-6 select-none pointer-events-none">
                  <span className="font-serif text-[5rem] leading-none text-white/[0.07]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Tag — top right */}
                <div className="absolute top-5 right-5">
                  <span className="font-sans text-[8px] uppercase tracking-[0.4em] font-bold text-[#a68a60] border border-[#a68a60]/30 bg-[#0f1f0f]/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Conservation
                  </span>
                </div>

                {/* Bottom text block */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-4 h-px bg-[#a68a60]" />
                      <span className="font-sans text-[8px] uppercase tracking-[0.45em] font-bold text-[#a68a60]">
                        Impact Story
                      </span>
                    </div>
                    <h3 className="font-serif text-cream text-xl md:text-2xl leading-tight mb-2">
                      {img.title}
                    </h3>
                    <p className="font-sans text-cream/60 text-sm leading-relaxed max-w-md">
                      {img.description}
                    </p>
                  </motion.div>
                </div>

                {/* Hover gold border reveal */}
                <div className="absolute inset-0 rounded-[18px] border border-transparent group-hover:border-[#a68a60]/40 transition-colors duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
