"use client";

import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import LineReveal from "@/components/motion/LineReveal";
import ParallaxSection from "@/components/motion/ParallaxSection";
import HorizontalScrollSection from "@/components/motion/HorizontalScrollSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const experiences = [
  { 
    id: "gorilla-tracking",
    title: "Gorilla Tracking", 
    tag: "Primate Encounters",
    description: "Face-to-face with endangered mountain gorillas in the misty highlands of Bwindi Impenetrable Forest. A transformative hour spent in the presence of these gentle giants.", 
    image: `${base}/experinces/gorrila treking.jpg`,
    num: "01",
    location: "Bwindi, Uganda",
    vibe: "Intimate · Rare · Sacred"
  },
  { 
    id: "migration",
    title: "Great Beast Migration", 
    tag: "Wildlife Spectacle",
    description: "Witness the world's most spectacular wildlife event as millions of wildebeest and zebra cross the Mara River, braving crocodiles and predators.", 
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    num: "02",
    location: "Maasai Mara, Kenya",
    vibe: "Epic · Primal · Raw"
  },
  { 
    id: "culture",
    title: "Culture Immersion", 
    tag: "Local Heritage",
    description: "Connect with the living heritage and ancient traditions of the iconic Maasai, Batwa, and Karamojong people through authentic community-led encounters.", 
    image: `${base}/experinces/culture emersion.jpg`,
    num: "03",
    location: "East Africa",
    vibe: "Authentic · Human · Deep"
  },
  { 
    id: "game-drives",
    title: "Big Five Game Drives", 
    tag: "Classic Safari",
    description: "Expert-guided dawn and dusk drives in search of the legendary African Big Five — Lion, Leopard, Elephant, Rhino, and Buffalo.", 
    image: `${base}/experinces/Game drives.jpg`,
    num: "04",
    location: "Serengeti & Kruger",
    vibe: "Vibrant · Patient · Golden"
  },
  { 
    id: "balloon",
    title: "Hot Air Balloon", 
    tag: "Aerial Views",
    description: "Soar above the golden plains at sunrise for a breathtaking bird's-eye view of the wild, followed by a champagne breakfast in the bush.", 
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80",
    num: "05",
    location: "Serengeti / Mara",
    vibe: "Silent · Ethereal · Vast"
  },
  { 
    id: "climbing",
    title: "Mountain Climbing", 
    tag: "Adventure",
    description: "Summit the legendary 'Mountains of the Moon' or climb Mt. Kilimanjaro for an epic alpine adventure and panoramic views of the continent.", 
    image: `${base}/experinces/kilimanjaro climbing.jpg`,
    num: "06",
    location: "Rwenzori / Kilimanjaro",
    vibe: "Rugged · Alpine · Triumphant"
  },
  { 
    id: "zanzibar",
    title: "Zanzibar Beaches", 
    tag: "Coastal Escape",
    description: "Unwind on turquoise shores where spice-scented breezes meet ancient Stone Town culture. The perfect conclusion to any safari adventure.", 
    image: `${base}/experinces/zanzibar beach.jpg`,
    num: "07",
    location: "Zanzibar, Tanzania",
    vibe: "Tranquil · Azure · Spice"
  },
  { 
    id: "boat-safaris",
    title: "Boat Safaris", 
    tag: "Water Exploration",
    description: "Glide the Albert Nile or Kazinga Channel for incredible hippo, crocodile, and bird sightings from the unique perspective of the water.", 
    image: `${base}/experinces/water safari.jpg`,
    num: "08",
    location: "Murchison Falls, Uganda",
    vibe: "Fluid · Serene · Prolific"
  },
  { 
    id: "namibia",
    title: "Namibia Desert", 
    tag: "Desert Landscapes",
    description: "Explore the towering red dunes of Sossusvlei and the haunting Skeleton Coast in one of the world's oldest and most surreal deserts.", 
    image: "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=1200&q=80",
    num: "09",
    location: "Namib Desert, Namibia",
    vibe: "Arid · Surreal · Vast"
  },
  { 
    id: "botswana",
    title: "Elephants in Botswana", 
    tag: "River Wildlife",
    description: "Navigate the Okavango Delta by mokoro and witness the massive elephant herds of Chobe National Park in a true wilderness paradise.", 
    image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1200&q=80",
    num: "10",
    location: "Okavango, Botswana",
    vibe: "Lush · Untamed · Primal"
  },
];

export default function ExperiencesPage() {
  return (
    <main className="bg-cream min-h-screen grain-overlay">
      
      {/* 01. Cinematic Intro Hero — More Refined */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection 
          imageUrl={`${base}/experinces/Game%20drives.jpg`} 
          className="h-full w-full"
          overlayClassName="bg-black/45"
        >
           <div className="h-full flex flex-col items-center justify-center text-center px-6">
              <FadeIn direction="up">
                <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-10 block">The Tilenga Collection</span>
              </FadeIn>
              
              <h1 className="flex flex-col items-center">
                <SplitText 
                  text="EXTRAORDINARY" 
                  className="font-serif text-5xl md:text-8xl lg:text-[10rem] text-cream leading-none uppercase tracking-[-0.02em]" 
                  delay={0.2}
                />
                <span className="flex items-center gap-6 mt-2">
                   <div className="w-12 md:w-24 h-px bg-gold/50" />
                   <SplitText 
                    text="EXPERIENCES" 
                    className="font-serif italic text-4xl md:text-7xl lg:text-[7rem] text-gold leading-none lowercase tracking-normal" 
                    delay={0.6}
                  />
                   <div className="w-12 md:w-24 h-px bg-gold/50" />
                </span>
              </h1>

              <FadeIn direction="up" delay={1.2} className="mt-14 max-w-lg mx-auto">
                <p className="text-cream/70 font-sans text-sm md:text-base leading-relaxed tracking-wide mb-12">
                  We don't just guide; we reveal. Discover a sequence of carefully curated moments 
                  designed to challenge your perspective and awaken your senses.
                </p>
                <MagneticButton className="inline-block">
                  <Link href="#explore" className="btn-ghost px-12">Begin Discovery</Link>
                </MagneticButton>
              </FadeIn>
           </div>
        </ParallaxSection>
      </section>

      {/* 02. Narrative Section — Improved Layout */}
      <section id="explore" className="py-32 md:py-48 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6 relative">
              <ImageReveal direction="left">
                <div className="film-frame aspect-[4/5] md:aspect-[3/4] overflow-hidden shadow-2xl relative">
                   <img src={`${base}/experinces/gorrila treking.jpg`} alt="" className="w-full h-full object-cover grayscale-[20%] scale-105" />
                   <div className="absolute inset-0 bg-forest/10" />
                </div>
              </ImageReveal>
              <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 h-80 z-20">
                <ImageReveal direction="top" delay={0.4}>
                   <div className="film-frame h-full overflow-hidden shadow-xl border-white/5">
                      <img src={`${base}/experinces/culture emersion.jpg`} alt="" className="w-full h-full object-cover" />
                   </div>
                </ImageReveal>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-12">
              <FadeIn direction="right">
                <span className="section-label mb-8">Our Philosophy</span>
                <h2 className="font-serif text-5xl md:text-7xl text-forest mb-10 leading-[1.1] uppercase tracking-tight">
                  The Soul of <br /><em className="italic text-gold lowercase">Wild Africa.</em>
                </h2>
                <div className="w-16 h-px bg-gold mb-12" />
                <div className="space-y-8 body-text text-stone-600">
                  <p>
                    Tilenga Safaris was born from a singular belief: that the most profound travel isn't about the miles covered, but the depth of the encounter. We specialize in "slow luxury"—the luxury of time, silence, and authentic connection.
                  </p>
                  <p>
                    Whether you're sharing a silent sunrise with a silverback or navigating the turquoise spice-routes of Zanzibar, our experiences are built to be raw, unscripted, and life-altering.
                  </p>
                </div>
                
                <div className="mt-16 flex flex-col sm:flex-row items-start gap-10">
                   <div className="flex flex-col gap-2">
                      <span className="text-forest font-serif italic text-2xl">500+</span>
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400">Curated Itineraries</span>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-forest font-serif italic text-2xl">8+</span>
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400">Unique Ecosystems</span>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 03. The Experience Filmstrip — Enhanced for Desktop */}
      <section className="hidden lg:block bg-[#0a150f]">
        <HorizontalScrollSection scrollHeight="1000vh" className="items-stretch">
          <div className="flex h-full px-24 gap-32">
            
            {/* Intro Slide */}
            <div className="min-w-[45vw] flex flex-col justify-center border-r border-white/5 pr-32">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6 block">Filmstrip 01</span>
              <h2 className="font-serif text-8xl text-cream leading-[0.9] uppercase tracking-tighter mb-10">
                The <br /><span className="text-gold italic">Core</span> <br />Canon
              </h2>
              <div className="w-20 h-px bg-gold/30 mb-10" />
              <p className="text-cream/40 max-w-sm font-sans text-[15px] leading-relaxed tracking-wide">
                Scroll horizontally to traverse our most requested and rare African encounters. Each represents a unique chapter in your Tilenga story.
              </p>
              <div className="mt-20 flex items-center gap-4 text-gold/30">
                 <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Scroll to navigate</span>
                 <div className="w-24 h-px bg-current" />
              </div>
            </div>

            {experiences.map((exp) => (
              <div key={exp.id} id={exp.id} className="min-w-[80vw] h-full relative group flex items-center justify-center py-20">
                
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
                 <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-10 block">End of Chapter 01</span>
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

      {/* Mobile / Tablet Vertical Editorial Feed — Improved with Stagger */}
      <section className="lg:hidden bg-forest px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <FadeIn direction="up" className="text-center mb-24">
            <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold mb-6 block">The Collection</span>
            <h2 className="font-serif text-5xl text-cream uppercase tracking-tight">Essential <br /><em className="italic text-gold">Encounters</em></h2>
          </FadeIn>

          <StaggerGrid className="space-y-32" stagger={0.2}>
            {experiences.map((exp, i) => (
              <StaggerItem key={exp.id} id={`${exp.id}-mobile`} className="space-y-10 group">
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

      {/* 04. Bespoke Callout — Improved Polish */}
      <section className="bg-white py-32 md:py-56 px-6 md:px-16 text-center relative overflow-hidden">
        {/* Subtle Background Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-stone-100 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn direction="up">
            <span className="section-label mb-10">Beyond the Selection</span>
            <h2 className="font-serif text-5xl md:text-8xl text-forest mb-12 uppercase tracking-tight leading-[0.9]">
              Infinite <br /><em className="text-gold italic lowercase">possibilities.</em>
            </h2>
            <p className="text-stone-500 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed">
              Our travel concierge doesn't just book trips; we architect legacies. 
              Whether it's a private island dinner or a midnight flight over the dunes, 
              we build the bridge to your wildest dreams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
               <MagneticButton>
                  <Link href="/plan-a-trip" className="btn-primary px-16 py-5">Talk to a Specialist</Link>
               </MagneticButton>
               <Link href="/lodges" className="group flex items-center gap-5 text-stone-400 hover:text-gold transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Explore Our Lodges</span>
                  <div className="relative w-12 h-px bg-current overflow-hidden">
                     <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </div>
               </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final Visual Closer — High Drama */}
      <section className="h-screen relative overflow-hidden">
         <ParallaxSection imageUrl="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1800&q=95" className="h-full">
            <div className="absolute inset-0 flex items-center justify-center text-center">
               <div className="max-w-3xl px-6 relative">
                 <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="w-px h-24 bg-gold/50" />
                    <span className="text-gold text-[9px] uppercase tracking-[0.5em] font-bold">Awaken</span>
                 </div>
                 
                 <h2 className="font-serif text-6xl md:text-[9rem] text-cream uppercase tracking-[-0.03em] mb-16 leading-none">
                    YOUR JOURNEY <br /><span className="italic text-gold opacity-90">STARTS HERE</span>
                 </h2>
                 
                 <MagneticButton>
                    <Link href="/plan-a-trip" className="btn-outline border-white text-white hover:bg-white hover:text-forest px-20 py-6 text-lg tracking-[0.3em]">
                      Book Your Experience
                    </Link>
                 </MagneticButton>
               </div>
            </div>
         </ParallaxSection>
      </section>
    </main>
  );
}
