"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/motion/SplitText";
import FadeIn from "@/components/motion/FadeIn";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface DestinationHeroVideoProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  tag?: string;
}

export default function DestinationHeroVideo({ videoSrc, title, subtitle, tag = "East Africa" }: DestinationHeroVideoProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.75], [0.4, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-stone-900 flex items-end">
      {/* Video Background */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <video
          autoPlay
          loop
          playsInline
          muted
          preload="none"
          className="w-full h-full object-cover"
        >
          <source src={`${base}${videoSrc}`} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95 will-change-opacity"
      />

      {/* Content */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 px-6 md:px-16 pb-16 max-w-7xl w-full"
      >
        <FadeIn direction="up">
          <p className="section-label text-gold mb-3">{tag}</p>
        </FadeIn>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10vw] text-cream mb-3 leading-[0.8] uppercase tracking-tighter whitespace-nowrap">
          <SplitText text={title} by="char" stagger={0.04} delay={0.2} />
        </h1>
        <FadeIn direction="up" delay={0.5}>
          <p className="font-serif italic text-2xl md:text-3xl text-gold">
            {subtitle}
          </p>
        </FadeIn>
      </motion.div>

      {/* Decorative Gradient for transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-forest to-transparent z-[2]" />
    </section>
  );
}
