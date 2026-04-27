"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  title: string;
  description: string;
  image: string;
}

interface ExperienceCarouselProps {
  experiences: Experience[];
}

export default function ExperienceCarousel({ experiences }: ExperienceCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    if (experiences.length === 0) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevStep = () => {
    if (experiences.length === 0) return;
    setDirection(-1);
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  // Auto-play
  useEffect(() => {
    if (experiences.length === 0) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [experiences.length]);

  if (experiences.length === 0) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30} ,
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute w-full h-full px-4 md:px-0"
          >
            <div className="relative w-full h-full overflow-hidden group">
              <img
                src={experiences[index].image}
                alt={experiences[index].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              {/* Always-on gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
                 <div className="w-12 h-px bg-gold mb-6" />
                 <h3 className="font-serif text-3xl md:text-5xl text-cream mb-4 uppercase tracking-widest">{experiences[index].title}</h3>
                 <p className="text-cream/80 text-sm md:text-base font-sans max-w-lg leading-relaxed">{experiences[index].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-6 z-10 pointer-events-none">
        <button
          onClick={(e) => { e.stopPropagation(); prevStep(); }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest/40 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold transition-all duration-300 pointer-events-auto"
          aria-label="Previous experience"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextStep(); }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest/40 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold transition-all duration-300 pointer-events-auto"
          aria-label="Next experience"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {experiences.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-gold' : 'w-2 bg-forest/20'}`}
            aria-label={`Go to experience ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
