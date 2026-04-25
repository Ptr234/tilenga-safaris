"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    label: "Our Stays",
    href: "/lodges",
    children: [
      { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge" },
      { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge" },
    ],
  },
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
    label: "Experiences",
    href: "/plan-a-trip",
    children: [
      { label: "Gorilla Trekking", href: "/plan-a-trip" },
      { label: "Game Drives", href: "/plan-a-trip" },
      { label: "Boat Safaris", href: "/plan-a-trip" },
      { label: "Cultural Immersion", href: "/plan-a-trip" },
      { label: "Mountain Climbing", href: "/plan-a-trip" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Sustainability", href: "/about" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* ── TOP INFO BAR ── */}
      <div className="hidden md:block bg-cream border-b border-stone/15">
        <div className="max-w-7xl mx-auto px-8 md:px-14 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a
              href="tel:+256789390350"
              className="text-stone text-[10px] font-sans tracking-wide hover:text-forest transition-colors"
            >
              +256 789 390 350
            </a>
            <span className="text-stone/25 text-xs">|</span>
            <a
              href="mailto:destinations@tilengasafaris.com"
              className="text-stone text-[10px] font-sans tracking-wide hover:text-forest transition-colors"
            >
              destinations@tilengasafaris.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/plan-a-trip" className="text-stone text-[10px] font-sans tracking-[0.15em] uppercase hover:text-forest transition-colors">
              Plan a Trip
            </Link>
            <span className="text-stone/25 text-xs">|</span>
            <Link href="/about" className="text-stone text-[10px] font-sans tracking-[0.15em] uppercase hover:text-forest transition-colors">
              FAQ
            </Link>
            <span className="text-stone/25 text-xs">|</span>
            <a
              href="https://www.instagram.com/tilengasafaris_travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone text-[10px] font-sans tracking-[0.15em] uppercase hover:text-forest transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR ── */}
      <div className="bg-cream border-b border-stone/12">
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/tilenga-logo.svg`}
              alt="Tilenga Safaris"
              className="h-9 md:h-11 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/tilenga-logo-light.svg`;
                (e.currentTarget as HTMLImageElement).style.filter =
                  "brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(1200%) hue-rotate(98deg) brightness(85%)";
              }}
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-forest text-[10px] uppercase tracking-[0.22em] font-sans font-medium hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                  {item.children && (
                    <motion.svg
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.18 }}
                      className="w-2.5 h-2.5 text-stone/50 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 bg-cream border border-stone/12 shadow-xl min-w-[200px] overflow-hidden"
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-sans text-stone hover:bg-forest hover:text-cream transition-colors duration-150 border-b border-stone/8 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Book Now CTA */}
          <Link
            href="/plan-a-trip"
            className="hidden md:inline-flex items-center gap-2 bg-forest text-cream text-[10px] uppercase tracking-[0.25em] font-sans px-6 py-2.5 hover:bg-forest-light transition-colors duration-200 shrink-0"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-forest p-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-cream border-b border-stone/12 overflow-hidden"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-stone/10">
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-sans text-forest hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="bg-cream-dark pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-10 py-2.5 text-[10px] uppercase tracking-[0.15em] font-sans text-stone hover:text-gold transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 py-5 flex flex-col gap-3">
              <a href="tel:+256789390350" className="text-stone text-xs font-sans">+256 789 390 350</a>
              <Link
                href="/plan-a-trip"
                className="block text-center bg-forest text-cream text-[11px] uppercase tracking-[0.2em] font-sans py-3 hover:bg-forest-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
