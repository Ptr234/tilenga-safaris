"use client";

import { m, Variants } from "framer-motion";
import { useEffect, useState } from "react";

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

  // Safety net: see FadeIn/ImageReveal -- `whileInView` can fail to ever
  // fire for a given element, which here would leave this text permanently
  // hidden. Force a reveal shortly after mount if scrolling hasn't already
  // triggered one.
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <m.span
      className={`inline-block ${className ?? ""}`}
      initial="hidden"
      animate={forceVisible ? "visible" : undefined}
      whileInView="visible"
      onViewportEnter={() => setForceVisible(true)}
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden leading-none">
          <m.span className="inline-block" variants={itemVariants}>
            {unit === " " ? " " : unit}
            {by === "word" && i < units.length - 1 ? " " : ""}
          </m.span>
        </span>
      ))}
    </m.span>
  );
}
