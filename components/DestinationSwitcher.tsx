"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Destination {
  name: string;
  tag: string;
  image: string;
  href: string;
}

interface DestinationSwitcherProps {
  destinations: Destination[];
}

export default function DestinationSwitcher({ destinations }: DestinationSwitcherProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % destinations.length);
  }, [destinations.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  }, [destinations.length]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="md:col-span-5 order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div>
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                  Region 0{index + 1}
                </span>
                <h3 className="font-serif text-5xl md:text-7xl text-forest uppercase tracking-tighter leading-[0.9] mb-6">
                  {destinations[index].name}
                </h3>
                <div className="w-16 h-px bg-gold mb-6" />
                <p className="text-stone/70 font-sans text-lg leading-relaxed max-w-md italic">
                  &ldquo;{destinations[index].tag}&rdquo;
                </p>
              </div>
              
              <div className="pt-4">
                <Link 
                  href={destinations[index].href}
                  className="group inline-flex items-center gap-4 text-forest text-xs uppercase tracking-[0.3em] font-bold"
                >
                  <span className="relative">
                    Explore Destination
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-gold/30 group-hover:bg-gold transition-colors" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-cream transition-all duration-500">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.75 4.5L14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex items-center gap-4 mt-12 md:mt-20">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative py-4"
                aria-label={`Go to ${destinations[i].name}`}
              >
                <div className={`h-0.5 transition-all duration-700 rounded-full ${i === index ? 'w-12 bg-gold' : 'w-4 bg-forest/10 group-hover:bg-forest/30'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="md:col-span-7 order-1 md:order-2 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={destinations[index].image}
                alt={destinations[index].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle Overlay Controls */}
          <div className="absolute bottom-8 right-8 flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-500"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-500"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
