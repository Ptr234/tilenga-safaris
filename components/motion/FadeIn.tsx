"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60, filter: "blur(2px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 1.1, ease: EASE },
    },
  },
  down: {
    hidden: { opacity: 0, y: -40, filter: "blur(1px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE },
    },
  },
  left: {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 1.0, ease: EASE },
    },
  },
  right: {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 1.0, ease: EASE },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 1.0, ease: EASE },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1, clipPath: "inset(0 0 0% 0)",
      transition: { duration: 1.0, ease: EASE },
    },
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
      viewport={{ once, margin: "-60px" }}
      variants={customV}
    >
      {children}
    </motion.div>
  );
}
