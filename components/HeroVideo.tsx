"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const slides = [
  {
    region: "Uganda",
    heading: "Wild Luxury",
    sub: "Unforgettable Memories",
    body: "Pearl of Africa — where gorillas, lions, and the Nile converge.",
  },
  {
    region: "Kenya",
    heading: "Iconic Savannah",
    sub: "Epic Encounters",
    body: "The Great Migration. Maasai Mara. Africa at its most magnificent.",
  },
  {
    region: "Tanzania",
    heading: "Serengeti Awaits",
    sub: "The World's Greatest Safari",
    body: "1.5 million wildebeest. Ngorongoro Crater. Zanzibar's white shores.",
  },
  {
    region: "Rwanda",
    heading: "Meet the Gorillas",
    sub: "A Once-in-a-Lifetime Encounter",
    body: "Face-to-face with mountain gorillas in the misty Virunga Volcanoes.",
  },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

function WordReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`flex flex-wrap justify-center gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={`${text}-${i}`} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.1, ease: EASE_OUT }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function HeroVideo() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[100dvh] min-h-[640px] overflow-hidden bg-forest-dark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src={`${base}/homevideo/tilenga.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle gradient to ensure text readability without blurring the video */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Content — centered */}
      <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-6 md:px-16 pt-20 md:pt-28 max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <div key={`content-${current}`} className="flex flex-col items-center">
            {/* Region label */}
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            >
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.45em] font-sans">{slide.region}</span>
              <div className="w-8 h-px bg-gold" />
            </motion.div>

            {/* Main heading — word-by-word reveal */}
            <h1 className="section-heading !text-cream text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] mb-5 md:mb-8 leading-[0.9] md:leading-[0.85]">
              <WordReveal text={slide.heading} delay={0.2} />
            </h1>

            {/* Italic subtitle */}
            <div className="overflow-hidden mb-5 md:mb-8">
              <motion.p
                className="editorial-italic text-xl sm:text-2xl md:text-3xl text-gold"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE_OUT }}
              >
                {slide.sub}
              </motion.p>
            </div>

            {/* Body */}
            <motion.p
              className="text-cream/70 font-sans text-sm md:text-lg max-w-md mb-8 md:mb-12 leading-relaxed h-[3em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            >
              {slide.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: EASE_OUT }}
            >
              <Link href="/plan-a-trip" className="btn-primary">Plan Your Safari</Link>
              <Link href="/destinations" className="btn-ghost">Explore Destinations</Link>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Slide counter — bottom left */}
      <motion.div
        className="absolute bottom-8 left-8 md:left-20 z-10 hidden md:flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-serif text-gold text-2xl">{String(current + 1).padStart(2, "0")}</span>
        <div className="w-px h-6 bg-cream/20" />
        <span className="text-cream/30 text-xs font-sans">{String(slides.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent"
          style={{ originY: 0 }}
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
