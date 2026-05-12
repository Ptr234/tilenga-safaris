"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScrollSection from "./motion/HorizontalScrollSection";
import FadeIn from "./motion/FadeIn";

interface AlbumItem {
  id: string;
  type: "image" | "text" | "spacer";
  src?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  time?: string;
  location?: string;
  size?: "sm" | "md" | "lg" | "full";
  parallax?: number;
  rotation?: number;
}

interface LodgeLifeAlbumProps {
  title: string;
  subtitle: string;
  journalNo: string;
  locationCoords: string;
  items: AlbumItem[];
}

export default function LodgeLifeAlbum({
  title,
  subtitle,
  journalNo,
  locationCoords,
  items,
}: LodgeLifeAlbumProps) {
  return (
    <section className="bg-forest-dark overflow-hidden selection:bg-gold/30 selection:text-cream">
      {/* ── HEADER ── */}
      <div className="relative px-6 md:px-16 pt-24 md:pt-32 pb-12">
        <div className="absolute inset-0 grain-overlay opacity-[0.05] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold">
                {subtitle}
              </span>
              <div className="w-20 h-px bg-gold/30" />
            </div>
            <h2 className="font-serif text-6xl sm:text-8xl md:text-[10rem] text-cream leading-[0.75] uppercase tracking-tighter">
              {title.split(" ")[0]} <br />
              <span className="italic text-gold lowercase tracking-normal pl-8 sm:pl-12 md:pl-32 block">
                {title.split(" ")[1]}
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="max-w-[320px]">
            <div className="space-y-4 border-l border-gold/20 pl-8 py-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40 font-mono">
                {journalNo}
              </p>
              <p className="text-gold font-mono text-xs leading-relaxed uppercase tracking-widest">
                {locationCoords}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── HORIZONTAL SCROLL ALBUM ── */}
      <HorizontalScrollSection scrollHeight="500vh" className="items-center px-[10vw] gap-[5vw]">
        {items.map((item, index) => (
          <AlbumCard key={item.id} item={item} index={index} />
        ))}
        
        {/* End Label */}
        <div className="shrink-0 flex flex-col justify-center items-center px-20">
            <div className="w-px h-32 bg-gold/20 mb-8" />
            <p className="font-mono text-[10px] text-gold/40 uppercase tracking-[0.5em] vertical-text">
                End of Journal
            </p>
        </div>
      </HorizontalScrollSection>
    </section>
  );
}

function AlbumCard({ item, index }: { item: AlbumItem; index: number }) {
  const cardRef = useRef(null);
  
  if (item.type === "spacer") {
    return <div className="shrink-0 w-[10vw]" />;
  }

  if (item.type === "text") {
    return (
      <div className="shrink-0 w-[30vw] md:w-[20vw] flex flex-col justify-center gap-6">
        <p className="text-gold font-mono text-[10px] uppercase tracking-[0.5em]">
          {item.subtitle}
        </p>
        <h3 className="font-serif italic text-cream text-3xl md:text-5xl leading-tight">
          "{item.title}"
        </h3>
        <p className="text-cream/40 font-sans text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  }

  const sizes = {
    sm: "w-[25vw] md:w-[15vw] aspect-[4/5]",
    md: "w-[40vw] md:w-[25vw] aspect-[3/4]",
    lg: "w-[60vw] md:w-[40vw] aspect-[16/10]",
    full: "w-[85vw] md:w-[65vw] aspect-[21/9]",
  };

  return (
    <div 
      className={`shrink-0 relative group ${sizes[item.size || "md"]}`}
      style={{ 
        transform: `rotate(${item.rotation || 0}deg) translateY(${index % 2 === 0 ? '-5%' : '5%'})`,
        marginTop: index % 2 === 0 ? '-2rem' : '2rem'
      }}
    >
      <div className="absolute inset-0 overflow-hidden film-frame border border-white/5">
        <motion.img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent opacity-60" />
      </div>

      {/* Overlays */}
      <div className="absolute -bottom-6 -left-4 z-10">
        <p className="font-mono text-[9px] text-gold/60 uppercase tracking-[0.4em] bg-forest-dark/80 backdrop-blur-sm px-3 py-1.5 border border-gold/10">
          {item.time || "Archive"}
        </p>
      </div>

      {item.title && (
        <div className="absolute bottom-6 left-6 right-6">
           <h4 className="font-serif italic text-cream text-xl md:text-2xl drop-shadow-lg">
            {item.title}
          </h4>
        </div>
      )}

      {/* Decorative details */}
      <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-gold/20 pointer-events-none" />
    </div>
  );
}
