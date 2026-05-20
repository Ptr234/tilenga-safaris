"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Media - Always Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`${base}/homevideo/tilenga.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Logo */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <img 
            src={`${base}/tilenga-logo-light.svg`} 
            alt="Tilenga Safaris" 
            className="h-32 md:h-56 lg:h-72 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
          />
        </motion.div>
      </div>
    </section>
  );
}
