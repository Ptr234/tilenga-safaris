"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = ["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa", "Namibia", "Botswana", "Multiple Destinations"];

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Automatically open after 10 seconds (optional, but good for engagement)
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenQuotePopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenQuotePopup", "true");
      }
    }, 15000); // 15 seconds
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
      {/* Trigger Button - Floating or Sticky? Let's make it a discrete floating button if not open */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsOpen(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] bg-gold text-forest px-4 py-8 [writing-mode:vertical-lr] rotate-180 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.3em] font-bold shadow-2xl hover:bg-forest hover:text-gold transition-colors duration-500 rounded-r-lg"
        >
          Request a Quote
          <span className="rotate-90">✦</span>
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
                          <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold">Approx. Date</label>
                          <input 
                            name="date" 
                            type="date" 
                            className="w-full bg-transparent border-b border-stone/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors font-sans"
                          />
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
