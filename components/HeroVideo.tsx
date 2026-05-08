"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HeroVideo() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // ── Video: slow zoom-in as hero is left behind — feeling of depth
  const videoScale   = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  // ── Primary overlay: deepens to near-black — cinematic pull into darkness
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.75], [0.32, 0.92]);

  // ── Warm African-sunrise amber glow edges in as the transition begins
  const amberOpacity = useTransform(scrollYProgress, [0.1, 0.65], [0, 0.28]);

  // ── Radial vignette: closes in from edges
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);

  // ── Logo: drifts upward and dissolves — exits the frame before user arrives in Africa
  const logoY       = useTransform(scrollYProgress, [0, 0.45], ["0%", "-22%"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const logoScale   = useTransform(scrollYProgress, [0, 0.45], [1, 0.88]);

  // ── WhatsApp pill exits fast
  const pillOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const pillY       = useTransform(scrollYProgress, [0, 0.18], ["0px", "16px"]);

  // ── Scroll indicator arrow
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-stone-900">

      {/* ── 1. VIDEO — scales up as hero exits (depth illusion) */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <video
          autoPlay loop playsInline muted
          className="w-full h-full object-cover"
        >
          <source src={`${base}/photos/safari-hero.webm`} type="video/webm; codecs=vp9" />
          <source src={`${base}/homevideo/tilenga.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      {/* ── 2. DARK OVERLAY — thickens into cinematic black */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-black will-change-opacity"
      />

      {/* ── 3. AMBER GLOW — African sunrise seeping in at edges */}
      <motion.div
        style={{ opacity: amberOpacity }}
        className="absolute inset-0 z-[2]"
        // inline background can't be a motion value — wrap in another div
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 110%, rgba(180,110,30,0.7) 0%, transparent 65%)" }}
        />
      </motion.div>

      {/* ── 4. VIGNETTE — dark edges close in from all sides */}
      <motion.div
        style={{ opacity: vignetteOpacity }}
        className="absolute inset-0 z-[3]"
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 28%, rgba(0,0,0,0.72) 100%)" }}
        />
      </motion.div>

      {/* ── 5. LOGO — floats upward and dissolves */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ y: logoY, opacity: logoOpacity, scale: logoScale }}
          className="flex flex-col items-center will-change-transform"
        >
          <img
            src={`${base}/tilenga-logo-light.svg`}
            alt="Tilenga Safaris"
            className="h-32 md:h-56 lg:h-72 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      {/* ── 6. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 font-sans text-[8px] uppercase tracking-[0.55em] font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
