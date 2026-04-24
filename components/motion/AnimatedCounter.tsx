"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayed(value);
      return;
    }

    const target = parseFloat(numericMatch[0]);
    const suffix = value.replace(numericMatch[0], "");
    const isDecimal = numericMatch[0].includes(".");
    const duration = 1800;
    const startTime = performance.now();

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = target * ease(progress);
      setDisplayed(
        (isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix
      );
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref} className={className}>{displayed}</span>;
}
