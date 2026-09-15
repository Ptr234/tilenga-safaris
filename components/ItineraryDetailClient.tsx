"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import SplitText from "@/components/motion/SplitText";
import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";
import ItineraryRequestPopup from "@/components/ItineraryRequestPopup";
import { urlForImage } from "@/lib/sanity.image";
import { WIDE_16_9, LANDSCAPE_4_3 } from "@/lib/imageDimensions";
import type { Itinerary } from "@/types/sanity";

export default function ItineraryDetailClient({ itinerary }: { itinerary: Itinerary }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isItineraryRequestOpen, setIsItineraryRequestOpen] = useState(false);

  const heroImageUrl = itinerary.heroImage
    ? urlForImage(itinerary.heroImage, WIDE_16_9).url()
    : undefined;
  const primaryDestination = itinerary.destinations?.[0];

  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[70vh] min-h-[440px] overflow-hidden flex items-end">
        {heroImageUrl && (
          <div
            className="absolute inset-0 scale-110 transition-transform duration-[8000ms]"
            style={{
              backgroundImage: `url('${heroImageUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">
              {itinerary.destinations?.map((d) => d.name).join(" & ") || "Safari"}
            </p>
          </FadeIn>
          <h1 className="font-serif text-4xl md:text-6xl text-cream mb-3 leading-tight">
            <SplitText text={itinerary.title} by="word" stagger={0.04} delay={0.2} />
          </h1>
          {itinerary.tagline && (
            <FadeIn direction="up" delay={0.5}>
              <p className="font-serif italic text-xl text-gold">{itinerary.tagline}</p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-cream/70 text-sm font-sans">
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Duration</span>
            {itinerary.duration}
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Price</span>
            {itinerary.price}
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Destinations</span>
            {itinerary.destinations?.map((d) => d.name).join(", ")}
          </div>
        </div>
      </section>

      {/* Summary + day-by-day */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="section-label mb-3">Overview</p>
            <p className="text-stone font-sans leading-relaxed text-lg mb-14">{itinerary.summary}</p>
          </FadeIn>

          {itinerary.days && itinerary.days.length > 0 && (
            <FadeIn direction="up">
              <h2 className="font-serif text-3xl md:text-4xl text-forest mb-8">Day by Day</h2>
              <div className="space-y-4 mb-14">
                {itinerary.days.map((day) => (
                  <div key={day.dayLabel} className="flex gap-4 border-t border-gold/10 pt-4">
                    <span className="text-gold text-[10px] uppercase tracking-widest font-sans w-24 shrink-0 pt-0.5">
                      {day.dayLabel}
                    </span>
                    <div className="text-stone font-sans text-sm leading-relaxed">
                      {day.title && <p className="text-forest font-semibold mb-1">{day.title}</p>}
                      <p>{day.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {itinerary.activities && itinerary.activities.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-14">
              {itinerary.activities.map((act) => (
                <span
                  key={act}
                  className="text-[10px] uppercase tracking-widest font-sans border border-gold/30 text-forest/70 px-3 py-1.5 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {act}
                </span>
              ))}
            </div>
          )}

          {itinerary.destinations && itinerary.destinations.length > 0 && (
            <div className="mb-14">
              <p className="section-label mb-3">Destinations Covered</p>
              <div className="flex flex-wrap gap-4">
                {itinerary.destinations.map((d) => (
                  <Link
                    key={d.name}
                    href={d.href}
                    className="font-serif italic text-gold text-lg hover:text-forest transition-colors"
                  >
                    {d.name} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary !px-6 !py-2.5 text-[11px]">
              Enquire About This Package
            </button>
            <button
              onClick={() => setIsItineraryRequestOpen(true)}
              className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors"
            >
              Request a Custom Version &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Related itineraries */}
      {itinerary.relatedItineraries && itinerary.relatedItineraries.length > 0 && (
        <section className="bg-forest-dark py-20 px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="section-label text-gold mb-3">You May Also Like</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">Related Journeys</h2>
          </FadeIn>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itinerary.relatedItineraries.map((rel) => (
              <Link key={rel.slug.current} href={`/itineraries/${rel.slug.current}/`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  {rel.heroImage && (
                    <Image
                      src={urlForImage(rel.heroImage, LANDSCAPE_4_3).url()}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <p className="font-serif text-lg text-cream mb-1">{rel.title}</p>
                {rel.duration && <p className="text-gold text-xs uppercase tracking-widest">{rel.duration}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Book This Journey?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Let our specialists tailor this itinerary to your dates, group size, and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-a-trip" className="btn-outline">
              Tailor Your Journey
            </Link>
            <Link href="/itineraries" className="btn-ghost">
              More Itineraries
            </Link>
          </div>
        </FadeIn>
      </section>

      <PackageEnquiryPopup
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageName={itinerary.title}
      />

      <ItineraryRequestPopup
        isOpen={isItineraryRequestOpen}
        onClose={() => setIsItineraryRequestOpen(false)}
        destination={primaryDestination?.name ?? ""}
      />
    </>
  );
}
