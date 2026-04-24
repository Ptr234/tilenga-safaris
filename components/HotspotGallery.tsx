"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface Hotspot {
  name: string;
  detail?: string;
  image: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HotspotGallery({ hotspots }: { hotspots: Hotspot[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragLeft, setDragLeft] = useState(-800);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    setDragLeft(-(el.scrollWidth - parent.offsetWidth + 64));
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };

  const card = {
    hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <div className="overflow-hidden">
      {/* Drag hint */}
      <div className="flex items-center gap-3 px-6 md:px-16 mb-6">
        <div className="w-8 h-px bg-gold/40" />
        <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-stone/60">
          Drag to explore
        </span>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="text-gold/50">
          <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <motion.div
        ref={trackRef}
        className="flex gap-3 pl-6 md:pl-16 pr-10 cursor-grab active:cursor-grabbing select-none"
        drag="x"
        dragConstraints={{ right: 0, left: dragLeft }}
        dragTransition={{ bounceStiffness: 280, bounceDamping: 28 }}
        dragElastic={0.08}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={container}
      >
        {hotspots.map((spot) => (
          <motion.div
            key={spot.name}
            variants={card}
            className="relative shrink-0 w-[76vw] sm:w-[44vw] md:w-[30vw] lg:w-[24vw] aspect-[3/4] overflow-hidden group"
          >
            <img
              src={spot.image}
              alt={spot.name}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
            />
            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
            {/* label */}
            <div className="absolute bottom-0 left-0 p-5 md:p-6">
              <div className="w-5 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-10" />
              <h3 className="font-serif text-xl md:text-2xl text-cream leading-tight">{spot.name}</h3>
              {spot.detail && (
                <p className="text-gold/80 text-[10px] uppercase tracking-[0.2em] font-sans mt-1.5">{spot.detail}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
