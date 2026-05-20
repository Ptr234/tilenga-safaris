"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = ["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa", "Namibia", "Botswana", "Multiple Destinations"];

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Automatically open after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenQuotePopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenQuotePopup", "true");
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "370d3a6f-b7ef-47dc-b782-98f868ca3aae");
    formData.append("from_name", "Tilenga Safaris Quote Request");
    formData.append("subject", `New Quote Request from ${formData.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Refined Trigger Button - Floating Luxury Card */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -12 }}
          onClick={() => setIsOpen(true)}
          className="fixed right-4 top-[75%] -translate-y-1/2 z-[60] group"
        >
          {/* Main Card */}
          <div className="relative flex items-center bg-[#07130d]/90 backdrop-blur-xl p-4 shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] border border-gold/30 overflow-hidden">
            {/* Inner Decorative Border */}
            <div className="absolute inset-1 border border-gold/10 pointer-events-none" />
            
            {/* Image Section - Vintage Film Frame */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden border border-gold/40 p-1 bg-black/40">
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={`${base}/photos/newstock/Gorrillahd.jpg`} 
                  alt="Safari" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col items-start text-left ml-5 mr-3 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-px bg-gold/60" />
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-gold font-bold">Bespoke</span>
              </div>
              <span className="text-[14px] md:text-[18px] font-serif text-cream leading-none tracking-wide mb-1">
                Request a <span className="italic text-gold block mt-1">Free Quote</span>
              </span>
            </div>

            {/* Floating Detail */}
            <div className="flex flex-col gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-[10px] text-gold animate-pulse">✦</span>
               <div className="w-px h-8 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          {/* Background Shadow/Glow */}
          <div className="absolute -inset-2 bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#060f09]/90 backdrop-blur-sm"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-cream overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 text-stone/40 hover:text-forest transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Side Panel - Cinematic Image */}
              <div className="hidden md:block w-1/3 relative overflow-hidden bg-forest">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" 
                  alt="Safari"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-serif text-2xl text-cream leading-tight">Start Your <br /><span className="text-gold italic">Adventure</span></p>
                </div>
              </div>

              {/* Form Panel */}
              <div className="flex-1 p-8 md:p-12">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-3xl text-forest uppercase tracking-widest">Enquiry Received</h3>
                    <p className="text-stone font-sans text-sm leading-relaxed">
                      A safari specialist will contact you shortly with your bespoke quote.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <span className="section-label mb-2">Tailored Just For You</span>
                      <h3 className="font-serif text-3xl text-forest uppercase tracking-widest leading-none">Request a <br />Free Quote</h3>
                      <div className="w-12 h-px bg-gold mt-6" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && <p className="text-red-500 text-[10px] uppercase font-bold">{error}</p>}
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold">Full Name</label>
                          <input 
                            name="name" 
                            required 
                            type="text" 
                            className="w-full bg-transparent border-b border-stone/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors font-sans"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold">Email Address</label>
                          <input 
                            name="email" 
                            required 
                            type="email" 
                            className="w-full bg-transparent border-b border-stone/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors font-sans"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold">Destination</label>
                          <select 
                            name="destination" 
                            required 
                            className="w-full bg-transparent border-b border-stone/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
                          >
                            <option value="">Select...</option>
                            {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold">Estimated Budget *</label>
                          <select 
                            name="budget" 
                            required 
                            className="w-full bg-transparent border-b border-stone/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
                          >
                            <option value="">Select range...</option>
                            <option value="$1k - $3k">$1k - $3k</option>
                            <option value="$3k - $5k">$3k - $5k</option>
                            <option value="$5k - $10k">$5k - $10k</option>
                            <option value="$10k+">$10k+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold">Your Message</label>
                        <textarea 
                          name="message" 
                          rows={2} 
                          placeholder="Tell us about your dream trip..."
                          className="w-full bg-transparent border-b border-stone/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full btn-primary py-4 mt-4 disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Send Request"}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
