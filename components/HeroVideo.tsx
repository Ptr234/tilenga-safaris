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

      {/* ── 7. WHATSAPP PILL */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: pillOpacity, y: pillY }}
        className="absolute bottom-8 right-8 z-20"
      >
        <a
          href="https://wa.me/256789390350"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 group"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.2em] whitespace-nowrap">
            Have a Question? Chat with Us on WhatsApp
          </span>
        </a>
      </motion.div>

    </section>
  );
}
