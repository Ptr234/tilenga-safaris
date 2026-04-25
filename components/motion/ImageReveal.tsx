"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Cottars signature easing — very slow, deliberate luxury reveal
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Direction = "left" | "right" | "top" | "bottom";

const clipMap: Record<Direction, { hidden: string; visible: string }> = {
  left:   { hidden: "inset(0 100% 0 0)",   visible: "inset(0 0% 0 0)" },
  right:  { hidden: "inset(0 0 0 100%)",   visible: "inset(0 0 0 0%)" },
  top:    { hidden: "inset(0 0 100% 0)",   visible: "inset(0 0 0% 0)" },
  bottom: { hidden: "inset(100% 0 0 0)",   visible: "inset(0% 0 0 0)" },
};

interface ImageRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ImageReveal({
  children,
  direction = "bottom",
  delay = 0,
  duration = 1.4,
  className,
}: ImageRevealProps) {
  const { hidden, visible } = clipMap[direction];

  return (
    <motion.div
      className={className}
      initial={{ clipPath: hidden }}
      whileInView={{ clipPath: visible }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
