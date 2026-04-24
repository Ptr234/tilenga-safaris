"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Uganda", href: "/destinations/uganda" },
      { label: "Kenya", href: "/destinations/kenya" },
      { label: "Tanzania", href: "/destinations/tanzania" },
      { label: "Rwanda", href: "/destinations/rwanda" },
      { label: "South Africa", href: "/destinations/south-africa" },
      { label: "Dubai", href: "/destinations/dubai" },
    ],
  },
  {
    label: "Our Lodges",
    href: "/lodges",
    children: [
      { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge" },
      { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Plan a Trip", href: "/plan-a-trip" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.2 },
  }),
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-forest shadow-lg" : "bg-forest/80 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-1.5 border-b border-white/10 text-xs text-cream/70 font-sans">
        <a href="tel:+256789390350" className="hover:text-gold transition-colors duration-200">
          +256 789 390 350
        </a>
        <a href="mailto:destinations@tilengasafaris.com" className="hover:text-gold transition-colors duration-200">
          destinations@tilengasafaris.com
        </a>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.img
            src="/tilenga-logo-light.svg"
            alt="Tilenga Safaris"
            className="h-12 md:h-14 w-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={item.href} className="nav-link flex items-center gap-1 group">
                {item.label}
                {item.children && (
                  <motion.svg
                    animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                )}
                {/* Underline hover */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </Link>

              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 bg-forest-dark border border-gold/20 min-w-[210px] shadow-2xl overflow-hidden"
                  >
                    {item.children.map((child, i) => (
                      <motion.div
                        key={child.label}
                        custom={i}
                        variants={dropdownItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={child.href}
                          className="block px-5 py-3 text-cream/80 text-xs uppercase tracking-wider font-sans hover:bg-forest hover:text-gold transition-colors duration-150 border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link href="/plan-a-trip" className="btn-outline text-[11px] py-2 px-5">
              Book Now
            </Link>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-forest-dark border-t border-white/10 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-cream/90 text-sm uppercase tracking-wider font-sans border-b border-white/10 hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="bg-forest/50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-10 py-2.5 text-cream/60 text-xs uppercase tracking-wider font-sans border-b border-white/5 hover:text-gold transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div
              className="px-6 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/plan-a-trip" className="btn-outline block text-center text-sm" onClick={() => setMobileOpen(false)}>
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
