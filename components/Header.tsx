"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingLink from "./LoadingLink";
import { motion, AnimatePresence } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  {
    label: "Our Stays",
    href: "/lodges",
    image: `${base}/photos/tilengasafarilodge/entrance.png`,
    children: [
      { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge", image: `${base}/photos/tilengasafarilodge/entrance.png` },
      { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge", image: `${base}/photos/kikorongo_outside.jpg` },
    ],
  },
  {
    label: "Experiences & Activities",
    href: "/experiences",
    image: `${base}/Newstock/Big Five Game Drives.jpg`,
  },
  {
    label: "Our Destinations",
    href: "/destinations",
    image: `${base}/Newstock/splendifd.jpg`,
    children: [
      { label: "Uganda", href: "/destinations/uganda", image: `${base}/Newstock/Source of the Nile.jpg` },
      { label: "Kenya", href: "/destinations/kenya", image: `${base}/Newstock/greatbeastmigration.jpg` },
      { label: "Tanzania", href: "/destinations/tanzania", image: `${base}/Newstock/Zanzibar Beaches.jpg` },
      { label: "Rwanda", href: "/destinations/rwanda", image: `${base}/Newstock/Gorrilla.jpg` },
      { label: "South Africa", href: "/destinations/south-africa", image: `${base}/Newstock/safari.jpg` },
      { label: "Namibia", href: "/destinations/namibia", image: `${base}/Newstock/wildanimals.jpg` },
      { label: "Botswana", href: "/destinations/botswana", image: `${base}/Newstock/bigelephant.jpg` },
    ],
  },
  { label: "About Us", href: "/about", image: `${base}/Newstock/tourist.jpg` },
  { label: "Sustainability & Conservation", href: "/#sustainability", image: `${base}/Newstock/touristsmovinginforest.jpg` },
  { label: "Travel Concierge", href: "/about#travel-concierge", image: `${base}/Newstock/safari.jpg` },
];

const bottomNav = [
  { label: "AGENTS PORTAL", href: "/agents-portal" },
  { label: "OFFERS", href: "/offers" },
  { label: "FAQ", href: "/faq" },
  { label: "GALLERY", href: "https://www.instagram.com/tilengasafaris_travel/", target: "_blank" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(navItems[0].image);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 md:px-12 py-6 md:py-8 ${
          scrolled || mobileOpen ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          
          {/* Left: Home */}
          <div className="flex-1">
            <LoadingLink href="/" className="text-cream text-[10px] uppercase tracking-[0.4em] font-sans font-bold hover:text-gold transition-colors">
              Home
            </LoadingLink>
          </div>

          {/* Right: Contact + Menu Toggle */}
          <div className="flex-1 flex items-center justify-end gap-10">
            <LoadingLink href="/plan-a-trip" className="hidden md:block text-cream text-[10px] uppercase tracking-[0.4em] font-sans font-bold hover:text-gold transition-colors">
              Contact
            </LoadingLink>
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="group flex items-center gap-3 text-cream hover:text-gold transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-2 items-end">
                <span className={`h-0.5 bg-current transition-all duration-500 ${mobileOpen ? "w-8 rotate-45 translate-y-2.5" : "w-6 group-hover:w-8"}`} />
                <span className={`h-0.5 bg-current transition-all duration-500 ${mobileOpen ? "w-8 -rotate-45" : "w-8"}`} />
              </div>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Full-screen Split Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[110] flex flex-col md:flex-row bg-forest-dark overflow-hidden"
          >
            {/* Left: Image & Brand */}
            <div className="relative w-full md:w-[45%] h-[40vh] md:h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img src={hoveredImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Logo Overlay on Image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-cream">
                <LoadingLink href="/" onClick={() => setMobileOpen(false)}>
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={`${base}/tilenga-logo-light.svg`} 
                    alt="Tilenga Safaris" 
                    className="h-24 md:h-40 w-auto mb-8 drop-shadow-2xl cursor-pointer" 
                  />
                </LoadingLink>
                <div className="space-y-3 opacity-90 font-sans text-[10px] tracking-[0.3em] uppercase font-bold">
                  <p>destinations@tilengasafaris.com</p>
                  <p>+256 789 390 350</p>
                </div>
              </div>

              {/* Bottom Nav on Left Side (Desktop & Mobile) */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-x-8 lg:gap-x-12 gap-y-4 flex-wrap px-8 z-20">
                {bottomNav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  >
                    <LoadingLink
                      href={item.href}
                      target={item.target}
                      onClick={() => setMobileOpen(false)}
                      className="text-white hover:text-gold text-[12px] md:text-lg lg:text-xl font-serif uppercase tracking-[0.2em] transition-all duration-300"
                    >
                      {item.label}
                    </LoadingLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Menu Links */}
            <div className="relative flex-1 h-full bg-forest-dark flex flex-col">
              {/* Close Button Desktop */}
              <button 
                onClick={() => setMobileOpen(false)}
                className="absolute top-8 right-12 z-[130] text-cream hidden md:block group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 group-hover:opacity-100 transition-opacity">Close</span>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <span className="absolute w-8 h-px bg-cream rotate-45" />
                    <span className="absolute w-8 h-px bg-cream -rotate-45" />
                  </div>
                </div>
              </button>

              <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-32 py-24 overflow-y-auto">
                <nav className="space-y-4 md:space-y-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                      onMouseEnter={() => setHoveredImage(item.image)}
                      className="group/item"
                    >
                      <LoadingLink
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-cream hover:text-gold text-2xl md:text-4xl lg:text-5xl font-serif uppercase tracking-wider transition-all duration-300 block mb-2"
                      >
                        {item.label}
                      </LoadingLink>
                      
                      {/* Children Links */}
                      {item.children && (
                        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-60 group-hover/item:opacity-100 transition-opacity">
                          {item.children.map((child) => (
                            <LoadingLink 
                              key={child.label}
                              href={child.href}
                              onMouseEnter={(e) => {
                                e.stopPropagation();
                                setHoveredImage(child.image);
                              }}
                              onClick={() => setMobileOpen(false)}
                              className="text-cream/80 hover:text-gold text-[11px] md:text-xs font-sans font-bold uppercase tracking-widest transition-colors"
                            >
                              {child.label}
                            </LoadingLink>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom Bar Utility */}
              <div className="flex border-t border-white/10 p-10 md:p-12 items-center justify-between">
                <div className="flex items-center gap-6">
                   <span className="text-cream/30 text-[9px] tracking-widest uppercase font-bold">Follow along</span>
                   <div className="flex gap-4">
                      <a href="https://www.instagram.com/tilengasafaris_travel/" target="_blank" className="text-cream/40 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">Ig</a>
                      <a href="https://www.facebook.com/TilengaSafaris/" target="_blank" className="text-cream/40 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">Fb</a>
                   </div>
                </div>
                <div className="hidden lg:block">
                   <span className="text-cream/20 text-[9px] tracking-[0.4em] uppercase font-bold">© 2026 Tilenga Safaris</span>
                </div>
              </div>
            </div>

            {/* Close Button Mobile Overlay */}
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-8 z-[130] text-cream md:hidden bg-black/20 p-2 rounded-full backdrop-blur-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
