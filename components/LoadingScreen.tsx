"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Create subtle "firefly" particles for a live feel
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * -20,
  }));
};

export default function LoadingScreen() {
  const { isLoading: contextLoading } = useLoading();
  const [internalLoading, setInternalLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number, duration: number, delay: number}[]>([]);
  
  // Use a derived state to ensure we stay visible until progress is 100%
  // even if contextLoading becomes false slightly early
  const [isEffectivelyLoading, setIsEffectivelyLoading] = useState(true);

  useEffect(() => {
    setParticles(generateParticles(15));
  }, []);

  // Sync effective loading state
  useEffect(() => {
    if (contextLoading || internalLoading) {
      setIsEffectivelyLoading(true);
    } else if (progress >= 100) {
      // Small delay after hitting 100% to let the user "see" it finished
      const timeout = setTimeout(() => {
        setIsEffectivelyLoading(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [contextLoading, internalLoading, progress]);

  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);
  
  // Background Parallax
  const bgX = useSpring(useTransform(mouseX, [-300, 300], [20, -20]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-300, 300], [20, -20]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (isEffectivelyLoading) {
      document.body.style.overflow = "hidden";
      setProgress(0);

      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          // Smoothly ramp up progress
          const increment = prev < 80 ? Math.random() * 15 : Math.random() * 5;
          return Math.min(prev + increment, 100);
        });
      }, 100);

      return () => {
        clearInterval(interval);
        document.body.style.overflow = "unset";
      };
    }
  }, [isEffectivelyLoading]);

  useEffect(() => {
    if (internalLoading) {
      const timeout = setTimeout(() => {
        setInternalLoading(false);
      }, 3000); // 3s initial splash
      return () => clearTimeout(timeout);
    }
  }, [internalLoading]);

  const radius = 150;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence mode="wait">
      {isEffectivelyLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] }
          }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {/* 1. Cinematic Image Background */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ 
              x: bgX, 
              y: bgY,
              scale: 1.15,
            }}
          >
            <img 
              src={`${base}/photos/kikorongo_cottage2.jpg`} 
              alt="Loading Background" 
              className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
            />
            <div className="absolute inset-0 bg-[#0B1A13]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80" />
          </motion.div>
          
          {/* Floating Fireflies */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-gold/30 blur-[1px] z-10"
              animate={{ 
                x: [`${p.x}%`, `${p.x + 5}%`, `${p.x}%`],
                y: [`${p.y}%`, `${p.y - 10}%`, `${p.y}%`],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "easeInOut"
              }}
              style={{ width: p.size, height: p.size }}
            />
          ))}

          {/* 2. Main 3D Container */}
          <motion.div 
            className="relative flex items-center justify-center p-24 z-20"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* 3D Glass Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] md:w-[460px] md:h-[460px] border border-white/5 rounded-full" />
              <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] border border-gold/10 rounded-full blur-[2px]" />
            </div>

            {/* Circular Progress SVG */}
            <svg 
              className="absolute transform -rotate-90 w-[380px] h-[380px] md:w-[480px] md:h-[480px]"
              viewBox="0 0 400 400"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              <motion.circle
                cx="200"
                cy="200"
                r={radius}
                stroke="#C9A96E"
                strokeWidth="1"
                fill="transparent"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset, opacity: [0.1, 0.3, 0.1] }}
                transition={{ strokeDashoffset: { duration: 0.5 }, opacity: { duration: 2, repeat: Infinity } }}
                strokeLinecap="round"
                filter="url(#glow)"
                className="opacity-20"
              />

              <motion.circle
                cx="200"
                cy="200"
                r={radius}
                stroke="#C9A96E"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                strokeLinecap="round"
                style={{ 
                   filter: "drop-shadow(0 0 15px rgba(201,169,110,0.7))",
                   transform: "translateZ(30px)"
                }}
              />
            </svg>

            {/* 3. Central Content with Depth */}
            <div className="relative z-10 flex flex-col items-center gap-10 text-center" style={{ transform: "translateZ(60px)" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <img 
                  src={`${base}/tilenga-logo-light.svg`} 
                  alt="Tilenga Safaris" 
                  className="h-24 md:h-32 w-auto brightness-125 drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]" 
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -skew-x-20"
                  animate={{ x: ["-250%", "250%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </motion.div>

              <div className="flex flex-col items-center gap-4">
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    className="text-gold font-serif text-3xl md:text-5xl tracking-[0.2em] font-light italic drop-shadow-lg"
                  >
                    Wild Luxury
                  </motion.h2>
                </div>
                
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 2 }}
                  className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Heritage Footer Element */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="absolute bottom-12 flex flex-col items-center gap-4 z-20"
          >
            <span className="text-[10px] uppercase tracking-[1em] text-gold/60 font-sans">
              Experience the Unforgettable
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
