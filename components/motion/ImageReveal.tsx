"use client";

import { m } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

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
  margin?: string;
}

export default function ImageReveal({
  children,
  direction = "bottom",
  delay = 0,
  duration = 1.4,
  className,
  margin = "-50px",
}: ImageRevealProps) {
  const { hidden, visible } = clipMap[direction];

  // Safety net: `whileInView`'s reveal depends on an IntersectionObserver
  // that, in practice, can fail to ever report "in view" for a given
  // element (races with the async LazyMotion feature bundle, interaction
  // with the Lenis smooth-scroll wrapper, etc.), leaving the image
  // permanently clipped to nothing. If nothing has revealed it shortly
  // after mount, force it visible rather than risk a blank image forever.
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <m.div
      className={className}
      initial={{ clipPath: hidden }}
      animate={forceVisible ? { clipPath: visible } : undefined}
      whileInView={{ clipPath: visible }}
      onViewportEnter={() => setForceVisible(true)}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}
