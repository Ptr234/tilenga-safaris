"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Your Details",
  "Overall Experience",
  "Highlights",
  "Logistics",
  "Guide & Safety",
  "Growth",
  "Future Intent",
  "Final Thoughts",
];

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
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const totalSteps = 8;

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div className="min-h-screen bg-[#254749] text-[#1a1a12] font-sans selection:bg-gold/30 relative">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-[#254749] flex flex-col items-center justify-center"
          >
            <div className="text-center text-white w-full p-5">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[180px] mx-auto mb-8"
              >
                <img src="/tilenga-logo-light.svg" alt="Tilenga Safaris" className="w-full h-auto" />
              </motion.div>
              <div className="font-serif italic text-[1.2rem] opacity-80 mb-6">Adventure Awaits...</div>
              <div className="w-[200px] h-[2px] bg-white/10 mx-auto relative overflow-hidden">
                <motion.div 
                  animate={{ left: ["-30%", "100%"], width: ["30%", "60%", "30%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 h-full bg-[#fdb717]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[600px] mx-auto px-4 py-12 flex flex-col items-center">
        <header className="w-full text-center mb-10">
          <div className="w-[180px] mx-auto">
            <img src="/tilenga-logo-light.svg" alt="Tilenga Safaris" className="w-full h-auto" />
          </div>
        </header>

        <div className="bg-white rounded-[24px] p-6 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] w-full min-h-[450px]">
          {!isSubmitted ? (
            <div id="form-body">
              <div className="mb-10">
                <div className="flex justify-between text-[0.75rem] font-bold text-[#5e6355] mb-2 uppercase tracking-wider">
                  <span>{titles[step - 1]}</span>
                  <span>Step {step} of {totalSteps}</span>
                </div>
                <div className="h-[6px] bg-[#ece4d2] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full bg-[#254749]"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {step === 1 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Your Details</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">Please provide your details below.</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">Your full name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Jane Nakato"
                            className={`w-full p-4 border-[1.5px] rounded-[14px] bg-[#f7f3eb] outline-none transition-all ${nameError ? 'border-[#ff4d4d]' : 'border-[#d6cdb5] focus:border-[#254749] focus:bg-white focus:ring-4 focus:ring-[#254749]/5'}`}
                          />
                          {nameError && (
                            <p className="text-[#ff4d4d] text-[0.8rem] mt-2 font-bold">Please enter your name to continue.</p>
                          )}
                        </div>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">Email address (optional)</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full p-4 border-[1.5px] border-[#d6cdb5] rounded-[14px] bg-[#f7f3eb] outline-none transition-all focus:border-[#254749] focus:bg-white focus:ring-4 focus:ring-[#254749]/5"
                          />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Overall Experience</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">We hope you had an unforgettable adventure.</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">1. How would you rate your overall experience with us?</label>
                          <div className="flex flex-row-reverse justify-end gap-2 text-[2.5rem]">
                            {[5, 4, 3, 2, 1].map((num) => (
                              <label key={num} className="cursor-pointer">
                                <input
                                  type="radio"
                                  name="overall_rating"
                                  value={num}
                                  className="hidden"
                                  onChange={handleChange}
                                  checked={formData.overall_rating === num.toString()}
                                />
                                <span className={`transition-colors ${formData.overall_rating >= num.toString() ? 'text-[#fdb717]' : 'text-[#ece4d2] hover:text-[#fdb717]'}`}>★</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">2. Did the trip meet your expectations?</label>
                          <div className="flex flex-wrap gap-2.5">
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
                                <span className={`px-[1.4rem] py-[0.9rem] border-[1.5px] rounded-full text-[0.9rem] font-medium transition-all block ${formData.expectations === opt ? 'bg-[#254749] text-white border-[#254749] shadow-lg -translate-y-[2px]' : 'bg-white border-[#d6cdb5]'}`}>
                                  {opt}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">The Highlights</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">What made your journey special?</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">3. What was the highlight of your trip?</label>
                          <textarea
                            name="highlight"
                            value={formData.highlight}
                            onChange={handleChange}
                            placeholder="Wild sightings, moments..."
                            className="w-full p-4 border-[1.5px] border-[#d6cdb5] rounded-[14px] bg-[#f7f3eb] outline-none transition-all focus:border-[#254749] focus:bg-white min-h-[120px]"
                          />
                        </div>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">4. Was there anything you particularly loved about the itinerary?</label>
                          <textarea
                            name="itinerary_love"
                            value={formData.itinerary_love}
                            onChange={handleChange}
                            placeholder="Favorite stops..."
                            className="w-full p-4 border-[1.5px] border-[#d6cdb5] rounded-[14px] bg-[#f7f3eb] outline-none transition-all focus:border-[#254749] focus:bg-white min-h-[120px]"
                          />
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Services & Logistics</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">How satisfied were you with the following?</p>
                        {[
                          { label: "Accommodation", name: "sat_acc" },
                          { label: "Transportation", name: "sat_trans" },
                          { label: "Customer Service", name: "sat_serv" },
                          { label: "Trip Organization", name: "sat_org" },
                          { label: "Activities & Excursions", name: "sat_act" },
                        ].map((field) => (
                          <div key={field.name} className="bg-[#f7f3eb] p-[1.2rem] rounded-[16px] mb-4">
                            <span className="block text-[0.9rem] font-bold text-[#2e5a5c] mb-4">{field.label}</span>
                            <div className="flex gap-1.5 flex-wrap sm:flex-nowrap">
                              {["Very Sat.", "Satisfied", "Neutral", "Unsat."].map((opt) => (
                                <label key={opt} className="flex-1 min-w-[80px]">
                                  <input
                                    type="radio"
                                    name={field.name}
                                    value={opt}
                                    className="hidden"
                                    onChange={handleChange}
                                    checked={formData[field.name as keyof typeof formData] === opt}
                                  />
                                  <span className={`block text-center p-2.5 text-[0.75rem] font-bold border-[1.5px] rounded-[10px] cursor-pointer transition-all ${formData[field.name as keyof typeof formData] === opt ? 'bg-[#254749] text-white border-[#254749]' : 'bg-white border-[#d6cdb5] text-[#5e6355]'}`}>
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
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Your Guide & Safety</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">Our hosts are the heart of the experience.</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">6. How would you rate your guide/host experience?</label>
                          <div className="flex flex-row-reverse justify-end gap-2 text-[2.5rem]">
                            {[5, 4, 3, 2, 1].map((num) => (
                              <label key={num} className="cursor-pointer">
                                <input
                                  type="radio"
                                  name="guide_rating"
                                  value={num}
                                  className="hidden"
                                  onChange={handleChange}
                                  checked={formData.guide_rating === num.toString()}
                                />
                                <span className={`transition-colors ${formData.guide_rating >= num.toString() ? 'text-[#fdb717]' : 'text-[#ece4d2] hover:text-[#fdb717]'}`}>★</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">7. Did you feel safe and well taken care of?</label>
                          <div className="flex flex-wrap gap-2.5">
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
                                <span className={`px-[1.4rem] py-[0.9rem] border-[1.5px] rounded-full text-[0.9rem] font-medium transition-all block ${formData.safety === opt ? 'bg-[#254749] text-white border-[#254749] shadow-lg -translate-y-[2px]' : 'bg-white border-[#d6cdb5]'}`}>
                                  {opt}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 6 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Improvements</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">How can we make it even better?</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">8. Was there anything you feel could have been improved?</label>
                          <textarea
                            name="improve"
                            value={formData.improve}
                            onChange={handleChange}
                            placeholder="Be honest, we listen..."
                            className="w-full p-4 border-[1.5px] border-[#d6cdb5] rounded-[14px] bg-[#f7f3eb] outline-none transition-all focus:border-[#254749] focus:bg-white min-h-[120px]"
                          />
                        </div>
                      </div>
                    )}

                    {step === 7 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Looking Ahead</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">Where shall we go next?</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">9. Would you travel with us again?</label>
                          <div className="flex flex-wrap gap-2.5">
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
                                <span className={`px-[1.4rem] py-[0.9rem] border-[1.5px] rounded-full text-[0.9rem] font-medium transition-all block ${formData.travel_again === opt ? 'bg-[#254749] text-white border-[#254749] shadow-lg -translate-y-[2px]' : 'bg-white border-[#d6cdb5]'}`}>
                                  {opt}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">10. Would you recommend Tilenga Safaris to others?</label>
                          <div className="flex flex-wrap gap-2.5">
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
                                <span className={`px-[1.4rem] py-[0.9rem] border-[1.5px] rounded-full text-[0.9rem] font-medium transition-all block ${formData.recommend === opt ? 'bg-[#254749] text-white border-[#254749] shadow-lg -translate-y-[2px]' : 'bg-white border-[#d6cdb5]'}`}>
                                  {opt}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">11. What destination would you love to visit next?</label>
                          <input
                            type="text"
                            name="next_dest"
                            value={formData.next_dest}
                            onChange={handleChange}
                            placeholder="Serengeti, Bwindi..."
                            className="w-full p-4 border-[1.5px] border-[#d6cdb5] rounded-[14px] bg-[#f7f3eb] outline-none transition-all focus:border-[#254749] focus:bg-white"
                          />
                        </div>
                      </div>
                    )}

                    {step === 8 && (
                      <div>
                        <h2 className="font-serif text-[1.8rem] text-[#254749] mb-2 leading-tight">Final Thoughts</h2>
                        <p className="text-[#5e6355] text-[0.95rem] mb-8">Anything else you'd like to share?</p>
                        <div className="mb-10">
                          <label className="block font-bold mb-4 text-[#254749] text-[1rem]">12. Additional comments or memorable moments?</label>
                          <textarea
                            name="final"
                            value={formData.final}
                            onChange={handleChange}
                            placeholder="One last story..."
                            className="w-full p-4 border-[1.5px] border-[#d6cdb5] rounded-[14px] bg-[#f7f3eb] outline-none transition-all focus:border-[#254749] focus:bg-white min-h-[120px]"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-4 mt-12">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-4 bg-[#ece4d2] text-[#5e6355] rounded-[16px] font-bold text-[1rem] flex-none w-[100px] hover:bg-[#d6cdb5] transition-all"
                    >
                      Back
                    </button>
                  )}
                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-4 bg-[#254749] text-white rounded-[16px] font-bold text-[1rem] hover:bg-[#2e5a5c] hover:-translate-y-0.5 hover:shadow-xl transition-all"
                    >
                      Next Adventure
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 bg-[#fdb717] text-[#254749] rounded-[16px] font-bold text-[1rem] hover:bg-[#e5a515] hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending Feedback..." : "Submit My Feedback"}
                    </button>
                  )}
                </div>
                {error && <p className="text-[#ff4d4d] text-center mt-4 font-bold">{error}</p>}
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#34e0a1] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-[2.5rem]">✓</div>
              <h2 className="font-serif text-[2.2rem] text-[#254749] mb-2">Asante Sana!</h2>
              <p className="text-[#5e6355] text-[1rem] mb-10 leading-relaxed">
                Thank you for traveling with Tilenga Safaris. Your feedback helps us
                improve our service and ensures every adventure is unforgettable.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g293841-d32809885-Reviews-Tilenga_Safaris-Kampala_Central_Region.html"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#34e0a1] text-[#0d2b20] py-4 px-8 rounded-full font-bold transition-all hover:scale-105 hover:shadow-2xl"
                  target="_blank"
                >
                  ⭐ Leave a Review on TripAdvisor
                </a>
                <a
                  href="/"
                  className="py-4 px-8 bg-[#254749] text-white rounded-[16px] font-bold transition-all hover:bg-[#2e5a5c]"
                >
                  Explore More Adventures
                </a>
              </div>
              <button
                className="bg-transparent text-[#5e6355] mt-6 text-[0.8rem] font-medium"
                onClick={() => window.location.reload()}
              >
                Back to Start
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
