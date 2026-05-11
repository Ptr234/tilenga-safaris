"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import HeroVideo from "@/components/HeroVideo";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import LineReveal from "@/components/motion/LineReveal";
import HorizontalScrollSection from "@/components/motion/HorizontalScrollSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

import Partners from "@/components/Partners";
import SustainabilitySection from "@/components/SustainabilitySection";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

import ParallaxSection from "@/components/motion/ParallaxSection";

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    coords: "2.2472° N, 31.4770° E",
    description: "A haven of comfort overlooking the Albert Nile. 26 cottages with private balconies, wildlife encounters, and a world-class chef.",
    image: `${base}/photos/tilengasafarilodge/insideview.png`,
    href: "/lodges/tilenga-safari-lodge",
    bookHref: "https://tilengasafarilodge.com/plan-trip/",
    tag: "Murchison Falls",
    features: ["26 Luxury Cottages", "Albert Nile Views", "Infinity Pool"]
  },
  {
    name: "Kikorongo Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    coords: "0.0022° S, 30.0125° E",
    description: "Perched at the Equator above Lake George, with sweeping Rwenzori views and the world's largest hippo concentration.",
    image: `${base}/kikorongoimages/IMG_3000.jpg`,
    href: "/lodges/kikorongo-safari-lodge",
    bookHref: "https://kikorongosafarilodge.com/availability/",
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
    image: `${base}/Newstock/Namibia Desert.jpg`,
    num: "09",
    location: "Namib Desert, Namibia",
    vibe: "Arid · Surreal · Vast"
  },
  {
    title: "Elephants in Botswana",
    tag: "River Wildlife",
    description: "Navigate the Okavango Delta by mokoro and witness the massive elephant herds of Chobe National Park in a true wilderness paradise.",
    image: `${base}/Newstock/Elephantfamily.jpg`,
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

const spiritCards = [
  { 
    title: "The Cheetah's Speed", 
    tag: "Agility", 
    image: `${base}/Newstock/cheetah.jpg`,
    description: "Witness the raw power and grace of the fastest land animal in its natural habitat."
  },
  { 
    title: "Gentle Giants", 
    tag: "Serenity", 
    image: `${base}/Newstock/girrafe.jpg`,
    description: "Towering above the acacia trees, giraffes embody the peaceful majesty of the savannah."
  },
  { 
    title: "Aerial Vistas", 
    tag: "Perspective", 
    image: `${base}/Newstock/Hot Air Balloon.jpg`,
    description: "Soar above the plains at dawn for a perspective that only the birds usually enjoy."
  },
  { 
    title: "Wild Patterns", 
    tag: "Rhythm", 
    image: `${base}/Newstock/zebras.jpg`,
    description: "The rhythmic beauty of a zebra herd is one of nature's most iconic visual symphonies."
  },
  { 
    title: "Primal Kinship", 
    tag: "Connection", 
    image: `${base}/Newstock/Gorrillahd.jpg`,
    description: "A face-to-face encounter with a mountain gorilla is a profound moment of shared ancestry."
  }
];


export default function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeBookingLodge, setActiveBookingLodge] = useState<null | { name: string; id: string }>(null);

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


      {/* Destinations Section — Cinematic Reveal */}
      <section className="pt-20 md:pt-36 pb-14 md:pb-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Section Header — dramatic entrance */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="section-label block"
              >
                The Explorer&apos;s Map
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                viewport={{ once: true, margin: "-40px" }}
                className="section-heading"
              >
                Discover <br />
                <span className="italic text-gold lowercase tracking-normal">Africa</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
              viewport={{ once: true, margin: "-60px" }}
              className="max-w-xs"
            >
              <p className="text-stone/70 font-sans text-sm leading-relaxed mb-6">
                Curated journeys across East Africa&apos;s most profound landscapes, from mist-covered mountains to sun-drenched savannahs.
              </p>
              <Link href="/destinations" className="text-link-arrow">
                View All Regions
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Full-bleed Immersive Feature Switcher — rises into view */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="relative h-[65vh] md:h-[88vh] overflow-hidden mb-3 md:mb-4"
        >
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
        </motion.div>

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

      {/* Our Lodges */}
      <section className="bg-cream py-20 md:py-36 px-4 md:px-8">

        {/* Centered header */}
        <div className="text-center mb-14 md:mb-20 max-w-4xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-[clamp(2rem,5.5vw,4.5rem)] text-forest-dark uppercase tracking-[0.04em] leading-tight mb-8">
              Luxury Safari Lodges in Uganda
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.12}>
            <p className="text-stone/70 font-sans text-sm md:text-base leading-relaxed mb-4 max-w-2xl mx-auto">
              Discover two exceptional safari lodges with Tilenga Safaris, a family-run luxury safari
              company offering transformative experiences in the heart of East Africa.
            </p>
            <p className="text-stone/55 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Situated within Uganda&apos;s most spectacular national parks — Murchison Falls and Queen
              Elizabeth — Tilenga Safaris offers more than just a traditional safari. We curate
              meaningful journeys rooted in heritage, guided by expertise, and delivered with an
              unwavering commitment to conservation and community.
            </p>
          </FadeIn>
        </div>

        {/* Two lodge image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1600px] mx-auto">
          {lodges.map((lodge, i) => (
            <FadeIn key={lodge.name} direction="up" delay={i * 0.12}>
              <div className="relative overflow-hidden rounded-2xl group shadow-[0_2px_24px_rgba(0,0,0,0.10)]">
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  className="w-full h-[55vw] md:h-[44vw] max-h-[680px] object-cover group-hover:scale-[1.03] transition-transform duration-[3000ms] ease-out"
                />

                {/* Label — Cottar's exact style: cream bg, rounded rect, shadow, bottom-center */}
                <div className="absolute bottom-5 inset-x-0 flex justify-center">
                  <button
                    onClick={() => setActiveBookingLodge({ 
                      name: lodge.name, 
                      id: i === 0 ? "a145daf2-9f0a-48ef-bb89-89c56187884b" : "a145c6a5-916b-4db3-b2e4-b15a19e60992" 
                    })}
                    className="bg-[#f5f0e8] text-forest-dark font-sans text-sm font-medium px-5 py-2.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.22)] hover:bg-white transition-colors duration-200 whitespace-nowrap"
                  >
                    Book {lodge.name}
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
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
                       <span className="text-cream/30 text-[9px] uppercase tracking-[0.25em] font-bold italic">{exp.vibe}</span>
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

          {/* New Spirit Cards Grid */}
          <div className="mt-32 md:mt-48">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">The Pillars of our Heritage</span>
                <h3 className="font-serif text-4xl md:text-5xl text-cream uppercase">The Elements of <br /> <span className="italic text-gold">Discovery</span></h3>
              </div>
              <p className="text-cream/50 max-w-xs text-sm leading-relaxed">
                Five distinct perspectives that define the Tilenga experience — from the speed of the predator to the silence of the sky.
              </p>
            </div>

            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8" stagger={0.15}>
              {spiritCards.map((card, idx) => (
                <StaggerItem key={idx} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-2xl bg-forest-dark/40">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                    <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-gold text-[8px] uppercase tracking-[0.3em] font-bold block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{card.tag}</span>
                        <h4 className="font-serif text-xl text-cream leading-tight mb-3 group-hover:text-gold transition-colors duration-500">{card.title}</h4>
                        <div className="h-px w-0 group-hover:w-full bg-gold/30 transition-all duration-700 mb-4" />
                        <p className="text-cream/60 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Numbering */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <span className="font-serif italic text-gold text-2xl">0{idx + 1}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>

      </ParallaxSection>

      <SustainabilitySection />

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

      {/* Booking Modal */}
      {activeBookingLodge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-forest-dark/95 backdrop-blur-md"
            onClick={() => setActiveBookingLodge(null)}
          />
          <div className="relative w-full max-w-5xl h-[90vh] bg-cream rounded-sm overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10">
              <h3 className="font-serif text-forest text-xl">Book {activeBookingLodge.name}</h3>
              <button 
                onClick={() => setActiveBookingLodge(null)}
                className="w-10 h-10 flex items-center justify-center text-forest hover:text-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto bg-white min-h-[600px]" data-lenis-prevent>
              {/* @ts-expect-error rr-resnova is a third-party web component */}
              <rr-resnova 
                key={activeBookingLodge.id} 
                widget-id={activeBookingLodge.id} 
                api-url="https://resnova.resrequest.com/api/"
                style={{ display: 'block', width: '100%', minHeight: '600px' }}
              ></rr-resnova>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
