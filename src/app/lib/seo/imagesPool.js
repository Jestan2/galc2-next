// src/lib/seo/imagesPool.js

import fs from "fs";
import path from "path";

const ASSETS_DIR = path.join(process.cwd(), "public", "assets");

// ✅ Your folder names in /public/assets (match your screenshot)
const FOLDER_BY_BUCKET = {
  moving: "Moving",
  cleanout: "Junk",
  warehouse: "Warehouse",
  event: "Events",
  construction: "Construction",
  general: "Head",
};

// ✅ Only allow real image files
const ALLOWED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

// Simple cache so we don't re-scan folders repeatedly during build
const folderCache = new Map();

function safeReadDir(absFolderPath) {
  try {
    return fs.readdirSync(absFolderPath);
  } catch {
    return [];
  }
}

function listPublicImageUrls(folderName) {
  if (folderCache.has(folderName)) return folderCache.get(folderName);

  const abs = path.join(ASSETS_DIR, folderName);
  const files = safeReadDir(abs)
    .filter((f) => ALLOWED_EXT.has(path.extname(f).toLowerCase()))
    .filter((f) => !f.startsWith(".")) // ignore .DS_Store etc
    .sort((a, b) => a.localeCompare(b)); // ✅ stable ordering

  const urls = files.map((f) => `/assets/${folderName}/${f}`);
  folderCache.set(folderName, urls);
  return urls;
}

// FNV-1a-ish hash => stable int seed
function hashToSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Deterministic PRNG
function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seed) {
  const a = [...arr];
  const rand = mulberry32(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickFromFolder({ folderName, seedKey, count = 1 }) {
  const pool = listPublicImageUrls(folderName);
  if (!pool.length) return [];

  const seed = hashToSeed(seedKey);
  const shuffled = seededShuffle(pool, seed);
  return shuffled.slice(0, Math.max(1, count));
}

/**
 * ✅ Main helper you’ll use in the page:
 * - hero: always from Head folder
 * - mid: from the service bucket folder
 */
export function pickServicePageImages({ serviceSlug, citySlug, bucket }) {
  const headFolder = "Head";
  const bucketFolder = FOLDER_BY_BUCKET[bucket] || FOLDER_BY_BUCKET.general;

  const hero = pickFromFolder({
    folderName: headFolder,
    seedKey: `hero__${citySlug}__${serviceSlug}`,
    count: 1,
  })[0];

  const mid = pickFromFolder({
    folderName: bucketFolder,
    seedKey: `mid__${serviceSlug}__${citySlug}__${bucket}`,
    count: 1,
  })[0];

  // Safety fallback if a folder is empty
  return {
    hero: hero || "/assets/Head/head.webp", // change if you want a real fallback file
    mid: mid || hero || "/assets/Head/head.webp",
  };
}