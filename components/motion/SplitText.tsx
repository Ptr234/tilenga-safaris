"use client";

import { motion, Variants } from "framer-motion";

// Cottars tempo: each word/char settles slowly and deliberately
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1.0, ease: EASE } },
};

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: "char" | "word";
}

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.07,
  by = "char",
}: SplitTextProps) {
  const units = by === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden leading-none">
          <motion.span className="inline-block" variants={itemVariants}>
            {unit === " " ? " " : unit}
            {by === "word" && i < units.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
