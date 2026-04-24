"use client";

import { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxSectionProps {
  imageUrl: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
}

export default function ParallaxSection({
  imageUrl,
  children,
  className = "",
  overlayClassName = "bg-forest-dark/75",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: "-20%",
          zIndex: 0,
        }}
      />
      <div className={`absolute inset-0 z-[1] ${overlayClassName}`} />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
