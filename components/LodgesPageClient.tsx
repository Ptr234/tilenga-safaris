"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { urlForImage } from "@/lib/sanity.image";
import useSiteImages from "@/lib/useSiteImages";
import { Lodge } from "@/types/sanity";
import { PORTRAIT_3_4, WIDE_16_9 } from "@/lib/imageDimensions";

interface LodgesPageClientProps {
  lodges: Lodge[];
}

const pillars = [
  {
    number: "01",
    title: "Gateside Positioning",
    desc: "Both lodges sit at the entrance gates of Uganda's finest national parks — less time driving, more time immersed in the wild.",
  },
  {
    number: "02",
    title: "Wildlife At Your Door",
    desc: "Elephants, giraffes, and hippos visit both lodge grounds daily. Your safari begins the moment you step onto your balcony.",
  },
  {
    number: "03",
    title: "Authentic Uganda",
    desc: "Local staff, local cuisine, local culture. Our lodges are deeply rooted in the communities and landscapes that surround them.",
  },
];

export default function LodgesPageClient({ lodges }: LodgesPageClientProps) {
  const siteImages = useSiteImages();
  const getSiteImageUrl = (
    key: string,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => {
    const image = siteImages?.[key]?.image;
    return image ? urlForImage(image, dimensions).url() : fallback;
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="grain-overlay relative h-screen min-h-[640px] overflow-hidden flex flex-col justify-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${getSiteImageUrl("lodgeKikorongoHero", "/photos/kikorongo_room1.jpg", WIDE_16_9)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-forest-dark/20" />

        <div className="relative z-10 px-8 md:px-20 pb-24 max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold" />
              <p className="section-label text-gold">Where You Stay</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] text-cream leading-[0.9] mb-6 uppercase tracking-[0.15em]">
              Our
              <br />
              <em className="not-italic text-gold">Lodges</em>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.42}>
            <p className="text-cream/55 font-sans text-base md:text-lg leading-relaxed max-w-md mb-12">
              Two iconic sanctuaries. Positioned at the entrance gates of
              Uganda&apos;s most spectacular wilderness.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.56}>
            <div className="flex flex-col sm:flex-row gap-6">
              {lodges.map((lodge) => (
                <Link
                  key={lodge.name}
                  href={lodge.href}
                  className="btn-primary px-10"
                >
                  {lodge.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-px h-10 bg-gold/35 animate-pulse" />
          <p className="text-gold/35 text-[9px] uppercase tracking-widest font-sans">
            Scroll
          </p>
        </div>
      </section>

      {/* ── LODGE PANELS ── */}
      {lodges.map((lodge, index) => {
        const isEven = index % 2 === 0;
        const nameParts = lodge.name.split(" ");
        const nameA = nameParts[0];
        const nameB = nameParts.slice(1).join(" ");

        return (
          <section
            key={lodge.name}
            className="grid md:grid-cols-[58fr_42fr] overflow-hidden bg-forest-dark"
            style={{ minHeight: "90vh" }}
          >
            {/* Image panel */}
            <div
              className={`relative min-h-[60vh] md:min-h-0 ${isEven ? "md:order-1" : "md:order-2"}`}
            >
              <div className="absolute inset-0 overflow-hidden film-frame m-2">
                <Image
                  src={urlForImage(lodge.image, PORTRAIT_3_4).url()}
                  alt={lodge.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                />
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/10 via-transparent to-forest-dark/80 pointer-events-none z-[1]" />

              {/* Park badge */}
              <FadeIn
                direction="down"
                delay={0.5}
                className="absolute top-10 left-10 z-10"
              >
                <span className="bg-gold text-forest-dark text-[10px] uppercase tracking-[0.25em] font-sans font-bold px-5 py-2.5">
                  {lodge.location}
                </span>
              </FadeIn>

              {/* Stats bar */}
              {lodge.stats && (
                <FadeIn
                  direction="fade"
                  delay={0.7}
                  className="absolute bottom-6 left-6 right-6 z-10"
                >
                  <div className="flex divide-x divide-white/10 bg-forest-dark/90 backdrop-blur-md border border-white/5 shadow-2xl">
                    {lodge.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex-1 px-6 py-6 text-center"
                      >
                        <p className="font-serif text-2xl md:text-3xl text-gold">
                          {stat.value}
                        </p>
                        <p className="text-cream/40 text-[9px] uppercase tracking-widest font-sans mt-2">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Content panel */}
            <div
              className={`${isEven ? "bg-forest-dark" : "bg-forest"} flex flex-col justify-center px-12 md:px-20 py-20 md:py-24 ${isEven ? "md:order-2" : "md:order-1"}`}
            >
              <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
                <p className="section-label text-gold mb-6">{lodge.tag}</p>
                <h2 className="font-serif text-5xl md:text-7xl text-cream leading-[0.95] uppercase tracking-[0.15em]">
                  {nameA}
                  <br />
                  <em className="not-italic text-gold">{nameB}</em>
                </h2>
                <div className="w-16 h-px bg-gold my-10" />
                <p className="text-cream/60 font-sans text-base leading-relaxed mb-12 max-w-lg">
                  {lodge.description}
                </p>

                {lodge.amenities && (
                  <div className="flex flex-wrap gap-3 mb-16">
                    {lodge.amenities.map((a) => (
                      <span
                        key={a}
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/45 border border-cream/15 px-4 py-2 font-sans hover:border-gold/30 hover:text-gold transition-colors duration-300"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={lodge.href}
                  className="inline-flex items-center gap-4 text-cream/80 hover:text-gold font-sans text-xs uppercase tracking-[0.25em] transition-colors duration-300 group self-start border-b border-cream/20 hover:border-gold pb-3"
                >
                  Explore Sanctuary
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* ── WHY OUR LODGES ── */}
      <section className="bg-cream py-32 px-8 md:px-20">
        <FadeIn className="text-center mb-24">
          <p className="section-label mb-4">The Tilenga Legacy</p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest leading-tight uppercase tracking-[0.15em]">
            Why Stay With Us
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mt-8" />
        </FadeIn>

        <StaggerGrid className="grid md:grid-cols-3 max-w-7xl mx-auto border-t border-b border-gold/15">
          {pillars.map((p) => (
            <StaggerItem
              key={p.number}
              className="px-10 md:px-16 py-14 md:py-20 border-b md:border-b-0 md:border-r border-gold/15 last:border-0 group hover:bg-forest-dark/[0.02] transition-colors duration-500"
            >
              <p className="font-serif text-7xl text-gold/10 group-hover:text-gold/25 transition-colors duration-500 leading-none mb-8">
                {p.number}
              </p>
              <h3 className="font-serif text-2xl text-forest mb-5 uppercase tracking-wide">
                {p.title}
              </h3>
              <div className="w-10 h-px bg-gold/40 mb-6 group-hover:w-16 transition-all duration-500" />
              <p className="text-stone font-sans text-base leading-relaxed">
                {p.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest-dark py-32 px-8 md:px-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={getSiteImageUrl(
              "lodgeKikorongoHero",
              "/photos/kikorongo_room1.jpg",
              WIDE_16_9,
            )}
            alt="CTA background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-forest-dark/80" />

        <FadeIn className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="w-16 h-px bg-gold/40 mx-auto mb-10" />
          <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight mb-6 uppercase tracking-[0.15em]">
            Ready to Book
            <br />
            Your Sanctuary?
          </h2>
          <p className="text-cream/50 font-sans text-base leading-relaxed mb-12 max-w-sm mx-auto">
            Contact our specialists for availability, private camp arrangements,
            or to bundle your stay into a full safari.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/plan-a-trip" className="btn-primary px-10">
              Plan My Safari
            </Link>
            <a
              href="mailto:destinations@tilengasafaris.com"
              className="btn-ghost px-10"
            >
              Speak to an Expert
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
