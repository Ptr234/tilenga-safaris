"use client";

import Link from "next/link";
import { urlForImage } from "@/lib/sanity.image";
import useSiteImages from "@/lib/useSiteImages";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";
import { Destination } from "@/types/sanity";
import {
  PORTRAIT_4_5,
  PORTRAIT_3_4,
  WIDE_16_9,
} from "@/lib/imageDimensions";

interface DestinationsPageClientProps {
  destinations: Destination[];
}

export default function DestinationsPageClient({
  destinations,
}: DestinationsPageClientProps) {
  const siteImages = useSiteImages();

  if (!destinations || destinations.length === 0) return null;

  const getSiteImageUrlLocal = (
    key: string,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => getSiteImageUrl(siteImages, key, fallback, dimensions);

  // Split destinations for the layout
  const uganda =
    destinations.find((d) => d.name === "Uganda") || destinations[0];
  const others = destinations.filter((d) => d.name !== uganda.name);
  const row1Others = others.slice(0, 2);
  const row2Others = others.slice(2, 6);

  return (
    <>
      {/* Cinematic hero */}
      <section className="grain-overlay relative h-[65vh] min-h-[420px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${getSiteImageUrlLocal("destinationsHero", "/photos/newstock/AfricanLandscape.jpg", WIDE_16_9)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
        <div className="relative z-10 px-8 md:px-20 pb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <p className="section-label text-gold">Africa &amp; Beyond</p>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-cream leading-[0.9] mb-6 uppercase tracking-[0.15em]">
            Our
            <br />
            <em className="not-italic text-gold">Destinations</em>
          </h1>
          <p className="text-cream/60 font-sans text-base max-w-md leading-relaxed">
            Seven breathtaking destinations. Each with its own character,
            wildlife, and transformative story.
          </p>
        </div>
      </section>

      {/* Editorial asymmetric grid — top row */}
      <section className="bg-forest-dark p-2">
        {/* Row 1: Uganda (large 2/3) + Kenya+Tanzania stacked (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-2">
          {/* Featured Destination — large feature */}
          <Link
            href={uganda.href}
            className="lg:col-span-2 group relative overflow-hidden h-[85vh] min-h-[500px] block"
          >
            <img
              src={urlForImage(uganda.image, WIDE_16_9).url()}
              alt={uganda.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/20 to-transparent" />
            {/* Large number */}
            <span className="absolute top-6 left-8 font-serif text-cream/5 text-[10rem] md:text-[14rem] leading-none select-none pointer-events-none uppercase">
              {uganda.num || "01"}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="w-12 h-px bg-gold mb-4 transition-all duration-500 group-hover:w-20" />
              <p className="text-gold text-xs uppercase tracking-[0.35em] font-sans mb-3">
                {uganda.tag}
              </p>
              <h2 className="font-serif text-5xl md:text-7xl text-cream leading-none mb-4 uppercase tracking-[0.15em]">
                {uganda.name}
              </h2>
              <p className="text-cream/60 text-base font-sans leading-relaxed max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-6">
                {uganda.description}
              </p>
              <span className="text-gold text-[11px] uppercase tracking-widest font-sans border border-gold/30 px-4 py-2 bg-black/20 backdrop-blur-sm">
                Best time: {uganda.bestTime}
              </span>
            </div>
          </Link>

          {/* Stacked destinations */}
          <div className="lg:col-span-1 flex flex-col gap-2">
            {row1Others.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative overflow-hidden flex-1 min-h-[300px] block"
              >
                <img
                  src={urlForImage(dest.image, PORTRAIT_4_5).url()}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
                <span className="absolute top-6 right-8 font-serif text-cream/10 text-7xl leading-none select-none uppercase">
                  {dest.num}
                </span>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="w-8 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-16" />
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-1">
                    {dest.tag}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream uppercase tracking-[0.15em] mb-3">
                    {dest.name}
                  </h3>
                  <span className="text-gold text-[10px] uppercase tracking-widest font-sans border border-gold/30 px-3 py-1.5 bg-black/20 backdrop-blur-sm">
                    Best time: {dest.bestTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: Remaining destinations — equal quarters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {row2Others.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group relative overflow-hidden h-[65vh] min-h-[400px] block"
            >
              <img
                src={urlForImage(dest.image, PORTRAIT_3_4).url()}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-transparent" />
              <span className="absolute top-6 left-6 font-serif text-cream/10 text-7xl leading-none select-none uppercase">
                {dest.num}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-10 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-20" />
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-1">
                  {dest.tag}
                </p>
                <h3 className="font-serif text-3xl text-cream mb-3 uppercase tracking-[0.15em]">
                  {dest.name}
                </h3>
                <span className="inline-block text-gold text-[10px] uppercase tracking-widest font-sans border border-gold/30 px-3 py-1.5 bg-black/20 backdrop-blur-sm mb-3">
                  Best time: {dest.bestTime}
                </span>
                <p className="text-cream/55 text-sm font-sans leading-relaxed translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial info strip */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold/50" />
            <p className="section-label">Plan Your Journey</p>
            <div className="w-10 h-px bg-gold/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
            Every Destination,{" "}
            <em className="font-serif italic text-gold">Tailored to You</em>
          </h2>
          <p className="text-stone font-sans text-sm leading-relaxed max-w-2xl mx-auto mb-12">
            From Uganda&apos;s gorillas to Zanzibar&apos;s shores — our
            specialists combine destinations into seamless multi-country
            itineraries, or craft single-destination deep dives timed to
            wildlife seasons and your travel style.
          </p>
          {/* Destination quick-links as horizontal pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {destinations.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group border border-gold/40 text-forest text-xs uppercase tracking-widest font-sans px-5 py-2.5 hover:bg-forest hover:text-cream hover:border-forest transition-all duration-400"
              >
                {d.name}
              </Link>
            ))}
          </div>
          <Link href="/plan-a-trip" className="btn-primary">
            Tailor My Safari
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest py-24 px-6 md:px-16 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('${getSiteImageUrlLocal("destinationsBottomCta", "/photos/newstock/wildlifeconservation.jpg", WIDE_16_9)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <p className="section-label text-gold mb-4">Can&apos;t Decide?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
            Let Our Specialists Help
          </h2>
          <p className="text-cream/50 font-sans max-w-md mx-auto mb-10 text-sm leading-relaxed">
            Tell us your dates, interests, and budget — we&apos;ll craft a
            bespoke itinerary spanning the best of Africa.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Tailor Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
