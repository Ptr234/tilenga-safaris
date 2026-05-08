"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    num: "01",
    title: "Airport Meet & Greet",
    desc: "Seamless arrivals — our team meets you on landing, handles your luggage, and transfers you comfortably to your first destination.",
    image: `${base}/Newpicselection/Airportmeet and greet.jpg`,
    tag: "Logistics"
  },
  {
    num: "02",
    title: "Bespoke Itinerary Design",
    desc: "Custom, day-by-day journeys built around your interests, pace, and budget. No two Tilenga itineraries are alike.",
    image: `${base}/Newpicselection/bespokeitinenarydesign.jpg`,
    tag: "Consultancy"
  },
  {
    num: "03",
    title: "Gorilla & Chimp Permits",
    desc: "We secure the hard-to-get permits for gorilla tracking and chimpanzee habituation experiences in Uganda and Rwanda.",
    image: `${base}/gorrilas/gorrilas2.jpg`,
    tag: "Special Access"
  },
  {
    num: "04",
    title: "Private Vehicle Transfers",
    desc: "Luxury 4WD and standard vehicles with experienced drivers — across Uganda, Kenya, Tanzania, and Rwanda.",
    image: `${base}/Newpicselection/privatevehichletransfers.jpg`,
    tag: "Transportation"
  },
  {
    num: "05",
    title: "Airport Transportation",
    desc: "Punctual, professional airport transfers coordinated precisely with your flight schedule — day or night.",
    image: `${base}/Newpicselection/Airport transportation.jpg`,
    tag: "Logistics"
  },
  {
    num: "06",
    title: "VIP Concierge",
    desc: "Exclusive access, restaurant reservations, last-minute permits, and anything in between — handled discreetly.",
    image: `${base}/photos/kikorongo_room1.jpg`,
    tag: "Exclusive"
  },
  {
    num: "07",
    title: "Lodge & Hotel Bookings",
    desc: "Curated lodges, camps, and boutique hotels across East Africa — including our own Tilenga and Kikorongo properties.",
    image: `${base}/photos/kikorongo_cottage2.jpg`,
    tag: "Hospitality"
  },
  {
    num: "08",
    title: "Group & Family Safaris",
    desc: "Specialist coordination for multi-generational families, corporate retreats, and private group travel of any size.",
    image: `${base}/Newpicselection/groupandfamilysafaris.jpg`,
    tag: "Specialist"
  },
];

export default function ConciergeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "20px"]);
  const barScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="travel-concierge"
      ref={sectionRef}
      className="relative bg-white"
    >
      {/* Ambient background orbs — adjusted for white bg */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full bg-gold/[0.05] blur-[120px]" />
        <div className="absolute bottom-[20%] left-[12%] w-56 h-56 rounded-full bg-forest/[0.05] blur-[80px]" />
      </div>

      <div className="flex items-start w-full">

        {/* ── LEFT PANEL — sticky ── */}
        <div className="hidden lg:block w-[38%] shrink-0 sticky top-0 h-screen overflow-hidden pl-10 xl:pl-20 pr-6">
          <motion.div style={{ y: textY }} className="w-full h-full flex flex-col justify-center py-12">

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block">
                Our Craft
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-forest leading-[0.85] mb-10">
              <span className="block text-[clamp(2.4rem,4.2vw,4.8rem)] uppercase tracking-tighter">
                The Full
              </span>
              <span className="block font-serif italic text-[clamp(2rem,3vw,3.6rem)] text-gold lowercase font-light opacity-90 mt-2">
                Concierge.
              </span>
            </h2>

            {/* Body */}
            <div className="flex flex-col gap-10 items-start mb-12">
              <p className="font-sans text-stone/70 text-base md:text-lg leading-[1.8] max-w-md font-light border-l border-gold/30 pl-6">
                Seamless coordination from touch-down to takeoff. Discover the pillars of a 
                Tilenga-standard journey, where every detail is anticipated and handled 
                with absolute care. Our dedicated specialists ensure your focus remains 
                entirely on the magic of the wild, while we architect the legacy of your 
                African odyssey behind the scenes.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/plan-a-trip"
              className="group relative inline-flex items-center gap-6 py-2 overflow-hidden transition-all duration-500"
            >
              <div className="relative flex items-center gap-4">
                <span className="w-12 h-px bg-gold/50 group-hover:w-20 transition-all duration-500" />
                <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold group-hover:tracking-[0.4em] transition-all duration-500">
                  Request Itinerary
                </span>
              </div>
            </Link>

            {/* Scroll progress bar */}
            <div className="mt-16">
              <div className="flex justify-between items-center mb-3">
                <span className="font-sans text-[8px] uppercase tracking-[0.45em] text-stone/30 font-bold">
                  Scroll to explore
                </span>
              </div>
              <div className="h-[1px] w-full bg-stone/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: barScaleX, transformOrigin: "left" }}
                  className="h-full bg-gold/50 rounded-full"
                />
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── RIGHT PANEL — scrolling image gallery ── */}
        <div
          className="w-full lg:w-[62%] pl-6 pr-10 xl:pr-20 pt-16 md:pt-24 pb-8 space-y-8 md:space-y-10"
        >
          {/* Mobile heading */}
          <div className="lg:hidden mb-12 text-center">
            <span className="font-sans text-[9px] uppercase tracking-[0.55em] font-bold text-gold block mb-4">
              Our Craft
            </span>
            <h2 className="font-serif text-forest text-4xl leading-none uppercase tracking-tight mb-2">
              The Full
            </h2>
            <p className="font-serif italic text-gold text-2xl">Concierge</p>
            <p className="font-sans text-stone/50 text-sm leading-relaxed mt-6 max-w-md mx-auto">
              Seamless coordination from touch-down to takeoff. Discover the pillars of a Tilenga-standard journey.
            </p>
            <Link href="/plan-a-trip" className="inline-flex items-center gap-3 mt-8 border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold font-sans text-[10px] font-bold uppercase tracking-[0.25em] px-7 py-3.5 transition-all duration-500">
              Request Itinerary
            </Link>
          </div>

          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.05,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="p-[5px] rounded-[20px] shadow-[0_24px_60px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.04)] border border-stone/10 bg-white"
            >
              {/* Inner image container */}
              <div className="relative rounded-[16px] overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[45vw] md:h-[35vw] lg:h-[30vw] max-h-[480px] object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04]"
                />

                {/* Cinematic gradient overlay — adjusted for light theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-80" />

                {/* Index number — watermark */}
                <div className="absolute top-5 left-6 select-none pointer-events-none">
                  <span className="font-serif text-[4rem] leading-none text-white/[0.15]">
                    {service.num}
                  </span>
                </div>

                {/* Tag — top right */}
                <div className="absolute top-5 right-5">
                  <span className="font-sans text-[8px] uppercase tracking-[0.4em] font-bold text-gold border border-gold/30 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Bottom text block */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-4 h-px bg-gold" />
                      <span className="font-sans text-[8px] uppercase tracking-[0.45em] font-bold text-gold">
                        Service Pillar
                      </span>
                    </div>
                    <h3 className="font-serif text-cream text-xl md:text-2xl leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="font-sans text-cream/80 text-sm leading-relaxed max-w-md">
                      {service.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Hover gold border reveal */}
                <div className="absolute inset-0 rounded-[16px] border border-transparent group-hover:border-gold/40 transition-colors duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
