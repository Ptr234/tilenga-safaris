"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1800&q=80",
    region: "Uganda",
    heading: "Wild Luxury",
    sub: "Unforgettable Memories",
    body: "Pearl of Africa — where gorillas, lions, and the Nile converge.",
  },
  {
    image: "https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=1800&q=80",
    region: "Kenya",
    heading: "Iconic Savannah",
    sub: "Epic Encounters",
    body: "The Great Migration. Maasai Mara. Africa at its most magnificent.",
  },
  {
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&q=80",
    region: "Tanzania",
    heading: "Serengeti Awaits",
    sub: "The World's Greatest Safari",
    body: "1.5 million wildebeest. Ngorongoro Crater. Zanzibar's white shores.",
  },
  {
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1800&q=80",
    region: "Rwanda",
    heading: "Meet the Gorillas",
    sub: "A Once-in-a-Lifetime Encounter",
    body: "Face-to-face with mountain gorillas in the misty Virunga Volcanoes.",
  },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const imageVariants: Variants = {
  enter: { scale: 1.12, opacity: 0 },
  active: {
    scale: 1,
    opacity: 1,
    transition: { scale: { duration: 9, ease: "linear" }, opacity: { duration: 1.4, ease: "easeOut" } },
  },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeIn" } },
};

function WordReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`flex flex-wrap justify-center gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
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

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const go = (idx: number) => setCurrent(idx);

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = () => go((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative h-screen h-[100dvh] min-h-[640px] overflow-hidden bg-forest-dark">
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          variants={imageVariants}
          initial="enter"
          animate="active"
          exit="exit"
          className="absolute inset-0"
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      </AnimatePresence>

      {/* Layered overlays — centered cinematic vignette */}
      <div className="absolute inset-0 bg-forest-dark/50 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-forest-dark/40 z-[1]" />

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
            <h1 className="section-heading !text-cream text-5xl md:text-7xl lg:text-[7.5rem] mb-8 leading-[0.85]">
              <WordReveal text={slide.heading} delay={0.2} />
            </h1>

            {/* Italic subtitle */}
            <div className="overflow-hidden mb-8">
              <motion.p
                className="editorial-italic text-2xl md:text-3xl"
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
              className="text-cream/70 font-sans text-base md:text-lg max-w-md mb-12 leading-relaxed"
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

      {/* Prev / Next arrows */}
      <div className="absolute bottom-6 right-8 md:right-16 z-10 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-10 h-10 border border-cream/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors duration-300"
          aria-label="Previous slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          className="w-10 h-10 border border-cream/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors duration-300"
          aria-label="Next slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => go(i)}
            animate={{
              height: i === current ? 28 : 10,
              backgroundColor: i === current ? "#C9A96E" : "rgba(255,255,255,0.25)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-0.5 rounded-full"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

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
