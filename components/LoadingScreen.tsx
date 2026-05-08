"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Minimalist Safari Cruiser SVG Path
const CAR_PATH = "M2,12 L6,12 L7,9 L15,9 L17,12 L22,12 L22,18 L2,18 Z M6,12 L6,10 L15,10 L15,12 M4,18 A2,2 0 1,0 8,18 A2,2 0 1,0 4,18 M16,18 A2,2 0 1,0 20,18 A2,2 0 1,0 16,18";

// Abstract "Journey" path across Africa
const JOURNEY_PATH = "M-50,80 C100,120 200,20 400,80 C600,140 750,40 900,100";

const generateDust = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * -20,
  }));
};

export default function LoadingScreen() {
  const { isLoading: contextLoading } = useLoading();
  const [index, setIndex] = useState(0);
  const [internalLoading, setInternalLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const dust = useMemo(() => (mounted ? generateDust(30) : []), [mounted]);
  const isVisible = internalLoading || contextLoading;

  useEffect(() => {
    setMounted(true);
    if (isVisible) {
      document.body.style.overflow = "hidden";
      // Simulate/Control progress
      const interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 0.5 : 100));
      }, 20);
      return () => {
        clearInterval(interval);
        document.body.style.overflow = "unset";
      };
    }
  }, [isVisible]);

  useEffect(() => {
    if (internalLoading) {
      const timeout = setTimeout(() => {
        setInternalLoading(false);
      }, 5000); // 5 seconds for a cinematic initial intro
      return () => clearTimeout(timeout);
    }
  }, [internalLoading]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Cinematic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#122B1E_0%,_transparent_100%)] opacity-40" />
          
          {/* 1. Floating Golden Dust */}
          {dust.map((d) => (
            <motion.div
              key={d.id}
              className="absolute rounded-full bg-gold/10 blur-[0.5px]"
              animate={{ 
                x: [`${d.x}%`, `${d.x + 2}%`, `${d.x}%`],
                y: [`${d.y}%`, `${d.y - 10}%`],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: d.duration, 
                repeat: Infinity, 
                delay: d.delay,
                ease: "linear"
              }}
              style={{ width: d.size, height: d.size }}
            />
          ))}

          {/* 2. Central Branding */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-8">
            
            {/* Logo - Soft Glow Emergence */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="mb-24"
            >
              <img 
                src={`${base}/tilenga-logo-light.svg`} 
                alt="Tilenga Safaris" 
                className="h-16 md:h-24 w-auto opacity-80" 
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>

            {/* 3. The Journey Path */}
            <div className="relative w-full h-32 mb-12">
              <svg viewBox="0 0 800 150" className="w-full h-full fill-none overflow-visible">
                {/* The Dotted Guide */}
                <path 
                  d={JOURNEY_PATH} 
                  stroke="rgba(201,169,110,0.05)" 
                  strokeWidth="1" 
                  strokeDasharray="4 4" 
                />
                
                {/* The Golden Animated Path */}
                <motion.path 
                  d={JOURNEY_PATH} 
                  stroke="#C9A96E" 
                  strokeWidth="1.5" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ ease: "linear" }}
                />

                {/* The Explorer Cruiser Silhouette */}
                <motion.g
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   style={{ 
                     offsetPath: `path("${JOURNEY_PATH}")`,
                     offsetDistance: `${progress}%`
                   }}
                >
                   <path 
                     d={CAR_PATH} 
                     fill="#C9A96E" 
                     className="drop-shadow-[0_0_8px_rgba(201,169,110,0.5)]"
                     transform="scale(0.8) translate(-12, -22)"
                   />
                   <motion.circle 
                     r="3" 
                     fill="#C9A96E" 
                     className="blur-[2px]"
                     animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                </motion.g>
              </svg>
            </div>

            {/* 4. Refined Copy & Progress */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-4"
              >
                <span className="w-8 h-px bg-gold/20" />
                <h2 className="text-gold font-serif text-sm md:text-base uppercase tracking-[0.6em] font-light">
                  Preparing Your Journey
                </h2>
                <span className="w-8 h-px bg-gold/20" />
              </motion.div>
              
              <div className="flex flex-col items-center">
                <span className="text-cream/30 font-sans text-[10px] tracking-[0.3em] font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          {/* 5. Minimal Heritage Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.8em] text-cream">
              The Wild is Calling
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
          </motion.div>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
