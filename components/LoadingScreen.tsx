"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const words = ["Explore", "Discover", "Experience"];

// Generate some stable random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));
};

export default function LoadingScreen() {
  const { isLoading: contextLoading } = useLoading();
  const [index, setIndex] = useState(0);
  const [internalLoading, setInternalLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  const particles = useMemo(() => {
    if (!mounted) return [];
    return generateParticles(20);
  }, [mounted]);

  const isVisible = internalLoading || contextLoading;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1200);

    let timeout: NodeJS.Timeout;
    if (internalLoading) {
      timeout = setTimeout(() => {
        setInternalLoading(false);
      }, 4000); // Slightly longer for the more creative reveal
    }

    return () => {
      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [internalLoading]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-forest-dark overflow-hidden"
        >
          {/* 1. Cinematic Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          {/* 2. Floating Golden Particles (Bokeh) */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-gold/20 blur-[1px]"
              initial={{ 
                x: `${p.x}%`, 
                y: `${p.y}%`, 
                opacity: 0,
                scale: 0 
              }}
              animate={{ 
                y: [`${p.y}%`, `${p.y - 15}%`],
                opacity: [0, 0.4, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "linear"
              }}
              style={{ width: p.size, height: p.size }}
            />
          ))}

          {/* 3. Central Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Logo Reveal with Masking Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-16"
            >
              {/* Outer Glow */}
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 blur-3xl bg-gold/30 rounded-full scale-150" 
              />
              
              <div className="relative">
                <img 
                  src={`${base}/tilenga-logo-light.svg`} 
                  alt="Tilenga Safaris" 
                  className="h-24 md:h-36 w-auto" 
                />
                
                {/* Shine effect passing over logo */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
              </div>
            </motion.div>

            {/* Typography Sequence with Character Reveal */}
            <div className="h-12 overflow-hidden flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={words[index]}
                  className="flex overflow-hidden"
                >
                  {words[index].split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.04,
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="text-gold font-serif text-xl md:text-2xl uppercase tracking-[0.4em] font-light inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Elegant Progress Indicator */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-8 h-px bg-white/10" />
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: index === i ? [1, 1.2, 1] : 1,
                      opacity: index === i ? 1 : 0.3,
                      backgroundColor: index === i ? "#C9A96E" : "#FFFFFF"
                    }}
                    className="w-1.5 h-1.5 rounded-full"
                  />
                ))}
              </div>
              <div className="w-8 h-px bg-white/10" />
            </div>
          </div>

          {/* Bottom Branding */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 font-sans text-[8px] uppercase tracking-[0.8em] font-bold text-cream"
          >
            Africa — Experience the Untamed
          </motion.div>

          {/* Subtle Border Glow */}
          <div className="absolute inset-0 border border-gold/5 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
