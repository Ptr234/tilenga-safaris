"use client";

import { m, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

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

  // Safety net: see FadeIn/ImageReveal -- `whileInView` can fail to ever
  // fire for a given element, which here would leave these heading lines
  // permanently hidden. Force a reveal shortly after mount if scrolling
  // hasn't already triggered one.
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <m.div
      className={className}
      initial="hidden"
      animate={forceVisible ? "visible" : undefined}
      whileInView="visible"
      onViewportEnter={() => setForceVisible(true)}
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {lines.map((line, i) => (
        <div key={i} className={`overflow-hidden ${lineClassName}`}>
          <m.div variants={lineVariant}>{line}</m.div>
        </div>
      ))}
    </m.div>
  );
}
