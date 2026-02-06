// src/app/lib/seo/faqsPool.js

/* -------------------------------------------------------------------------- */
/* Deterministic FAQ Pool                                                     */
/* - Feels "random", but ALWAYS stable per page (SEO-friendly)                */
/* - Picks N FAQs per serviceSlug + citySlug                                  */
/* -------------------------------------------------------------------------- */

function hashToSeed(str) {
  // FNV-1a 32-bit
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededRng(seed) {
  // xorshift32
  let x = seed || 123456789;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seed) {
  const rng = seededRng(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fillCityVars(text, explain) {
  const c = explain || "your city";
  return (text || "").replaceAll("{city}", c);
}

/* -------------------------------------------------------------------------- */
/* FAQ Pools (bucket-specific, high-intent, real objections)                  */
/* - Built for labor-only conversion + SEO                                    */
/* - Avoids fabricated promises; focuses on your real product truths          */
/* -------------------------------------------------------------------------- */

const FAQS = {
  /* ------------------------------- MOVING -------------------------------- */
  moving: [
    {
      q: "What does “labor-only moving help” mean in {city}?",
      a: "Labor-only means you provide the truck, container, or rental — we provide the crew. You get strong hands for loading, unloading, carrying, and careful placement without paying for an overpriced truck + crew bundle.",
    },
    {
      q: "Do you provide a moving truck or rental in {city}?",
      a: "No — we’re labor-only. If you already have a U-Haul, Penske, Budget, PODS/container, or your own truck, we’ll send the crew to do the work.",
    },
    {
      q: "Can you help with U-Haul loading and unloading in {city}?",
      a: "Yes. U-Haul loading/unloading is one of the most common bookings. Tell us what you’re moving and any access details, and we’ll send workers who can move fast and follow your plan.",
    },
    {
      q: "Can your crew handle stairs, elevators, or long carries?",
      a: "Yes. Just include quick notes like stairs, elevator rules, tight hallways, parking distance, and any heavy items so we staff the right crew for your exact setup in {city}.",
    },
    {
      q: "How many movers should I book for my move?",
      a: "It depends on the size of the job and how fast you want it done. Most customers book 2+ workers for faster loading/unloading, and add more workers for large homes, heavy items, or strict time windows.",
    },
    {
      q: "How fast can you match a moving crew in {city}?",
      a: "Matching is designed to be fast — many jobs are staffed within minutes depending on availability. You’ll see clear confirmation updates so you’re not left guessing.",
    },
    {
      q: "What happens if a worker no-shows?",
      a: "We keep coordination tight and send reminders throughout the process. If something happens, we can rush a replacement quickly so your job stays on track.",
    },
    {
      q: "Will I know exactly who is coming to my move?",
      a: "Yes. You’ll get clear job updates and worker details, including headshots of the people assigned to your job in {city}.",
    },
    {
      q: "Can you help move items within the same home or building?",
      a: "Yes. If you need help moving furniture between rooms, loading/unloading storage, or rearranging heavy items, labor-only crews are a great fit.",
    },
    {
      q: "How does pricing work for moving labor in {city}?",
      a: "You’ll get an instant quote up front based on the job details (workers + time). The goal is simple: know the price before you book and avoid surprises.",
    },
    {
      q: "When do I pay for my moving job?",
      a: "You place a card on file to reserve the crew, but you’re only charged after the job is complete — once you mark it done.",
    },
    {
      q: "What should I include in my booking notes to avoid issues?",
      a: "The best notes are short and practical: stairs/elevator, parking/loading zone, any oversized items, fragile items, and your timing window. That’s how the crew shows up ready and the job runs cleanly in {city}.",
    },
  ],

  /* ------------------------------ CLEANOUT ------------------------------- */
  cleanout: [
    {
      q: "Is this junk removal with hauling, or labor-only cleanout help in {city}?",
      a: "This is labor-only cleanout help. We provide the crew to lift, carry, stage, and load — you provide the dumpster, trailer, truck, or disposal plan.",
    },
    {
      q: "What types of cleanouts can you help with in {city}?",
      a: "Cleanout labor is great for move-outs, garages, basements, storage units, apartment cleanouts, carry-outs, and any job where you need strong hands to clear a space fast.",
    },
    {
      q: "Can your crew load a dumpster, Bagster, or trailer efficiently?",
      a: "Yes. If you already have a disposal option ready, the crew can move items quickly and keep things organized so your cleanout stays efficient.",
    },
    {
      q: "Can you handle heavy furniture and bulky items?",
      a: "Yes. Heavy lifting is common for cleanouts — things like couches, mattresses, dressers, appliances, and full box runs. Add notes for anything oversized or awkward.",
    },
    {
      q: "How fast can I book cleanout labor in {city}?",
      a: "Booking is designed to be fast. Many cleanout jobs are short-notice, and you’ll get clear confirmation updates once a crew is matched.",
    },
    {
      q: "Do you bring trucks or haul items away?",
      a: "No — labor-only means we don’t provide the hauling vehicle or disposal. We do the work on-site and follow your plan for where everything goes.",
    },
    {
      q: "What should I prep before the cleanout crew arrives?",
      a: "If you can, separate “keep” vs “go,” confirm where the dumpster/trailer is, and leave simple direction notes. That’s the fastest path to a clean, smooth job in {city}.",
    },
    {
      q: "Will I know who is coming to the cleanout job?",
      a: "Yes. You’ll receive clear job updates and worker details, including headshots of the people assigned to your job in {city}.",
    },
    {
      q: "What if something changes last-minute or someone no-shows?",
      a: "We keep you in the loop with updates and reminders. If something happens, we can move quickly to send a replacement so your cleanout doesn’t stall.",
    },
    {
      q: "How does pricing work for cleanout labor?",
      a: "You’ll see an upfront quote based on the work details (workers + time). It’s designed to be transparent so you can book confidently.",
    },
    {
      q: "When do I pay for my cleanout?",
      a: "Card on file reserves your crew, but you’re only charged after completion — once you mark the job done.",
    },
    {
      q: "Can I add more help if the cleanout is bigger than expected?",
      a: "Yes — if you realize you need extra hands, we can help adjust based on availability in {city}. The key is letting us know early so we can keep timing clean.",
    },
  ],

  /* ----------------------------- WAREHOUSE ------------------------------- */
  warehouse: [
    {
      q: "What kind of warehouse labor do you provide in {city}?",
      a: "We provide labor-only warehouse support — extra hands for real work like unloading, staging, breakdown, sorting support, and overflow volume under your onsite lead.",
    },
    {
      q: "Can you help with truck or container unloading?",
      a: "Yes. Unloading support is a common use-case. You provide the dock plan and priorities — we provide the crew to execute fast.",
    },
    {
      q: "Will workers follow our onsite workflow and supervisor?",
      a: "Yes. This works best with an onsite point-of-contact. Your lead runs the workflow and the crew follows direction to keep operations smooth.",
    },
    {
      q: "How quickly can you staff warehouse shifts in {city}?",
      a: "Matching is designed to be fast and responsive. Depending on availability, jobs can often be filled quickly, with clear confirmation updates.",
    },
    {
      q: "How are warehouse workers vetted?",
      a: "Workers are continuously rated and vetted. We prioritize top performers so the crew you get is reliable and ready to work.",
    },
    {
      q: "Will I know which workers are assigned to my shift?",
      a: "Yes. You’ll get clear updates, including worker details and headshots so you know exactly who is coming.",
    },
    {
      q: "What if someone doesn’t show up to the shift?",
      a: "We send reminders and keep coordination tight. If something happens, we can rush a replacement so your operation keeps moving.",
    },
    {
      q: "Can I add more workers or extend time if we fall behind?",
      a: "Yes — if you need more hands or more time, we can adjust based on availability. The goal is keeping your timeline under control.",
    },
    {
      q: "What do we need to provide onsite for warehouse support?",
      a: "A clear point-of-contact, priorities for the shift, and access to the work area. The cleaner the workflow, the faster the crew executes.",
    },
    {
      q: "How does pricing work for warehouse labor?",
      a: "Pricing is based on workers + time, and you’ll get a quote up front. It’s designed to be clear and predictable for operations teams.",
    },
    {
      q: "When do we pay for warehouse labor?",
      a: "Card on file reserves your crew. You’re only charged after completion — once the job is marked done.",
    },
    {
      q: "Can you support repeat shifts or ongoing help in {city}?",
      a: "Yes. If you need recurring help, we can staff based on availability and keep coordination consistent across shifts.",
    },
  ],

  /* -------------------------------- EVENT -------------------------------- */
  event: [
    {
      q: "What types of event labor can you book in {city}?",
      a: "Event labor is great for setup, teardown, load-in/load-out, staging, moving materials, and helping your team hit strict venue timelines.",
    },
    {
      q: "Is event help labor-only?",
      a: "Yes — labor-only. You provide access, plan/layout, and materials. We provide reliable workers who follow direction and execute fast.",
    },
    {
      q: "Can you support load-in and load-out for venues?",
      a: "Yes. Load-in/load-out is a common booking for events — especially when you have a narrow time window and need extra hands.",
    },
    {
      q: "Can you help set up tables, chairs, and event zones?",
      a: "Yes. If you have a layout and priorities, the crew can move quickly and keep the setup organized.",
    },
    {
      q: "How fast can you confirm event labor in {city}?",
      a: "Matching is designed to be quick. You’ll get clear confirmation updates as soon as a crew is assigned.",
    },
    {
      q: "Will I know who is coming to the event job?",
      a: "Yes. You’ll get job updates and worker details, including headshots, so there are no surprises.",
    },
    {
      q: "What if someone no-shows or timing changes?",
      a: "We keep coordination tight with reminders and updates. If something happens, we can move quickly to send a replacement based on availability.",
    },
    {
      q: "What should I provide to make event labor smooth?",
      a: "A simple plan, clear zones, a point-of-contact, and any timing rules from the venue. The clearer the direction, the faster the execution.",
    },
    {
      q: "Do you provide trucks, equipment, or supplies?",
      a: "We’re labor-only, so you provide the materials/equipment needed for the event. The crew provides the hands and execution.",
    },
    {
      q: "How does pricing work for event labor?",
      a: "You’ll get a quote up front based on workers + time so your budget is clear before you book.",
    },
    {
      q: "When do I pay for event labor?",
      a: "Card on file reserves the crew, but you’re only charged after completion once the job is marked done.",
    },
    {
      q: "What’s the best way to avoid delays on event day?",
      a: "Book early if you can, include venue timing rules, and write short notes about access/parking/loading zones. That’s how event bookings stay clean in {city}.",
    },
  ],

  /* ----------------------------- CONSTRUCTION ---------------------------- */
  construction: [
    {
      q: "What is construction cleanup labor-only help in {city}?",
      a: "It’s labor-only crew support for real job sites. You run the site plan and disposal access — we provide extra hands to keep cleanup pace and timelines on track.",
    },
    {
      q: "What kind of construction tasks can your crew help with?",
      a: "Typical labor includes debris movement, bagging, sweep-outs, material moving, site resets, staging support, and helping your team keep the job flowing.",
    },
    {
      q: "Can your workers handle heavy lifting on job sites?",
      a: "Yes. Heavy lifting is common — moving materials, carrying debris, and loading disposal containers. Add notes for anything unusually heavy or awkward.",
    },
    {
      q: "Do you provide tools, bins, or disposal containers?",
      a: "We’re labor-only. You provide the site materials and disposal access — the crew provides the labor and execution under your direction.",
    },
    {
      q: "How fast can you staff construction cleanup help in {city}?",
      a: "Matching is designed to be fast. Depending on availability, you can often confirm help quickly with clear updates on who’s assigned.",
    },
    {
      q: "Will I know exactly who is coming to the job site?",
      a: "Yes. You’ll receive clear job updates and worker details, including headshots of the workers assigned.",
    },
    {
      q: "What happens if someone no-shows?",
      a: "We keep coordination tight with reminders and updates. If something happens, we can rush a replacement so your site doesn’t stall.",
    },
    {
      q: "What should I include in notes for a construction job?",
      a: "The best notes are simple: access/parking, site rules, required timing, what areas are priority, and the main tasks (debris movement, sweep-out, staging).",
    },
    {
      q: "Can your crew work around our GC schedule and timing windows?",
      a: "Yes. If you include your timing rules and priorities, the crew can plug in cleanly and keep the site moving.",
    },
    {
      q: "How does pricing work for construction labor support?",
      a: "Pricing is based on workers + time. You’ll get a quote up front so you can approve confidently before the crew arrives.",
    },
    {
      q: "When do I pay for construction cleanup labor?",
      a: "Card on file reserves your crew. You’re only charged after completion once the job is marked done.",
    },
    {
      q: "Can I add more workers if the site needs more hands?",
      a: "Yes — if you need extra help, we can adjust based on availability in {city}. The earlier you flag it, the easier it is to keep timing tight.",
    },
  ],

  /* ------------------------------ GENERAL -------------------------------- */
  general: [
    {
      q: "What kind of jobs can I book extra labor for in {city}?",
      a: "Any job where you need reliable hands: lifting, carrying, moving items, loading/unloading, basic on-site help, and time-sensitive tasks where an extra crew makes the difference.",
    },
    {
      q: "Is Great American Labor Co. a labor-only service?",
      a: "Yes — labor-only. You provide the truck/tools/materials if needed, and we send vetted workers who show up ready, follow direction, and execute fast.",
    },
    {
      q: "How fast can I book help in {city}?",
      a: "Booking is designed to be fast. Many jobs are matched within minutes depending on availability, with clear confirmation updates so you’re never left guessing.",
    },
    {
      q: "How does your AI booking concierge help customers?",
      a: "It helps you get a quote instantly, answers common questions, and keeps the process simple so you can book without back-and-forth.",
    },
    {
      q: "Will I get updates during the booking and job?",
      a: "Yes. You’ll get clear updates the entire way through so you know what’s happening and what to expect next.",
    },
    {
      q: "Will I see who is coming before the job starts?",
      a: "Yes. You’ll get worker details, including headshots of the people assigned to your job in {city}.",
    },
    {
      q: "How are workers vetted and prioritized?",
      a: "Workers are continuously rated and vetted. Top-rated workers are prioritized so you get reliable execution — not random guesses.",
    },
    {
      q: "What happens if someone no-shows?",
      a: "We send reminders and keep coordination tight. If something happens, we can rush a replacement quickly to protect your timeline.",
    },
    {
      q: "Do you have enough workers available in {city}?",
      a: "We operate across the U.S. with a large worker network and strong matching. Availability depends on time and demand, but the system is built to fill quickly and keep you updated.",
    },
    {
      q: "How does pricing work?",
      a: "You’ll see a quote up front based on workers + time and your job details. The pricing is designed to be transparent so you can book confidently.",
    },
    {
      q: "When do I pay?",
      a: "Card on file reserves the crew, but you’re only charged once the job is complete — after you mark it done.",
    },
    {
      q: "How does marking a job complete work?",
      a: "After the job is finished, you mark it complete. That triggers payment and helps keep the system accountable and fair for both customers and workers.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Public API                                                                 */
/* -------------------------------------------------------------------------- */

export function pickFeaturedFaqs({
  serviceSlug,
  citySlug,
  bucket = "general",
  cityName,
  count = 4,
}) {
  const pool = FAQS[bucket] || FAQS.general;

  // Deterministic seed per page
  const seed = hashToSeed(`${serviceSlug}__${citySlug}__${bucket}`);

  const normalized = pool.map((f, idx) => ({
    id: `${bucket}-${idx}`,
    q: fillCityVars(f.q, cityName),
    a: fillCityVars(f.a, cityName),
  }));

  const picked = seededShuffle(normalized, seed).slice(0, count);

  // Safety fallback
  if (!picked.length) {
    return seededShuffle(
      (FAQS.general || []).map((f, idx) => ({
        id: `general-${idx}`,
        q: fillCityVars(f.q, cityName),
        a: fillCityVars(f.a, cityName),
      })),
      seed
    ).slice(0, count);
  }

  return picked;
}
