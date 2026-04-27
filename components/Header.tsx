"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  {
    label: "Destinations",
    href: "/destinations",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    children: [
      { label: "Uganda", href: "/destinations/uganda", image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&q=80" },
      { label: "Kenya", href: "/destinations/kenya", image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80" },
      { label: "Tanzania", href: "/destinations/tanzania", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80" },
      { label: "Rwanda", href: "/destinations/rwanda", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
      { label: "South Africa", href: "/destinations/south-africa", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80" },
      { label: "Namibia", href: "/destinations/namibia", image: "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=800&q=80" },
      { label: "Botswana", href: "/destinations/botswana", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" },
    ],
  },
  {
    label: "Our Lodges",
    href: "/lodges",
    image: `${base}/photos/tilengasafarilodge/entrance.png`,
    children: [
      { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge", image: `${base}/photos/tilengasafarilodge/entrance.png` },
      { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge", image: `${base}/photos/kikorongo_outside.jpg` },
    ],
  },
  { label: "About Us", href: "/about", image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&q=80" },
  { label: "Plan a Trip", href: "/plan-a-trip", image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1200&q=80" },
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled ? "py-3 md:py-4 bg-forest shadow-2xl" : "py-5 md:py-8 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 max-w-[1800px] mx-auto relative">
          
          {/* Left: Menu Toggle */}
          <div className="flex-1 flex items-center">
            <button 
              onClick={() => setMobileOpen(true)}
              className="group flex items-center gap-3 text-cream hover:text-gold transition-colors duration-300"
            >
              <div className="flex flex-col gap-1.5 items-start">
                <span className="w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
                <span className="w-8 h-px bg-current" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold hidden md:block">Menu</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="block">
              <motion.img
                src={`${base}/tilenga-logo-light.svg`}
                alt="Tilenga Safaris"
                className={`transition-all duration-700 object-contain ${scrolled ? "h-8 md:h-10" : "h-10 md:h-14"}`}
              />
            </Link>
          </div>

          {/* Right: Contact + Enquire CTA */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <a
              href="tel:+256789390350"
              className="hidden lg:block text-[9px] uppercase tracking-[0.3em] font-sans text-cream/40 hover:text-gold transition-colors duration-300"
            >
              Call Us Now
            </a>
            <Link
              href="/plan-a-trip"
              className="group relative overflow-hidden hidden md:block"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-cream group-hover:text-gold transition-colors duration-300">
                Plan Your Safari
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
            <Link href="/plan-a-trip" className="md:hidden text-cream hover:text-gold transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M12 19l7-7 3 3-7 7-3-3z" />
                 <path d="M18 13l-1.5-7.5L2 2l5.5 14.5L13 18l5-5z" />
                 <path d="M2 2l7.5 1.5" />
                 <path d="M2 2l1.5 7.5" />
               </svg>
            </Link>
          </div>

        </div>
      </motion.header>

      {/* Side-panel Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm cursor-pointer"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[120] bg-forest-dark w-full md:w-1/2 lg:w-[45vw] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Dynamic Background Image Showcase inside the panel */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredImage}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img src={hoveredImage} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-transparent to-forest-dark" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Close Button Inside Panel */}
              <div className="relative z-10 flex justify-between items-center p-8 md:p-12">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gold/50" />
                  <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold">Tilenga Navigation</span>
                </div>
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center gap-3 text-gold"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold">Close</span>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <span className="absolute w-6 h-px bg-gold rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]" />
                    <span className="absolute w-6 h-px bg-gold -rotate-45 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </button>
              </div>

              {/* Menu Links */}
              <div className="relative z-10 flex-1 flex flex-col px-8 md:px-20 justify-center pb-24 overflow-y-auto custom-scrollbar">
                <nav className="flex flex-col gap-8 md:gap-12">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="group/item"
                      onMouseEnter={() => setHoveredImage(item.image)}
                    >
                      <Link
                        href={item.href}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream hover:text-gold transition-colors duration-500 uppercase tracking-tighter block mb-3 leading-none"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      
                      {/* Children / Sub-links */}
                      {item.children && (
                        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-40 group-hover/item:opacity-100 transition-opacity duration-500">
                          {item.children.map((child) => (
                            <Link 
                              key={child.label} 
                              href={child.href}
                              onMouseEnter={(e) => {
                                e.stopPropagation();
                                setHoveredImage(child.image);
                              }}
                              className="text-cream hover:text-gold text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans transition-colors py-1"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom Contact Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-20 pt-12 border-t border-white/10"
                >
                  <p className="text-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-6">Concierge</p>
                  <div className="flex flex-col gap-4 font-serif italic text-cream/40 text-lg">
                    <a href="tel:+256789390350" className="hover:text-gold transition-colors">+256 789 390 350</a>
                    <a href="mailto:destinations@tilengasafaris.com" className="hover:text-gold transition-colors">destinations@tilengasafaris.com</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
