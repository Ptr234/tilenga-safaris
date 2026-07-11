"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  title: string;
  description: string;
  image: string;
}

interface ExperienceCarouselProps {
  experiences: Experience[];
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

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
    const timer = setInterval(nextStep, 7000);
    return () => clearInterval(timer);
  }, [experiences.length]);

  if (experiences.length === 0) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden px-4 md:px-12">
      <div className="relative h-[450px] sm:h-[550px] md:h-[700px] w-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextStep();
              } else if (swipe > swipeConfidenceThreshold) {
                prevStep();
              }
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full overflow-hidden group shadow-2xl">
              <Image
                src={experiences[index].image}
                alt={experiences[index].title}
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                priority={index === 0}
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              {/* Cinematic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/20 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 px-6 sm:px-8 text-center max-w-3xl mx-auto">
                 <motion.div 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ delay: 0.4, duration: 0.8 }}
                   className="w-12 sm:w-16 h-px bg-gold mb-6 sm:mb-8 origin-center" 
                 />
                 <h3 className="font-serif text-2xl sm:text-5xl md:text-7xl text-cream mb-4 sm:mb-6 uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-tight">
                   {experiences[index].title}
                 </h3>
                 <p className="text-cream/70 text-xs sm:text-base md:text-lg font-sans max-w-xl leading-relaxed">
                   {experiences[index].description}
                 </p>
              </div>

              {/* Counter */}
              <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-10">
                 <span className="font-serif text-cream/20 text-4xl sm:text-8xl select-none">
                   {String(index + 1).padStart(2, "0")}
                 </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows — more premium design */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-1 md:px-8 z-20 pointer-events-none">
        <button
          onClick={(e) => { e.stopPropagation(); prevStep(); }}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-forest-dark/30 backdrop-blur-md border border-white/10 flex items-center justify-center text-cream hover:bg-gold hover:text-forest-dark hover:border-gold transition-all duration-500 pointer-events-auto group"
          aria-label="Previous experience"
        >
          <svg width="20" height="20" sm-width="24" sm-height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:-translate-x-1">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextStep(); }}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-forest-dark/30 backdrop-blur-md border border-white/10 flex items-center justify-center text-cream hover:bg-gold hover:text-forest-dark hover:border-gold transition-all duration-500 pointer-events-auto group"
          aria-label="Next experience"
        >
          <svg width="20" height="20" sm-width="24" sm-height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress indicators — minimal line style */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-8 md:mt-16">
        {experiences.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className="group py-3 sm:py-4 px-1"
            aria-label={`Go to experience ${i + 1}`}
          >
            <div className={`h-[1px] transition-all duration-700 rounded-full ${i === index ? 'w-10 sm:w-12 bg-gold' : 'w-5 sm:w-6 bg-forest/20 group-hover:bg-gold/40'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
