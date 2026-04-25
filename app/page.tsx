import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ParallaxSection from "@/components/motion/ParallaxSection";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import LineReveal from "@/components/motion/LineReveal";

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    description: "A haven of comfort overlooking the Albert Nile. 26 cottages with private balconies, wildlife encounters, and a world-class chef.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    href: "/lodges/tilenga-safari-lodge",
    tag: "Murchison Falls",
  },
  {
    name: "Kikorongo Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    description: "Perched at the Equator above Lake George, with sweeping Rwenzori views and the world's largest hippo concentration.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
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
  { name: "Dubai", tag: "Desert Luxury", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", href: "/destinations/dubai" },
];

const stats = [
  { value: "5+", label: "Years of Expertise" },
  { value: "6", label: "Destinations" },
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

      {/* Our Lodges — full-image cinematic cards */}
      <section className="py-28 px-6 md:px-16 bg-forest-dark">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn direction="fade" delay={0}>
            <p className="section-label text-gold mb-3">Where You Stay</p>
          </FadeIn>
          <LineReveal
            lines={["Our Lodges in Uganda"]}
            delay={0.1}
            lineClassName="font-serif text-4xl md:text-5xl text-cream leading-tight uppercase tracking-heritage"
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
              <Link href={lodge.href} className="group block relative overflow-hidden h-[85vh] min-h-[500px]">
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                {/* Tag */}
                <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.25em] font-sans text-gold border border-gold/40 px-3 py-1 bg-forest-dark/40 backdrop-blur-sm">
                  {lodge.tag}
                </span>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="text-gold/70 text-[10px] uppercase tracking-[0.25em] font-sans mb-2">{lodge.location}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream mb-3 leading-tight">{lodge.name}</h3>
                  {/* Description slides up on hover */}
                  <p className="text-cream/60 text-sm font-sans leading-relaxed max-w-sm mb-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
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

      {/* Destinations grid — asymmetric cinematic layout */}
      <section className="py-32 px-6 md:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn direction="fade"><p className="section-label mb-3">Africa &amp; Beyond</p></FadeIn>
            <LineReveal
              lines={["Our Destinations"]}
              delay={0.1}
              lineClassName="section-heading uppercase tracking-heritage text-5xl md:text-7xl"
            />
            <FadeIn direction="fade" delay={0.35}>
              <div className="w-20 h-px bg-gold mx-auto mt-8" />
              <p className="text-stone max-w-2xl mx-auto mt-8 font-sans text-base leading-relaxed">
                From the misty peaks of the Rwenzori to the golden horizons of the Mara, 
                discover the most iconic landscapes across East Africa and beyond.
              </p>
            </FadeIn>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* 01. Uganda — Featured Large */}
            <StaggerItem className="md:col-span-8 md:row-span-2">
              <Link href="/destinations/uganda" className="group block relative overflow-hidden h-[70vh] md:h-full film-frame">
                <img
                  src={destinations[0].image}
                  alt={destinations[0].name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/10 to-transparent" />
                <span className="absolute top-8 left-8 font-serif text-cream/10 text-9xl leading-none select-none uppercase pointer-events-none">01</span>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <p className="text-gold text-xs uppercase tracking-[0.4em] font-sans mb-3">{destinations[0].tag}</p>
                  <h3 className="font-serif text-4xl md:text-6xl text-cream mb-4 uppercase tracking-heritage leading-none">{destinations[0].name}</h3>
                  <div className="w-12 h-px bg-gold mb-6 transition-all duration-500 group-hover:w-24" />
                  <span className="inline-flex items-center gap-3 text-gold text-[10px] uppercase tracking-widest font-sans border border-gold/30 px-4 py-2 bg-black/20 backdrop-blur-sm group-hover:bg-gold group-hover:text-forest transition-all duration-500">
                    Explore Destination
                  </span>
                </div>
              </Link>
            </StaggerItem>

            {/* 02. Kenya */}
            <StaggerItem className="md:col-span-4">
              <Link href="/destinations/kenya" className="group block relative overflow-hidden h-[45vh] md:h-[400px] film-frame">
                <img
                  src={destinations[1].image}
                  alt={destinations[1].name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <span className="absolute top-6 right-8 font-serif text-cream/10 text-6xl uppercase">02</span>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-1">{destinations[1].tag}</p>
                  <h3 className="font-serif text-3xl text-cream uppercase tracking-heritage">{destinations[1].name}</h3>
                </div>
              </Link>
            </StaggerItem>

            {/* 03. Tanzania */}
            <StaggerItem className="md:col-span-4">
              <Link href="/destinations/tanzania" className="group block relative overflow-hidden h-[45vh] md:h-[400px] film-frame">
                <img
                  src={destinations[2].image}
                  alt={destinations[2].name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <span className="absolute top-6 right-8 font-serif text-cream/10 text-6xl uppercase">03</span>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-1">{destinations[2].tag}</p>
                  <h3 className="font-serif text-3xl text-cream uppercase tracking-heritage">{destinations[2].name}</h3>
                </div>
              </Link>
            </StaggerItem>

            {/* Bottom Row */}
            <StaggerItem className="md:col-span-4">
              <Link href="/destinations/rwanda" className="group block relative overflow-hidden h-[45vh] md:h-[400px] film-frame">
                <img
                  src={destinations[3].image}
                  alt={destinations[3].name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-2xl text-cream uppercase tracking-heritage">{destinations[3].name}</h3>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <Link href="/destinations/south-africa" className="group block relative overflow-hidden h-[45vh] md:h-[400px] film-frame">
                <img
                  src={destinations[4].image}
                  alt={destinations[4].name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-2xl text-cream uppercase tracking-heritage">{destinations[4].name}</h3>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <Link href="/destinations/dubai" className="group block relative overflow-hidden h-[45vh] md:h-[400px] film-frame">
                <img
                  src={destinations[5].image}
                  alt={destinations[5].name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-2xl text-cream uppercase tracking-heritage">{destinations[5].name}</h3>
                </div>
              </Link>
            </StaggerItem>
          </StaggerGrid>

          <FadeIn direction="up" delay={0.2} className="text-center mt-20">
            <Link href="/destinations" className="btn-outline px-12">View All Destinations</Link>
          </FadeIn>
        </div>
      </section>

      {/* Experiences — full-image hover reveal */}
      <section className="py-28 px-6 md:px-16 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <FadeIn direction="fade"><p className="section-label mb-3">What We Offer</p></FadeIn>
            <LineReveal
              lines={["Extraordinary Experiences"]}
              delay={0.1}
              lineClassName="section-heading uppercase tracking-heritage"
            />
            <FadeIn direction="fade" delay={0.4}>
              <div className="w-12 h-px bg-gold mx-auto mt-5" />
              <p className="text-stone max-w-xl mx-auto mt-6 font-sans leading-relaxed text-sm">
                Each journey is thoughtfully tailored — gorilla trekking at dawn, boat safaris,
                cultural encounters, mountain summits, and beach retreats.
              </p>
            </FadeIn>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
            {experiences.map((exp) => (
              <StaggerItem key={exp.title}>
                <div className="group relative overflow-hidden aspect-square cursor-default">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  {/* Always-on gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-forest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Title — always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="font-serif text-xl text-cream">{exp.title}</h3>
                  </div>
                  {/* Description — hover reveal */}
                  <div className="absolute inset-0 flex items-center justify-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="text-center">
                      <div className="w-8 h-px bg-gold mx-auto mb-4" />
                      <h3 className="font-serif text-2xl text-cream mb-3">{exp.title}</h3>
                      <p className="text-cream/80 text-sm font-sans leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn direction="up" delay={0.3} className="text-center mt-12">
            <Link href="/plan-a-trip" className="btn-primary">Create Your Dream Safari</Link>
          </FadeIn>
        </div>
      </section>

      {/* Heritage — narrative approach */}
      <section className="py-32 px-6 md:px-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <FadeIn direction="right">
                <p className="section-label mb-4">A Century of Passion</p>
                <h2 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-8 uppercase tracking-heritage">
                  The Spirit of <br />
                  <em className="text-earth not-italic">Timeless Safari</em>
                </h2>
                <div className="w-12 h-px bg-gold mb-8" />
                <div className="space-y-6 text-stone font-sans text-base leading-relaxed">
                  <p>
                    Tilenga Safaris is more than a travel company; it is a legacy of discovery rooted in the profound beauty of the East African landscape. Our journeys are crafted for those who seek the authentic, the rare, and the transformative.
                  </p>
                  <p>
                    From the mist-shrouded peaks of the Rwenzori to the golden horizons of the Maasai Mara, we invite you to experience a "Golden Age" of travel—where every detail is considered, and every moment is an invitation to wonder.
                  </p>
                </div>
                <div className="mt-12">
                  <Link href="/about" className="group inline-flex items-center gap-4">
                    <span className="btn-primary">Our Story</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-forest group-hover:text-gold transition-colors duration-300">Discover Our Roots</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="relative">
                <ImageReveal direction="left">
                  <div className="film-frame aspect-[4/5] md:aspect-[16/10] overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=80" 
                      alt="The Spirit of Safari" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ImageReveal>
                {/* Floating secondary image for depth */}
                <div className="absolute -bottom-12 -left-12 hidden lg:block w-64 h-80 z-10">
                  <FadeIn direction="up" delay={0.4}>
                    <div className="film-frame h-full overflow-hidden shadow-xl border-4 border-cream">
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
      <section className="py-28 px-6 md:px-16 bg-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Responsible Travel</p>
            <h2 className="section-heading mb-8 uppercase tracking-heritage">A Commitment to<br />Communities &amp; Conservation</h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="space-y-6 text-stone font-sans text-base leading-relaxed mb-10">
              <p>
                Sustainability is woven into how we operate. We work closely with local communities,
                support indigenous culture preservation, and partner with conservation-focused lodges across East Africa.
              </p>
              <p>
                When you travel with Tilenga Safaris, your journey contributes to the livelihoods
                of local guides, hospitality staff, and community artisans.
              </p>
            </div>
            <StaggerGrid className="space-y-4 mb-10">
              {sustainabilityItems.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-4 text-stone font-sans text-sm">
                    <span className="text-gold mt-0.5 shrink-0">✦</span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <Link href="/about" className="btn-primary">Learn More</Link>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <div className="film-frame aspect-square">
                <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80" alt="Conservation" className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-12">
              <div className="film-frame aspect-square">
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" alt="Landscape" className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-12">
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
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-forest-dark py-32 px-6 md:px-16 text-center relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=80" alt="CTA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-forest-dark/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold/60" />
              <p className="section-label text-gold">Your Journey Awaits</p>
              <div className="w-10 h-px bg-gold/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-7xl text-cream mb-8 leading-tight uppercase tracking-heritage">
              Let Us Craft Your<br />
              <em className="text-gold not-italic">Personal Legacy</em>
            </h2>
            <p className="text-cream/60 font-sans max-w-xl mx-auto mb-12 text-base leading-relaxed">
              Share your vision with us — we&apos;ll design a bespoke itinerary that blends 
              adventure, culture, and wild luxury across Africa&apos;s most storied landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/plan-a-trip" className="btn-primary px-10">Plan Your Safari</Link>
              <a href="tel:+256789390350" className="btn-ghost px-10">Speak to an Expert</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
