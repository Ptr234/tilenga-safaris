"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Each line rises from beneath its overflow-hidden container — Cottars' primary heading animation
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lineVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

interface LineRevealProps {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
  lineClassName?: string;
}

export default function LineReveal({
  lines,
  delay = 0,
  stagger = 0.12,
  className = "",
  lineClassName = "",
}: LineRevealProps) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {lines.map((line, i) => (
        <div key={i} className={`overflow-hidden ${lineClassName}`}>
          <motion.div variants={lineVariant}>{line}</motion.div>
        </div>
      ))}
    </motion.div>
  );
}
