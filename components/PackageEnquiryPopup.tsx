"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageEnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

export default function PackageEnquiryPopup({ isOpen, onClose, packageName }: PackageEnquiryPopupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const dataObj: any = {
      source: 'package_enquiry',
      package_name: packageName
    };
    
    formData.forEach((value, key) => {
      dataObj[key] = value;
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060f09]/95 backdrop-blur-md"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-cream border border-gold/20 overflow-hidden shadow-2xl p-8 md:p-12 text-center"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-stone/40 hover:text-forest transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="space-y-6 py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full border border-gold mx-auto flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-forest uppercase tracking-widest">Enquiry Received</h3>
                <p className="text-stone font-sans text-sm leading-relaxed">
                  Your enquiry for <strong>{packageName}</strong> has been received. A specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Bespoke Safari Enquiry</span>
                  <h3 className="font-serif text-3xl text-forest uppercase tracking-tight leading-tight mb-4">
                    Enquire About<br />
                    <span className="text-gold italic">{packageName}</span>
                  </h3>
                  <p className="text-stone/70 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                    Let our specialists help you tailor this specific journey to your needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {error && <p className="text-red-500 text-[10px] uppercase font-bold text-center">{error}</p>}
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold ml-1">Full Name</label>
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-white border border-stone/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold ml-1">Email Address</label>
                    <input 
                      name="email" 
                      required 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-white border border-stone/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-stone/60 font-bold ml-1">Message (Optional)</label>
                    <textarea 
                      name="message" 
                      rows={3} 
                      placeholder="Any specific dates or requests for this trip?"
                      className="w-full bg-white border border-stone/10 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full btn-primary py-5 uppercase tracking-[0.2em] text-xs font-bold disabled:opacity-50"
                  >
                    {loading ? "Sending Enquiry..." : "Send Enquiry"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
