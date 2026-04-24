import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ParallaxSection from "@/components/motion/ParallaxSection";

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    description:
      "A haven of comfort and serenity overlooking the Albert Nile River. 26 cottages — premium and executive — with private balconies, indigenous wildlife encounters, and a world-class chef.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    href: "/lodges/tilenga-safari-lodge",
    tag: "Murchison Falls",
  },
  {
    name: "Kikorongo Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    description:
      "Perched at the Equator on a steep hill overlooking Lake George and Lake Kikorongo, with sweeping views of the Rwenzori Mountains and the world's largest concentration of hippos.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=80",
    href: "/lodges/kikorongo-safari-lodge",
    tag: "Queen Elizabeth NP",
  },
];

const experiences = [
  { title: "Gorilla Trekking", description: "Come face-to-face with endangered mountain gorillas in Bwindi or Volcanoes National Park.", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80" },
  { title: "Game Drives", description: "Guided dawn and dusk drives through Africa's most prolific wildlife parks.", image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=600&q=80" },
  { title: "Boat Safaris", description: "Glide along the Kazinga Channel or Albert Nile for up-close hippo, crocodile, and bird encounters.", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" },
  { title: "Cultural Immersion", description: "Meet local communities — basketry workshops, village walks, traditional cuisine, and living heritage.", image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80" },
  { title: "Kilimanjaro Climbing", description: "Summit Africa's highest peak on a supported, expert-guided multi-day ascent.", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80" },
  { title: "Zanzibar Beach", description: "Extend your safari with crystal-clear waters, Stone Town culture, and spice tours on Zanzibar.", image: "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=600&q=80" },
];

const destinations = [
  { name: "Uganda", tag: "Pearl of Africa", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80", href: "/destinations/uganda" },
  { name: "Kenya", tag: "Iconic Maasai Mara", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80", href: "/destinations/kenya" },
  { name: "Tanzania", tag: "Serengeti & Zanzibar", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80", href: "/destinations/tanzania" },
  { name: "Rwanda", tag: "Land of a Thousand Hills", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80", href: "/destinations/rwanda" },
  { name: "South Africa", tag: "Cape & Kruger", image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&q=80", href: "/destinations/south-africa" },
  { name: "Dubai", tag: "Desert Luxury", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", href: "/destinations/dubai" },
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
      <section className="bg-forest py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} direction="up" delay={i * 0.1}>
              <p className="font-serif text-4xl text-gold">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="text-cream/60 text-xs uppercase tracking-widest font-sans mt-1">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Our Lodges */}
      <section className="py-24 px-6 md:px-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="section-label mb-3">Where You Stay</p>
            <h2 className="section-heading">Our Lodges in Uganda</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            <p className="text-stone max-w-2xl mx-auto mt-6 font-sans leading-relaxed">
              Each lodge is positioned at the gateway of Uganda&apos;s most spectacular national parks —
              designed for comfort, wildlife encounters, and that rare sense of being completely away.
            </p>
          </FadeIn>

          <StaggerGrid className="grid md:grid-cols-2 gap-8">
            {lodges.map((lodge) => (
              <StaggerItem key={lodge.name}>
                <div className="group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="img-card relative h-72">
                    <img
                      src={lodge.image}
                      alt={lodge.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-forest-dark/25 group-hover:bg-forest-dark/5 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 bg-gold text-forest text-[10px] uppercase tracking-widest font-sans px-3 py-1">
                      {lodge.tag}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-forest mb-1">{lodge.name}</h3>
                    <p className="text-gold text-xs uppercase tracking-wider font-sans mb-4">{lodge.location}</p>
                    <p className="text-stone font-sans text-sm leading-relaxed mb-6">{lodge.description}</p>
                    <Link href={lodge.href} className="btn-primary text-sm">
                      Explore Lodge
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="py-24 px-6 md:px-16 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="section-label mb-3">Africa &amp; Beyond</p>
            <h2 className="section-heading">Our Destinations</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            <p className="text-stone max-w-2xl mx-auto mt-6 font-sans leading-relaxed">
              From Uganda&apos;s Pearl of Africa to the deserts of Dubai — six breathtaking destinations,
              each with its own character and wildlife.
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((dest) => (
              <StaggerItem key={dest.name}>
                <Link href={dest.href} className="dest-card group block relative overflow-hidden aspect-[4/3]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 transition-transform duration-400 group-hover:-translate-y-1">
                    <p className="font-serif text-xl text-cream">{dest.name}</p>
                    <p className="text-gold text-[10px] uppercase tracking-widest font-sans">{dest.tag}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn direction="up" delay={0.2} className="text-center mt-10">
            <Link href="/destinations" className="btn-outline">
              All Destinations
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 px-6 md:px-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="section-heading">Extraordinary Experiences</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            <p className="text-stone max-w-2xl mx-auto mt-6 font-sans leading-relaxed">
              Each journey is thoughtfully tailored to your interests — from gorilla trekking
              at dawn to boat safaris, cultural encounters, and beach retreats.
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <StaggerItem key={exp.title}>
                <div className="group vintage-frame cursor-default">
                  <div className="img-card relative h-52">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-forest-dark/25" />
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-serif text-lg text-forest mb-2">{exp.title}</h3>
                    <p className="text-stone text-sm font-sans leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn direction="up" delay={0.3} className="text-center mt-12">
            <Link href="/plan-a-trip" className="btn-primary">
              Create Your Dream Safari
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Heritage banner — parallax */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1600&q=80"
        className="py-28 px-6 md:px-16"
        overlayClassName="bg-forest-dark/75"
      >
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-4">Our Story</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight mb-6">
              Passion for Travel.<br />
              <span className="italic text-gold">Care for People.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="fade" delay={0.2}>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-cream/70 font-sans leading-relaxed max-w-2xl mx-auto mb-4">
              Tilenga Safaris was born from a deep love of travel and an unwavering belief
              that every journey should transform the traveler. With over 5 years of expertise,
              we design itineraries that blend adventure, culture, and relaxation into experiences
              that stay with you for a lifetime.
            </p>
            <p className="text-cream/70 font-sans leading-relaxed max-w-2xl mx-auto mb-10">
              Our four core values — <span className="text-gold">customer-centricity, integrity,
              quality, and sustainability</span> — guide every moment we craft for our guests.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <Link href="/about" className="btn-ghost">
              Our Story
            </Link>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Sustainability */}
      <section className="py-24 px-6 md:px-16 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Responsible Travel</p>
            <h2 className="section-heading mb-6">A Commitment to Communities &amp; Conservation</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Sustainability is not an afterthought — it is woven into how we operate.
              We work closely with local communities, support indigenous culture preservation,
              and partner with conservation-focused lodges across East Africa.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              When you travel with Tilenga Safaris, your journey contributes to the livelihoods
              of local guides, hospitality staff, and community artisans — ensuring Africa&apos;s
              wonders endure for generations.
            </p>
            <StaggerGrid className="space-y-3 mb-10">
              {sustainabilityItems.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 text-stone font-sans text-sm">
                    <span className="text-gold mt-0.5">✦</span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </FadeIn>

          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80" alt="Conservation" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Landscape" className="w-full h-52 object-cover mt-6 hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&q=80" alt="Wildlife" className="w-full h-52 object-cover -mt-6 hover:scale-105 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&q=80" alt="Community" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <p className="section-label text-gold mb-4">Ready to Explore?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Let Us Craft Your Perfect Safari
          </h2>
          <p className="text-cream/60 font-sans max-w-xl mx-auto mb-10">
            Share your dream — we&apos;ll design a bespoke itinerary combining wildlife,
            culture, and luxury across Africa&apos;s most iconic destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-a-trip" className="btn-outline">Plan a Trip</Link>
            <a href="tel:+256789390350" className="btn-ghost">Call Us: +256 789 390 350</a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
