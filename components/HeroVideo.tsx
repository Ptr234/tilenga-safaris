"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HeroVideo() {
  // Defer the video request until after hydration so the 7MB file doesn't
  // compete with critical JS/CSS/font requests for bandwidth on first load.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Media - Always Video */}
      <div className="absolute inset-0 z-0">
        {ready && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={`${base}/homevideo/bwindi.mp4`} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Content Removed */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        {/* Logo has been removed from landing page per request */}
      </div>
    </section>
  );
}
