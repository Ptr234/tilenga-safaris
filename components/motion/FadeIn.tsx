"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Cottars-style: very slow settle, minimal motion — the content drifts in, not rushes
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: EASE } },
  },
  down: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
  },
  left: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: EASE } },
  },
  right: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: EASE } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: EASE } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0 0% 0)", transition: { duration: 1.1, ease: EASE } },
  },
};

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "clip";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration,
  className,
  once = true,
}: FadeInProps) {
  const v = variants[direction];
  const customV: Variants = {
    hidden: v.hidden,
    visible: {
      ...(v.visible as object),
      transition: {
        ...((v.visible as { transition?: object }).transition ?? {}),
        ...(duration ? { duration } : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={customV}
    >
      {children}
    </motion.div>
  );
}
