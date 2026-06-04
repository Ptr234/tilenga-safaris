import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'tm51vlpn',
  dataset: 'production',
  useCdn: false,
  token: 'skbcn9Pc6IKC2BIUf44UYO1mr2hup5Ruvto0T7o8fCg1n48A799Na9czwg8AOmHuwKdoJ23hDJ7SaV5mmHjoYj3V0T2Xvo9MyPUH7gRqjwJ4ZUHLrPJdRgoQoUEgD0RepRNSfJkjzhGdudWSk2JRDgc4xjQt03qtN7rMuTzJ727duOoCEOc3',
  apiVersion: '2023-05-03',
})

async function uploadImage(imagePath) {
  // Remove leading slash if present
  const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  const fullPath = path.join(process.cwd(), 'public', relativePath)
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️ File not found: ${fullPath}`)
    return null
  }

  try {
    const imageData = fs.readFileSync(fullPath)
    const asset = await client.assets.upload('image', imageData, {
      filename: path.basename(fullPath)
    })
    console.log(`✅ Uploaded image: ${imagePath}`)
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error(`❌ Error uploading ${imagePath}:`, error.message)
    return null
  }
}

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    location: "Murchison Falls National Park, Uganda",
    description: "Positioned at the northern park boundary on the Albert Nile, Tilenga Safari Lodge delivers panoramic river views and wildlife encounters that begin at your balcony. 26 thoughtfully designed cottages, each with private outdoor seating overlooking the wilderness.",
    image: "/photos/tilengasafarilodge/swimmingpool-view2.png",
    href: "/lodges/tilenga-safari-lodge",
    tag: "Murchison Falls",
    stats: [
      { value: "26", label: "Cottages" },
      { value: "1.7km", label: "To Tangi Gate" },
      { value: "450+", label: "Bird Species" },
    ],
    amenities: ["Albert Nile Views", "Private Balconies", "Sport Fishing", "Night Game Drives", "Basketry Workshops"],
  },
  {
    name: "Kikorongo Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    description: "Sitting directly on the Equator atop a steep hill above Lake George and Lake Kikorongo, with the Rwenzori Mountains on the horizon. 36 units across three accommodation styles — each capturing the panoramic lake and mountain views.",
    image: "/photos/kikorongo_outside.jpg",
    href: "/lodges/kikorongo-safari-lodge",
    tag: "Queen Elizabeth NP",
    stats: [
      { value: "36", label: "Units" },
      { value: "0°", label: "The Equator" },
      { value: "600+", label: "Bird Species" },
    ],
    amenities: ["Lake & Mountain Views", "Swimming Pool", "Kazinga Channel", "Bird Watching", "Rwenzori Climbing"],
  },
];

const experiences = [
  { title: "Gorilla Tracking", description: "Face-to-face with endangered mountain gorillas in the misty highlands of Bwindi.", image: "/photos/newstock/Gorrillahd.jpg" },
  { title: "Great Beast Migration", description: "Witness the world's most spectacular wildlife event as millions cross the savannah.", image: "/photos/newstock/greatbeastmigration.jpg" },
  { title: "Culture - Masai mara", description: "Connect with the living heritage and ancient traditions of the iconic Maasai people.", image: "/photos/newstock/Masai-Mara.jpg" },
  { title: "Game drives for the big 5", description: "Expert-guided dawn and dusk drives in search of the legendary African Big Five.", image: "/photos/newstock/Big-Five-Game-Drives.jpg" },
  { title: "Hot airballoon", description: "Soar above the golden plains at sunrise for a breathtaking bird's-eye view of the wild.", image: "/photos/newstock/Hot-Air-Balloon.jpg" },
  { title: "Mt Rwenzori climbing", description: "Summit the legendary 'Mountains of the Moon' for an epic alpine adventure at the Equator.", image: "/photos/newstock/Mountain-Climbing06Mountain-Climbing.jpg" },
  { title: "Zanzibar", description: "Unwind on turquoise shores where spice-scented breezes meet ancient Stone Town culture.", image: "/photos/newstock/Zanzibar-Beaches.jpg" },
  { title: "Boat Safaris", description: "Glide the Albert Nile or Kazinga Channel for incredible hippo, croc, and bird sightings.", image: "/photos/newstock/Boat-Safaris08Boat-Safaris.jpg" },
  { title: "Namibia Desert", description: "Explore the ancient, towering red dunes of Sossusvlei and the dramatic Skeleton Coast.", image: "/photos/newstock/Namibia-Desert.jpg" },
  { title: "Elephants in Botswana", description: "Encounter massive herds in the lush Okavango Delta, a true sanctuary for giants.", image: "/photos/newstock/Elephantfamily.jpg" },
];

const destinations = [
  {
    name: "Uganda",
    tag: "Pearl of Africa",
    description: "From the lush rainforests of Bwindi to the thundering Murchison Falls and the source of the Nile — Africa at its most raw and rewarding.",
    hotspots: ["Gorilla Tracking", "Murchison Falls", "Queen Elizabeth NP", "Source of the Nile"],
    bestTime: "Jan–Mar · Jul–Sep",
    image: "/photos/newstock/UgandaDestinationHero.jpg",
    href: "/destinations/uganda",
    num: "01",
  },
  {
    name: "Kenya",
    tag: "Iconic Maasai Mara",
    description: "The Great Migration. Maasai Mara. Amboseli's elephants against Kilimanjaro. Kenya is the quintessential African safari.",
    hotspots: ["Maasai Mara", "Wildebeest Migration", "Amboseli NP", "Lake Nakuru"],
    bestTime: "Dec–Mar · Jun–Oct",
    image: "/photos/newstock/Masai-Mara.jpg",
    href: "/destinations/kenya",
    num: "02",
  },
  {
    name: "Tanzania",
    tag: "Serengeti & Zanzibar",
    description: "Vast Serengeti plains, the ancient Ngorongoro Crater, Kilimanjaro, and Zanzibar's crystal shores.",
    hotspots: ["Serengeti NP", "Ngorongoro Crater", "Zanzibar", "Mount Kilimanjaro"],
    bestTime: "Dec–Mar · Jun–Oct",
    image: "/photos/newstock/Ngorongoro-Crater.jpg",
    href: "/destinations/tanzania",
    num: "03",
  },
  {
    name: "Rwanda",
    tag: "Land of a Thousand Hills",
    description: "Mountain gorillas in volcanic mist. Golden monkeys in Nyungwe Forest. The serene shores of Lake Kivu.",
    hotspots: ["Gorilla Tracking", "Volcanoes NP", "Kigali City Tour", "Lake Kivu"],
    bestTime: "May–Oct",
    image: "/photos/newstock/gorrillahigh.jpg",
    href: "/destinations/rwanda",
    num: "04",
  },
  {
    name: "South Africa",
    tag: "Cape & Kruger",
    description: "Big Five in Kruger. Dramatic Cape Peninsula. World-class wines of Stellenbosch. Africa's most diverse destination.",
    hotspots: ["Kruger NP", "Cape Town", "Garden Route", "Winelands"],
    bestTime: "May–Sep",
    image: "/photos/newstock/Cape-Town.jpg",
    href: "/destinations/south-africa",
    num: "05",
  },
  {
    name: "Namibia",
    tag: "Desert & Dunes",
    description: "A land of vast silence — towering red dunes at Sossusvlei, Etosha's wildlife, the Skeleton Coast, and starlit desert skies.",
    hotspots: ["Sossusvlei Dunes", "Etosha NP", "Skeleton Coast", "Fish River Canyon"],
    bestTime: "May–Oct",
    image: "/photos/newstock/Namibia-Desert.jpg",
    href: "/destinations/namibia",
    num: "06",
  },
  {
    name: "Botswana",
    tag: "Okavango Delta",
    description: "Pristine wilderness at its most exclusive — the Okavango Delta, Chobe's elephants, and the Kalahari under a billion stars.",
    hotspots: ["Okavango Delta", "Chobe NP", "Moremi Reserve", "Makgadikgadi Pans"],
    bestTime: "Apr–Oct",
    image: "/photos/newstock/Elephantfamily.jpg",
    href: "/destinations/botswana",
    num: "07",
  },
];

const partners = [
  { 
    name: "Uganda Tourism Board", 
    logo: "/photos/partnerslogo/uganda-tourism-board-logo-25518EC15B-seeklogo.com_.webp",
    link: "https://utb.go.ug/"
  },
  { 
    name: "Association of Uganda Tour Operators", 
    logo: "/photos/partnerslogo/autologo-114x114x0x0x114x114x1670356750.webp",
    link: "https://auto.ug/"
  },
  { 
    name: "Adventure Travel Trade Association", 
    logo: "/photos/partnerslogo/ATTAlogo.png",
    link: "https://www.adventuretravel.biz/"
  },
];

async function seed() {
  console.log('🚀 Starting Seeding...')

  // Seed Lodges
  for (const item of lodges) {
    const imageAsset = await uploadImage(item.image)
    await client.create({
      _type: 'lodge',
      name: item.name,
      slug: { _type: 'slug', current: item.name.toLowerCase().replace(/\s+/g, '-') },
      location: item.location,
      description: item.description,
      tag: item.tag,
      href: item.href,
      image: imageAsset,
      stats: item.stats,
      amenities: item.amenities
    })
    console.log(`✨ Created Lodge: ${item.name}`)
  }

  // Seed Experiences
  for (const item of experiences) {
    const imageAsset = await uploadImage(item.image)
    await client.create({
      _type: 'experience',
      title: item.title,
      description: item.description,
      image: imageAsset
    })
    console.log(`✨ Created Experience: ${item.title}`)
  }

  // Seed Destinations
  for (const item of destinations) {
    const imageAsset = await uploadImage(item.image)
    await client.create({
      _type: 'destination',
      name: item.name,
      slug: { _type: 'slug', current: item.name.toLowerCase().replace(/\s+/g, '-') },
      tag: item.tag,
      description: item.description,
      href: item.href,
      image: imageAsset,
      num: item.num,
      bestTime: item.bestTime,
      hotspots: item.hotspots
    })
    console.log(`✨ Created Destination: ${item.name}`)
  }

  // Seed Partners
  for (const item of partners) {
    const imageAsset = await uploadImage(item.logo)
    await client.create({
      _type: 'partner',
      name: item.name,
      link: item.link,
      logo: imageAsset
    })
    console.log(`✨ Created Partner: ${item.name}`)
  }

  console.log('✅ Seeding Complete!')
}

seed().catch(err => {
  console.error('❌ Seeding failed:', err)
  process.exit(1)
})
