"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=80",
    label: "Uganda",
    heading: "Wild Luxury.",
    sub: "Unforgettable Memories.",
  },
  {
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1800&q=80",
    label: "Kenya",
    heading: "Iconic Savannah.",
    sub: "Epic Encounters.",
  },
  {
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&q=80",
    label: "Tanzania",
    heading: "Serengeti Awaits.",
    sub: "The World's Greatest Safari.",
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1800&q=80",
    label: "Rwanda",
    heading: "Mountain Gorillas.",
    sub: "A Once-in-a-Lifetime Encounter.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.4 } },
};

const imageVariants = {
  enter: { scale: 1.08, opacity: 0 },
  active: {
    scale: 1,
    opacity: 1,
    transition: { scale: { duration: 8, ease: "linear" }, opacity: { duration: 1.2 } },
  },
  exit: { opacity: 0, transition: { duration: 0.8 } },
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          variants={imageVariants}
          initial="enter"
          animate="active"
          exit="exit"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/50 via-forest-dark/10 to-forest-dark/85 z-[1]" />

      {/* Animated content */}
      <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Label */}
            <motion.span
              custom={0}
              variants={textVariants}
              className="section-label text-gold mb-5 block"
            >
              {slide.label}
            </motion.span>

            {/* Heading */}
            <motion.h1
              custom={0.15}
              variants={textVariants}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-3"
            >
              {slide.heading}
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={0.3}
              variants={textVariants}
              className="font-serif italic text-2xl md:text-3xl text-gold/90 mb-8"
            >
              {slide.sub}
            </motion.p>

            {/* Body */}
            <motion.p
              custom={0.45}
              variants={textVariants}
              className="text-cream/70 font-sans text-sm md:text-base max-w-xl mb-10"
            >
              At Tilenga Safaris, every journey is crafted to create unforgettable memories
              — rooted in Africa&apos;s wild beauty, culture, and community.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.6}
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/plan-a-trip" className="btn-primary inline-block">
                  Plan Your Safari
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/destinations" className="btn-ghost inline-block">
                  Explore Destinations
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 items-center">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            animate={{
              width: i === current ? 40 : 16,
              backgroundColor: i === current ? "#C9A96E" : "rgba(255,255,255,0.35)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-0.5 rounded-full"
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Destination name — bottom left */}
      <motion.div
        className="absolute bottom-8 left-8 z-10 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-gold" />
          <span className="text-cream/50 text-xs uppercase tracking-[0.3em] font-sans">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-cream/40 text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], originY: "top" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
