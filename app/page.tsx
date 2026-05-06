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

      {/* Destinations Section — Journal Style Editorial Grid */}
      <section className="py-14 md:py-32 px-6 md:px-16 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-12 md:mb-20">
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

          {/* Clean Journal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-20 gap-x-6 md:gap-x-8">

            {/* 01. Switching Featured Card */}
            <div className="md:col-span-7">
              <FadeIn direction="up">
                <div className="relative group block cursor-pointer">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      <Link href={destinations[activeIdx].href}>
                        <div className="relative aspect-[4/3] md:aspect-[14/11] overflow-hidden mb-6 md:mb-8 shadow-sm">
                          <img
                            src={destinations[activeIdx].image}
                            alt={destinations[activeIdx].name}
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1500ms] ease-out group-hover:scale-105"
                          />
                        </div>
                        <div className="max-w-lg">
                          <span className="font-serif text-gold text-sm italic mb-2 block tracking-widest">Discover Africa</span>
                          <h3 className="font-serif text-3xl md:text-5xl text-forest uppercase tracking-widest mb-4 transition-colors group-hover:text-gold leading-none">
                            {destinations[activeIdx].name}
                          </h3>
                          <p className="text-stone font-sans text-[15px] leading-relaxed md:leading-loose mb-6 opacity-80 md:min-h-[80px]">
                            {destinations[activeIdx].description}
                          </p>
                          <span className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                            Explore {destinations[activeIdx].name}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Subtle Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/10 overflow-hidden hidden md:block">
                    <motion.div 
                      key={`progress-${activeIdx}`}
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="h-full bg-gold"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 02. Uganda — Smaller Offset */}
            <div className="md:col-span-5 md:pt-32">
              <FadeIn direction="up" delay={0.2}>
                <Link href={destinations[0].href} className="group block">
                  <div className="relative aspect-square md:aspect-[4/5] overflow-hidden mb-6 md:mb-8 shadow-sm">
                    <img
                      src={destinations[0].image}
                      alt={destinations[0].name}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-forest uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">{destinations[0].name}</h3>
                    <p className="text-stone/70 font-sans text-sm leading-relaxed mb-4">{destinations[0].tag}</p>
                    <div className="w-10 h-px bg-gold/40 transition-all duration-500 group-hover:w-20" />
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* Row 2: Symmetric Journal Row */}
            <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
              {[destinations[1], destinations[2], destinations[3], destinations[4], destinations[5], destinations[6]].map((dest, i) => (
                <FadeIn key={dest.name} direction="up" delay={0.1 * i}>
                  <Link href={dest.href} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden mb-4 md:mb-6 shadow-sm border border-gold/5">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-serif text-lg md:text-xl xl:text-2xl text-forest uppercase tracking-widest mb-1 group-hover:text-gold transition-colors leading-tight">{dest.name}</h4>
                      <p className="text-gold text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">{dest.tag}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center mt-14 md:mt-32">
            <Link href="/destinations" className="btn-primary px-10 md:px-14">The Full Collection</Link>
          </FadeIn>
        </div>
      </section>

      {/* Our Lodges — Redesigned for Luxury */}
      <section className="py-20 md:py-40 px-6 md:px-16 bg-forest-dark relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-light/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <FadeIn direction="up">
                <p className="section-label text-gold mb-4">Where You Stay</p>
              </FadeIn>
              <LineReveal
                lines={["Our Lodges in Uganda"]}
                delay={0.1}
                lineClassName="font-serif text-5xl md:text-7xl text-cream leading-none uppercase tracking-[0.1em]"
              />
            </div>
            <FadeIn direction="up" delay={0.3} className="md:max-w-md">
               <p className="text-cream/50 font-sans leading-relaxed text-lg border-l border-gold/30 pl-6">
                Each lodge sits at the gateway of Uganda&apos;s most spectacular national parks —
                designed for comfort, wildlife, and that rare sense of being completely away.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-center">
            {lodges.map((lodge, idx) => (
              <div 
                key={lodge.name}
                className={`col-span-1 md:col-span-6 relative ${idx === 1 ? 'md:-mt-32 md:col-start-7' : ''}`}
              >
                <div className={`relative group ${idx === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <ImageReveal direction={idx === 0 ? "left" : "right"} delay={0.2 * idx}>
                    <Link href={lodge.href} className="block relative overflow-hidden aspect-[4/5] md:aspect-[3/4] rounded-sm">
                      <img
                        src={lodge.image}
                        alt={lodge.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    </Link>
                  </ImageReveal>
                  
                  <div className={`mt-10 ${idx === 1 ? 'md:text-right' : ''}`}>
                     <FadeIn direction="up" delay={0.4}>
                        <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans mb-3">
                          {lodge.tag} • {lodge.location.split(',')[0]}
                        </p>
                        <h3 className="font-serif text-3xl md:text-5xl text-cream mb-5 leading-tight">{lodge.name}</h3>
                        <p className={`text-cream/60 text-base font-sans leading-relaxed max-w-sm mb-10 ${idx === 1 ? 'md:ml-auto' : ''}`}>
                          {lodge.description}
                        </p>
                        <Link 
                          href={lodge.href} 
                          className={`inline-flex items-center gap-4 text-cream hover:text-gold transition-colors duration-300 group/btn ${idx === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                          <span className="text-xs uppercase tracking-widest font-sans border-b border-cream/20 pb-1 group-hover/btn:border-gold">Explore Sanctuary</span>
                          <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover/btn:border-gold transition-colors duration-300">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`transition-transform ${idx === 1 ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`}>
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </Link>
                     </FadeIn>
                  </div>
                  
                  {/* Decorative Number */}
                  <span className={`absolute -top-16 hidden md:block text-[14rem] font-serif text-cream/[0.03] pointer-events-none select-none ${idx === 0 ? '-right-4' : '-left-4'}`}>
                    0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
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

        <HorizontalScrollSection scrollHeight="800vh" className="items-stretch">
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

            {/* Outro Slide — High Impact */}
            <div className="min-w-[50vw] flex flex-col justify-center text-center items-center border-l border-white/5 pl-24">
               <FadeIn direction="up">
                 <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-10 block">End of Chapter</span>
                 <h2 className="font-serif text-7xl md:text-8xl text-cream mb-14 uppercase tracking-tighter leading-[0.9]">
                    Your Legacy <br /><span className="text-gold italic lowercase">awaits.</span>
                 </h2>
                 <MagneticButton>
                    <Link href="/plan-a-trip" className="btn-primary px-16 py-5 text-base">Design Your Journey</Link>
                 </MagneticButton>
               </FadeIn>
            </div>
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
