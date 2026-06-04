"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";

const titles = [
  "Your Details",
  "Overall Experience",
  "The Highlights",
  "Services & Logistics",
  "Guide & Safety",
  "Improvements",
  "Looking Ahead",
  "Final Reflections",
];

const totalSteps = 8;

export default function FeedbackForm() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    overall_rating: "",
    expectations: "",
    highlight: "",
    itinerary_love: "",
    sat_acc: "",
    sat_trans: "",
    sat_serv: "",
    sat_org: "",
    sat_act: "",
    guide_rating: "",
    safety: "",
    improve: "",
    travel_again: "",
    recommend: "",
    next_dest: "",
    final: "",
  });

  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "feedback",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("Failed to send feedback");
      }
    } catch (err) {
      setError("Error sending feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-forest-dark text-cream font-sans selection:bg-gold/30 relative flex flex-col items-center">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/photos/newstock/AfricanLandscape.jpg")' }}
        />
        <div className="absolute inset-0 bg-forest-dark/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-transparent to-forest-dark" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-overlay" />
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-forest-dark flex flex-col items-center justify-center"
          >
            <div className="text-center w-full max-w-xs">
              <motion.img 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="/tilenga-logo-light.svg" 
                alt="Tilenga Safaris" 
                className="w-40 mx-auto mb-12" 
              />
              <div className="w-full h-px bg-gold/10 relative overflow-hidden">
                <motion.div 
                  animate={{ left: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 h-full w-1/2 bg-gold/40"
                />
              </div>
              <p className="font-serif italic text-gold/40 text-sm mt-6 tracking-widest uppercase">Opening Journal...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-4xl px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Return Button */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
           <Link href="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gold/40 hover:text-gold transition-all duration-300 group">
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Return to Website</span>
           </Link>
        </div>

        {/* Header */}
        <FadeIn direction="fade" className="mb-12 md:mb-20 text-center">
          <Link href="/">
            <img src="/tilenga-logo-light.svg" alt="Tilenga Safaris" className="w-32 md:w-44 mx-auto mb-8 hover:scale-105 transition-transform duration-500" />
          </Link>
          <div className="w-12 h-px bg-gold/30 mx-auto" />
        </FadeIn>

        <div className="w-full max-w-2xl">
          {!isSubmitted ? (
            <div className="relative">
              {/* Progress Indicator */}
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-1 font-bold">Safari Log</p>
                    <h3 className="font-serif text-2xl text-cream tracking-wide">{titles[step - 1]}</h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold/40 font-bold">Step {step} / {totalSteps}</span>
                </div>
                <div className="h-0.5 bg-white/5 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gold/60 shadow-[0_0_10px_rgba(253,183,23,0.3)]"
                  />
                </div>
              </div>

              {/* Form Card */}
              <motion.div 
                layout
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden group min-h-[580px] flex flex-col"
              >
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-[1px] h-10 bg-gold/20" />
                  <div className="absolute top-0 right-0 h-[1px] w-10 bg-gold/20" />
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 min-h-[300px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {step === 1 && (
                          <div className="space-y-10">
                            <div className="relative">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">Your full name *</label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Nakato"
                                className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all font-serif text-2xl placeholder:text-white/10 ${nameError ? 'border-red-500/50 text-red-200' : 'border-white/10 focus:border-gold/50 text-cream'}`}
                              />
                              <div className="h-6"> {/* Reserved space for error */}
                                {nameError && <p className="text-red-400 text-[10px] uppercase tracking-widest mt-3 font-bold">Entry Required</p>}
                              </div>
                            </div>
                            <div className="relative">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">Email address (optional)</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full bg-transparent border-b-2 border-white/10 focus:border-gold/50 py-4 outline-none transition-all font-serif text-2xl text-cream placeholder:text-white/10"
                              />
                            </div>
                          </div>
                        )}

                        {step === 2 && (
                          <div className="space-y-12">
                            <div>
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-8 font-bold text-center">How would you rate the experience?</label>
                              <div className="flex flex-row-reverse justify-center gap-4">
                                {[5, 4, 3, 2, 1].map((num) => (
                                  <label key={num} className="cursor-pointer group/star">
                                    <input
                                      type="radio"
                                      name="overall_rating"
                                      value={num}
                                      className="hidden"
                                      onChange={handleChange}
                                      checked={formData.overall_rating === num.toString()}
                                    />
                                    <span className={`text-4xl md:text-5xl transition-all duration-300 ${formData.overall_rating >= num.toString() ? 'text-gold drop-shadow-[0_0_8px_rgba(253,183,23,0.4)] scale-110' : 'text-white/10 hover:text-gold/40'}`}>★</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                            <div className="pt-8 border-t border-white/5">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-6 font-bold">Did the trip meet your expectations?</label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {["Exceeded Expectations", "Met Expectations", "Partially Met", "Did Not Meet"].map((opt) => (
                                  <label key={opt} className="cursor-pointer">
                                    <input
                                      type="radio"
                                      name="expectations"
                                      value={opt}
                                      className="hidden"
                                      onChange={handleChange}
                                      checked={formData.expectations === opt}
                                    />
                                    <span className={`px-6 py-4 border text-center text-xs uppercase tracking-widest font-bold transition-all block ${formData.expectations === opt ? 'bg-gold text-forest-dark border-gold shadow-[0_0_20px_rgba(253,183,23,0.2)]' : 'bg-transparent border-white/10 text-cream/40 hover:border-white/30'}`}>
                                      {opt}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {step === 3 && (
                          <div className="space-y-12">
                            <div className="relative">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">What was the highlight of your trip?</label>
                              <textarea
                                name="highlight"
                                value={formData.highlight}
                                onChange={handleChange}
                                placeholder="The dawn mist over Bwindi..."
                                className="w-full bg-transparent border border-white/10 focus:border-gold/40 p-6 outline-none transition-all font-serif text-xl text-cream placeholder:text-white/5 min-h-[140px] rounded-sm"
                              />
                            </div>
                            <div className="relative">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">What did you love about the itinerary?</label>
                              <textarea
                                name="itinerary_love"
                                value={formData.itinerary_love}
                                onChange={handleChange}
                                placeholder="Seamless transfers and the evening boat cruise..."
                                className="w-full bg-transparent border border-white/10 focus:border-gold/40 p-6 outline-none transition-all font-serif text-xl text-cream placeholder:text-white/5 min-h-[140px] rounded-sm"
                              />
                            </div>
                          </div>
                        )}

                        {step === 4 && (
                          <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-gold/40 mb-8 font-bold italic text-center">— Satisfaction Scores —</p>
                            {[
                              { label: "Accommodation", name: "sat_acc" },
                              { label: "Transportation", name: "sat_trans" },
                              { label: "Customer Service", name: "sat_serv" },
                              { label: "Trip Organization", name: "sat_org" },
                              { label: "Activities", name: "sat_act" },
                            ].map((field) => (
                              <div key={field.name} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-white/5 last:border-0 group/row">
                                <span className="text-[11px] uppercase tracking-[0.2em] text-cream/70 font-bold mb-4 md:mb-0 group-hover/row:text-gold transition-colors">{field.label}</span>
                                <div className="flex gap-1">
                                  {["Very Sat.", "Satisfied", "Neutral", "Unsat."].map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input
                                        type="radio"
                                        name={field.name}
                                        value={opt}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={formData[field.name as keyof typeof formData] === opt}
                                      />
                                      <span className={`px-3 py-2 text-[9px] uppercase tracking-widest font-bold border transition-all block ${formData[field.name as keyof typeof formData] === opt ? 'bg-gold text-forest-dark border-gold' : 'bg-transparent border-white/5 text-cream/30 hover:border-white/20'}`}>
                                        {opt}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {step === 5 && (
                          <div className="space-y-12">
                            <div>
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-8 font-bold text-center">Rate your Guide/Host Experience</label>
                              <div className="flex flex-row-reverse justify-center gap-4">
                                {[5, 4, 3, 2, 1].map((num) => (
                                  <label key={num} className="cursor-pointer group/star">
                                    <input
                                      type="radio"
                                      name="guide_rating"
                                      value={num}
                                      className="hidden"
                                      onChange={handleChange}
                                      checked={formData.guide_rating === num.toString()}
                                    />
                                    <span className={`text-4xl md:text-5xl transition-all duration-300 ${formData.guide_rating >= num.toString() ? 'text-gold drop-shadow-[0_0_8px_rgba(253,183,23,0.4)] scale-110' : 'text-white/10 hover:text-gold/40'}`}>★</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                            <div className="pt-8 border-t border-white/5">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-6 font-bold">Did you feel safe & well taken care of?</label>
                              <div className="grid grid-cols-2 gap-3">
                                {["Yes, Absolutely", "Mostly Yes", "Neutral", "No"].map((opt) => (
                                  <label key={opt} className="cursor-pointer">
                                    <input
                                      type="radio"
                                      name="safety"
                                      value={opt}
                                      className="hidden"
                                      onChange={handleChange}
                                      checked={formData.safety === opt}
                                    />
                                    <span className={`px-6 py-4 border text-center text-[10px] uppercase tracking-widest font-bold transition-all block ${formData.safety === opt ? 'bg-gold text-forest-dark border-gold shadow-[0_0_20px_rgba(253,183,23,0.2)]' : 'bg-transparent border-white/10 text-cream/40 hover:border-white/30'}`}>
                                      {opt}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {step === 6 && (
                          <div className="space-y-6">
                            <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">What could we improve?</label>
                            <textarea
                              name="improve"
                              value={formData.improve}
                              onChange={handleChange}
                              placeholder="Tell us honestly, we want to grow..."
                              className="w-full bg-transparent border border-white/10 focus:border-gold/40 p-6 outline-none transition-all font-serif text-xl text-cream placeholder:text-white/5 min-h-[220px] rounded-sm"
                            />
                          </div>
                        )}

                        {step === 7 && (
                          <div className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-10">
                              <div>
                                <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-6 font-bold">Travel with us again?</label>
                                <div className="flex flex-col gap-2">
                                  {["Definitely", "Maybe", "Unlikely"].map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input
                                        type="radio"
                                        name="travel_again"
                                        value={opt}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={formData.travel_again === opt}
                                      />
                                      <span className={`px-4 py-3 border text-xs uppercase tracking-widest font-bold transition-all block ${formData.travel_again === opt ? 'bg-gold text-forest-dark border-gold' : 'bg-transparent border-white/10 text-cream/40 hover:border-white/30'}`}>
                                        {opt}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-6 font-bold">Recommend to others?</label>
                                <div className="flex flex-col gap-2">
                                  {["Yes, Highly", "Likely", "No"].map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input
                                        type="radio"
                                        name="recommend"
                                        value={opt}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={formData.recommend === opt}
                                      />
                                      <span className={`px-4 py-3 border text-xs uppercase tracking-widest font-bold transition-all block ${formData.recommend === opt ? 'bg-gold text-forest-dark border-gold' : 'bg-transparent border-white/10 text-cream/40 hover:border-white/30'}`}>
                                        {opt}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="pt-8 border-t border-white/5">
                              <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">Next Dream Destination?</label>
                              <input
                                type="text"
                                name="next_dest"
                                value={formData.next_dest}
                                onChange={handleChange}
                                placeholder="Serengeti, Victoria Falls, etc."
                                className="w-full bg-transparent border-b-2 border-white/10 focus:border-gold/50 py-4 outline-none transition-all font-serif text-2xl text-cream placeholder:text-white/10"
                              />
                            </div>
                          </div>
                        )}

                        {step === 8 && (
                          <div className="space-y-6">
                            <label className="block text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 font-bold">Final thoughts or a memorable moment?</label>
                            <textarea
                              name="final"
                              value={formData.final}
                              onChange={handleChange}
                              placeholder="Share one last story from your journey..."
                              className="w-full bg-transparent border border-white/10 focus:border-gold/40 p-6 outline-none transition-all font-serif text-xl text-cream placeholder:text-white/5 min-h-[220px] rounded-sm"
                            />
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-[10px] uppercase tracking-[0.3em] text-cream/40 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                      </button>
                    )}
                    
                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-gold hover:bg-gold-light text-forest-dark py-5 px-8 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 shadow-xl"
                      >
                        Next Chapter
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gold hover:bg-gold-light text-forest-dark py-5 px-8 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 shadow-xl disabled:opacity-50"
                      >
                        {isSubmitting ? "Preserving Log..." : "Complete Journal"}
                      </button>
                    )}
                  </div>
                  {error && <p className="text-red-400 text-center mt-6 text-[10px] uppercase tracking-widest font-bold">{error}</p>}
                </form>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-sm p-12 md:p-20 shadow-2xl relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-gold text-forest-dark rounded-full flex items-center justify-center mx-auto mb-10 text-2xl shadow-[0_0_30px_rgba(253,183,23,0.3)]">✓</div>
              <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 uppercase tracking-widest leading-tight">Asante <br /><em className="text-gold not-italic italic">Sana</em></h2>
              <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />
              <p className="text-cream/50 text-sm md:text-base mb-12 max-w-sm mx-auto leading-relaxed">
                Thank you for traveling with Tilenga Safaris. Your feedback helps us
                preserve the magic of the wild for future explorers.
              </p>
              
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g293841-d32809885-Reviews-Tilenga_Safaris-Kampala_Central_Region.html"
                  className="bg-gold text-forest-dark py-4 px-8 text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-gold-light shadow-lg"
                  target="_blank"
                >
                  ⭐ Review on TripAdvisor
                </a>
                <Link
                  href="/"
                  className="border border-white/10 hover:border-white/30 text-cream py-4 px-8 text-[10px] uppercase tracking-[0.2em] font-bold transition-all"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Footer Branding */}
      <footer className="relative z-10 mt-auto py-10 opacity-30 text-[10px] uppercase tracking-[0.4em] text-cream">
        Tilenga Safaris — The Spirit of Discovery
      </footer>
    </div>
  );
}
