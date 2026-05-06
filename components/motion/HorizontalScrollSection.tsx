"use client";

import { useRef, ReactNode, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface HorizontalScrollSectionProps {
  children: ReactNode;
  /** Total scroll height — set higher for more cards, e.g. "600vh" */
  scrollHeight?: string;
  className?: string;
}

export default function HorizontalScrollSection({
  children,
  scrollHeight = "300vh",
  className = "",
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollingContentRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateRange = () => {
      if (scrollingContentRef.current) {
        // Range is (total width of content) - (viewport width)
        setScrollRange(scrollingContentRef.current.scrollWidth - window.innerWidth);
      }
    };

    calculateRange();
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div ref={containerRef} style={{ height: scrollHeight }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          ref={scrollingContentRef}
          style={{ x }}
          className={`flex h-full will-change-transform ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
