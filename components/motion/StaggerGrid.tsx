"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: EASE },
  },
};

export function StaggerGrid({
  children,
  className,
  stagger = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const containerV: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={containerV}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
