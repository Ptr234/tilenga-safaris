import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { basename } from "path";

const client = createClient({
  projectId: "tm51vlpn",
  dataset: "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const itineraries = [
  {
    file: "C:/Users/HP/Downloads/itineries/5 DAY MASAI MARA - TILENGA SAFARIS 2026.pdf",
    packageName: "5-Day Masai Mara Safari",
    category: "Kenya",
    description:
      "An immersive journey into Kenya's most famous wildlife reserve — the Masai Mara. Experience superb scenery, authentic Maasai culture, full-day game drives, and an optional hot-air balloon flight.",
  },
  {
    file: "C:/Users/HP/Downloads/itineries/4 DAYS RWANDA  - 6 PAX TILENGA SAFARIS X RAHA RETREATS.pdf",
    packageName: "4-Day Rwanda Gorilla & Cultural Encounter",
    category: "Rwanda",
    description:
      "Trek into Volcanoes National Park for gorilla encounters, track golden monkeys, visit the Dian Fossey Museum, and explore Kigali's Genocide Memorial.",
  },
  {
    file: "C:/Users/HP/Downloads/itineries/7 DAYS RWANDA  - KEEL FAMILY.pdf",
    packageName: "7-Day Rwanda Grand Tour",
    category: "Rwanda",
    description:
      "The ultimate Rwanda experience spanning three national parks — chimpanzee trekking in Nyungwe, gorilla tracking in the Virunga volcanoes, and luxury lodges throughout.",
  },
  {
    file: "C:/Users/HP/Downloads/itineries/EXPERIENCE UGANDA AND RWANDA – 12 DAYS.pdf",
    packageName: "12-Day Uganda & Rwanda Experience",
    category: "Uganda",
    description:
      "An epic cross-border safari from Kigali to Entebbe — Rwanda's Akagera NP, Uganda's Murchison Falls, Kibale chimps, Queen Elizabeth NP, and Bwindi gorilla trekking.",
  },
  {
    file: "C:/Users/HP/Downloads/itineries/RWANDA AND TANZANIA  -  GORILLA TRACKING AND TANZANIA (RAHA RETREATS).pdf",
    packageName: "8-Day Rwanda & Tanzania Safari",
    category: "Tanzania",
    description:
      "Gorilla tracking in Rwanda's Volcanoes NP combined with Tanzania's northern circuit — Lake Manyara, Ngorongoro Crater, and the Serengeti.",
  },
];

async function seed() {
  console.log("Starting itinerary seed...\n");

  for (const item of itineraries) {
    try {
      console.log(`Uploading: ${item.packageName}`);

      // Read file and upload as asset
      const fileBuffer = readFileSync(item.file);
      const fileName = basename(item.file);
      const asset = await client.assets.upload("file", fileBuffer, {
        filename: fileName,
        contentType: "application/pdf",
      });

      console.log(`  Asset uploaded: ${asset._id}`);

      // Create itinerary document
      const doc = await client.create({
        _type: "itinerary",
        packageName: item.packageName,
        category: item.category,
        description: item.description,
        file: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        },
      });

      console.log(`  Document created: ${doc._id}\n`);
    } catch (err) {
      console.error(`  FAILED: ${item.packageName}`, err.message, "\n");
    }
  }

  console.log("Seed complete.");
}

seed();
