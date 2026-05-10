"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const rooms = [
  {
    name: "Premium Tented Cottages",
    count: "13 Units",
    description:
      "Named in the Lukhonzo language of Kasese — Kambere, Thembo, Busomungu — each tented cottage is positioned at the highest point of the escarpment on Mpondwe road, divided into sunrise and sunset wings. Wide views of both Lake Kikorongo and Lake George, surrounded by maintained bush.",
    features: ["Lake Kikorongo & George views", "Sunrise & sunset wings", "Private terrace", "Rwenzori Mountain panorama", "En suite facilities"],
    image: `${base}/photos/kikorongo_room2.jpg`,
  },
  {
    name: "Intimate Cottages",
    count: "5 Units",
    description:
      "Situated at the landscape edges, these smaller cottages are ideal for those who prefer a compact, quieter retreat. Striking sunrise views over both lakes make them a favourite for birders, couples, writers, and photographers.",
    features: ["Ground-level access", "Lake views", "Striking sunrises", "Indoor bathroom", "Ideal for birders & photographers"],
    image: `${base}/photos/kikorongo_room1.jpg`,
  },
];

const activities = [
  { name: "Kazinga Channel Cruise", desc: "Sail the 40km channel between Lake Edward and Lake George — home to the world's greatest concentration of hippos, Nile crocodiles, and 600+ bird species." },
  { name: "Game Drives", desc: "Track lions, elephants, buffaloes, leopards, and the famous tree-climbing lions of Ishasha sector on guided morning and evening drives." },
  { name: "Bird Watching", desc: "Over 600 bird species — including shoebill storks, African skimmers, and the rare martial eagle — right on the lodge doorstep." },
  { name: "Rwenzori Climbing", desc: "The legendary Mountains of the Moon — Africa's third-highest peak with equatorial glaciers, giant heathers, and stunning Albertine Rift views." },
  { name: "Lake Kikorongo Sunset", desc: "Evening boat cruises on Lake Kikorongo with spectacular sunsets over the Rwenzori Mountains and prolific birdlife." },
  { name: "Chimpanzee Tracking", desc: "Kibale National Park, just 3 hours away, offers one of Africa's finest chimpanzee tracking experiences." },
];

const quickFacts = [
  { label: "Total Cottages", value: "18" },
  { label: "Premium Tents", value: "13" },
  { label: "Intimate Cottages", value: "5" },
  { label: "Location", value: "Equator" },
];

const locationDistances = [
  { place: "Kasese Town", distance: "~10 min" },
  { place: "Kasese Airstrip", distance: "~15 min" },
  { place: "Kazinga Channel", distance: "~20 min" },
  { place: "Queen Elizabeth NP Gate", distance: "~25 min" },
  { place: "Kampala", distance: "~5 hrs" },
];

export default function KikorongoSafariLodgePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Script defer src="https://resnova.resrequest.com/widget/js/app.js" strategy="afterInteractive" />

      {/* ── HERO ── */}
      <section className="grain-overlay relative h-screen min-h-[600px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${base}/photos/kikorongo_room1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/25" />

        <div className="relative z-10 px-5 md:px-20 pb-10 md:pb-20 max-w-3xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <p className="section-label text-gold">Our Lodges · Uganda</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-none mb-4">
              Kikorongo<br /><em className="italic text-gold">Safari Lodge</em>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.42}>
            <p className="text-cream/60 font-sans text-sm mb-8 leading-relaxed max-w-md">
              At the Equator, Above the Lakes — Queen Elizabeth National Park, Kasese
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.56}>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-ghost"
            >
              Book a Stay
            </button>
          </FadeIn>
        </div>

        {/* Quick facts */}
        <div className="absolute bottom-8 right-8 md:right-16 z-10 hidden md:block">
          <FadeIn direction="up" delay={0.7}>
            <div className="flex gap-6">
              {quickFacts.map((f) => (
                <div key={f.label} className="text-center">
                  <p className="font-serif text-2xl text-gold">{f.value}</p>
                  <p className="text-cream/40 text-[10px] uppercase tracking-widest font-sans mt-0.5">{f.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── LODGE OVERVIEW ── */}
      <section className="grid md:grid-cols-2 overflow-hidden" style={{ minHeight: "75vh" }}>
        {/* Text */}
        <div className="bg-cream flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 order-2 md:order-1">
          <FadeIn direction="left">
            <p className="section-label mb-3">Lodge Overview</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              Perched at the Equator,<br />Above the Lakes
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4 text-sm">
              Situated directly on the Equator on a steep hill in Kasese, Kikorongo Safari Lodge looks
              out over the glistening waters of Lake George and Lake Kikorongo — with the snow-capped
              Rwenzori Mountains on the horizon.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4 text-sm">
              The lodge is the perfect base for exploring all that Queen Elizabeth NP has to offer — from
              the legendary Kazinga Channel boat safari to tracking tree-climbing lions in Ishasha.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-10 text-sm">
              Guests describe a profoundly peaceful atmosphere — morning bird song, cool mountain air,
              and the lakes shimmering gold at sunset from their private terrace.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-gold/15 pt-8 mb-10">
              {[
                { value: "18", label: "Cottages" },
                { value: "0°", label: "The Equator" },
                { value: "600+", label: "Bird Species" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl text-gold mb-1">{s.value}</p>
                  <p className="text-stone/60 text-[10px] uppercase tracking-widest font-sans">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary"
              >
                Book a Stay
              </button>
              <a href="mailto:bookings@kikorongosafarilodge.com" className="btn-outline">Email Lodge</a>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <div className="relative min-h-[50vh] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <ImageReveal direction="right" className="absolute inset-0">
            <img
              src={`${base}/photos/kikorongo_cottage1.jpg`}
              alt="Kikorongo Safari Lodge lake view"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </ImageReveal>
        </div>
      </section>

      {/* ── ACCOMMODATION ── */}
      <section className="bg-forest-dark py-20 md:py-32 px-5 md:px-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16 md:mb-24">
            <p className="section-label text-gold mb-4">Accommodation</p>
            <h2 className="font-serif text-4xl md:text-6xl text-cream uppercase tracking-widest">
              Sanctuaries of<br /><em className="italic text-gold">Quiet Luxury</em>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-8" />
          </FadeIn>

          <StaggerGrid className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <StaggerItem key={room.name}>
                <div className="group bg-white/5 border border-white/10 overflow-hidden flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                        {room.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl text-cream mb-4">{room.name}</h3>
                    <p className="text-cream/50 text-sm font-sans leading-relaxed mb-8 flex-1">
                      {room.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {room.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gold/60">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="bg-cream py-20 md:py-32 px-5 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[40fr_60fr] gap-16 md:gap-24 items-start">
            <div>
              <FadeIn direction="left">
                <p className="section-label mb-4">The Experience</p>
                <h2 className="font-serif text-4xl md:text-6xl text-forest leading-tight mb-8">
                  Adventure in the<br /><em className="italic text-gold">Queen Elizabeth NP</em>
                </h2>
                <div className="w-12 h-px bg-gold mb-10" />
                <p className="text-stone font-sans text-base leading-relaxed mb-10">
                  From tracking lions across the savannah to watching hippos from a private boat 
                  on the Kazinga Channel, Kikorongo provides an unfiltered gateway to Uganda&apos;s 
                  most diverse ecosystem.
                </p>
                <Link href="/destinations/uganda" className="btn-primary">Explore Region</Link>
              </FadeIn>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {activities.map((act, i) => (
                <FadeIn key={act.name} direction="up" delay={i * 0.1}>
                  <div className="border-l border-gold/20 pl-6 group">
                    <h4 className="font-serif text-xl text-forest mb-3 group-hover:text-gold transition-colors">{act.name}</h4>
                    <p className="text-stone/70 font-sans text-sm leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LODGE LIFE — A Day at Kikorongo ── */}
      <section className="bg-forest-dark overflow-hidden">

        {/* Section Header */}
        <div className="relative px-6 md:px-16 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="absolute inset-0 grain-overlay opacity-[0.05] pointer-events-none" />
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold">Kikorongo Archive</span>
                <div className="w-20 h-px bg-gold/30" />
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-[10rem] text-cream leading-[0.75] uppercase tracking-tighter">
                Lodge <br />
                <span className="italic text-gold lowercase tracking-normal pl-8 sm:pl-12 md:pl-32 block">Life</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="max-w-[320px]">
              <div className="space-y-4 border-l border-gold/20 pl-8 py-2">
                <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40 font-mono">Archive No. 022</p>
                <p className="text-gold font-mono text-xs leading-relaxed uppercase tracking-widest">
                  Queen Elizabeth Escarpment <br />
                  0° 0' 11.2" N · 29° 59' 31.8" E
                </p>
                <p className="text-cream/50 font-serif italic text-lg leading-relaxed">
                  "A sanctuary perched where the hemispheres meet."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── ACT I: The Escarpment ── */}
        <FadeIn>
          <div className="relative h-[70vh] md:h-[88vh] overflow-hidden group">
            <img
              src={`${base}/photos/kikorongo_outside.jpg`}
              alt="Kikorongo Safari Lodge on the Equator"
              className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
              <div className="max-w-2xl">
                <p className="text-gold font-mono text-[10px] uppercase tracking-[0.5em] mb-5">I · The Escarpment</p>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream leading-tight mb-5">
                  Perched at the Equator,<br /><em className="italic text-gold">between two worlds.</em>
                </h3>
                <p className="text-cream/50 font-sans text-sm leading-relaxed max-w-lg">
                  At precisely 0° latitude, Kikorongo sits on a steep ridge above Lake George and Lake Kikorongo — the Rwenzori Mountains framing the horizon, and the whole sweep of Queen Elizabeth NP laid out below. This is not just a lodge. It is a vantage point on Africa.
                </p>
              </div>
            </div>
            <div className="absolute top-10 right-10 text-right">
              <p className="font-mono text-[9px] text-cream/20 uppercase tracking-[0.4em]">00° 00' · The Equator</p>
            </div>
          </div>
        </FadeIn>

        {/* ── ACT II: First Light Above the Lakes ── */}
        <div className="grid md:grid-cols-2">
          {/* Left: Cottage with lake view — tall portrait */}
          <FadeIn direction="left" className="relative overflow-hidden group min-h-[55vh]">
            <img
              src={`${base}/photos/kikorongo_cottage1.jpg`}
              alt="Cottage with Lake View at Dawn"
              className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.4em] mb-2">05:50 hrs</p>
              <h4 className="font-serif italic text-cream text-2xl md:text-3xl">First Light on the Lakes</h4>
            </div>
          </FadeIn>

          {/* Right: Editorial copy + wide horizon image */}
          <div className="bg-[#0b1a10] flex flex-col justify-between p-10 md:p-14 lg:p-20">
            <FadeIn direction="right">
              <p className="text-gold font-mono text-[10px] uppercase tracking-[0.5em] mb-8">II · First Light</p>
              <p className="font-serif italic text-cream/90 text-2xl md:text-3xl leading-relaxed mb-8">
                "You wake before the sun. Both lakes are still. Then the Rwenzori turns gold."
              </p>
              <p className="text-cream/40 font-sans text-sm leading-relaxed">
                Mornings at Kikorongo are unhurried. Cool mountain air drifts through the terrace. Bird song fills the escarpment long before coffee arrives. The view alone is enough to hold you for an hour — two lakes, one horizon, and the ancient snow peaks of the Mountains of the Moon.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="mt-10">
              <div className="relative overflow-hidden group">
                <img
                  src={`${base}/photos/kikorongo_cottage2.jpg`}
                  alt="Horizon View from the Escarpment"
                  className="w-full aspect-[16/8] object-cover transition-transform duration-[4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 to-transparent" />
                <div className="absolute bottom-4 right-5">
                  <span className="text-[9px] text-cream/40 font-mono uppercase tracking-widest">00° Equator · Lake George</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── ACT III: Your Guide into the Wild ── */}
        <div className="grid md:grid-cols-5">
          {/* Left: Editorial copy + guest moment */}
          <div className="md:col-span-2 bg-[#091510] flex flex-col justify-center p-10 md:p-14">
            <FadeIn direction="left">
              <p className="text-gold font-mono text-[10px] uppercase tracking-[0.5em] mb-6">III · The Guide</p>
              <h3 className="font-serif text-3xl md:text-4xl text-cream leading-tight mb-6">
                A voice that knows<br /><em className="italic text-gold">every sound.</em>
              </h3>
              <div className="w-8 h-px bg-gold/40 mb-6" />
              <p className="text-cream/40 font-sans text-sm leading-relaxed mb-10">
                Our guides are naturalists first and storytellers second. They read the savannah the way others read a map — a broken branch, a faint print in the dust, a silence that is never quite silent. Every game drive becomes a conversation with the landscape.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="relative overflow-hidden group">
                <img
                  src={`${base}/photos/kikorongo_tourist.jpg`}
                  alt="Guests in the Wild"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="font-mono text-[9px] text-cream/40 uppercase tracking-widest">In the Field · QENP</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Ranger — full tall image */}
          <FadeIn direction="right" className="md:col-span-3 relative overflow-hidden group min-h-[60vh]">
            <img
              src={`${base}/photos/kikorongo_ranger.jpg`}
              alt="Kikorongo Safari Ranger"
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#091510]/60" />
            <div className="absolute top-8 right-8 text-right">
              <p className="font-serif italic text-gold/60 text-xl">Into the Wild</p>
              <p className="font-mono text-[9px] text-cream/25 uppercase tracking-widest mt-1">Queen Elizabeth NP</p>
            </div>
          </FadeIn>
        </div>

        {/* ── ACT IV: The Sanctuary Rooms ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            {
              src: `${base}/photos/kikorongo_room1.jpg`,
              alt: "Intimate Cottage Interior",
              label: "Intimate Retreat",
              sub: "Ground-level · Lake views · Birder's favourite",
              delay: 0,
            },
            {
              src: `${base}/photos/kikorongo_room2.jpg`,
              alt: "Premium Tented Cottage",
              label: "Tented Sanctuary",
              sub: "Sunrise & sunset wings · Rwenzori panorama",
              delay: 0.15,
            },
          ].map((item) => (
            <FadeIn key={item.alt} direction="up" delay={item.delay}>
              <div className="relative group overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-[4/3] md:aspect-[16/10] object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-serif italic text-gold text-xl mb-2">{item.label}</h4>
                  <p className="text-cream/50 text-[9px] uppercase tracking-widest font-mono">{item.sub}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="font-serif italic text-gold/60 text-lg">{item.label}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── ACT V: On Safari ── */}
        <FadeIn>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden group">
            <img
              src={`${base}/photos/kikorongo_travel.jpg`}
              alt="Game Drive in Queen Elizabeth NP"
              className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-forest-dark/35 group-hover:bg-forest-dark/20 transition-colors duration-1000" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-gold font-mono text-[10px] uppercase tracking-[0.5em] mb-6">V · Into the Park</p>
              <h3 className="font-serif italic text-cream text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-tight">
                Lions. Elephants.<br />600 birds and counting.
              </h3>
            </div>
            <div className="absolute bottom-6 right-8">
              <span className="text-cream/20 font-mono text-[9px] uppercase tracking-widest">Queen Elizabeth National Park</span>
            </div>
          </div>
        </FadeIn>

        {/* ── ACT VI: The Hearth — Evening & CTA ── */}
        <div className="grid md:grid-cols-2">
          {/* Left: Large fireplace image */}
          <FadeIn direction="left" className="relative overflow-hidden group min-h-[55vh]">
            <img
              src={`${base}/photos/kikorongo_fireplace.jpg`}
              alt="Evening Fireplace at Kikorongo"
              className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060e09]/60" />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.4em] mb-2">19:42 hrs</p>
              <h4 className="font-serif italic text-cream text-2xl">The Hearth</h4>
            </div>
          </FadeIn>

          {/* Right: Evening editorial copy + CTA */}
          <div className="bg-[#060e09] flex flex-col justify-center p-10 md:p-14 lg:p-20">
            <FadeIn direction="right">
              <p className="text-gold font-mono text-[10px] uppercase tracking-[0.5em] mb-6">VI · Nightfall</p>
              <h3 className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-6">
                When the sun drops<br />behind the <em className="italic text-gold">Rwenzori.</em>
              </h3>
              <div className="w-8 h-px bg-gold/40 mb-6" />
              <p className="text-cream/40 font-sans text-sm leading-relaxed mb-10">
                As dusk pulls the colour from the lakes, the lodge turns inward. The fire is lit. Birdsong gives way to the rustle of the bush. Cool highland air settles over the escarpment, and the night sky above the Equator fills with more stars than you thought possible.
              </p>
              <p className="font-serif italic text-cream/25 text-lg leading-relaxed mb-8">
                "A profoundly peaceful atmosphere — we did not want to leave."
              </p>
              <p className="text-cream/20 font-mono text-[9px] uppercase tracking-widest mb-10">— A Kikorongo Guest, 2024</p>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary self-start"
              >
                Experience It Yourself
              </button>
            </FadeIn>
          </div>
        </div>

        {/* Background watermark */}
        <div className="overflow-hidden pointer-events-none select-none opacity-[0.025]">
          <p className="font-serif text-[20vw] whitespace-nowrap uppercase tracking-tighter text-cream">Kikorongo</p>
        </div>

      </section>

      {/* ── LOCATION & BOOKING ── */}
      <section className="bg-cream py-20 md:py-32 px-5 md:px-16 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Travel Times */}
            <div>
              <FadeIn direction="left">
                <h3 className="font-serif text-3xl text-forest mb-10">Getting There</h3>
                <div className="space-y-6">
                  {locationDistances.map((loc) => (
                    <div key={loc.place} className="flex items-center justify-between border-b border-gold/15 pb-4">
                      <span className="font-sans text-xs uppercase tracking-widest text-stone">{loc.place}</span>
                      <span className="font-serif italic text-forest">{loc.distance}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-forest-dark p-8 text-cream">
                  <p className="font-serif text-lg text-gold mb-4">Location Note</p>
                  <p className="font-sans text-sm leading-relaxed text-cream/60">
                    Kikorongo Safari Lodge is perched on a high ridge. While the views are unmatched, 
                    the paths between cottages can be steep. Please inform us if you require 
                    a cottage with easier access.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Direct Book */}
            <div className="bg-white p-10 md:p-16 border border-gold/20 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 rounded-full pointer-events-none" />
              
              <FadeIn direction="up">
                <p className="section-label mb-4">Reservations</p>
                <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-8">
                  Book Kikorongo<br /><em className="italic text-gold">Safari Lodge</em>
                </h2>
                
                <div className="space-y-8 mb-12">
                  {[
                    { label: "Phone", value: "+256 789 390 350", href: "tel:+256789390350" },
                    { label: "Phone 2", value: "+256 775 69 2334", href: "tel:+256775692334" },
                    { label: "Email", value: "bookings@kikorongosafarilodge.com", href: "mailto:bookings@kikorongosafarilodge.com" },
                    { label: "Web", value: "www.kikorongosafarilodge.com", href: "https://www.kikorongosafarilodge.com" },
                  ].map((contact) => (
                    <div key={contact.label}>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-1">{contact.label}</p>
                      <a href={contact.href} className="font-serif text-xl text-forest hover:text-gold transition-colors break-all">
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="btn-primary w-full text-center"
                  >
                    Book a Stay
                  </button>
                  <a 
                    href="https://wa.me/256789390350?text=I'm interested in Kikorongo Safari Lodge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full text-center"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-forest-dark/95 backdrop-blur-md"
            onClick={() => setIsBookingOpen(false)}
          />
          <div className="relative w-full max-w-5xl h-[90vh] bg-cream rounded-sm overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10">
              <h3 className="font-serif text-forest text-xl">Book Kikorongo Safari Lodge</h3>
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-forest hover:text-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto bg-white min-h-[600px]" data-lenis-prevent>
              {/* @ts-expect-error rr-resnova is a third-party web component */}
              <rr-resnova 
                key="kikorongo-widget" 
                widget-id="a145c6a5-916b-4db3-b2e4-b15a19e60992" 
                api-url="https://resnova.resrequest.com/api/"
                style={{ display: 'block', width: '100%', minHeight: '600px' }}
              ></rr-resnova>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <section className="bg-forest py-12 px-5 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <Link href="/lodges/tilenga-safari-lodge" className="group flex items-center gap-6">
              <div className="text-right">
                <p className="text-gold/40 text-[9px] uppercase tracking-widest mb-1">Previous Sanctuary</p>
                <p className="text-cream font-serif text-xl group-hover:text-gold transition-colors">Tilenga Safari Lodge</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-all">
                 ←
              </div>
           </Link>
           
           <div className="w-px h-12 bg-white/10 hidden md:block" />

           <Link href="/lodges" className="text-gold/40 text-[10px] uppercase tracking-[0.4em] hover:text-gold transition-colors">
              Back to Lodges
           </Link>
        </div>
      </section>
    </>
  );
}
