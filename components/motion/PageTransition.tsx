"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Luxury cubic-bezier — fast out, slow settle (used by Cottars / high-end editorial sites)
const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        // Content fades in AFTER the curtain has opened (0.75s delay matches curtain duration)
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.75, ease: "easeOut" } }}
        // Exit is instant — the curtain (from the next page) will cover it
        exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
      >
        {children}

        {/*
          Curtain panel — forest-dark overlay that covers the viewport on enter,
          then peels away upward, revealing the new page beneath.

          Sequence on navigation:
          1. Old page exits (opacity → 0, 0.15 s)
          2. New page mounts — curtain is instantly at scaleY:1 (full cover)
          3. Curtain collapses to scaleY:0 from its top edge (0.75 s, luxury ease)
             → page is revealed from top downward as the curtain retreats
          4. Page content fades in (0.5 s, starts at 0.75 s delay)
        */}
        <motion.div
          className="fixed inset-0 z-[300] bg-forest-dark pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: 0,
            transition: { duration: 0.75, ease: CURTAIN_EASE },
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
