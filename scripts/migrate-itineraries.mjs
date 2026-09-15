// One-off migration: moves the 18 hardcoded day-by-day itineraries that live
// inside app/destinations/*/page.tsx into the `itinerary` Sanity document
// type (new shape — see sanity/schemaTypes/itinerary.ts), so each one can
// get its own indexable /itineraries/[slug]/ page.
//
// Idempotent: matches existing `itinerary` docs by their old `packageName`
// field and reuses their `_id` + already-uploaded `image`/`file` assets
// (several already have real PDFs attached — see scripts/seed-itineraries.mjs
// history). Only uploads a fresh hero image for packages that have no
// existing Sanity doc at all (currently: both Namibia packages and
// Botswana's "10-Day Botswana Highlights").
//
// Also found 4 pre-existing `itinerary` docs with real uploaded PDFs that
// aren't referenced by any hardcoded package (e.g. "10-Day Rwanda & Uganda
// Cross-Border") — these get migrated to the new shape but left
// `published: false` since they're missing day-by-day copy, price and
// duration that only someone with the source PDF can fill in. They'll show
// up in Studio with validation warnings prompting that.
//
// Run: `SANITY_API_WRITE_TOKEN=... node scripts/migrate-itineraries.mjs`
// (or `set -a && source .env && set +a` first, matching this repo's other
// scripts/*.mjs).

import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "fs";
import { basename } from "path";

const client = createClient({
  projectId: "tm51vlpn",
  dataset: "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function key(prefix, i) {
  return `${prefix}-${i}`;
}

// The 18 packages currently hardcoded in app/destinations/*/page.tsx,
// transcribed verbatim, tagged with which destination doc(s) they belong to.
const PACKAGES = [
  // --- Uganda ---
  {
    name: "5-Day Wildlife Safari to Murchison Falls & Queen Elizabeth",
    tagline: "Waterfall and wildlife adventure",
    duration: "5 Days",
    price: "From $2,000 / person (2+ pax)",
    description:
      "Comprehensive safari combining the world’s most powerful waterfalls with Uganda’s largest national park — game drives, boat cruises, birding, nature walks, and sunset viewing.",
    activities: ["Waterfall visits", "Game drives", "Boat cruises", "Nature walks", "Sunset viewing"],
    image: "/photos/newstock/Big-Five-Game-Drives.jpg",
    destinationNames: ["Uganda"],
    itinerary: [
      { days: "Days 1–2", desc: "Depart Kampala for Murchison Falls; hike to the top of the falls, afternoon game drive." },
      { days: "Days 3–4", desc: "Boat cruise on the Victoria Nile, drive to Queen Elizabeth NP, Big Four game drives." },
      { days: "Day 5", desc: "Kazinga Channel boat cruise, Rift Valley sunset viewing, return journey." },
    ],
  },
  {
    name: "3-Day Gorilla Tracking in Uganda",
    tagline: "Mountain gorilla immersion",
    duration: "3 Days",
    price: "From $2,800 (2+ pax)",
    description:
      "Trek into Bwindi Impenetrable National Park — across four sectors (Ruhija, Rushaga, Buhoma, Nkuringo) — for a life-changing hour with mountain gorilla families. Maximum 8 people per gorilla family.",
    activities: ["Gorilla trekking in Bwindi", "Four sector options", "Forest walk", "Community visit"],
    image: "/photos/newstock/gorrillla.jpg",
    destinationNames: ["Uganda"],
    itinerary: [
      { days: "Day 1", desc: "Fly or drive to Bwindi; orientation briefing with ranger team and overnight at forest lodge." },
      { days: "Day 2", desc: "Morning gorilla trek deep into the impenetrable forest — one unforgettable hour with a gorilla family." },
      { days: "Day 3", desc: "Batwa cultural community visit and forest walk, return transfer." },
    ],
  },
  {
    name: "12-Day Uganda & Rwanda Experience",
    tagline: "The ultimate East Africa journey",
    duration: "12 Days",
    price: "Contact for pricing (2+ pax)",
    description:
      "An epic cross-border safari from Kigali to Entebbe — combining Rwanda's Genocide Memorial and Akagera National Park with Uganda's shoebill tracking, Murchison Falls, chimpanzees in Kibale, Queen Elizabeth NP, and gorilla trekking in Bwindi Impenetrable Forest.",
    activities: ["Gorilla trekking", "Chimpanzee tracking", "Shoebill tracking", "Game drives", "Nile boat cruise", "Cultural encounters"],
    image: "/photos/newstock/Gorrillahd.jpg",
    destinationNames: ["Uganda", "Rwanda"],
    itinerary: [
      { days: "Days 1–3", desc: "Arrive Kigali; Genocide Memorial, Akagera NP game drives and Lake Ihema boat cruise, Kigali city tour, fly to Entebbe." },
      { days: "Days 4–6", desc: "Shoebill tracking at Mabamba Swamp, transfer to Murchison Falls NP — game drives and Nile boat cruise to the base of the falls." },
      { days: "Days 7–8", desc: "Kibale Forest chimpanzee tracking, Bigodi community walk, transfer to Queen Elizabeth NP." },
      { days: "Days 9–12", desc: "Bwindi gorilla trekking, Batwa community visit, transfer to Kampala for cultural experiences, departure from Entebbe." },
    ],
  },
  // --- Kenya ---
  {
    name: "7-Day Kenya Prime Safari",
    tagline: "Classic wildlife first-timer",
    duration: "7 Days",
    price: "From $2,000 / person",
    description:
      "Explore Kenya’s most iconic reserves with game drives, cultural visits, and the Great Migration circuit including Samburu, Lake Nakuru, and Maasai Mara.",
    activities: ["Nairobi city tour", "Samburu game drives", "Lake Nakuru flamingoes", "Masai Mara safari"],
    image: "/photos/newstock/elephantcars.jpg",
    destinationNames: ["Kenya"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Nairobi; Giraffe Centre & city tour, drive north to Samburu Reserve." },
      { days: "Days 3–4", desc: "Samburu game drives for rare northern species; drive to Lake Nakuru flamingo circuit." },
      { days: "Days 5–7", desc: "Maasai Mara — Great Migration viewing, Big Five game drives, farewell dinner, departure." },
    ],
  },
  {
    name: "7-Day Magical Kenya Tour",
    tagline: "Big five & cultural highlights",
    duration: "7 Days",
    price: "From $2,000 / person",
    description:
      "From Amboseli’s legendary elephant herds and Kilimanjaro views to Lake Nakuru and Masai Mara, this itinerary blends wildlife with authentic local culture.",
    activities: ["Amboseli NP", "Lake Nakuru", "Masai Mara", "Maasai village visit"],
    image: "https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=700&q=85",
    destinationNames: ["Kenya"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Nairobi; drive to Amboseli NP — elephant herds framed by Kilimanjaro at dawn." },
      { days: "Days 3–4", desc: "Lake Nakuru flamingo lake circuit; game drives for rhino and leopard." },
      { days: "Days 5–7", desc: "Maasai Mara safari, authentic Maasai village visit, farewell dinner, departure Nairobi." },
    ],
  },
  {
    name: "5-Day Masai Mara Safari",
    tagline: "Kenya's most prestigious reserve",
    duration: "5 Days",
    price: "From $2,510 / person (2 pax)",
    description:
      "An immersive journey into Kenya's most famous wildlife reserve — the Masai Mara. Experience superb scenery, authentic Maasai culture, full-day game drives across the dotted plains, and an optional hot-air balloon flight at sunrise.",
    activities: ["Masai Mara game drives", "Maasai village visit", "Optional balloon safari", "Wildlife photography"],
    image: "/photos/newstock/elephantcars.jpg",
    destinationNames: ["Kenya"],
    itinerary: [
      { days: "Day 1", desc: "Arrive Nairobi; airport transfer and overnight at Hilton Garden Inn." },
      { days: "Days 2–4", desc: "Drive to Masai Mara; full-day game drives searching for the Big Five, Maasai village visit, optional balloon flight at dawn." },
      { days: "Day 5", desc: "Final morning game drive; depart through Narok and the Great Rift Valley escarpment back to Nairobi airport." },
    ],
  },
  // --- Tanzania ---
  {
    name: "Zanzibar Beach Holiday",
    tagline: "Indian Ocean beach escape",
    duration: "5 Nights / 6 Days",
    price: "From $1,200 · Min. 2 participants",
    description:
      "Stone Town tour, Prison Island, Safari Blue, snorkeling at Mnemba, and turtle swimming at Nungwi — the perfect Indian Ocean escape with coastal luxury.",
    activities: ["Stone Town tour", "Prison Island", "Safari Blue", "Mnemba snorkeling", "Turtle swimming"],
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&q=85",
    destinationNames: ["Tanzania"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Zanzibar; UNESCO Stone Town walking tour and Prison Island tortoise sanctuary." },
      { days: "Days 3–4", desc: "Safari Blue sailing trip through mangroves; Mnemba Atoll snorkeling and dolphin watching." },
      { days: "Days 5–6", desc: "Nungwi turtle swimming sanctuary, beach relaxation and sunset farewell, departure." },
    ],
  },
  {
    name: "Zanzibar Spice Island Escape",
    tagline: "Spice island and sunset bliss",
    duration: "6 Nights / 7 Days",
    price: "From $1,200 · Min. 2 participants",
    description:
      "Enjoy Stone Town, a Spice Tour, Jozani Forest with red colobus monkeys, and a dolphin swim — then relax on white-sand beaches as the sun sets over the Indian Ocean.",
    activities: ["Stone Town", "Prison Island", "Spice Tour", "Jozani Forest", "Dolphin swimming"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&q=85",
    destinationNames: ["Tanzania"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Zanzibar; Stone Town & Prison Island, spice market wander and dhow sunset cruise." },
      { days: "Days 3–4", desc: "Spice farm tour and Jozani Forest — home to rare red colobus monkeys." },
      { days: "Days 5–7", desc: "Dolphin swimming excursion, white-sand beach relaxation, farewell dinner, departure." },
    ],
  },
  {
    name: "8-Day Rwanda & Tanzania Safari",
    tagline: "Gorillas, Serengeti & Ngorongoro",
    duration: "8 Days",
    price: "Contact for pricing (2+ pax)",
    description:
      "A cross-border adventure combining gorilla tracking in Rwanda's Volcanoes National Park with Tanzania's legendary northern circuit — Lake Manyara, the Ngorongoro Crater, and the vast plains of the Serengeti.",
    activities: ["Gorilla tracking", "Ngorongoro Crater game drive", "Serengeti game drives", "Lake Manyara", "Dian Fossey Museum"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
    destinationNames: ["Rwanda", "Tanzania"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Kigali; Genocide Memorial visit, transfer to Volcanoes NP for gorilla tracking." },
      { days: "Day 3", desc: "Dian Fossey Museum visit, transfer to Kigali and fly to Arusha, Tanzania." },
      { days: "Days 4–5", desc: "Lake Manyara game drive, Ngorongoro Crater — a full-day descent into the world's largest intact caldera." },
      { days: "Days 6–8", desc: "Central Serengeti game drives across endless plains, departure from Seronera airstrip." },
    ],
  },
  // --- Botswana ---
  {
    name: "7-Day Okavango Delta Safari",
    tagline: "Fly-in wilderness experience",
    duration: "7 Days",
    price: "From $4,000 / person",
    description:
      "Fly into the heart of the Okavango Delta for an intimate safari by mokoro, motorboat, and game drive — encountering elephant, lion, leopard, and wild dog in Africa's most pristine wilderness.",
    activities: ["Mokoro canoe excursions", "Moremi game drives", "Walking safaris", "Night drives"],
    image: "/photos/newstock/Elephantfamily.jpg",
    destinationNames: ["Botswana"],
    itinerary: [
      { days: "Days 1–2", desc: "Fly into Maun; light aircraft transfer deep into the Okavango Delta, first mokoro excursion." },
      { days: "Days 3–5", desc: "Moremi Game Reserve game drives, walking safaris with expert guides, hippo pod encounters." },
      { days: "Days 6–7", desc: "Night drives for nocturnal predators, farewell sundowner on the floodplains, fly out to Maun." },
    ],
  },
  {
    name: "10-Day Botswana Highlights",
    tagline: "Delta, elephants & salt pans",
    duration: "10 Days",
    price: "From $5,500 / person",
    description:
      "Journey from the lush Okavango Delta to Chobe's legendary elephant herds and the vast silence of the Makgadikgadi Pans — one of Africa's greatest wildlife safaris.",
    activities: ["Okavango Delta", "Chobe river cruise", "Makgadikgadi Pans", "Elephant encounters"],
    image: "/photos/newstock/bigelephant.jpg",
    destinationNames: ["Botswana"],
    itinerary: [
      { days: "Days 1–3", desc: "Maun arrival; Okavango Delta — mokoro excursions, game drives, and wild dog tracking." },
      { days: "Days 4–6", desc: "Chobe NP — sunset river cruise and world-famous elephant encounters at the water's edge." },
      { days: "Days 7–10", desc: "Makgadikgadi Pans — zebra migration, Kalahari meerkats, and starlit salt flat nights." },
    ],
  },
  // --- Namibia ---
  {
    name: "8-Day Namibia Desert Safari",
    tagline: "Dunes, wildlife & vast skies",
    duration: "8 Days",
    price: "From $2,800 / person",
    description:
      "From the towering red dunes of Sossusvlei to Etosha's wildlife-rich salt pan and the raw Atlantic shores of Swakopmund — an epic journey through one of Africa's most dramatic landscapes.",
    activities: ["Sossusvlei dunes", "Etosha game drives", "Swakopmund adventure", "Desert stargazing"],
    image: "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=700&q=85",
    destinationNames: ["Namibia"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Windhoek; drive south to Sossusvlei, sunset view over the ancient red dunes." },
      { days: "Days 3–5", desc: "Dawn dune climb & Dead Vlei photography; drive to Swakopmund via Walvis Bay lagoon." },
      { days: "Days 6–8", desc: "Swakopmund — sandboarding and marine safari; Etosha NP game drives, departure Windhoek." },
    ],
  },
  {
    name: "10-Day Namibia Full Circuit",
    tagline: "Complete Namibia experience",
    duration: "10 Days",
    price: "From $3,500 / person",
    description:
      "Explore Namibia end to end — Skeleton Coast wildlife, Damaraland's desert elephants, the iconic Sossusvlei dunes, and Fish River Canyon — Africa's largest canyon.",
    activities: ["Skeleton Coast", "Damaraland rhino tracking", "Sossusvlei", "Fish River Canyon"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
    destinationNames: ["Namibia"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Windhoek; drive north to the raw Atlantic shores of the Skeleton Coast." },
      { days: "Days 3–5", desc: "Damaraland — desert-adapted elephant tracking and black rhino conservation walks." },
      { days: "Days 6–8", desc: "Sossusvlei dunes and Dead Vlei; Namib Desert night under a billion stars." },
      { days: "Days 9–10", desc: "Fish River Canyon viewpoints and hiking, return Windhoek, departure." },
    ],
  },
  // --- South Africa ---
  {
    name: "7-Day Cape & Kruger Essential",
    tagline: "City soul and wild heart",
    duration: "7 Days",
    price: "From $2,500 / person",
    description:
      "The perfect South Africa introduction — combine the cosmopolitan flair of Cape Town and the Winelands with the raw adrenaline of a Big Five safari in Kruger.",
    activities: ["Table Mountain cableway", "Cape Point tour", "Kruger game drives", "Winelands tasting"],
    image: "/photos/newstock/Cape-Town.jpg",
    destinationNames: ["South Africa"],
    itinerary: [
      { days: "Days 1–3", desc: "Arrive Cape Town; Table Mountain sunset, Cape Peninsula scenic drive and penguin visit." },
      { days: "Day 4", desc: "Full day in the Cape Winelands — estate tastings and historic Stellenbosch wander." },
      { days: "Days 5–7", desc: "Fly to Kruger; open-vehicle game drives for the Big Five, wilderness boma dinner, departure." },
    ],
  },
  {
    name: "10-Day Garden Route Journey",
    tagline: "The ultimate coastal road trip",
    duration: "10 Days",
    price: "From $3,200 / person",
    description:
      "A scenic self-drive or guided journey from Cape Town through the whales of Hermanus, the lagoons of Knysna, and the elephants of Addo.",
    activities: ["Hermanus whale watching", "Knysna Lagoon cruise", "Addo Elephant Park", "Tsitsikamma canopy"],
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=85",
    destinationNames: ["South Africa"],
    itinerary: [
      { days: "Days 1–3", desc: "Cape Town explorations; drive to Hermanus for world-class land-based whale watching." },
      { days: "Days 4–6", desc: "Garden Route transit to Knysna; lagoon sailing and oyster tasting in the heads." },
      { days: "Days 7–10", desc: "Tsitsikamma forest walks and Addo Elephant Park safari, return Cape Town or fly from Gqeberha." },
    ],
  },
  // --- Rwanda ---
  {
    name: "4-Day Remarkable Rwanda",
    tagline: "Gorillas & golden monkeys",
    duration: "4 Days",
    price: "From $3,500 / person",
    description:
      "A focused immersion into Volcanoes National Park for the ultimate primate experience — including mountain gorilla trekking and golden monkey tracking.",
    activities: ["Gorilla trekking", "Golden monkey tracking", "Kigali city tour", "Iby’Iwacu cultural village"],
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=85",
    destinationNames: ["Rwanda"],
    itinerary: [
      { days: "Day 1", desc: "Arrive Kigali; city tour and transfer to Volcanoes NP at the base of the Virunga volcanoes." },
      { days: "Day 2", desc: "Life-changing mountain gorilla trekking experience followed by cultural village visit." },
      { days: "Day 3", desc: "Golden monkey tracking in the bamboo forests or hike to Dian Fossey's original research site." },
      { days: "Day 4", desc: "Scenic drive back to Kigali, souvenir shopping and airport transfer." },
    ],
  },
  {
    name: "4-Day Rwanda Gorilla & Cultural Encounter",
    tagline: "Gorillas, golden monkeys & Kigali heritage",
    duration: "4 Days",
    price: "From $2,743 / person (6 pax)",
    description:
      "Trek into Volcanoes National Park for an unforgettable gorilla encounter, track playful golden monkeys through bamboo forests, visit the Dian Fossey Museum, and explore Kigali's moving Genocide Memorial and vibrant city culture.",
    activities: ["Gorilla tracking", "Golden monkey tracking", "Dian Fossey Museum", "Kigali Genocide Memorial", "Kigali city tour"],
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=85",
    destinationNames: ["Rwanda"],
    itinerary: [
      { days: "Day 1", desc: "Arrive Kigali; Genocide Memorial visit, lunch in the city, scenic transfer to Volcanoes National Park." },
      { days: "Day 2", desc: "Morning gorilla tracking deep into the misty Virunga volcanoes — one life-changing hour with a gorilla family." },
      { days: "Day 3", desc: "Golden monkey tracking in the bamboo forests, followed by the Dian Fossey Museum visit." },
      { days: "Day 4", desc: "Transfer to Kigali for a city tour, lunch, and airport departure." },
    ],
  },
  {
    name: "7-Day Rwanda Grand Tour",
    tagline: "Rainforests, chimps & gorillas",
    duration: "7 Days",
    price: "From $11,500 / person (5 pax)",
    description:
      "The ultimate Rwanda experience spanning three national parks — from chimpanzee trekking and colobus monkeys in Nyungwe's ancient rainforest to gorilla tracking in the Virunga volcanoes. Includes luxury lodges and a return flight over the Land of a Thousand Hills.",
    activities: ["Chimpanzee trekking", "Colobus monkey tracking", "Gorilla tracking", "Nyungwe nature walk", "Kigali city tour"],
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=85",
    destinationNames: ["Rwanda"],
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Kigali; Genocide Memorial visit, fly to Kamembe, Nyungwe Forest nature walk." },
      { days: "Days 3–4", desc: "Chimpanzee trekking and colobus monkey tracking in Nyungwe National Park's ancient rainforest." },
      { days: "Days 5–6", desc: "Transfer to Volcanoes NP; gorilla tracking through the misty Virunga volcanoes." },
      { days: "Day 7", desc: "Drive back to Kigali for a mini city tour and airport departure." },
    ],
  },
];

// Pre-existing `itinerary` docs (real content, real uploaded PDFs in several
// cases) that don't correspond to any hardcoded package above. Migrated to
// the new shape but left unpublished — they're missing duration/price/days
// that only someone with the source PDF can supply.
const ORPHAN_DOC_NAMES = [
  "8-Day Round Trip Around Uganda",
  "12-Day Kenya & Tanzania Safari",
  "10-Day Rwanda & Uganda Cross-Border",
  "Lake Mburo National Park",
];

async function uploadHeroImage(imagePath) {
  if (imagePath.startsWith("http")) {
    const res = await fetch(imagePath);
    if (!res.ok) throw new Error(`Failed to fetch ${imagePath}: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const filename = imagePath.split("/").pop().split("?")[0] || "hero.jpg";
    return client.assets.upload("image", buf, { filename });
  }
  const localPath = `public${imagePath}`;
  if (!existsSync(localPath)) throw new Error(`Local image not found: ${localPath}`);
  const buf = readFileSync(localPath);
  return client.assets.upload("image", buf, { filename: basename(localPath) });
}

async function run() {
  console.log("Fetching destinations and existing itinerary docs...\n");
  const destinations = await client.fetch(`*[_type=="destination"]{_id, name}`);
  const destByName = new Map(destinations.map((d) => [d.name, d._id]));

  const existingDocs = await client.fetch(
    `*[_type=="itinerary"]{_id, packageName, category, image, file}`,
  );
  const existingByName = new Map(existingDocs.map((d) => [d.packageName, d]));
  const consumedNames = new Set();

  for (const pkg of PACKAGES) {
    console.log(`Migrating: ${pkg.name}`);
    const existing = existingByName.get(pkg.name);
    if (existing) consumedNames.add(pkg.name);

    const destinationRefs = pkg.destinationNames.map((name) => {
      const id = destByName.get(name);
      if (!id) throw new Error(`No destination doc found for "${name}"`);
      return { _type: "reference", _ref: id, _key: id };
    });

    let heroImage = existing?.image;
    if (!heroImage) {
      console.log(`  Uploading hero image (no existing Sanity doc)...`);
      const asset = await uploadHeroImage(pkg.image);
      heroImage = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
    }

    const days = pkg.itinerary.map((d, i) => ({
      _type: "day",
      _key: key("day", i),
      dayLabel: d.days,
      body: d.desc,
    }));

    const activities = (pkg.activities || []).map((a) => a);

    const slug = slugify(pkg.name);
    const doc = {
      _id: existing ? existing._id : `itinerary-${slug}`,
      _type: "itinerary",
      title: pkg.name,
      slug: { _type: "slug", current: slug },
      tagline: pkg.tagline,
      destinations: destinationRefs,
      duration: pkg.duration,
      price: pkg.price,
      summary: pkg.description,
      heroImage,
      days,
      activities,
      published: true,
      ...(existing?.file ? { file: existing.file } : {}),
    };

    await client.createOrReplace(doc);
    console.log(`  Saved as ${doc._id}\n`);
  }

  console.log("Migrating orphan docs (real content, no hardcoded package match)...\n");
  for (const name of ORPHAN_DOC_NAMES) {
    const existing = existingByName.get(name);
    if (!existing) {
      console.warn(`  SKIP: "${name}" not found in Sanity (expected it to exist) — check spelling.`);
      continue;
    }
    consumedNames.add(name);
    const destId = destByName.get(existing.category);
    if (!destId) {
      console.warn(`  SKIP: "${name}" has unknown category "${existing.category}"`);
      continue;
    }
    const slug = slugify(name);
    const doc = {
      _id: existing._id,
      _type: "itinerary",
      title: name,
      slug: { _type: "slug", current: slug },
      destinations: [{ _type: "reference", _ref: destId, _key: destId }],
      published: false,
      ...(existing.image ? { heroImage: existing.image } : {}),
      ...(existing.file ? { file: existing.file } : {}),
    };
    await client.createOrReplace(doc);
    console.log(`  Saved as ${doc._id} (published: false — needs duration/price/summary/days from the source PDF)\n`);
  }

  const unaccountedFor = existingDocs.filter((d) => d.packageName && !consumedNames.has(d.packageName));
  if (unaccountedFor.length) {
    console.warn("\nExisting itinerary docs not migrated (not in PACKAGES or ORPHAN_DOC_NAMES) — check manually:");
    for (const d of unaccountedFor) console.warn(`  - ${d.packageName} (${d._id})`);
  }

  console.log("\nMigration complete.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
