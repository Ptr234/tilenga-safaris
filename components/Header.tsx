"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    children: [
      { label: "Gorilla Tracking", href: "/experiences#gorilla-tracking", image: `${base}/experinces/gorrila treking.jpg` },
      { label: "Great Beast Migration", href: "/experiences#migration", image: `${base}/Newstock/greatbeastmigration.jpg` },
      { label: "Culture Immersion", href: "/experiences#culture", image: `${base}/experinces/culture emersion.jpg` },
      { label: "Game drives for the Big 5", href: "/experiences#game-drives", image: `${base}/Newstock/Big Five Game Drives.jpg` },
      { label: "Hot Air Balloon", href: "/experiences#balloon", image: `${base}/Newstock/Hot Air Balloon.jpg` },
      { label: "Mt Rwenzori Climbing", href: "/experiences#climbing", image: `${base}/Newstock/Mountain Climbing06Mountain Climbing.jpg` },
      { label: "Zanzibar Beaches", href: "/experiences#zanzibar", image: `${base}/experinces/zanzibar beach.jpg` },
      { label: "Boat Safaris", href: "/experiences#boat-safaris", image: `${base}/Newstock/Boat Safaris08Boat Safaris.jpg` },
      { label: "Namibia Desert", href: "/experiences#namibia", image: `${base}/Newstock/zebras.jpg` },
      { label: "Elephants in Botswana", href: "/experiences#botswana", image: `${base}/Newstock/bigelephant.jpg` },
    ],
  },
  { label: "About Us", href: "/about", image: `${base}/Newstock/tourist.jpg` },
  { label: "Sustainability & Conservation", href: "/about#conservation", image: `${base}/Newstock/touristsmovinginforest.jpg` },
  { label: "Tilenga Safaris Travel Concierge", href: "/plan-a-trip", image: `${base}/Newstock/safari.jpg` },
  { label: "Our Travel Stories", href: "/destinations", image: `${base}/Newstock/splendifd.jpg` },
];

const bottomNav = [
  { label: "AGENTS PORTAL", href: "/plan-a-trip" },
  { label: "OFFERS", href: "/destinations" },
  { label: "FAQ", href: "/about" },
  { label: "GALLERY", href: "/lodges" },
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
            <Link href="/" className="text-cream text-[10px] uppercase tracking-[0.4em] font-sans font-bold hover:text-gold transition-colors">
              Home
            </Link>
          </div>

          {/* Right: Contact + Menu Toggle */}
          <div className="flex-1 flex items-center justify-end gap-10">
            <Link href="/plan-a-trip" className="hidden md:block text-cream text-[10px] uppercase tracking-[0.4em] font-sans font-bold hover:text-gold transition-colors">
              Contact
            </Link>
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
            className="fixed inset-0 z-[110] flex flex-col md:flex-row bg-[#060f09] overflow-hidden"
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
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={`${base}/tilenga-logo-light.svg`} 
                  alt="Tilenga Safaris" 
                  className="h-24 md:h-40 w-auto mb-10 drop-shadow-2xl" 
                />
                <div className="space-y-3 opacity-90 font-sans text-[10px] tracking-[0.3em] uppercase font-bold">
                  <p>destinations@tilengasafaris.com</p>
                  <p>+256 789 390 350</p>
                </div>
              </div>

              {/* Bottom Nav on Left (Mobile) */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 md:hidden">
                {bottomNav.slice(0, 2).map(item => (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-[9px] tracking-widest text-cream uppercase font-bold">{item.label}</Link>
                ))}
              </div>
            </div>

            {/* Right: Menu Links */}
            <div className="relative flex-1 h-full bg-[#060f09] flex flex-col">
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
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-cream hover:text-gold text-2xl md:text-4xl lg:text-5xl font-serif uppercase tracking-wider transition-all duration-300 block mb-2"
                      >
                        {item.label}
                      </Link>
                      
                      {/* Children Links */}
                      {item.children && (
                        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-60 group-hover/item:opacity-100 transition-opacity">
                          {item.children.map((child) => (
                            <Link 
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
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom Bar Utility */}
              <div className="flex border-t border-white/10 p-10 md:p-12 items-center justify-between">
                <div className="flex gap-10 lg:gap-16">
                  {bottomNav.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-cream/50 hover:text-gold text-[9px] tracking-[0.4em] font-sans font-bold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex items-center gap-6">
                   <span className="text-cream/30 text-[9px] tracking-widest uppercase font-bold">Follow along</span>
                   <div className="flex gap-4">
                      <a href="https://www.instagram.com/tilengasafaris_travel/" target="_blank" className="text-cream/40 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">Ig</a>
                      <a href="https://www.facebook.com/TilengaSafaris/" target="_blank" className="text-cream/40 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">Fb</a>
                   </div>
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
