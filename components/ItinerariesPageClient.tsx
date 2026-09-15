"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { urlForImage } from "@/lib/sanity.image";
import { LANDSCAPE_4_3 } from "@/lib/imageDimensions";
import type { Itinerary } from "@/types/sanity";

export default function ItinerariesPageClient({ itineraries }: { itineraries: Itinerary[] }) {
  return (
    <>
      <section className="grain-overlay relative h-[55vh] min-h-[360px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/photos/newstock/AfricanLandscape.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Ready-Made Journeys</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream leading-tight">Safari Itineraries</h1>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {itineraries.map((it) => (
            <Link key={it.slug.current} href={`/itineraries/${it.slug.current}/`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                {it.heroImage && (
                  <Image
                    src={urlForImage(it.heroImage, LANDSCAPE_4_3).url()}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <span className="absolute top-4 left-4 bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                  {it.duration}
                </span>
              </div>
              <p className="section-label mb-1">
                {it.destinations?.map((d) => d.name).join(" & ")}
              </p>
              <h2 className="font-serif text-2xl text-forest mb-2 group-hover:text-gold transition-colors">
                {it.title}
              </h2>
              <p className="text-stone font-sans text-sm leading-relaxed line-clamp-3">{it.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Don&apos;t See What You&apos;re Looking For?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Every itinerary here can be tailored to your dates, pace, and interests — or we&apos;ll build one from scratch.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Plan a Custom Trip
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
