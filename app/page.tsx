import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ImageReveal from "@/components/motion/ImageReveal";
import LineReveal from "@/components/motion/LineReveal";

import ExperienceCarousel from "@/components/ExperienceCarousel";
import Partners from "@/components/Partners";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    description: "A haven of comfort overlooking the Albert Nile. 26 cottages with private balconies, wildlife encounters, and a world-class chef.",
    image: `${base}/photos/tilengasafarilodge/entrance.png`,
    href: "/lodges/tilenga-safari-lodge",
    tag: "Murchison Falls",
  },
  {
    name: "Kikorongo Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    description: "Perched at the Equator above Lake George, with sweeping Rwenzori views and the world's largest hippo concentration.",
    image: `${base}/photos/kikorongo_outside.jpg`,
    href: "/lodges/kikorongo-safari-lodge",
    tag: "Queen Elizabeth NP",
  },
];

const experiences = [
  { title: "Gorilla Trekking", description: "Face-to-face with endangered mountain gorillas in Bwindi or Volcanoes.", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80" },
  { title: "Game Drives", description: "Guided dawn and dusk drives through Africa's most prolific wildlife parks.", image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80" },
  { title: "Boat Safaris", description: "Glide the Kazinga Channel or Albert Nile for hippo, croc, and bird encounters.", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" },
  { title: "Cultural Immersion", description: "Basketry workshops, village walks, traditional cuisine, and living heritage.", image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80" },
  { title: "Kilimanjaro Climbing", description: "Summit Africa's highest peak on an expert-guided multi-day ascent.", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80" },
  { title: "Zanzibar Beach", description: "Crystal-clear waters, Stone Town culture, and spice tours on Zanzibar.", image: "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=800&q=80" },
];

const destinations = [
  { name: "Uganda", tag: "Pearl of Africa", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80", href: "/destinations/uganda" },
  { name: "Kenya", tag: "Iconic Maasai Mara", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=80", href: "/destinations/kenya" },
  { name: "Tanzania", tag: "Serengeti & Zanzibar", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", href: "/destinations/tanzania" },
  { name: "Rwanda", tag: "Land of a Thousand Hills", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80", href: "/destinations/rwanda" },
  { name: "South Africa", tag: "Cape & Kruger", image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800&q=80", href: "/destinations/south-africa" },
  { name: "Namibia", tag: "Desert & Dunes", image: "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=800&q=80", href: "/destinations/namibia" },
  { name: "Botswana", tag: "Okavango Delta", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", href: "/destinations/botswana" },
];

const stats = [
  { value: "5+", label: "Years of Expertise" },
  { value: "7", label: "Destinations" },
  { value: "2", label: "Luxury Lodges" },
  { value: "500+", label: "Happy Travelers" },
];

const sustainabilityItems = [
  "Locally owned and operated lodges",
  "Community cultural engagement programs",
  "Anti-litter and eco-conservation initiatives",
  "Partnerships with national parks and conservation bodies",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Stats bar */}
      <section className="bg-forest py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} direction="up" delay={i * 0.1}>
              <p className="font-serif text-5xl text-gold">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="text-cream/50 text-[10px] uppercase tracking-[0.3em] font-sans mt-2">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Destinations Section — Journal Style Editorial Grid */}
      <section className="py-16 md:py-32 px-6 md:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-10 md:mb-20">
            <div className="max-w-2xl">
              <FadeIn direction="fade">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">The Explorer&apos;s Map</span>
              </FadeIn>
              <h2 className="font-serif text-4xl md:text-6xl text-forest uppercase tracking-widest leading-none">
                Our Iconic <br />
                <span className="italic text-gold lowercase tracking-normal">Destinations</span>
              </h2>
            </div>
            <FadeIn direction="up" delay={0.3} className="max-w-xs">
              <p className="text-stone/70 font-sans text-sm leading-relaxed mb-6">
                Curated journeys across East Africa&apos;s most profound landscapes, from mist-covered mountains to sun-drenched savannahs.
              </p>
              <Link href="/destinations" className="group inline-flex items-center gap-2 text-forest text-[10px] uppercase tracking-widest font-bold border-b border-gold/30 pb-1 hover:border-gold transition-colors">
                View All Regions
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </FadeIn>
          </div>

          {/* Clean Journal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-y-8 md:gap-y-20 gap-x-6 md:gap-x-8">

            {/* 01. Uganda — Large Featured Vertical */}
            <div className="col-span-2 md:col-span-7">
              <FadeIn direction="up">
                <Link href="/destinations/uganda" className="group block">
                  <div className="relative aspect-[16/10] md:aspect-[14/11] overflow-hidden mb-8 shadow-sm">
                    <img
                      src={destinations[0].image}
                      alt={destinations[0].name}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1500ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="max-w-lg">
                    <span className="font-serif text-gold text-sm italic mb-2 block">Featured Region</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-forest uppercase tracking-widest mb-4">{destinations[0].name}</h3>
                    <p className="text-stone font-sans text-[15px] leading-loose mb-6 opacity-80">
                      Known as the Pearl of Africa, Uganda offers a tapestry of landscapes — from the thundering Murchison Falls to the legendary mountain gorillas of Bwindi.
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Discover {destinations[0].name}</span>
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* 02. Kenya — Smaller Offset */}
            <div className="col-span-2 md:col-span-5 md:pt-32">
              <FadeIn direction="up" delay={0.2}>
                <Link href="/destinations/kenya" className="group block">
                  <div className="relative aspect-square md:aspect-[4/5] overflow-hidden mb-8 shadow-sm">
                    <img
                      src={destinations[1].image}
                      alt={destinations[1].name}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-forest uppercase tracking-widest mb-3">{destinations[1].name}</h3>
                    <p className="text-stone/70 font-sans text-sm leading-relaxed mb-4">{destinations[1].tag}</p>
                    <div className="w-10 h-px bg-gold/40 transition-all duration-500 group-hover:w-20" />
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* Row 2: Symmetric Journal Row */}
            <div className="col-span-2 md:col-span-12 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {[destinations[2], destinations[3], destinations[4], destinations[5], destinations[6]].map((dest, i) => (
                <FadeIn key={dest.name} direction="up" delay={0.1 * i}>
                  <Link href={dest.href} className="group block">
                    <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden mb-4 md:mb-6 shadow-sm border border-gold/5">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center px-1 md:px-4">
                      <h4 className="font-serif text-base md:text-2xl text-forest uppercase tracking-widest mb-1 md:mb-2">{dest.name}</h4>
                      <p className="text-gold text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold">{dest.tag}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center mt-14 md:mt-32">
            <Link href="/destinations" className="btn-primary px-10 md:px-14">The Full Collection</Link>
          </FadeIn>
        </div>
      </section>

      {/* Our Lodges — full-image cinematic cards */}
      <section className="py-14 md:py-28 px-6 md:px-16 bg-forest-dark">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <FadeIn direction="fade" delay={0}>
            <p className="section-label text-gold mb-3">Where You Stay</p>
          </FadeIn>
          <LineReveal
            lines={["Our Lodges in Uganda"]}
            delay={0.1}
            lineClassName="font-serif text-4xl md:text-5xl text-cream leading-tight uppercase tracking-[0.15em]"
          />
          <FadeIn direction="fade" delay={0.4}>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
            <p className="text-cream/50 max-w-xl mx-auto mt-6 font-sans leading-relaxed text-sm">
              Each lodge sits at the gateway of Uganda&apos;s most spectacular national parks —
              designed for comfort, wildlife, and that rare sense of being completely away.
            </p>
          </FadeIn>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 gap-2 max-w-7xl mx-auto">
          {lodges.map((lodge) => (
            <StaggerItem key={lodge.name}>
              <Link href={lodge.href} className="group block relative overflow-hidden h-[62vh] md:h-[85vh] min-h-[420px]">
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.25em] font-sans text-gold border border-gold/40 px-3 py-1 bg-forest-dark/40 backdrop-blur-sm">
                  {lodge.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="text-gold/70 text-[10px] uppercase tracking-[0.25em] font-sans mb-2">{lodge.location}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream mb-3 leading-tight">{lodge.name}</h3>
                  <p className="text-cream/60 text-sm font-sans leading-relaxed max-w-sm mb-5 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    {lodge.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-sans border-b border-gold/40 pb-0.5 group-hover:border-gold transition-colors duration-300">
                    Explore Lodge
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Experiences — full-image hover reveal */}
      <section className="pt-14 pb-10 md:py-28 px-6 md:px-16 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <FadeIn direction="fade"><p className="section-label mb-3">What We Offer</p></FadeIn>
            <LineReveal
              lines={["Extraordinary Experiences"]}
              delay={0.1}
              lineClassName="section-heading uppercase tracking-[0.15em]"
            />
            <FadeIn direction="fade" delay={0.4}>
              <div className="w-12 h-px bg-gold mx-auto mt-5" />
              <p className="text-stone max-w-xl mx-auto mt-6 font-sans leading-relaxed text-sm">
                Each journey is thoughtfully tailored — gorilla trekking at dawn, boat safaris,
                cultural encounters, mountain summits, and beach retreats.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.6}>
            <ExperienceCarousel experiences={experiences} />
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="text-center mt-6 md:mt-12">
            <Link href="/plan-a-trip" className="btn-primary">Create Your Dream Safari</Link>
          </FadeIn>
        </div>
      </section>

      {/* Heritage — narrative approach with parallax anchor */}
      <section className="pt-10 pb-14 md:py-40 px-6 md:px-16 bg-cream-dark relative z-10">
        {/* Subtle decorative elements for scroll depth */}
        <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none">
           <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&q=80" className="w-full h-full object-cover" alt="" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <FadeIn direction="up" delay={0.1}>
                <p className="section-label">A Century of Passion</p>
                <h2 className="section-heading mb-4 md:mb-12 leading-[1.1]">
                  The Spirit of <br />
                  <span className="editorial-italic">Timeless Safari</span>
                </h2>
                <div className="w-20 h-px bg-gold mb-4 md:mb-12" />
                <div className="space-y-4 md:space-y-10 body-text">
                  <p>
                    Tilenga Safaris is more than a travel company; it is a legacy of discovery rooted in the profound beauty of the East African landscape. Our journeys are crafted for those who seek the authentic, the rare, and the transformative.
                  </p>
                  <p>
                    From the mist-shrouded peaks of the Rwenzori to the golden horizons of the Maasai Mara, we invite you to experience a &ldquo;Golden Age&rdquo; of travel—where every detail is considered, and every moment is an invitation to wonder.
                  </p>
                </div>
                <div className="mt-6 md:mt-16">
                  <Link href="/about" className="group inline-flex items-center gap-6">
                    <span className="btn-primary px-10">Our Story</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-forest group-hover:text-gold transition-colors duration-500 font-bold">Discover Our Roots</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="relative">
                <ImageReveal direction="left" delay={0.3}>
                  <div className="film-frame aspect-[16/11] overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=80"
                      alt="The Spirit of Safari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ImageReveal>

                {/* Mobile: secondary image shown below as inline block */}
                <FadeIn direction="up" delay={0.4} className="mt-4 lg:hidden">
                  <div className="film-frame aspect-video overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80"
                      alt="Wildlife Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </FadeIn>

                {/* Desktop: floating secondary image — bleeds into Sustainability section below */}
                <div className="absolute -bottom-20 -left-16 hidden lg:block w-72 h-96 z-20">
                  <FadeIn direction="up" delay={0.6}>
                    <div className="film-frame h-full overflow-hidden shadow-2xl border-4 border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80"
                        alt="Wildlife Detail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-14 md:py-28 px-6 md:px-16 bg-cream relative z-[5] lg:pt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-0">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <div className="film-frame aspect-square">
                <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80" alt="Conservation" className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-0 md:mt-12">
              <div className="film-frame aspect-square">
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" alt="Landscape" className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden mt-0 md:-mt-12">
              <div className="film-frame aspect-square">
                <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&q=80" alt="Wildlife" className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <div className="film-frame aspect-square">
                <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80" alt="Community" className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </ImageReveal>
          </div>

          <FadeIn direction="right">
            <p className="section-label">Responsible Travel</p>
            <h2 className="section-heading mb-4 md:mb-10 !text-2xl md:!text-4xl lg:!text-5xl">A Commitment to<br />Communities &amp; Conservation</h2>
            <div className="w-16 h-px bg-gold mb-4 md:mb-10" />
            <div className="space-y-4 md:space-y-8 body-text mb-6 md:mb-12">
              <p>
                Sustainability is woven into how we operate. We work closely with local communities,
                support indigenous culture preservation, and partner with conservation-focused lodges across East Africa.
              </p>
              <p>
                When you travel with Tilenga Safaris, your journey contributes to the livelihoods
                of local guides, hospitality staff, and community artisans.
              </p>
            </div>
            <StaggerGrid className="space-y-3 mb-10">
              {sustainabilityItems.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-4 text-stone font-sans text-[15px] leading-relaxed">
                    <span className="text-gold mt-1 shrink-0 text-xs">✦</span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <Link href="/about" className="btn-primary">Learn More</Link>
          </FadeIn>
        </div>

        {/* Bleed image — hangs into Testimonials section below */}
        <FadeIn direction="up" delay={0.4} className="absolute -bottom-24 right-6 md:right-20 hidden md:block w-52 md:w-64 h-72 md:h-80 z-20">
          <div className="relative h-full overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&q=85"
              alt="East Africa wildlife"
              className="w-full h-full object-cover"
            />
            {/* Gold corner accent — top-left */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/70" />
            {/* Gold corner accent — bottom-right */}
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/70" />
            {/* Subtle label */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream/70 bg-forest-dark/60 backdrop-blur-sm px-2 py-1">
                East Africa
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Partners */}
      <Partners />

      {/* Testimonials */}
      <section className="relative z-0 min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=90"
            alt=""
            className="w-full h-full object-cover object-center scale-[1.06]"
          />
          <div className="absolute inset-0 bg-[#050f08]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050f08] via-transparent to-[#050f08]/70" />
        </div>

        {/* Gold horizontal rule — top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Content — extra top padding on desktop so content clears the bleed image */}
        <div className="relative z-10 w-full pt-20 pb-20 md:pt-52 md:pb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-16">

            {/* Full-width 2-col grid: heading left, quotes right */}
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-24 items-start">

              {/* LEFT — sticky-ish header block */}
              <FadeIn direction="left" className="md:pt-4">
                <p className="section-label !text-gold/60 mb-6">Verified Traveller Reviews</p>
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream uppercase tracking-[0.05em] leading-[1.05] mb-8">
                  What Our<br />Travellers<br />Say
                </h2>
                <div className="w-16 h-px bg-gold/50 mb-8" />
                <p className="font-sans text-cream/50 text-sm leading-relaxed mb-10">
                  Real experiences shared by guests who explored Uganda with us — unedited, unsponsored.
                </p>
                {/* Stars + platform badge */}
                <div className="inline-flex items-center gap-3 border border-gold/25 px-5 py-3">
                  <div className="flex gap-[3px]">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <div className="w-px h-4 bg-gold/25" />
                  <span className="font-sans text-gold/60 text-[10px] tracking-[0.3em] uppercase">Tripadvisor</span>
                </div>
              </FadeIn>

              {/* RIGHT — testimonials, each full-width of the column */}
              <StaggerGrid className="flex flex-col gap-0">
                {[
                  {
                    quote: "From the beginning, Tilenga Safaris handled every detail with precision and care. They booked us into high-end accommodations with the best views and paired us with a top-tier safari guide. When our original agency failed to plan anything for our arrival day, Tilenga Safaris immediately stepped in and went above and beyond — in every sense of the word.",
                    name: "Faycal A.",
                    date: "12 months ago",
                    tag: "Uganda Circuit",
                  },
                  {
                    quote: "Coming face-to-face with a silverback and his family in Bwindi Impenetrable Forest was surreal. Tilenga handled everything seamlessly — permits, accommodations, transportation. We felt safe, well cared for, and truly immersed in Uganda's wild beauty. If you're considering gorilla trekking, look no further.",
                    name: "Martina N.",
                    date: "1 year ago",
                    tag: "Gorilla Trekking",
                  },
                ].map((t, i) => (
                  <StaggerItem key={i}>
                    <div className={`relative group py-10 md:py-12 px-0 ${i === 0 ? "border-b border-gold/20" : ""}`}>
                      {/* Large ghost quote mark */}
                      <span className="absolute right-0 top-6 font-serif text-[9rem] leading-none text-gold/[0.06] select-none pointer-events-none group-hover:text-gold/[0.1] transition-colors duration-700">
                        &rdquo;
                      </span>

                      {/* Tag pill */}
                      <span className="inline-block font-sans text-[9px] tracking-[0.35em] uppercase text-gold/60 border border-gold/20 px-3 py-1 mb-6">
                        {t.tag}
                      </span>

                      {/* Quote */}
                      <p className="font-serif italic text-cream/80 text-base md:text-2xl lg:text-[1.6rem] leading-[1.7] mb-6 md:mb-8 group-hover:text-cream transition-colors duration-500 relative z-10">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      {/* Attribution */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-px bg-gold/50" />
                        <div>
                          <p className="font-sans text-cream text-xs font-semibold tracking-[0.2em] uppercase">{t.name}</p>
                          <p className="font-sans text-cream/35 text-[10px] tracking-[0.2em] uppercase mt-0.5">{t.date}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>

            </div>
          </div>
        </div>

        {/* Gold horizontal rule — bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      </>
      );
      }
