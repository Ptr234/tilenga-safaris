"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import useSiteImages from "@/lib/useSiteImages";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";

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

  const [errors, setErrors] = useState<string[]>([]);
  const siteImages = useSiteImages();
  const getSiteImageUrlLocal = (key: string, fallback: string) => {
    const image = siteImages?.[key]?.image;
    return image ? getSiteImageUrl(siteImages, key, fallback) : fallback;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const validateStep = () => {
    const newErrors: string[] = [];

    if (step === 1) {
      if (!formData.name.trim()) newErrors.push("name");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email))
        newErrors.push("email");
    }
    if (step === 2) {
      if (!formData.overall_rating) newErrors.push("overall_rating");
      if (!formData.expectations) newErrors.push("expectations");
    }
    if (step === 3) {
      if (!formData.highlight.trim()) newErrors.push("highlight");
    }
    if (step === 4) {
      const required = [
        "sat_acc",
        "sat_trans",
        "sat_serv",
        "sat_org",
        "sat_act",
      ];
      required.forEach((field) => {
        if (!formData[field]) newErrors.push(field);
      });
    }
    if (step === 5) {
      if (!formData.guide_rating) newErrors.push("guide_rating");
      if (!formData.safety) newErrors.push("safety");
    }
    if (step === 6) {
      if (!formData.improve.trim() || formData.improve.length < 5)
        newErrors.push("improve");
    }
    if (step === 7) {
      if (!formData.travel_again) newErrors.push("travel_again");
      if (!formData.recommend) newErrors.push("recommend");
    }
    if (step === 8) {
      if (!formData.final.trim() || formData.final.length < 3)
        newErrors.push("final");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < totalSteps) {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    setErrors([]);
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing/selecting
    if (errors.includes(name)) {
      setErrors((prev) => prev.filter((err) => err !== name));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step < totalSteps) return;

    if (!validateStep()) return;

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
    <div className="min-h-screen bg-[#060f09] text-cream font-sans selection:bg-gold/30 relative flex flex-col items-center overflow-x-hidden">
      {/* Immersive Background Layered for depth */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale-[20%]"
          style={{
            backgroundImage: `url('${getSiteImageUrlLocal("feedbackBackground", "/photos/newstock/AfricanLandscape.jpg")}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060f09]/95 via-[#060f09]/80 to-[#060f09]" />

        {/* Animated Particles/Dust for atmosphere */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grain-overlay" />
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#060f09] flex flex-col items-center justify-center"
          >
            <div className="text-center w-full max-w-sm px-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="/tilenga-logo-light.svg"
                  alt="Tilenga Safaris"
                  className="w-44 mx-auto mb-16"
                />
              </motion.div>

              <div className="relative w-full h-[1px] bg-white/5 mb-8">
                <motion.div
                  initial={{ width: "0%", left: "0%" }}
                  animate={{
                    width: ["0%", "100%", "0%"],
                    left: ["0%", "0%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full bg-gold/50 shadow-[0_0_15px_rgba(253,183,23,0.5)]"
                />
              </div>

              <motion.p
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-serif italic text-gold/60 text-xs tracking-[0.4em] uppercase"
              >
                Opening Safari Journal
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-4xl px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Navigation / Return */}
        <div className="w-full max-w-2xl flex justify-between items-center mb-16">
          <Link href="/" className="group flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-all duration-500">
              <span className="text-[10px] group-hover:-translate-x-0.5 transition-transform duration-300">
                ←
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold/40 group-hover:text-gold transition-colors duration-500 font-bold">
              Return to Website
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold/20 animate-pulse" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-gold/30 font-bold">
              Live Explorer Log
            </span>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          {!isSubmitted ? (
            <div className="relative">
              {/* Journal Title Header */}
              <div className="mb-16 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="mb-10"
                >
                  <img
                    src="/tilenga-logo-light.svg"
                    alt="Tilenga Safaris"
                    className="w-32 mx-auto"
                  />
                </motion.div>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.5em] text-gold/50 font-bold">
                    Chapter {step}
                  </p>
                  <h1 className="font-serif text-3xl md:text-5xl text-cream tracking-tight leading-tight">
                    {titles[step - 1]}
                  </h1>
                  <div className="flex justify-center items-center gap-4 pt-2">
                    <div className="h-px w-8 bg-gold/20" />
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gold/30 font-bold">
                      {step} of {totalSteps}
                    </span>
                    <div className="h-px w-8 bg-gold/20" />
                  </div>
                </motion.div>
              </div>

              {/* Progress Sidebar (Desktop Only) */}
              <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 space-y-4">
                {titles.map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group cursor-help"
                  >
                    <div
                      className={`w-1 h-1 rounded-full transition-all duration-500 ${step > i ? "bg-gold" : step === i + 1 ? "bg-gold scale-[2] shadow-[0_0_10px_rgba(253,183,23,0.5)]" : "bg-white/10"}`}
                    />
                    <span
                      className={`text-[8px] uppercase tracking-widest transition-all duration-500 opacity-0 group-hover:opacity-100 ${step === i + 1 ? "text-gold" : "text-white/20"}`}
                    >
                      {titles[i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main Journal Card */}
              <motion.div
                layout
                className="bg-[#0c1a12]/40 backdrop-blur-3xl border border-white/5 rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col transition-all duration-700 hover:border-white/10"
              >
                {/* Visual Textures */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gold/[0.03] to-transparent" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/[0.02] rounded-full blur-[100px]" />
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 flex-1 flex flex-col p-8 md:p-16"
                >
                  <div className="flex-1 min-h-[380px] md:min-h-[420px]">
                    <AnimatePresence mode="wait" initial={false}>
                      <div key={step} onClick={(e) => e.stopPropagation()}>
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {step === 1 && (
                            <div className="space-y-12">
                              <motion.div
                                animate={
                                  errors.includes("name")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="group"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] mb-6 font-bold transition-colors ${errors.includes("name") ? "text-red-400" : "text-gold group-focus-within:text-gold-light"}`}
                                >
                                  Explorer Name
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Jane Nakato"
                                  className={`w-full bg-transparent border-b py-6 outline-none transition-all font-serif text-2xl md:text-4xl placeholder:text-white/5 ${errors.includes("name") ? "border-red-500/50 text-red-100" : "border-white/10 focus:border-gold/40 text-cream"}`}
                                  autoFocus
                                />
                                <div className="h-8 pt-2">
                                  {errors.includes("name") && (
                                    <motion.p
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      className="text-red-400/60 text-[9px] uppercase tracking-[0.2em] font-bold italic"
                                    >
                                      Log entry required to proceed
                                    </motion.p>
                                  )}
                                </div>
                              </motion.div>
                              <motion.div
                                animate={
                                  errors.includes("email")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="group"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] mb-6 font-bold transition-colors ${errors.includes("email") ? "text-red-400" : "text-gold group-focus-within:text-gold-light"}`}
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") e.preventDefault();
                                  }}
                                  autoComplete="off"
                                  placeholder="you@example.com"
                                  className={`w-full bg-transparent border-b py-6 outline-none transition-all font-serif text-2xl md:text-4xl placeholder:text-white/5 ${errors.includes("email") ? "border-red-500/50 text-red-100" : "border-white/10 focus:border-gold/40 text-cream"}`}
                                />
                                <div className="h-8 pt-2">
                                  {errors.includes("email") && (
                                    <motion.p
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      className="text-red-400/60 text-[9px] uppercase tracking-[0.2em] font-bold italic"
                                    >
                                      Valid email required
                                    </motion.p>
                                  )}
                                </div>
                              </motion.div>
                            </div>
                          )}

                          {step === 2 && (
                            <div className="space-y-16">
                              <motion.div
                                animate={
                                  errors.includes("overall_rating")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="text-center"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.5em] mb-10 font-bold ${errors.includes("overall_rating") ? "text-red-400" : "text-gold"}`}
                                >
                                  Overall Impression
                                </label>
                                <div className="flex flex-row-reverse justify-center gap-2 md:gap-6">
                                  {[5, 4, 3, 2, 1].map((num) => (
                                    <label
                                      key={num}
                                      className="cursor-pointer group/star relative"
                                    >
                                      <input
                                        type="radio"
                                        name="overall_rating"
                                        value={num}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={
                                          formData.overall_rating ===
                                          num.toString()
                                        }
                                      />
                                      <motion.span
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`text-5xl md:text-7xl transition-all duration-500 ${formData.overall_rating >= num.toString() ? "text-gold drop-shadow-[0_0_15px_rgba(253,183,23,0.4)]" : errors.includes("overall_rating") ? "text-red-900/30" : "text-white/5 hover:text-gold/20"}`}
                                      >
                                        ★
                                      </motion.span>
                                    </label>
                                  ))}
                                </div>
                              </motion.div>

                              <motion.div
                                animate={
                                  errors.includes("expectations")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="pt-12 border-t border-white/5"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] mb-8 font-bold text-center ${errors.includes("expectations") ? "text-red-400" : "text-gold"}`}
                                >
                                  Met expectations?
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                                  {[
                                    "Exceeded Expectations",
                                    "Met Expectations",
                                    "Partially Met",
                                    "Did Not Meet",
                                  ].map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input
                                        type="radio"
                                        name="expectations"
                                        value={opt}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={formData.expectations === opt}
                                      />
                                      <motion.span
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-8 py-5 border text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 block rounded-lg ${formData.expectations === opt ? "bg-gold text-[#060f09] border-gold shadow-[0_15px_30px_-10px_rgba(253,183,23,0.4)]" : errors.includes("expectations") ? "bg-red-900/10 border-red-500/20 text-red-200/40" : "bg-white/[0.02] border-white/5 text-white/30 hover:border-white/20"}`}
                                      >
                                        {opt}
                                      </motion.span>
                                    </label>
                                  ))}
                                </div>
                              </motion.div>
                            </div>
                          )}

                          {step === 3 && (
                            <div className="space-y-12">
                              <motion.div
                                animate={
                                  errors.includes("highlight")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="space-y-6"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] font-bold ${errors.includes("highlight") ? "text-red-400" : "text-gold"}`}
                                >
                                  The Defining Moment
                                </label>
                                <textarea
                                  name="highlight"
                                  value={formData.highlight}
                                  onChange={handleChange}
                                  placeholder="A close encounter, a hidden valley, the evening sun..."
                                  className={`w-full bg-transparent border p-8 outline-none transition-all font-serif text-xl md:text-2xl placeholder:text-white/5 min-h-[160px] rounded-xl ${errors.includes("highlight") ? "border-red-500/30 text-red-50" : "border-white/5 focus:border-gold/20 text-cream"}`}
                                />
                              </motion.div>
                              <div className="space-y-6">
                                <label className="block text-[9px] uppercase tracking-[0.4em] text-gold font-bold">
                                  Itinerary Reflections
                                </label>
                                <textarea
                                  name="itinerary_love"
                                  value={formData.itinerary_love}
                                  onChange={handleChange}
                                  placeholder="What parts of the rhythm worked best for you?"
                                  className="w-full bg-transparent border border-white/5 focus:border-gold/20 p-8 outline-none transition-all font-serif text-xl md:text-2xl text-cream placeholder:text-white/5 min-h-[160px] rounded-xl"
                                />
                              </div>
                            </div>
                          )}

                          {step === 4 && (
                            <div className="space-y-4">
                              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-10 font-bold italic text-center">
                                — Service Quality —
                              </p>
                              {[
                                { label: "Accommodation", name: "sat_acc" },
                                { label: "Transportation", name: "sat_trans" },
                                { label: "Customer Service", name: "sat_serv" },
                                { label: "Trip Organization", name: "sat_org" },
                                { label: "Activities", name: "sat_act" },
                              ].map((field) => (
                                <motion.div
                                  key={field.name}
                                  animate={
                                    errors.includes(field.name)
                                      ? { x: [-2, 2, -2, 2, 0] }
                                      : {}
                                  }
                                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 last:border-0 group/row"
                                >
                                  <span
                                    className={`text-[11px] uppercase tracking-[0.2em] font-bold mb-5 sm:mb-0 transition-colors ${errors.includes(field.name) ? "text-red-400" : "text-cream/70 group-hover/row:text-gold"}`}
                                  >
                                    {field.label}
                                  </span>
                                  <div className="flex gap-2">
                                    {[
                                      "Very Sat.",
                                      "Satisfied",
                                      "Neutral",
                                      "Unsat.",
                                    ].map((opt) => (
                                      <label
                                        key={opt}
                                        className="cursor-pointer"
                                      >
                                        <input
                                          type="radio"
                                          name={field.name}
                                          value={opt}
                                          className="hidden"
                                          onChange={handleChange}
                                          checked={
                                            formData[
                                              field.name as keyof typeof formData
                                            ] === opt
                                          }
                                        />
                                        <motion.span
                                          whileTap={{ scale: 0.9 }}
                                          className={`px-3 md:px-5 py-2.5 text-[8px] md:text-[9px] uppercase tracking-widest font-bold border transition-all duration-500 rounded-md block ${formData[field.name as keyof typeof formData] === opt ? "bg-gold/80 text-[#060f09] border-gold" : errors.includes(field.name) ? "bg-red-900/10 border-red-500/20 text-red-200/20" : "bg-transparent border-white/5 text-white/20 hover:border-white/10 hover:text-white/40"}`}
                                        >
                                          {opt}
                                        </motion.span>
                                      </label>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {step === 5 && (
                            <div className="space-y-16">
                              <motion.div
                                animate={
                                  errors.includes("guide_rating")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="text-center"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.5em] mb-10 font-bold ${errors.includes("guide_rating") ? "text-red-400" : "text-gold"}`}
                                >
                                  The Guide's Expertise
                                </label>
                                <div className="flex flex-row-reverse justify-center gap-2 md:gap-6">
                                  {[5, 4, 3, 2, 1].map((num) => (
                                    <label
                                      key={num}
                                      className="cursor-pointer group/star"
                                    >
                                      <input
                                        type="radio"
                                        name="guide_rating"
                                        value={num}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={
                                          formData.guide_rating ===
                                          num.toString()
                                        }
                                      />
                                      <motion.span
                                        whileHover={{ scale: 1.2 }}
                                        className={`text-5xl md:text-7xl transition-all duration-500 ${formData.guide_rating >= num.toString() ? "text-gold drop-shadow-[0_0_15px_rgba(253,183,23,0.4)]" : errors.includes("guide_rating") ? "text-red-900/30" : "text-white/5 hover:text-gold/20"}`}
                                      >
                                        ★
                                      </motion.span>
                                    </label>
                                  ))}
                                </div>
                              </motion.div>
                              <motion.div
                                animate={
                                  errors.includes("safety")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                                className="pt-12 border-t border-white/5"
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] mb-8 font-bold text-center ${errors.includes("safety") ? "text-red-400" : "text-gold"}`}
                                >
                                  Safety & Security Feelings
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                  {[
                                    "Yes, Absolutely",
                                    "Mostly Yes",
                                    "Neutral",
                                    "No",
                                  ].map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input
                                        type="radio"
                                        name="safety"
                                        value={opt}
                                        className="hidden"
                                        onChange={handleChange}
                                        checked={formData.safety === opt}
                                      />
                                      <motion.span
                                        whileHover={{ y: -2 }}
                                        className={`px-6 py-5 border text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 block rounded-lg ${formData.safety === opt ? "bg-gold text-[#060f09] border-gold shadow-[0_15px_30px_-10px_rgba(253,183,23,0.4)]" : errors.includes("safety") ? "bg-red-900/10 border-red-500/20 text-red-200/40" : "bg-white/[0.02] border-white/5 text-white/30 hover:border-white/20"}`}
                                      >
                                        {opt}
                                      </motion.span>
                                    </label>
                                  ))}
                                </div>
                              </motion.div>
                            </div>
                          )}

                          {step === 6 && (
                            <div className="space-y-8">
                              <motion.div
                                animate={
                                  errors.includes("improve")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] font-bold italic ${errors.includes("improve") ? "text-red-400" : "text-gold"}`}
                                >
                                  Honest Feedback for Growth
                                </label>
                                <textarea
                                  name="improve"
                                  value={formData.improve}
                                  onChange={handleChange}
                                  placeholder="Where can we sharpen our service?"
                                  className={`w-full bg-transparent border p-10 outline-none transition-all font-serif text-2xl placeholder:text-white/5 min-h-[320px] rounded-2xl ${errors.includes("improve") ? "border-red-500/30 text-red-50" : "border-white/5 focus:border-gold/20 text-cream"}`}
                                />
                                {errors.includes("improve") && (
                                  <p className="text-red-400/60 text-[9px] uppercase tracking-[0.2em] font-bold italic mt-4">
                                    A brief reflection is required
                                  </p>
                                )}
                              </motion.div>
                            </div>
                          )}

                          {step === 7 && (
                            <div className="space-y-16">
                              <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                  animate={
                                    errors.includes("travel_again")
                                      ? { x: [-4, 4, -4, 4, 0] }
                                      : {}
                                  }
                                  className="space-y-8"
                                >
                                  <label
                                    className={`block text-[9px] uppercase tracking-[0.4em] font-bold ${errors.includes("travel_again") ? "text-red-400" : "text-gold"}`}
                                  >
                                    Future Travels?
                                  </label>
                                  <div className="space-y-3">
                                    {["Definitely", "Maybe", "Unlikely"].map(
                                      (opt) => (
                                        <label
                                          key={opt}
                                          className="cursor-pointer block"
                                        >
                                          <input
                                            type="radio"
                                            name="travel_again"
                                            value={opt}
                                            className="hidden"
                                            onChange={handleChange}
                                            checked={
                                              formData.travel_again === opt
                                            }
                                          />
                                          <span
                                            className={`px-6 py-4 border text-[10px] uppercase tracking-widest font-bold transition-all duration-500 block rounded-lg ${formData.travel_again === opt ? "bg-gold text-[#060f09] border-gold" : errors.includes("travel_again") ? "bg-red-900/10 border-red-500/20 text-red-200/40" : "bg-white/[0.02] border-white/5 text-white/30"}`}
                                          >
                                            {opt}
                                          </span>
                                        </label>
                                      ),
                                    )}
                                  </div>
                                </motion.div>
                                <motion.div
                                  animate={
                                    errors.includes("recommend")
                                      ? { x: [-4, 4, -4, 4, 0] }
                                      : {}
                                  }
                                  className="space-y-8"
                                >
                                  <label
                                    className={`block text-[9px] uppercase tracking-[0.4em] font-bold ${errors.includes("recommend") ? "text-red-400" : "text-gold"}`}
                                  >
                                    Recommendation?
                                  </label>
                                  <div className="space-y-3">
                                    {["Yes, Highly", "Likely", "No"].map(
                                      (opt) => (
                                        <label
                                          key={opt}
                                          className="cursor-pointer block"
                                        >
                                          <input
                                            type="radio"
                                            name="recommend"
                                            value={opt}
                                            className="hidden"
                                            onChange={handleChange}
                                            checked={formData.recommend === opt}
                                          />
                                          <span
                                            className={`px-6 py-4 border text-[10px] uppercase tracking-widest font-bold transition-all duration-500 block rounded-lg ${formData.recommend === opt ? "bg-gold text-[#060f09] border-gold" : errors.includes("recommend") ? "bg-red-900/10 border-red-500/20 text-red-200/40" : "bg-white/[0.02] border-white/5 text-white/30"}`}
                                          >
                                            {opt}
                                          </span>
                                        </label>
                                      ),
                                    )}
                                  </div>
                                </motion.div>
                              </div>
                              <div className="pt-12 border-t border-white/5">
                                <label className="block text-[9px] uppercase tracking-[0.4em] text-gold mb-6 font-bold">
                                  Next Dream Destination?
                                </label>
                                <input
                                  type="text"
                                  name="next_dest"
                                  value={formData.next_dest}
                                  onChange={handleChange}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") e.preventDefault();
                                  }}
                                  placeholder="Serengeti, Victoria Falls, Okavango..."
                                  className="w-full bg-transparent border-b border-white/10 focus:border-gold/50 py-6 outline-none transition-all font-serif text-3xl text-cream placeholder:text-white/5"
                                />
                              </div>
                            </div>
                          )}

                          {step === 8 && (
                            <div className="space-y-8">
                              <motion.div
                                animate={
                                  errors.includes("final")
                                    ? { x: [-4, 4, -4, 4, 0] }
                                    : {}
                                }
                              >
                                <label
                                  className={`block text-[9px] uppercase tracking-[0.4em] font-bold italic ${errors.includes("final") ? "text-red-400" : "text-gold"}`}
                                >
                                  One Last Entry
                                </label>
                                <textarea
                                  name="final"
                                  value={formData.final}
                                  onChange={handleChange}
                                  placeholder="Any last reflections on your Tilenga adventure?"
                                  className={`w-full bg-transparent border p-10 outline-none transition-all font-serif text-2xl placeholder:text-white/5 min-h-[320px] rounded-2xl ${errors.includes("final") ? "border-red-500/30 text-red-50" : "border-white/5 focus:border-gold/20 text-cream"}`}
                                />
                                {errors.includes("final") && (
                                  <p className="text-red-400/60 text-[9px] uppercase tracking-[0.2em] font-bold italic mt-4">
                                    One last thought to seal your journal
                                  </p>
                                )}
                              </motion.div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Bar */}
                  <div className="flex items-center gap-8 mt-16 pt-10 border-t border-white/5">
                    {step > 1 && (
                      <motion.button
                        type="button"
                        whileHover={{ x: -3 }}
                        onClick={handleBack}
                        className="text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-gold transition-colors duration-500 flex items-center gap-3 font-bold"
                      >
                        <span>←</span> Back
                      </motion.button>
                    )}

                    {step < totalSteps ? (
                      <motion.button
                        type="button"
                        whileHover={{
                          y: -4,
                          boxShadow: "0 20px 40px rgba(253,183,23,0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleNext}
                        className="flex-1 bg-gold text-[#060f09] py-6 px-10 text-[10px] uppercase tracking-[0.5em] font-black transition-all duration-500 rounded-xl shadow-[0_10px_30px_-5px_rgba(253,183,23,0.4)]"
                      >
                        Next Chapter
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        whileHover={{
                          y: -4,
                          boxShadow: "0 20px 40px rgba(253,183,23,0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="flex-1 bg-gold text-[#060f09] py-6 px-10 text-[10px] uppercase tracking-[0.5em] font-black transition-all duration-500 rounded-xl shadow-[0_10px_30px_-5px_rgba(253,183,23,0.4)] disabled:opacity-50"
                      >
                        {isSubmitting ? "Preserving Log..." : "Seal & Complete"}
                      </motion.button>
                    )}
                  </div>
                  {error && (
                    <p className="text-red-400/80 text-center mt-8 text-[9px] uppercase tracking-widest font-bold">
                      {error}
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center bg-[#0c1a12]/60 backdrop-blur-3xl border border-gold/10 rounded-3xl p-16 md:p-24 shadow-2xl relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring", damping: 12 }}
                className="w-20 h-20 bg-gold text-[#060f09] rounded-full flex items-center justify-center mx-auto mb-12 text-3xl shadow-[0_0_40px_rgba(253,183,23,0.4)]"
              >
                ✓
              </motion.div>

              <h2 className="font-serif text-5xl md:text-7xl text-cream mb-8 uppercase tracking-widest leading-none">
                Asante <br />
                <em className="text-gold italic not-italic">Sana</em>
              </h2>
              <div className="w-16 h-px bg-gold/30 mx-auto mb-10" />

              <p className="text-cream/50 text-base md:text-lg mb-16 max-w-sm mx-auto leading-relaxed font-serif italic">
                Thank you for contributing to the Tilenga legacy. Your story is
                now part of our history.
              </p>

              <div className="flex flex-col gap-6 max-w-xs mx-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.tripadvisor.com/Attraction_Review-g293841-d32809885-Reviews-Tilenga_Safaris-Kampala_Central_Region.html"
                  className="bg-gold text-[#060f09] py-5 px-10 text-[10px] uppercase tracking-[0.3em] font-black rounded-xl shadow-lg transition-all"
                  target="_blank"
                >
                  ⭐ TripAdvisor Review
                </motion.a>
                <Link
                  href="/"
                  className="border border-white/5 hover:border-gold/30 text-white/30 hover:text-gold py-5 px-10 text-[10px] uppercase tracking-[0.3em] font-bold rounded-xl transition-all duration-500"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Immersive Footer */}
      <footer className="relative z-10 mt-auto py-12 text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-8 h-px bg-gold/10" />
          <p className="text-[9px] uppercase tracking-[0.6em] text-gold/20 font-light">
            The Spirit of Discovery
          </p>
          <div className="w-8 h-px bg-gold/10" />
        </div>
      </footer>
    </div>
  );
}
