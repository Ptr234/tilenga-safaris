"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = Cookies.get("tilenga-cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("tilenga-cookie-consent", "accepted", { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("tilenga-cookie-consent", "declined", { expires: 365 });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[200]"
        >
          <div className="bg-[#07130d]/90 backdrop-blur-xl border border-gold/30 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative group">
            {/* Inner Decorative Border */}
            <div className="absolute inset-1 border border-gold/10 pointer-events-none" />
            
            {/* Subtle Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold text-xs">✦</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Your Privacy</span>
              </div>

              <h3 className="font-serif text-xl text-cream mb-3 leading-tight">
                Enhancing your <span className="italic text-gold">African Journey</span>
              </h3>

              <p className="text-cream/60 font-sans text-xs leading-relaxed mb-8">
                We use refined cookies to understand how you explore our destinations and to tailor your experience on our website. By continuing, you agree to our use of these tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-gold hover:bg-[#b8933a] text-[#060f09] px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 border border-gold/30 text-gold hover:bg-gold/10 px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300"
                >
                  Essential Only
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <a href="/privacy" className="text-[9px] uppercase tracking-widest text-cream/30 hover:text-gold transition-colors underline underline-offset-4">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
