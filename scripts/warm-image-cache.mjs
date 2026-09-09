import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "tm51vlpn",
  dataset: "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// Every dimension bucket used anywhere in lib/imageDimensions.ts, plus a
// no-crop "max" fit for the handful of call sites that pass no dimensions.
const BUCKETS = [
  { w: 1000, h: 1000 }, // SQUARE
  { w: 900, h: 1125 }, // PORTRAIT_4_5
  { w: 900, h: 1200 }, // PORTRAIT_3_4
  { w: 1200, h: 900 }, // LANDSCAPE_4_3
  { w: 1920, h: 1080 }, // WIDE_16_9
  { w: 1600, h: 800 }, // WIDE_2_1
  { w: 1600, h: 1100 }, // WIDE_16_11
];

function refToUrl(ref, w, h) {
  // image-<id>-<dims>-<ext>
  const m = ref.match(/^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/);
  if (!m) return null;
  const [, id, , , ext] = m;
  const base = `https://cdn.sanity.io/images/tm51vlpn/production/${id}-${m[2]}x${m[3]}.${ext}`;
  if (w && h) return `${base}?w=${w}&h=${h}&fit=crop&crop=focalpoint&auto=format`;
  return `${base}?fit=max&auto=format`;
}

function collectRefs(obj, refs = new Set()) {
  if (!obj || typeof obj !== "object") return refs;
  if (obj._type === "image" && obj.asset?._ref) {
    refs.add(obj.asset._ref);
  }
  for (const v of Object.values(obj)) {
    if (Array.isArray(v)) v.forEach((item) => collectRefs(item, refs));
    else if (v && typeof v === "object") collectRefs(v, refs);
  }
  return refs;
}

async function fetchAll() {
  const [lodges, destinations, experiences, partners, siteImages, itineraries, reviews] =
    await Promise.all([
      client.fetch(`*[_type == "lodge"]`),
      client.fetch(`*[_type == "destination"]`),
      client.fetch(`*[_type == "experience"]`),
      client.fetch(`*[_type == "partner"]`),
      client.fetch(`*[_type == "siteImage"]`),
      client.fetch(`*[_type == "itinerary"]`),
      client.fetch(`*[_type == "review"]`),
    ]);
  return [lodges, destinations, experiences, partners, siteImages, itineraries, reviews];
}

const datasets = await fetchAll();
const refs = new Set();
for (const set of datasets) {
  for (const doc of set) collectRefs(doc, refs);
}

console.log(`Found ${refs.size} unique image assets. Warming ${refs.size * (BUCKETS.length + 1)} variants...`);

let ok = 0;
let fail = 0;
const jobs = [];
for (const ref of refs) {
  const urls = [refToUrl(ref, null, null), ...BUCKETS.map((b) => refToUrl(ref, b.w, b.h))].filter(Boolean);
  for (const url of urls) jobs.push(url);
}

const concurrency = 12;
let idx = 0;
async function worker() {
  while (idx < jobs.length) {
    const url = jobs[idx++];
    try {
      const res = await fetch(url);
      if (res.ok) ok++;
      else {
        fail++;
        console.log("FAIL", res.status, url);
      }
    } catch (e) {
      fail++;
      console.log("ERROR", e.message, url);
    }
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

console.log(`Done. ok=${ok} fail=${fail}`);
