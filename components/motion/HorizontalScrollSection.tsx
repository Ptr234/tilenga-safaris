"use client";

import { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface HorizontalScrollSectionProps {
  children: ReactNode;
  /** Total scroll height — set higher for more cards, e.g. "300vh" */
  scrollHeight?: string;
  className?: string;
}

export default function HorizontalScrollSection({
  children,
  scrollHeight = "300vh",
  className = "",
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // translate the inner strip from 0 → -66.67% (works for ~3 panels of 100vw each)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-66.67vw"]);

  return (
    <div ref={containerRef} style={{ height: scrollHeight }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className={`flex h-full will-change-transform ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
