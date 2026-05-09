"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LoadingScreen() {
  const { isLoading: contextLoading } = useLoading();
  const [internalLoading, setInternalLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isVisible = internalLoading || contextLoading;

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      
      // Reset progress when it becomes visible
      setProgress(0);

      // Simulate progress with a natural feel
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          // Random increments to feel more "alive"
          const increment = Math.random() * 12;
          return Math.min(prev + increment, 100);
        });
      }, 150);

      return () => {
        clearInterval(interval);
        document.body.style.overflow = "unset";
      };
    }
  }, [isVisible]);

  useEffect(() => {
    if (internalLoading) {
      // Reduced initial cinematic time for better UX
      const timeout = setTimeout(() => {
        setInternalLoading(false);
      }, 3000); 
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
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] }
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#122B1E_0%,_transparent_100%)] opacity-30" />

          <div className="relative flex flex-col items-center gap-10 z-10 px-6">
            
            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <img 
                src={`${base}/tilenga-logo-light.svg`} 
                alt="Tilenga Safaris" 
                className="h-14 md:h-20 w-auto brightness-110" 
              />
              
              {/* Subtle shimmer effect across the logo */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
              />
            </motion.div>

            {/* Minimalist Progress Indicator */}
            <div className="flex flex-col items-center gap-6 w-full max-w-[200px]">
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gold shadow-[0_0_8px_rgba(201,169,110,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-cream text-[10px] uppercase tracking-[0.5em] font-light text-center"
                >
                  Preparing Your Adventure
                </motion.p>
                <motion.span 
                   animate={{ opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="text-[8px] text-gold/60 font-mono tracking-widest"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </div>
          </div>

          {/* Clean Bottom Accent */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
