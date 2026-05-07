"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import HeroVideo from "@/components/HeroVideo";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ImageReveal from "@/components/motion/ImageReveal";
import LineReveal from "@/components/motion/LineReveal";
import HorizontalScrollSection from "@/components/motion/HorizontalScrollSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

import Partners from "@/components/Partners";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

import ParallaxSection from "@/components/motion/ParallaxSection";

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    coords: "2.2472° N, 31.4770° E",
    description: "A haven of comfort overlooking the Albert Nile. 26 cottages with private balconies, wildlife encounters, and a world-class chef.",
    image: `${base}/photos/tilengasafarilodge/entrance.png`,
    href: "/lodges/tilenga-safari-lodge",
    tag: "Murchison Falls",
    features: ["26 Luxury Cottages", "Albert Nile Views", "Infinity Pool"]
  },
  {
    name: "Kikorongo Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    coords: "0.0022° S, 30.0125° E",
    description: "Perched at the Equator above Lake George, with sweeping Rwenzori views and the world's largest hippo concentration.",
    image: `${base}/photos/kikorongo_outside.jpg`,
    href: "/lodges/kikorongo-safari-lodge",
    tag: "Queen Elizabeth NP",
    features: ["Equator Position", "Hippo Sanctuary", "Rwenzori Vistas"]
  },
];

const experiences = [
  { 
    title: "Gorilla Tracking", 
    tag: "Primate Encounters",
    description: "Face-to-face with endangered mountain gorillas in the misty highlands of Bwindi Impenetrable Forest. A transformative hour spent in the presence of these gentle giants.", 
    image: `${base}/experinces/gorrila treking.jpg`,
    num: "01",
    location: "Bwindi, Uganda",
    vibe: "Intimate · Rare · Sacred"
  },
  {
    title: "Great Beast Migration",
    tag: "Wildlife Spectacle",
    description: "Witness the world's most spectacular wildlife event as millions of wildebeest and zebra cross the Mara River, braving crocodiles and predators.",
    image: `${base}/Newstock/greatbeastmigration.jpg`,
    num: "02",
    location: "Maasai Mara, Kenya",
    vibe: "Epic · Primal · Raw"
  },
  { 
    title: "Culture Immersion", 
    tag: "Local Heritage",
    description: "Connect with the living heritage and ancient traditions of the iconic Maasai, Batwa, and Karamojong people through authentic community-led encounters.", 
    image: `${base}/experinces/culture emersion.jpg`,
    num: "03",
    location: "East Africa",
    vibe: "Authentic · Human · Deep"
  },
  { 
    title: "Big Five Game Drives", 
    tag: "Classic Safari",
    description: "Expert-guided dawn and dusk drives in search of the legendary African Big Five — Lion, Leopard, Elephant, Rhino, and Buffalo.", 
    image: `${base}/experinces/Game drives.jpg`,
    num: "04",
    location: "Serengeti & Kruger",
    vibe: "Vibrant · Patient · Golden"
  },
  {
    title: "Hot Air Balloon",
    tag: "Aerial Views",
    description: "Soar above the golden plains at sunrise for a breathtaking bird's-eye view of the wild, followed by a champagne breakfast in the bush.",
    image: `${base}/Newstock/Hot Air Balloon.jpg`,
    num: "05",
    location: "Serengeti / Mara",
    vibe: "Silent · Ethereal · Vast"
  },
  { 
    title: "Mountain Climbing", 
    tag: "Adventure",
    description: "Summit the legendary 'Mountains of the Moon' or climb Mt. Kilimanjaro for an epic alpine adventure and panoramic views of the continent.", 
    image: `${base}/experinces/kilimanjaro climbing.jpg`,
    num: "06",
    location: "Rwenzori / Kilimanjaro",
    vibe: "Rugged · Alpine · Triumphant"
  },
  { 
    title: "Zanzibar Beaches", 
    tag: "Coastal Escape",
    description: "Unwind on turquoise shores where spice-scented breezes meet ancient Stone Town culture. The perfect conclusion to any safari adventure.", 
    image: `${base}/experinces/zanzibar beach.jpg`,
    num: "07",
    location: "Zanzibar, Tanzania",
    vibe: "Tranquil · Azure · Spice"
  },
  {
    title: "Boat Safaris",
    tag: "Water Exploration",
    description: "Glide the Albert Nile or Kazinga Channel for incredible hippo, crocodile, and bird sightings from the unique perspective of the water.",
    image: `${base}/experinces/water safari.jpg`,
    num: "08",
    location: "Murchison Falls, Uganda",
    vibe: "Fluid · Serene · Prolific"
  },
  {
    title: "Namibia Desert",
    tag: "Desert Landscapes",
    description: "Explore the towering red dunes of Sossusvlei and the haunting Skeleton Coast in one of the world's oldest and most surreal deserts.",
    image: `${base}/Newstock/zebras.jpg`,
    num: "09",
    location: "Namib Desert, Namibia",
    vibe: "Arid · Surreal · Vast"
  },
  {
    title: "Elephants in Botswana",
    tag: "River Wildlife",
    description: "Navigate the Okavango Delta by mokoro and witness the massive elephant herds of Chobe National Park in a true wilderness paradise.",
    image: `${base}/Newstock/bigelephant.jpg`,
    num: "10",
    location: "Okavango, Botswana",
    vibe: "Lush · Untamed · Primal"
  },
];

const destinations = [
  { name: "Uganda", tag: "Pearl of Africa", description: "Known as the Pearl of Africa, Uganda offers a tapestry of landscapes — from the thundering Murchison Falls to the legendary mountain gorillas of Bwindi.", image: `${base}/gorrilas/gorrilaking.webp`, href: "/destinations/uganda" },
  { name: "Kenya", tag: "Iconic Maasai Mara", description: "Witness the Great Migration and the golden savannahs of the Maasai Mara, home to Africa's most legendary wildlife encounters.", image: `${base}/Newstock/cheetah.jpg`, href: "/destinations/kenya" },
  { name: "Tanzania", tag: "Serengeti & Zanzibar", description: "From the endless plains of the Serengeti to the turquoise waters of Zanzibar, Tanzania is a land of breathtaking contrasts.", image: `${base}/Newstock/Zanzibar Beaches.jpg`, href: "/destinations/tanzania" },
  { name: "Rwanda", tag: "Land of a Thousand Hills", description: "Discover a land of mist-covered volcanoes and rare mountain gorillas in the Heart of Africa.", image: `${base}/gorrilas/gorrilaa.webp`, href: "/destinations/rwanda" },
  { name: "Namibia", tag: "Desert & Dunes", description: "Explore the ancient Namib Desert, where towering red dunes meet the haunting Skeleton Coast.", image: `${base}/Newstock/zebras.jpg`, href: "/destinations/namibia" },
  { name: "Botswana", tag: "Okavango Delta", description: "Glide through the crystal-clear channels of the Okavango Delta, a sanctuary for Africa's most diverse wildlife.", image: `${base}/Newstock/bigelephant.jpg`, href: "/destinations/botswana" },
  { name: "South Africa", tag: "Cape & Kruger", description: "Experience the vibrant culture of Cape Town and the world-class safari circuits of Kruger National Park.", image: `${base}/Newstock/safari.jpg`, href: "/destinations/south-africa" },
];

const stats = [
  { value: "5+", label: "Years of Expertise" },
  { value: "7", label: "Destinations" },
  { value: "2", label: "Luxury Lodges" },
  { value: "500+", label: "Happy Travelers" },
];

const sustainabilityItems = [
  "Locally owned and operated lodges",
  "Community cultural engagement programs",
  "Anti-litter and eco-conservation initiatives",
  "Partnerships with national parks and conservation bodies",
];

export default function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <HeroVideo />

      {/* Stats bar */}
      <section className="bg-forest py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} direction="up" delay={i * 0.1}>
              <p className="font-serif text-4xl md:text-5xl text-gold">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="text-cream/50 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-sans mt-2">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Destinations Section — Vivid Full-Bleed Editorial */}
      <section className="py-14 md:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <FadeIn direction="fade">
                <span className="section-label">The Explorer&apos;s Map</span>
              </FadeIn>
              <h2 className="section-heading">
                Discover <br />
                <span className="italic text-gold lowercase tracking-normal">Africa</span>
              </h2>
            </div>
            <FadeIn direction="up" delay={0.3} className="max-w-xs">
              <p className="text-stone/70 font-sans text-sm leading-relaxed mb-6">
                Curated journeys across East Africa&apos;s most profound landscapes, from mist-covered mountains to sun-drenched savannahs.
              </p>
              <Link href="/destinations" className="text-link-arrow">
                View All Regions
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Full-bleed Immersive Feature Switcher */}
        <div className="relative h-[65vh] md:h-[88vh] overflow-hidden mb-3 md:mb-4">
          {/* Switching Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${activeIdx}`}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0"
            >
              <img
                src={destinations[activeIdx].image}
                alt={destinations[activeIdx].name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Layered gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-forest/15" />

          {/* Content overlay — bottom left */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-14 md:pb-24">
            <div className="max-w-7xl mx-auto w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIdx}`}
                  initial={{ y: 55, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-px bg-gold" />
                    <span className="text-gold text-[9px] uppercase tracking-[0.5em] font-bold">{destinations[activeIdx].tag}</span>
                    <span className="text-white/30 text-[9px] uppercase tracking-widest">0{activeIdx + 1} / 07</span>
                  </div>
                  <h3 className="font-serif text-[18vw] md:text-[12vw] lg:text-[9.5vw] text-cream uppercase tracking-tight leading-none mb-6 -ml-1">
                    {destinations[activeIdx].name}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
                    <p className="text-cream/70 font-sans text-sm md:text-base leading-relaxed max-w-sm">
                      {destinations[activeIdx].description}
                    </p>
                    <Link
                      href={destinations[activeIdx].href}
                      className="shrink-0 group inline-flex items-center gap-3 text-cream hover:text-gold transition-colors duration-300 text-[10px] uppercase tracking-[0.35em] font-bold border-b border-cream/20 pb-2 hover:border-gold"
                    >
                      Explore {destinations[activeIdx].name}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Destination navigator pills — top right */}
          <div className="absolute top-8 md:top-10 right-6 md:right-16 flex flex-col gap-2 z-10">
            {destinations.map((dest, i) => (
              <button
                key={dest.name}
                onClick={() => setActiveIdx(i)}
                className={`text-[8px] uppercase tracking-[0.3em] font-bold py-1 px-3 border transition-all duration-500 text-right whitespace-nowrap ${
                  i === activeIdx
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/15 text-white/35 hover:border-white/50 hover:text-white/70'
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          {/* Gold progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              key={`progress-${activeIdx}`}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 6, ease: 'linear' }}
              className="h-full bg-gold"
            />
          </div>
        </div>

        {/* Vibrant Destination Mosaic */}
        <div className="px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3">
              {destinations.map((dest, i) => (
                <FadeIn key={dest.name} direction="up" delay={0.06 * i}>
                  <Link href={dest.href} className="group block relative overflow-hidden aspect-[3/4] shadow-sm">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    {/* Base dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest/40 to-transparent" />
                    {/* Gold warmth wash on hover */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.12] transition-colors duration-700" />
                    {/* Vivid border reveal */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 transition-all duration-700" />

                    {/* Text */}
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                      <p className="text-gold/70 text-[7px] uppercase tracking-[0.25em] font-bold mb-1 group-hover:text-gold transition-colors duration-500 leading-tight">{dest.tag}</p>
                      <h4 className="font-serif text-sm md:text-base lg:text-lg text-cream uppercase tracking-wider leading-none group-hover:text-gold transition-colors duration-500">{dest.name}</h4>
                    </div>

                    {/* Hover explore chip */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-[7px] uppercase tracking-widest text-gold font-bold bg-forest-dark/80 px-2 py-1">Explore →</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.2} className="text-center mt-14 md:mt-20">
              <Link href="/destinations" className="btn-primary px-10 md:px-14">The Full Collection</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Lodges — Classic Split Editorial */}
      <section className="bg-white relative overflow-hidden">

        {/* Section Header — centered, classic */}
        <div className="py-20 md:py-32 px-6 text-center relative">
          {/* Thin gold ornament top */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-16 h-px bg-gold/30" />
            <span className="text-gold/50 text-[8px] uppercase tracking-[0.6em] font-bold">Uganda</span>
            <span className="w-16 h-px bg-gold/30" />
          </div>
          <FadeIn direction="up">
            <p className="section-label text-gold mb-5">Where You Stay</p>
            <h2 className="font-serif text-5xl md:text-7xl text-forest-dark uppercase tracking-[0.06em] leading-none">
              Our Lodges
            </h2>
            <p className="font-serif italic text-gold/70 text-2xl md:text-3xl mt-3 tracking-normal">in Uganda</p>
          </FadeIn>
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className="w-10 h-px bg-gold/25" />
            <span className="w-1.5 h-1.5 bg-gold/40 rotate-45 inline-block" />
            <span className="w-10 h-px bg-gold/25" />
          </div>
          <FadeIn direction="up" delay={0.2} className="max-w-md mx-auto mt-8">
            <p className="text-stone/55 font-sans text-sm leading-relaxed">
              Each lodge sits at the gateway of Uganda&apos;s most spectacular national parks —
              designed for comfort, wildlife, and that rare sense of being completely away.
            </p>
          </FadeIn>
        </div>

        {/* Lodge 01 — Tilenga: image left (dark forest), text right (white) */}
        <div className="grid md:grid-cols-2 border-t border-stone/10">

          {/* Dark image panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative min-h-[70vh] md:min-h-[88vh] overflow-hidden group"
          >
            <img
              src={lodges[0].image}
              alt={lodges[0].name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[3500ms] ease-out"
            />
            {/* Rich dark overlay — the "dark forest" side */}
            <div className="absolute inset-0 bg-forest-dark/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />

            {/* Watermark numeral */}
            <div className="absolute top-8 left-8 select-none pointer-events-none">
              <span className="font-serif text-[9rem] md:text-[13rem] leading-none text-cream/[0.05]">01</span>
            </div>

            {/* Tag */}
            <div className="absolute top-10 right-10">
              <span className="text-gold/60 text-[8px] uppercase tracking-[0.5em] font-bold border border-gold/20 px-3 py-1.5">
                {lodges[0].tag}
              </span>
            </div>

            {/* Bottom content on image */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              {/* Thumbnails strip */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {[
                  `${base}/photos/tilengasafarilodge/pool.png`,
                  `${base}/photos/tilengasafarilodge/cottage1.png`,
                  `${base}/photos/tilengasafarilodge/insideview.png`,
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden aspect-[4/3] border border-white/10 group/thumb cursor-pointer"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-forest-dark/30 group-hover/thumb:bg-transparent transition-colors duration-500" />
                  </motion.div>
                ))}
              </div>

              {/* Coordinates */}
              <p className="font-mono text-cream/30 text-[9px] tracking-[0.35em] uppercase">{lodges[0].coords}</p>
            </div>
          </motion.div>

          {/* White content panel */}
          <div className="bg-white flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16 md:py-20 border-l border-stone/10">
            <FadeIn direction="right">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-gold" />
                <span className="text-gold text-[10px] uppercase tracking-[0.45em] font-bold">Murchison Falls</span>
              </div>

              {/* Name */}
              <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest-dark uppercase tracking-[0.05em] leading-[0.95] mb-2">
                Tilenga
              </h3>
              <p className="font-serif italic text-gold text-2xl md:text-3xl tracking-normal">Safari Lodge</p>

              {/* Gold rule */}
              <div className="w-14 h-px bg-gold mt-8 mb-8" />

              {/* Description */}
              <p className="text-stone-dark font-sans text-[15px] leading-relaxed mb-10 max-w-sm">
                {lodges[0].description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-4 mb-12">
                {lodges[0].features.map((f) => (
                  <div key={f} className="flex items-center gap-4 group/feat cursor-default">
                    <span className="w-5 h-px bg-gold group-hover/feat:w-9 transition-all duration-400" />
                    <span className="text-stone-dark text-[11px] uppercase tracking-[0.3em] font-bold group-hover/feat:text-forest-dark transition-colors duration-300">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={lodges[0].href}
                className="group/cta self-start inline-flex items-center gap-5 bg-forest-dark hover:bg-gold px-8 py-4 transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream group-hover/cta:text-forest-dark transition-colors duration-400">
                  Enter Sanctuary
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold group-hover/cta:text-forest-dark group-hover/cta:translate-x-1 transition-all duration-400">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Lodge 02 — Kikorongo: text left (white), image right (dark forest) */}
        <div className="grid md:grid-cols-2 border-t border-stone/10">

          {/* White content panel */}
          <div className="bg-white flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16 md:py-20 order-2 md:order-1 border-r border-stone/10">
            <FadeIn direction="left">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-gold" />
                <span className="text-gold text-[10px] uppercase tracking-[0.45em] font-bold">Queen Elizabeth NP</span>
              </div>

              {/* Name */}
              <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest-dark uppercase tracking-[0.05em] leading-[0.95] mb-2">
                Kikorongo
              </h3>
              <p className="font-serif italic text-gold text-2xl md:text-3xl tracking-normal">Safari Lodge</p>

              {/* Gold rule */}
              <div className="w-14 h-px bg-gold mt-8 mb-8" />

              {/* Description */}
              <p className="text-stone-dark font-sans text-[15px] leading-relaxed mb-10 max-w-sm">
                {lodges[1].description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-4 mb-12">
                {lodges[1].features.map((f) => (
                  <div key={f} className="flex items-center gap-4 group/feat cursor-default">
                    <span className="w-5 h-px bg-gold group-hover/feat:w-9 transition-all duration-400" />
                    <span className="text-stone-dark text-[11px] uppercase tracking-[0.3em] font-bold group-hover/feat:text-forest-dark transition-colors duration-300">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={lodges[1].href}
                className="group/cta self-start inline-flex items-center gap-5 bg-forest-dark hover:bg-gold px-8 py-4 transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream group-hover/cta:text-forest-dark transition-colors duration-400">
                  Enter Sanctuary
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold group-hover/cta:text-forest-dark group-hover/cta:translate-x-1 transition-all duration-400">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Dark image panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative min-h-[70vh] md:min-h-[88vh] overflow-hidden group order-1 md:order-2"
          >
            <img
              src={lodges[1].image}
              alt={lodges[1].name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[3500ms] ease-out"
            />
            <div className="absolute inset-0 bg-forest-dark/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />

            {/* Watermark numeral */}
            <div className="absolute top-8 right-8 select-none pointer-events-none text-right">
              <span className="font-serif text-[9rem] md:text-[13rem] leading-none text-cream/[0.05]">02</span>
            </div>

            {/* Tag */}
            <div className="absolute top-10 left-10">
              <span className="text-gold/60 text-[8px] uppercase tracking-[0.5em] font-bold border border-gold/20 px-3 py-1.5">
                {lodges[1].tag}
              </span>
            </div>

            {/* Bottom content on image */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <div className="grid grid-cols-3 gap-2 mb-8">
                {[
                  `${base}/photos/kikorongo_room1.jpg`,
                  `${base}/photos/kikorongo_cottage1.jpg`,
                  `${base}/photos/kikorongo_fireplace.jpg`,
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden aspect-[4/3] border border-white/10 group/thumb cursor-pointer"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-forest-dark/30 group-hover/thumb:bg-transparent transition-colors duration-500" />
                  </motion.div>
                ))}
              </div>
              <p className="font-mono text-cream/30 text-[9px] tracking-[0.35em] uppercase">{lodges[1].coords}</p>
            </div>
          </motion.div>

        </div>

        {/* Classic footer rule */}
        <div className="border-t border-stone/10 bg-white py-10 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="w-4 h-px bg-gold/40" />
              <span className="text-stone/35 text-[9px] uppercase tracking-[0.5em] font-bold">Two Properties · One Standard of Excellence</span>
              <span className="w-4 h-px bg-gold/40" />
            </div>
            <Link href="/lodges" className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] font-bold text-forest-dark hover:text-gold transition-colors duration-300 border-b border-forest-dark/15 pb-1 hover:border-gold">
              View All Properties
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

      </section>

      {/* 03. The Experience Filmstrip — Immersive Desktop Horizontal Section */}
      <section id="experiences" className="hidden lg:block bg-[#0a150f] py-20">
        <div className="max-w-6xl mx-auto px-6 mb-20">
           <FadeIn direction="fade"><p className="section-label mb-3">The Selection</p></FadeIn>
           <LineReveal
              lines={["Extraordinary Experiences"]}
              delay={0.1}
              lineClassName="font-serif text-5xl md:text-7xl text-cream uppercase tracking-[0.1em]"
           />
        </div>

        <HorizontalScrollSection scrollHeight="1000vh" className="items-stretch">
          <div className="flex h-full px-24 gap-32">
            
            {/* Intro Slide */}
            <div className="min-w-[40vw] flex flex-col justify-center border-r border-white/5 pr-32">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6 block">Filmstrip 01</span>
              <h2 className="font-serif text-8xl text-cream leading-[0.9] uppercase tracking-tighter mb-10">
                The <br /><span className="text-gold italic">Core</span> <br />Canon
              </h2>
              <div className="w-20 h-px bg-gold/30 mb-10" />
              <p className="text-cream/40 max-w-sm font-sans text-[15px] leading-relaxed tracking-wide">
                Scroll horizontally to traverse our most requested and rare African encounters. Each represents a unique chapter in your Tilenga story.
              </p>
            </div>

            {experiences.map((exp) => (
              <div key={exp.title} className="min-w-[80vw] h-full relative group flex items-center justify-center py-20">
                
                {/* Background Layered Image */}
                <div className="absolute inset-y-32 inset-x-0 overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-[2000ms] ease-out group-hover:scale-105 opacity-40 group-hover:opacity-60" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a150f] via-transparent to-[#0a150f]" />
                </div>
                
                {/* Content Panel */}
                <div className="relative z-10 w-full max-w-6xl grid grid-cols-12 gap-10 items-end">
                   
                   {/* Card Image */}
                   <div className="col-span-7">
                      <ImageReveal direction="bottom" delay={0.2}>
                         <div className="film-frame aspect-[16/10] shadow-2xl overflow-hidden group-hover:border-gold/30 transition-colors duration-700">
                            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                         </div>
                      </ImageReveal>
                   </div>

                   {/* Text Content */}
                   <div className="col-span-5 pb-12">
                      <FadeIn direction="up">
                        <span className="text-gold font-serif italic text-4xl mb-6 block">{exp.num}</span>
                        <h3 className="font-serif text-6xl text-cream uppercase tracking-wider mb-8 leading-[0.9]">{exp.title}</h3>
                        
                        <div className="flex flex-col gap-6 mb-12">
                           <div className="flex items-center gap-4">
                              <div className="w-8 h-px bg-gold" />
                              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">{exp.tag}</span>
                           </div>
                           <p className="text-cream/70 font-sans text-base leading-relaxed max-w-md">
                             {exp.description}
                           </p>
                           <div className="flex flex-wrap gap-4 pt-4">
                              <span className="text-cream/30 text-[9px] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1.5">{exp.vibe}</span>
                           </div>
                        </div>

                        <MagneticButton className="inline-block">
                           <Link href="/plan-a-trip" className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4 hover:gap-6 transition-all">
                              Inquire About This <span className="text-lg">→</span>
                           </Link>
                        </MagneticButton>
                      </FadeIn>
                   </div>
                </div>

                {/* Vertical Sidebar Info */}
                <div className="absolute top-40 right-0">
                   <span className="text-white/10 text-9xl font-serif select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
                      {exp.location.split(',')[0]}
                   </span>
                </div>
                <div className="absolute bottom-40 right-12 z-20">
                   <span className="text-gold/40 text-[10px] uppercase tracking-[0.5em] font-bold vertical-text">{exp.location}</span>
                </div>
              </div>
            ))}

          </div>
        </HorizontalScrollSection>
      </section>

      {/* Mobile / Tablet Vertical Editorial Feed */}
      <section className="lg:hidden bg-forest px-6 py-24" id="experiences-mobile">
        <div className="max-w-2xl mx-auto">
          <FadeIn direction="up" className="text-center mb-24">
            <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold mb-6 block">The Collection</span>
            <h2 className="font-serif text-5xl text-cream uppercase tracking-tight">Extraordinary <br /><em className="italic text-gold">Experiences</em></h2>
          </FadeIn>

          <StaggerGrid className="space-y-32" stagger={0.2}>
            {experiences.map((exp) => (
              <StaggerItem key={exp.title} className="space-y-10 group">
                 <div className="relative aspect-[4/5] overflow-hidden film-frame shadow-2xl">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-forest/20" />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                       <span className="font-serif italic text-gold text-5xl leading-none">{exp.num}</span>
                       <span className="w-10 h-px bg-gold/50" />
                    </div>
                    <div className="absolute bottom-6 right-6">
                       <span className="text-cream/50 text-[9px] uppercase tracking-[0.3em] font-bold vertical-text">{exp.location}</span>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-6 h-px bg-gold/40" />
                       <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold block">{exp.tag}</span>
                    </div>
                    <h3 className="font-serif text-4xl text-cream uppercase tracking-wider leading-tight">{exp.title}</h3>
                    <p className="text-cream/60 font-sans leading-relaxed text-[15px]">
                      {exp.description}
                    </p>
                    <div className="pt-4 flex flex-col gap-6">
                       <span className="text-cream/30 text-[9px] uppercase tracking-[0.2em] font-bold italic">{exp.vibe}</span>
                       <Link href="/plan-a-trip" className="btn-ghost text-center py-4">Inquire About This</Link>
                    </div>
                 </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Redesigned Spirit of Timeless Safari Section */}
      <ParallaxSection
        imageUrl={`${base}/Newstock/splendifd.jpg`}
        className="py-32 md:py-56 px-6 md:px-16"
        overlayClassName="bg-gradient-to-b from-forest-dark/80 via-forest-dark/40 to-forest-dark/90"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative z-10">
              <FadeIn direction="up">
                <span className="inline-block text-gold text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold mb-6 border-b border-gold/30 pb-2">
                  Heritage of Discovery
                </span>
                
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.9] mb-10">
                  <SplitText text="The Spirit of" by="word" delay={0.2} /> <br />
                  <span className="italic text-gold block mt-4">
                    <SplitText text="Timeless Safari" by="word" delay={0.5} />
                  </span>
                </h2>

                <div className="max-w-md space-y-8">
                  <p className="text-cream/70 font-sans text-lg md:text-xl leading-relaxed">
                    Tilenga Safaris is a legacy of discovery rooted in the profound beauty of the East African landscape. We invite you to experience a &ldquo;Golden Age&rdquo; of travel.
                  </p>
                  
                  <div className="flex flex-wrap gap-8 items-center pt-6">
                    <MagneticButton>
                      <Link href="/destinations" className="btn-primary px-12 py-5 bg-gold text-forest-dark border-none hover:bg-cream transition-colors duration-500">
                        Explore Journeys
                      </Link>
                    </MagneticButton>
                    
                    <Link href="/about" className="group flex items-center gap-4 text-cream/60 hover:text-gold transition-colors duration-300 uppercase text-[10px] tracking-[0.3em] font-bold">
                      Our Story
                      <span className="w-8 h-px bg-cream/30 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="relative hidden lg:block">
              {/* Layered Floating Imagery */}
              <div className="relative w-full aspect-[4/5] max-w-lg ml-auto">
                <ImageReveal direction="right" delay={0.4}>
                  <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-white/10 aspect-[3/4]">
                    <img
                      src={`${base}/Newstock/elephantcars.jpg`}
                      className="w-full h-full object-cover"
                      alt="Safari Experience"
                    />
                  </div>
                </ImageReveal>
                
                {/* Floating secondary image */}
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-16 -left-16 w-2/3 aspect-square z-20 backdrop-blur-md p-2 bg-white/5 border border-white/10 rounded-sm shadow-2xl"
                >
                  <img
                    src={`${base}/Newstock/lioness.jpg`}
                    className="w-full h-full object-cover rounded-sm"
                    alt="Wildlife Detail"
                  />
                </motion.div>

                {/* Decorative rotation text */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 border border-gold/20 rounded-full flex items-center justify-center"
                >
                   <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text className="text-[7px] uppercase tracking-[0.2em] fill-gold/40 font-bold">
                        <textPath xlinkHref="#circlePath">Tilenga Safaris • Timeless Discovery • Tilenga Safaris • Timeless Discovery •</textPath>
                      </text>
                   </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Redesigned Sustainability Section */}
      <section className="py-24 md:py-48 px-6 md:px-16 bg-[#0a1a12] relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img src={`${base}/Newstock/Boat Safaris08Boat Safaris.jpg`} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-[#0a1a12]/75" />
        </div>
        {/* Subtle decorative background text */}
        <div className="absolute top-20 left-10 opacity-[0.02] pointer-events-none select-none">
          <span className="text-[20vw] font-serif text-cream uppercase leading-none">Respect</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 relative">
                 <div className="space-y-4">
                    <ImageReveal direction="top" delay={0.1}>
                       <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-white/5">
                          <img src={`${base}/Newstock/touristsmovinginforest.jpg`} className="w-full h-full object-cover" alt="Conservation" />
                       </div>
                    </ImageReveal>
                    <ImageReveal direction="left" delay={0.3}>
                       <div className="aspect-square rounded-sm overflow-hidden shadow-2xl border border-white/5">
                          <img src={`${base}/Newstock/mothernbabyelephant.jpg`} className="w-full h-full object-cover" alt="Community" />
                       </div>
                    </ImageReveal>
                 </div>
                 <div className="space-y-4 pt-12">
                    <ImageReveal direction="right" delay={0.2}>
                       <div className="aspect-square rounded-sm overflow-hidden shadow-2xl border border-white/5">
                          <img src={`${base}/Newstock/bufallo.jpg`} className="w-full h-full object-cover" alt="Wildlife" />
                       </div>
                    </ImageReveal>
                    <ImageReveal direction="bottom" delay={0.4}>
                       <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-white/5">
                          <img src={`${base}/Newstock/girrafe.jpg`} className="w-full h-full object-cover" alt="Sustainability" />
                       </div>
                    </ImageReveal>
                 </div>

                 {/* Floating badge */}
                 <motion.div 
                   whileHover={{ scale: 1.05, rotate: 5 }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gold p-8 rounded-full shadow-2xl border-4 border-[#0a1a12] hidden md:flex flex-col items-center justify-center text-forest-dark"
                 >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Guaranteed</span>
                    <span className="font-serif text-2xl font-bold italic">Ethical</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Travel</span>
                 </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <FadeIn direction="right">
                <span className="section-label text-gold/80">Responsible Travel</span>
                <h2 className="font-serif text-5xl md:text-6xl text-cream leading-[1.1] mb-8">
                  <SplitText text="A Commitment to" by="word" /> <br />
                  <span className="italic text-gold">Communities & Conservation</span>
                </h2>
                
                <div className="w-20 h-px bg-gold/30 mb-10" />
                
                <div className="space-y-6 text-cream/60 font-sans text-lg leading-relaxed mb-12">
                  <p>
                    Sustainability is woven into how we operate. We work closely with local communities,
                    support indigenous culture preservation, and partner with conservation-focused lodges across East Africa.
                  </p>
                  <p>
                    When you travel with Tilenga Safaris, your journey contributes to the livelihoods
                    of local guides, hospitality staff, and community artisans.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {sustainabilityItems.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 p-4 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="text-gold text-lg group-hover:scale-110 transition-transform duration-300">✦</span>
                      <span className="text-cream/80 text-sm font-sans leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <MagneticButton>
                  <Link href="/about" className="btn-primary px-12 bg-cream text-forest-dark border-none hover:bg-gold transition-colors duration-500">
                    Learn Our Philosophy
                  </Link>
                </MagneticButton>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Partners />

      {/* Testimonials */}
      <section className="relative z-0 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${base}/Newstock/wildanimals.jpg`}
            alt=""
            className="w-full h-full object-cover object-center scale-[1.06]"
          />
          <div className="absolute inset-0 bg-[#050f08]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050f08] via-transparent to-[#050f08]/70" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative z-10 w-full pt-20 pb-20 md:pt-52 md:pb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-24 items-start">
              <FadeIn direction="left" className="md:pt-4">
                <p className="section-label !text-gold/60 mb-6">Verified Traveller Reviews</p>
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream uppercase tracking-[0.05em] leading-[1.05] mb-8">
                  What Our<br />Travellers<br />Say
                </h2>
                <div className="w-16 h-px bg-gold/50 mb-8" />
                <p className="font-sans text-cream/50 text-sm leading-relaxed mb-10">
                  Real experiences shared by guests who explored Uganda with us — unedited, unsponsored.
                </p>
                <div className="inline-flex items-center gap-3 border border-gold/25 px-5 py-3">
                  <div className="flex gap-[3px]">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <div className="w-px h-4 bg-gold/25" />
                  <span className="font-sans text-gold/60 text-[10px] tracking-[0.3em] uppercase">Tripadvisor</span>
                </div>
              </FadeIn>

              <StaggerGrid className="flex flex-col gap-0">
                {[
                  {
                    quote: "From the beginning, Tilenga Safaris handled every detail with precision and care. They booked us into high-end accommodations with the best views and paired us with a top-tier safari guide. When our original agency failed to plan anything for our arrival day, Tilenga Safaris immediately stepped in and went above and beyond — in every sense of the word.",
                    name: "Faycal A.",
                    date: "12 months ago",
                    tag: "Uganda Circuit",
                  },
                  {
                    quote: "Coming face-to-face with a silverback and his family in Bwindi Impenetrable Forest was surreal. Tilenga handled everything seamlessly — permits, accommodations, transportation. We felt safe, well cared for, and truly immersed in Uganda's wild beauty. If you're considering gorilla trekking, look no further.",
                    name: "Martina N.",
                    date: "1 year ago",
                    tag: "Gorilla Trekking",
                  },
                ].map((t, i) => (
                  <StaggerItem key={i}>
                    <div className={`relative group py-10 md:py-12 px-0 ${i === 0 ? "border-b border-gold/20" : ""}`}>
                      <span className="absolute right-0 top-6 font-serif text-[9rem] leading-none text-gold/[0.06] select-none pointer-events-none group-hover:text-gold/[0.1] transition-colors duration-700">
                        &rdquo;
                      </span>
                      <span className="inline-block font-sans text-[9px] tracking-[0.35em] uppercase text-gold/60 border border-gold/20 px-3 py-1 mb-6">
                        {t.tag}
                      </span>
                      <p className="font-serif italic text-cream/80 text-base md:text-2xl lg:text-[1.6rem] leading-[1.7] mb-6 md:mb-8 group-hover:text-cream transition-colors duration-500 relative z-10">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-px bg-gold/50" />
                        <div>
                          <p className="font-sans text-cream text-xs font-semibold tracking-[0.2em] uppercase">{t.name}</p>
                          <p className="font-sans text-cream/35 text-[10px] tracking-[0.2em] uppercase mt-0.5">{t.date}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>
    </>
  );
}
