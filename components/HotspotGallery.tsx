"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface Hotspot {
  name: string;
  detail?: string;
  image: string;
}

const KEN_BURNS = [
  { animate: { x: ["-2%", "2%", "-2%"], scale: [1.1, 1.14, 1.1] } },
  { animate: { x: ["2%", "-2%", "2%"], scale: [1.12, 1.08, 1.12] } },
  { animate: { y: ["-1.5%", "1.5%", "-1.5%"], scale: [1.1, 1.13, 1.1] } },
  { animate: { x: ["-1%", "1.5%", "-1%"], y: ["-1%", "0.5%", "-1%"], scale: [1.1, 1.12, 1.1] } },
];

export default function HotspotGallery({ hotspots }: { hotspots: Hotspot[] }) {
  const [paused, setPaused] = useState(false);

  /* Double the list so the CSS loop is seamless — scroll covers exactly -50% */
  const items = [...hotspots, ...hotspots];

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade edge */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-forest-dark to-transparent" />
      {/* Right fade edge */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-forest-dark to-transparent" />

      {/* Scrolling track */}
      <div
        className={`flex gap-3 py-4 w-max ${paused ? "hotspot-track hotspot-track-paused" : "hotspot-track"}`}
      >
        {items.map((spot, i) => {
          const kb = KEN_BURNS[i % KEN_BURNS.length];
          return (
            <div
              key={`${spot.name}-${i}`}
              className="relative shrink-0 w-[76vw] sm:w-[44vw] md:w-[28vw] lg:w-[22vw] xl:w-[18vw] aspect-[3/4] overflow-hidden group cursor-default"
            >
              {/* Ken Burns image — continues even while track is paused */}
              <motion.img
                src={spot.image}
                alt={spot.name}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                animate={kb.animate}
                transition={{
                  duration: 14 + (i % 4) * 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/15 to-transparent z-10" />

              {/* Hover vignette */}
              <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 p-5 md:p-6 z-20">
                <div className="w-5 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-10" />
                <h3 className="font-serif text-xl md:text-2xl text-cream leading-tight">
                  {spot.name}
                </h3>
                {spot.detail && (
                  <p className="text-gold/80 text-[10px] uppercase tracking-[0.2em] font-sans mt-1.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    {spot.detail}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pause indicator */}
      {paused && (
        <div className="pointer-events-none absolute bottom-6 right-8 z-20 flex items-center gap-2 opacity-60">
          <div className="w-px h-3 bg-gold/60" />
          <div className="w-px h-3 bg-gold/60" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-gold/60 font-sans ml-1">Paused</span>
        </div>
      )}
    </div>
  );
}
