// src/app/lib/seo/cityServiceCopy.js

/* -------------------------------------------------------------------------- */
/* City traits (short + safe + “local-feeling” without risky claims)          */
/* -------------------------------------------------------------------------- */

const CITY_TRAITS = {
  "new-york-ny": {
    traits: ["walk-ups", "tight hallways", "elevator reservations", "curbside loading zones"],
  },
  "los-angeles-ca": {
    traits: ["apartment complexes", "tight parking", "long driveways", "traffic timing windows"],
  },
  "chicago-il": {
    traits: ["mid-rise buildings", "freight elevators", "alley access", "seasonal weather swings"],
  },
  "houston-tx": {
    traits: ["suburban homes", "gated communities", "long carries", "wide driveways"],
  },
  "phoenix-az": {
    traits: ["single-story homes", "garage load-outs", "heat-friendly scheduling", "wide streets"],
  },
  "philadelphia-pa": {
    traits: ["rowhomes", "narrow streets", "stoops", "tight parking situations"],
  },
  "san-antonio-tx": {
    traits: ["suburban moves", "two-story homes", "driveway access", "long hallway carries"],
  },
  "san-diego-ca": {
    traits: ["apartment moves", "tight parking", "busy weekend windows", "coastal traffic patterns"],
  },
  "dallas-tx": {
    traits: ["high-rise apartments", "suburb moves", "loading docks", "time window coordination"],
  },
  "san-jose-ca": {
    traits: ["apartment complexes", "tight loading bays", "office moves", "busy weekday timing"],
  },
  "austin-tx": {
    traits: ["apartment moves", "weekend demand spikes", "tight timing windows", "multi-stop days"],
  },
  "san-francisco-ca": {
    traits: ["steep hills", "tight parking", "walk-ups", "short loading windows"],
  },
  "seattle-wa": {
    traits: ["apartment loading bays", "tight alleys", "weather planning", "busy downtown blocks"],
  },
  "denver-co": {
    traits: ["stairs", "weather swings", "suburban carries", "multi-level homes"],
  },
  "atlanta-ga": {
    traits: ["multi-level homes", "suburb moves", "traffic windows", "long carries"],
  },
  "miami-fl": {
    traits: ["high-rises", "elevator bookings", "condo rules", "heat-friendly timing"],
  },
  "washington-dc": {
    traits: ["rowhomes", "permit-style parking zones", "security desks", "tight streets"],
  },
  "boston-ma": {
    traits: ["historic buildings", "narrow streets", "walk-ups", "tight staircases"],
  },
  "charlotte-nc": {
    traits: ["suburb moves", "townhomes", "warehouse corridors", "easy truck access areas"],
  },
  "las-vegas-nv": {
    traits: ["tight event windows", "heat-friendly scheduling", "hotel/venue coordination", "fast load-outs"],
  },
};

const DEFAULT_TRAITS = ["tight parking", "stairs", "elevator windows", "long carries"];

/* -------------------------------------------------------------------------- */
/* Small helpers                                                              */
/* -------------------------------------------------------------------------- */

function pickTraits(citySlug) {
  return CITY_TRAITS[citySlug]?.traits?.length ? CITY_TRAITS[citySlug].traits : DEFAULT_TRAITS;
}

function formatTraits(traits, max = 3) {
  const t = (traits || []).slice(0, max);
  if (t.length === 0) return "";
  if (t.length === 1) return t[0];
  if (t.length === 2) return `${t[0]} and ${t[1]}`;
  return `${t[0]}, ${t[1]}, and ${t[2]}`;
}

/* -------------------------------------------------------------------------- */
/* Main export                                                                */
/* -------------------------------------------------------------------------- */

export function getCityServiceMicroCopy({ citySlug, bucket, city, region }) {
  const traits = pickTraits(citySlug);
  const traitPhrase = formatTraits(traits, 3);

  // Short tail for meta description uniqueness (keep it short)
  const metaTail = traitPhrase ? `Built for ${traitPhrase}.` : "";

  // 1–2 paragraph block (unique per city + service)
  if (bucket === "moving") {
    return {
      title: `Local moving help in ${city}`,
      metaTail,
      paragraphs: [
        `If you’re booking moving labor in ${city}, we’re ready for real-world constraints like ${traitPhrase}. Our labor-only crews handle heavy lifting, careful carries, and fast loading/unloading so your move stays smooth.`,
        `Renting a U-Haul or using a container/PODS? Share quick notes like stairs, parking, elevator timing, and any oversized items — we’ll keep the pace efficient and place everything where you want it.`,
      ],
    };
  }

  if (bucket === "warehouse") {
    return {
      title: `Warehouse labor support in ${city}`,
      metaTail,
      paragraphs: [
        `Need warehouse labor in ${city}? We support hand unloading, staging, breakdown, and overflow volume — especially when the day gets tight with ${traitPhrase}. Your onsite lead directs tasks and we execute fast.`,
        `From floor loads to dock work, we’re built for reliable arrivals, clear coordination, and consistent pace so your receiving and operations stay on schedule.`,
      ],
    };
  }

  if (bucket === "event") {
    return {
      title: `Event setup & teardown crews in ${city}`,
      metaTail,
      paragraphs: [
        `Events in ${city} often come down to timing — load-in, staging, and teardown need to happen cleanly even with ${traitPhrase}. We provide labor-only crews that move fast under your plan.`,
        `If you have chairs/tables, booth materials, staging, or pack-out, leave your timing window and priority zones — we’ll help you hit deadlines without chaos.`,
      ],
    };
  }

  if (bucket === "cleanout") {
    return {
      title: `Cleanout / junk-out labor in ${city}`,
      metaTail,
      paragraphs: [
        `For cleanouts in ${city}, speed matters — especially when you’re dealing with ${traitPhrase}. We provide labor-only carry-out crews for lifting, sorting, staging, and loading dumpsters or trucks.`,
        `Move-out cleanups, storage units, backrooms, and bulky furniture are common. You bring the disposal plan — we bring the hands to get it cleared fast.`,
      ],
    };
  }

  if (bucket === "construction") {
    return {
      title: `Construction cleanup labor in ${city}`,
      metaTail,
      paragraphs: [
        `Construction cleanup in ${city} is all about keeping timelines intact, even with ${traitPhrase}. Our labor-only crews support debris bagging, sweep-outs, material moves, and end-of-day site resets.`,
        `Your lead directs the workflow — we provide reliable cleanup labor so the site stays controlled, safe, and ready for the next phase.`,
      ],
    };
  }

  // fallback (should rarely happen)
  return {
    title: `Local labor support in ${city}`,
    metaTail,
    paragraphs: [
      `For labor-only help in ${city}, we’re ready for common constraints like ${traitPhrase}. Book fast, get clear confirmation, and keep the job moving.`,
    ],
  };
}
