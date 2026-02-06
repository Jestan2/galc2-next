//siteData.js
export const SERVICES = {
  "moving-help": {
    name: "Moving help",
    heroTitle: "Moving help, fast — labor-only crews near you",
    heroSubtitle:
      "Hire vetted workers for heavy lifting, loading/unloading, and furniture moves. Book in minutes and get clear arrival updates.",
    bullets: [
      "Load/unload trucks, trailers, PODS, and storage units",
      "Heavy item moving (stairs, tight spaces, careful handling)",
      "Flexible crew sizes with clear arrival windows",
    ],
    faqs: [
      {
        q: "Do you provide a truck?",
        a: "We provide labor-only crews. You provide the truck, POD, trailer, or container.",
      },
      {
        q: "How quickly can I book?",
        a: "Many jobs can be staffed same-day depending on location and availability.",
      },
      {
        q: "What types of items can you move?",
        a: "Furniture, appliances, boxes, and heavy items — you direct placement and our crew handles lifting and carrying.",
      },
    ],
    keywords: ["moving help near me", "labor-only movers", "loading and unloading service"],
  },

  "warehouse-labor": {
    name: "Warehouse labor",
    heroTitle: "Warehouse support when you need extra hands",
    heroSubtitle:
      "Receiving, unloading, staging, pick & pack support — matched and dispatched with updates so your ops stay on schedule.",
    bullets: [
      "Receiving + hand unloading (containers, pallets, floor loads)",
      "Staging, sorting, and basic pick/pack support",
      "Great for overflow days and recurring staffing",
    ],
    faqs: [
      { q: "Do you manage the shift?", a: "Your on-site lead directs tasks. We provide the crew." },
      { q: "Can we book recurring?", a: "Yes — recurring staffing is supported." },
      { q: "What kinds of sites?", a: "Warehouses, 3PLs, storage facilities, and backroom operations." },
    ],
    keywords: ["warehouse labor staffing", "unloading crew", "temporary warehouse labor"],
  },

  "event-setup-teardown": {
    name: "Event setup and teardown",
    heroTitle: "Event setup and teardown crews that show up",
    heroSubtitle:
      "Chairs, tables, staging, booth materials, and load-out support — staffed to hit your timelines.",
    bullets: ["Setup day crews", "Breakdown night crews", "Large crews for time-critical events"],
    faqs: [
      { q: "Do you supply equipment?", a: "Labor-only. You supply equipment and materials." },
      { q: "Can you staff large events?", a: "Yes — crew size is flexible based on needs." },
    ],
    keywords: ["event setup crew", "event teardown crew", "event staffing help"],
  },

  "junk-out-labor": {
    name: "Junk-out / cleanout labor",
    heroTitle: "Junk-out labor for fast cleanouts",
    heroSubtitle:
      "Unit cleanouts, lifting, sorting, loading — you provide the dumpster or truck, we provide the hands.",
    bullets: ["Storage + unit cleanouts", "Lift, sort, and load", "Backroom cleanouts"],
    faqs: [
      { q: "Do you haul away items?", a: "Labor-only. You provide disposal (dumpster/truck/hauler)." },
      { q: "Can you do heavy lifting?", a: "Yes — heavy items are common for cleanouts." },
    ],
    keywords: ["junk out labor", "cleanout labor", "help loading dumpster"],
  },

  "construction-cleanup": {
    name: "Construction site cleanup labor",
    heroTitle: "Construction cleanup crews to close out jobs faster",
    heroSubtitle:
      "Debris bagging, sweep-outs, material moves, end-of-day site reset — staffed quickly with clear updates.",
    bullets: ["Debris pickup + bagging", "Sweep-outs and site reset", "Material moves and cleanup support"],
    faqs: [
      { q: "Is this skilled trade work?", a: "This is labor support (cleanup + moving materials), directed by your lead." },
      { q: "Can you staff short notice?", a: "Often yes, depending on location and demand." },
    ],
    keywords: ["construction cleanup labor", "site cleanup crew", "post construction cleanup help"],
  },
};

export const METROS = {
  // ---------------------------------------------------------------------------
  // Tier 1 - Mega metros
  // ---------------------------------------------------------------------------
  "new-york-ny": {
    city: "New York",
    region: "NY",
    areas: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Bronx",
      "Staten Island",
      "Harlem",
      "Upper East Side",
      "Upper West Side",
      "Chelsea",
      "Williamsburg",
      "Long Island City",
      "Jersey City",
    ],
    localLine:
      "New York runs on neighborhoods, each with its own pace, streetscape, and personality from the waterfronts to the avenues. It’s a city built for momentum, and expectations are high.",
    localLineVariations: [
      "In New York, everything is dense, diverse, and always in motion, block by block it feels like a different city. People here value speed, clarity, and follow-through.",
      "New York is a true 24/7 city where logistics, culture, and opportunity stack vertically. The standard is simple: be sharp, be on time, and keep it moving.",
    ],
  },

  "los-angeles-ca": {
    city: "Los Angeles",
    region: "CA",
    areas: [
      "Downtown LA",
      "Hollywood",
      "West Hollywood",
      "Beverly Hills",
      "Santa Monica",
      "Culver City",
      "Pasadena",
      "Burbank",
      "Glendale",
      "Long Beach",
      "Inglewood",
      "Santa Clarita",
    ],
    localLine:
      "Los Angeles is a city of hubs, coastal, valley, and everything between, tied together by freeways and neighborhoods with distinct identities. It’s big, bright, and relentlessly dynamic.",
    localLineVariations: [
      "LA stretches from the mountains to the ocean, with pockets that feel like separate towns stitched into one metropolis. Timing and coordination matter here because distances add up fast.",
      "Los Angeles blends entertainment, tech, and laid-back coastal energy across a massive footprint. The city rewards plans that are flexible and well-communicated.",
    ],
  },

  "chicago-il": {
    city: "Chicago",
    region: "IL",
    areas: [
      "The Loop",
      "West Loop",
      "River North",
      "Wicker Park",
      "Lincoln Park",
      "Lakeview",
      "Logan Square",
      "Hyde Park",
      "South Loop",
      "Gold Coast",
      "Uptown",
      "Evanston",
    ],
    localLine:
      "Chicago is a lakefront city with strong neighborhood pride and a serious infrastructure backbone. It’s bold, practical, and built around getting things done.",
    localLineVariations: [
      "Chicago’s identity is equal parts architecture, industry, and community, stitched together by the lake and its grid. People here respect straightforward service and real reliability.",
      "From the lakefront skyline to tight-knit neighborhoods, Chicago runs on routine and momentum. The city expects clear communication and solid execution.",
    ],
  },

  "houston-tx": {
    city: "Houston",
    region: "TX",
    areas: [
      "Downtown",
      "Midtown",
      "Montrose",
      "The Heights",
      "River Oaks",
      "Galleria / Uptown",
      "Westchase",
      "Energy Corridor",
      "Memorial",
      "Sugar Land",
      "Katy",
      "The Woodlands",
    ],
    localLine:
      "Houston is wide, fast-growing, and famously spread out, with a mix of skylines, subdivisions, and business districts. Real planning here starts with routes and timing.",
    localLineVariations: [
      "In Houston, the footprint is huge and the traffic patterns are real, especially around freeways and peak hours. People appreciate clarity and quick coordination.",
      "Houston blends energy, medicine, and global culture across dozens of distinct pockets. The city runs best when things are organized and communicated early.",
    ],
  },

  "phoenix-az": {
    city: "Phoenix",
    region: "AZ",
    areas: [
      "Downtown Phoenix",
      "Scottsdale",
      "Tempe",
      "Mesa",
      "Chandler",
      "Glendale",
      "Peoria",
      "Gilbert",
      "Surprise",
      "Avondale",
      "Goodyear",
      "Paradise Valley",
    ],
    localLine:
      "Phoenix is built on sun, sprawl, and clean grid lines, with major pockets stretching far beyond downtown. The rhythm is steady, and distances matter more than you think.",
    localLineVariations: [
      "In the Valley, neighborhoods flow into each other and drives can be long, even when everything looks close on a map. Good outcomes come from simple, organized plans.",
      "Phoenix mixes desert heat, fast growth, and suburban scale across multiple cities that feel like one metro. People here value smooth coordination and no surprises.",
    ],
  },

  "philadelphia-pa": {
    city: "Philadelphia",
    region: "PA",
    areas: [
      "Center City",
      "University City",
      "Old City",
      "South Philly",
      "Fishtown",
      "Northern Liberties",
      "Rittenhouse Square",
      "West Philly",
      "Manayunk",
      "Chestnut Hill",
      "King of Prussia",
      "Camden",
    ],
    localLine:
      "Philadelphia is historic, tight-knit, and block-by-block, where rowhomes, narrow streets, and neighborhood pride shape the day. People here value directness and real follow-through.",
    localLineVariations: [
      "Philly moves with a mix of old streets and modern corridors, from Center City to the river and out to the Main Line. Clear communication goes a long way here.",
      "In Philadelphia, the culture is grounded and practical, and the city expects you to mean what you say. Show up prepared, stay organized, and keep it simple.",
    ],
  },

  "san-antonio-tx": {
    city: "San Antonio",
    region: "TX",
    areas: [
      "Downtown",
      "Alamo Heights",
      "Stone Oak",
      "The Pearl",
      "Medical Center",
      "King William",
      "Southtown",
      "Helotes",
      "Converse",
      "Schertz",
      "Live Oak",
      "New Braunfels",
    ],
    localLine:
      "San Antonio blends history, military roots, and rapid growth across a sprawling north-south footprint. The vibe is welcoming, but the metro still runs on good timing.",
    localLineVariations: [
      "From the River Walk energy downtown to the fast-growing suburbs, San Antonio covers a lot of ground. People appreciate plans that are friendly, clear, and consistent.",
      "San Antonio is a big city that still feels community-driven, with distinct pockets like Southtown and Stone Oak. Smooth coordination and respect for schedules matter here.",
    ],
  },

  "san-diego-ca": {
    city: "San Diego",
    region: "CA",
    areas: [
      "Downtown",
      "Gaslamp Quarter",
      "La Jolla",
      "Pacific Beach",
      "Mission Valley",
      "North Park",
      "Hillcrest",
      "Chula Vista",
      "Carlsbad",
      "Oceanside",
      "Escondido",
      "Encinitas",
    ],
    localLine:
      "San Diego is coastal, laid-back, and spread across distinct beach towns and inland valleys. The pace feels easy, but planning still matters because the metro is wide.",
    localLineVariations: [
      "From the bays to the canyons, San Diego neighborhoods have very different feels, and routes can shift fast with traffic. People value calm coordination and clear updates.",
      "San Diego mixes military, biotech, and surf culture across a long north-south stretch. The best experiences come from being organized without being pushy.",
    ],
  },

  "dallas-tx": {
    city: "Dallas",
    region: "TX",
    areas: [
      "Downtown Dallas",
      "Uptown",
      "Deep Ellum",
      "Oak Lawn",
      "Bishop Arts District",
      "Design District",
      "Plano",
      "Irving",
      "Richardson",
      "Garland",
      "Frisco",
      "Arlington",
    ],
    localLine:
      "Dallas is fast, modern, and spread across a web of major business districts and suburbs. It’s a city that rewards efficiency, good communication, and clean execution.",
    localLineVariations: [
      "In Dallas, the metro is built around highways and hubs, so timing and routing are part of the plan. People here appreciate professionalism and no wasted time.",
      "From Uptown energy to the wider DFW footprint, Dallas moves with a confident pace. The expectation is simple: be clear, be ready, and deliver what you said.",
    ],
  },

  "san-jose-ca": {
    city: "San Jose",
    region: "CA",
    areas: [
      "Downtown San Jose",
      "Willow Glen",
      "Santana Row",
      "Almaden Valley",
      "Cambrian Park",
      "Campbell",
      "Milpitas",
      "Santa Clara",
      "Sunnyvale",
      "Mountain View",
      "Cupertino",
      "Los Gatos",
    ],
    localLine:
      "San Jose sits at the center of Silicon Valley, where neighborhoods blend into a network of tech campuses and busy corridors. People here expect things to be efficient and well-structured.",
    localLineVariations: [
      "In the South Bay, cities are connected by freeways and routines, and schedules matter. Clear details and clean coordination fit the local culture.",
      "San Jose combines suburban calm with nonstop business momentum, from Santana Row to the peninsula edge. The standard is organized, on-time, and transparent.",
    ],
  },

  "austin-tx": {
    city: "Austin",
    region: "TX",
    areas: [
      "Downtown",
      "South Congress",
      "East Austin",
      "Zilker",
      "Rainey Street",
      "The Domain",
      "Round Rock",
      "Cedar Park",
      "Pflugerville",
      "Lakeway",
      "Georgetown",
      "Dripping Springs",
    ],
    localLine:
      "Austin is creative, fast-growing, and split between downtown energy and a ring of expanding suburbs. The city runs on calendars, traffic windows, and good communication.",
    localLineVariations: [
      "From South Congress to the Domain corridor, Austin’s pockets feel distinct and the metro keeps stretching outward. People here value friendly coordination and clear expectations.",
      "Austin blends tech, music, and outdoor life, and the pace can swing from relaxed to packed in a moment. Plans that are simple and well-timed work best here.",
    ],
  },

  "san-francisco-ca": {
    city: "San Francisco",
    region: "CA",
    areas: [
      "SoMa",
      "Mission District",
      "Financial District",
      "Nob Hill",
      "Pacific Heights",
      "Richmond District",
      "Sunset District",
      "Castro",
      "Marina",
      "North Beach",
      "Daly City",
      "Oakland",
    ],
    localLine:
      "San Francisco is dense and hilly, with neighborhood character changing every few blocks. The city expects precision, respect for tight streets, and strong follow-through.",
    localLineVariations: [
      "From SoMa to the Sunset, SF has micro-neighborhoods with their own flow and constraints. Good experiences come from being prepared and communicating clearly.",
      "San Francisco blends old architecture with modern momentum, and the Bay Area rhythm runs on timing. People here value transparency and smooth coordination.",
    ],
  },

  "seattle-wa": {
    city: "Seattle",
    region: "WA",
    areas: [
      "Downtown",
      "Capitol Hill",
      "South Lake Union",
      "Queen Anne",
      "Ballard",
      "Fremont",
      "University District",
      "West Seattle",
      "Bellevue",
      "Redmond",
      "Kirkland",
      "Renton",
    ],
    localLine:
      "Seattle is shaped by water, hills, and neighborhood villages that feel distinct even when they’re close. The pace is thoughtful, and people appreciate calm, reliable coordination.",
    localLineVariations: [
      "In Seattle, bridges and corridors define how the city moves, and timing can shift with traffic and weather. Clarity and consistency matter here.",
      "From the urban core to the Eastside, Seattle balances tech energy with local community feel. The expectation is simple: be organized, be respectful, be dependable.",
    ],
  },

  "denver-co": {
    city: "Denver",
    region: "CO",
    areas: [
      "Downtown",
      "LoDo",
      "RiNo",
      "Capitol Hill",
      "Cherry Creek",
      "Highlands",
      "Aurora",
      "Lakewood",
      "Littleton",
      "Englewood",
      "Centennial",
      "Thornton",
    ],
    localLine:
      "Denver is a mile-high hub with a strong neighborhood scene and a metro that stretches quickly into the suburbs. The culture is friendly, but people still expect punctual, organized plans.",
    localLineVariations: [
      "From LoDo to the foothills, Denver runs on an active lifestyle and a steady pace. Clear timelines and good coordination fit right in here.",
      "Denver mixes urban growth with outdoor-minded routines, and the metro can spread fast. People appreciate straightforward communication and clean execution.",
    ],
  },

  "atlanta-ga": {
    city: "Atlanta",
    region: "GA",
    areas: [
      "Downtown",
      "Midtown",
      "Buckhead",
      "Old Fourth Ward",
      "Virginia-Highland",
      "Decatur",
      "Sandy Springs",
      "Marietta",
      "Alpharetta",
      "Roswell",
      "Brookhaven",
      "Vinings",
    ],
    localLine:
      "Atlanta is a city of neighborhoods and corridors, with real distance between hubs and traffic that shapes the day. People here value confident planning and clear updates.",
    localLineVariations: [
      "In Atlanta, the metro is wide and connected by major routes, and timing matters more than most visitors expect. Strong coordination is what makes things feel smooth.",
      "Atlanta blends business energy with neighborhood personality, from Midtown to the northern suburbs. The standard is clear communication and dependable follow-through.",
    ],
  },

  "miami-fl": {
    city: "Miami",
    region: "FL",
    areas: [
      "Downtown Miami",
      "Brickell",
      "Wynwood",
      "Little Havana",
      "South Beach",
      "Miami Beach",
      "Coral Gables",
      "Coconut Grove",
      "Doral",
      "Kendall",
      "Aventura",
      "Hialeah",
    ],
    localLine:
      "Miami is vibrant, bilingual, and always moving, with coastal hubs and inland neighborhoods that each feel distinct. People expect fast responses, clear details, and strong follow-through.",
    localLineVariations: [
      "From Brickell to Wynwood to the beach cities, Miami runs on momentum and tight schedules. Coordination and communication are what keep things smooth here.",
      "Miami blends finance, nightlife, and family neighborhoods across a dense metro. The vibe is warm, but expectations are direct: be clear and stay on track.",
    ],
  },

  "washington-dc": {
    city: "Washington",
    region: "DC",
    areas: [
      "Downtown DC",
      "Capitol Hill",
      "Georgetown",
      "Dupont Circle",
      "Adams Morgan",
      "Navy Yard",
      "NoMa",
      "Arlington",
      "Alexandria",
      "Bethesda",
      "Silver Spring",
      "Tysons",
    ],
    localLine:
      "Washington is structured, fast-paced, and built around a mix of neighborhoods, federal corridors, and close-in suburbs. People here value professionalism, punctuality, and clear communication.",
    localLineVariations: [
      "DC moves on schedules and details, and the metro area crosses city lines constantly into Virginia and Maryland. Clear plans and clean coordination fit the local pace.",
      "From Capitol Hill to Arlington to Bethesda, Washington stays busy and organized. The expectation is straightforward: be prepared, be timely, and communicate clearly.",
    ],
  },

  "boston-ma": {
    city: "Boston",
    region: "MA",
    areas: [
      "Downtown Boston",
      "Back Bay",
      "South End",
      "North End",
      "Seaport",
      "Fenway",
      "Cambridge",
      "Somerville",
      "Brookline",
      "Allston / Brighton",
      "Jamaica Plain",
      "Quincy",
    ],
    localLine:
      "Boston is historic and compact, with older streets and strong neighborhood identity across the river cities. People here appreciate sharp planning, clear communication, and no nonsense execution.",
    localLineVariations: [
      "In Boston, the metro is tight but complex, and the layout does not always follow a clean grid. Good experiences come from being prepared and staying organized.",
      "From Back Bay to Cambridge to the Seaport, Boston runs on routines and expectations. The standard is simple: be on time, be clear, and follow through.",
    ],
  },

  "charlotte-nc": {
    city: "Charlotte",
    region: "NC",
    areas: [
      "Uptown",
      "South End",
      "NoDa",
      "Plaza Midwood",
      "Ballantyne",
      "University City",
      "Matthews",
      "Huntersville",
      "Concord",
      "Gastonia",
      "Fort Mill",
      "Pineville",
    ],
    localLine:
      "Charlotte is growing fast, with a strong Uptown core and expanding neighborhoods in every direction. People here value smooth communication, predictable timelines, and professional follow-through.",
    localLineVariations: [
      "From South End to the lake suburbs, Charlotte’s footprint keeps stretching outward. Clear planning and steady coordination make everything feel easier here.",
      "Charlotte blends finance, families, and new development across a wide metro. The expectation is calm, organized execution and updates that are easy to understand.",
    ],
  },

  "las-vegas-nv": {
    city: "Las Vegas",
    region: "NV",
    areas: [
      "The Strip",
      "Downtown Las Vegas",
      "Summerlin",
      "Henderson",
      "North Las Vegas",
      "Paradise",
      "Spring Valley",
      "Enterprise",
      "Centennial Hills",
      "Sunrise Manor",
      "Whitney",
      "Green Valley",
    ],
    localLine:
      "Las Vegas is built on constant motion, with tourism energy at the center and real neighborhoods expanding across the valley. Timing matters here because traffic and events can change the flow fast.",
    localLineVariations: [
      "Vegas runs on peaks, weekends, and major events, and the city can feel completely different hour to hour. People appreciate plans that are clear and adaptable.",
      "From the Strip to the suburbs, Las Vegas mixes high intensity corridors with quiet residential pockets. The best outcomes come from clear details and steady coordination.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Tier 2 - Major metros (high ROI)
  // ---------------------------------------------------------------------------
  "detroit-mi": {
    city: "Detroit",
    region: "MI",
    areas: [
      "Downtown Detroit",
      "Midtown",
      "Corktown",
      "New Center",
      "Greektown",
      "Dearborn",
      "Royal Oak",
      "Ferndale",
      "Troy",
      "Warren",
      "Southfield",
      "Livonia",
    ],
    localLine:
      "Detroit is resilient and rebuilding, with a strong core and distinct surrounding cities that each have their own identity. People here value straightforward communication and real reliability.",
    localLineVariations: [
      "From Corktown to the suburbs, Detroit’s metro is a mix of legacy industry and new momentum. The expectation is honest timelines and follow-through.",
      "Detroit runs on practicality and neighborhood pride, and the region spreads quickly into Oakland and Wayne County. Clear coordination and consistency matter here.",
    ],
  },

  "minneapolis-mn": {
    city: "Minneapolis",
    region: "MN",
    areas: [
      "Downtown Minneapolis",
      "North Loop",
      "Uptown",
      "Northeast Minneapolis",
      "Dinkytown",
      "St. Paul",
      "Bloomington",
      "Edina",
      "Richfield",
      "Maple Grove",
      "St. Louis Park",
      "Eagan",
    ],
    localLine:
      "Minneapolis is organized, community-focused, and connected closely with St. Paul across a broad metro. People here appreciate clear plans, respectful communication, and reliable execution.",
    localLineVariations: [
      "In the Twin Cities, neighborhoods feel distinct and routines matter, from North Loop energy to quiet suburbs. The standard is simple: be clear and be dependable.",
      "Minneapolis balances city life with suburban reach, and weather can shape schedules. Good coordination and calm communication go a long way here.",
    ],
  },

  "tampa-fl": {
    city: "Tampa",
    region: "FL",
    areas: [
      "Downtown Tampa",
      "Ybor City",
      "Hyde Park",
      "Channelside",
      "Westshore",
      "South Tampa",
      "Brandon",
      "Riverview",
      "Carrollwood",
      "New Tampa",
      "St. Petersburg",
      "Clearwater",
    ],
    localLine:
      "Tampa Bay is a true three-city region, with bridges, beaches, and business districts shaping how the area moves. People here value coordination that accounts for traffic and distance.",
    localLineVariations: [
      "From Ybor to the Gulf beaches, Tampa Bay routines are shaped by crossings and rush hours. Clear timelines and good communication make the day feel smooth.",
      "Tampa blends growth, waterfront living, and suburban expansion, and the metro stretches wide. The expectation is organized planning and steady follow-through.",
    ],
  },

  "orlando-fl": {
    city: "Orlando",
    region: "FL",
    areas: [
      "Downtown Orlando",
      "Winter Park",
      "Lake Eola Heights",
      "College Park",
      "Baldwin Park",
      "Dr. Phillips",
      "Altamonte Springs",
      "Maitland",
      "Kissimmee",
      "Lake Buena Vista",
      "Sanford",
      "Oviedo",
    ],
    localLine:
      "Orlando is a city of neighborhoods plus a major visitor corridor, with highways and timing shaping the metro’s rhythm. People appreciate plans that are clear and flexible.",
    localLineVariations: [
      "Orlando moves between downtown pockets and the wider resort region, and traffic can change quickly near major corridors. Good coordination keeps everything easy.",
      "From Winter Park to Lake Buena Vista, Orlando blends local routines with constant movement. The expectation is simple: communicate clearly and stay on schedule.",
    ],
  },

  "st-louis-mo": {
    city: "St. Louis",
    region: "MO",
    areas: [
      "Downtown St. Louis",
      "Central West End",
      "Soulard",
      "The Grove",
      "Tower Grove",
      "Clayton",
      "University City",
      "Richmond Heights",
      "Kirkwood",
      "Webster Groves",
      "Florissant",
      "Chesterfield",
    ],
    localLine:
      "St. Louis is a city of proud neighborhoods and strong local character, with a metro that spreads deep into the county. People here value practical planning and honest communication.",
    localLineVariations: [
      "From the central corridor to the suburbs, St. Louis moves on routines and reliability. The standard is clear details and follow-through.",
      "St. Louis blends historic streets with modern hubs like Clayton, and each area has its own flow. Calm coordination and consistency fit the local pace.",
    ],
  },

  "baltimore-md": {
    city: "Baltimore",
    region: "MD",
    areas: [
      "Inner Harbor",
      "Fells Point",
      "Federal Hill",
      "Canton",
      "Mount Vernon",
      "Hampden",
      "Patterson Park",
      "Towson",
      "Columbia",
      "Ellicott City",
      "Glen Burnie",
      "Catonsville",
    ],
    localLine:
      "Baltimore is a waterfront city with tight neighborhood identity and a metro that connects quickly into surrounding counties. People here appreciate direct communication and dependable execution.",
    localLineVariations: [
      "From rowhouse blocks to suburban hubs, Baltimore’s rhythm changes fast across short distances. Clear planning and follow-through matter here.",
      "Baltimore blends historic streets with busy corridors into Towson and Columbia. The expectation is simple: be organized and communicate clearly.",
    ],
  },

  "portland-or": {
    city: "Portland",
    region: "OR",
    areas: [
      "Downtown Portland",
      "Pearl District",
      "Nob Hill",
      "Alberta Arts District",
      "Hawthorne",
      "Sellwood",
      "Beaverton",
      "Hillsboro",
      "Gresham",
      "Lake Oswego",
      "Vancouver",
      "Tigard",
    ],
    localLine:
      "Portland is neighborhood-driven and laid-back, with distinct pockets and an easy-to-feel local rhythm. People here value respectful communication, thoughtful planning, and consistency.",
    localLineVariations: [
      "In Portland, the city feels like a collection of mini-districts, each with its own vibe and flow. Clear details and calm coordination go a long way.",
      "Portland blends an urban core with quick suburban reach into Washington County and across the river. The expectation is transparency and steady follow-through.",
    ],
  },

  "sacramento-ca": {
    city: "Sacramento",
    region: "CA",
    areas: [
      "Downtown Sacramento",
      "Midtown",
      "East Sacramento",
      "Land Park",
      "Natomas",
      "Arden-Arcade",
      "Elk Grove",
      "Roseville",
      "Folsom",
      "Rancho Cordova",
      "Citrus Heights",
      "West Sacramento",
    ],
    localLine:
      "Sacramento is a capital city with a strong grid, a growing urban core, and suburbs that expand fast in every direction. People here appreciate clear planning and consistent communication.",
    localLineVariations: [
      "From Midtown energy to the wider suburban ring, Sacramento’s metro covers a lot of ground. The best experiences come from organized details and steady follow-through.",
      "Sacramento blends government routines with a family-focused metro, and timing can shift with commuter traffic. Clear coordination makes everything smoother.",
    ],
  },

  "nashville-tn": {
    city: "Nashville",
    region: "TN",
    areas: [
      "Downtown Nashville",
      "The Gulch",
      "Music Row",
      "East Nashville",
      "12 South",
      "Germantown",
      "Green Hills",
      "Bellevue",
      "Antioch",
      "Brentwood",
      "Franklin",
      "Murfreesboro",
    ],
    localLine:
      "Nashville is growing fast, with tourism energy downtown and real neighborhoods spreading outward. The city moves on schedules, traffic windows, and clear coordination.",
    localLineVariations: [
      "From The Gulch to the suburbs, Nashville’s footprint keeps expanding and routes matter. People appreciate clear details, on-time arrivals, and no confusion.",
      "Nashville blends music, business, and family neighborhoods across a wide metro. The expectation is friendly communication and dependable follow-through.",
    ],
  },

  "pittsburgh-pa": {
    city: "Pittsburgh",
    region: "PA",
    areas: [
      "Downtown",
      "Strip District",
      "Lawrenceville",
      "Shadyside",
      "Squirrel Hill",
      "South Side",
      "Oakland",
      "Mount Washington",
      "Bloomfield",
      "Cranberry Township",
      "Monroeville",
      "Bethel Park",
    ],
    localLine:
      "Pittsburgh is defined by rivers, bridges, and neighborhood pride, with routes that can be deceptively complex. People here value clear planning, patience, and honest communication.",
    localLineVariations: [
      "In Pittsburgh, the geography shapes everything, and timing can change quickly across bridges and tunnels. Good outcomes come from organized details and follow-through.",
      "From the East End to the North Hills, Pittsburgh moves with a steady, practical pace. The expectation is clear communication and dependable execution.",
    ],
  },

  "cincinnati-oh": {
    city: "Cincinnati",
    region: "OH",
    areas: [
      "Downtown Cincinnati",
      "Over-the-Rhine",
      "Mount Adams",
      "Clifton",
      "Hyde Park",
      "Oakley",
      "West Chester",
      "Blue Ash",
      "Norwood",
      "Covington",
      "Newport",
      "Florence",
    ],
    localLine:
      "Cincinnati blends historic neighborhoods with a modern metro that crosses the river into Northern Kentucky. People here appreciate straightforward communication and reliable follow-through.",
    localLineVariations: [
      "From Over-the-Rhine to the suburbs, Cincinnati moves at a steady pace and expects plans that are clear and realistic. Good coordination makes things feel easy.",
      "Cincinnati is a city of hills, pockets, and close-in districts, plus a wider ring of suburbs. The standard is simple: be clear, be prepared, and deliver.",
    ],
  },

  "cleveland-oh": {
    city: "Cleveland",
    region: "OH",
    areas: [
      "Downtown Cleveland",
      "Ohio City",
      "Tremont",
      "University Circle",
      "Lakewood",
      "Edgewater",
      "Shaker Heights",
      "Cleveland Heights",
      "Westlake",
      "Strongsville",
      "Parma",
      "Beachwood",
    ],
    localLine:
      "Cleveland is a lakefront city with strong neighborhood identity and a metro that stretches wide into the suburbs. People here value practicality, clear communication, and reliability.",
    localLineVariations: [
      "From west side neighborhoods to east side communities, Cleveland’s rhythm is steady and straightforward. Clear timelines and no surprises matter here.",
      "Cleveland blends legacy industry with growing energy around the core districts. The expectation is honest coordination and dependable follow-through.",
    ],
  },

  "kansas-city-mo": {
    city: "Kansas City",
    region: "MO",
    areas: [
      "Downtown KC",
      "Power & Light District",
      "Crossroads",
      "Westport",
      "Country Club Plaza",
      "Brookside",
      "Overland Park",
      "Leawood",
      "Olathe",
      "Lenexa",
      "Independence",
      "Lee's Summit",
    ],
    localLine:
      "Kansas City is spread across state lines, with distinct hubs and a metro that moves on highways and routines. People here appreciate clear plans and steady, dependable execution.",
    localLineVariations: [
      "From the Crossroads to Johnson County suburbs, KC covers real distance and timing matters. Good coordination and simple communication fit the local pace.",
      "Kansas City blends neighborhood culture with suburban scale, and the region expects practical follow-through. The standard is clear details and consistency.",
    ],
  },

  "indianapolis-in": {
    city: "Indianapolis",
    region: "IN",
    areas: [
      "Downtown Indy",
      "Broad Ripple",
      "Mass Ave",
      "Fountain Square",
      "Carmel",
      "Fishers",
      "Noblesville",
      "Greenwood",
      "Avon",
      "Plainfield",
      "Lawrence",
      "Zionsville",
    ],
    localLine:
      "Indianapolis is organized and easy to navigate, with a strong downtown core and fast-growing suburbs. People here value simple planning, clear communication, and reliability.",
    localLineVariations: [
      "In Indy, the metro spreads outward quickly, but the rhythm stays practical and steady. Clear details and consistent follow-through are what people respect.",
      "From Mass Ave to the northern suburbs, Indianapolis expects straightforward service and no confusion. The standard is clean coordination and on-time execution.",
    ],
  },

  "columbus-oh": {
    city: "Columbus",
    region: "OH",
    areas: [
      "Downtown Columbus",
      "Short North",
      "German Village",
      "Grandview Heights",
      "Clintonville",
      "Arena District",
      "Dublin",
      "Worthington",
      "Westerville",
      "Gahanna",
      "Hilliard",
      "Reynoldsburg",
    ],
    localLine:
      "Columbus is growing fast, with a youthful energy and a metro that expands quickly into the suburbs. People here appreciate clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From Short North to the outer belt, Columbus covers a lot of ground and routines matter. Strong coordination and clarity keep things smooth here.",
      "Columbus blends campus culture, tech growth, and family neighborhoods across a wide metro. The expectation is simple: be organized and communicate clearly.",
    ],
  },

  "milwaukee-wi": {
    city: "Milwaukee",
    region: "WI",
    areas: [
      "Downtown Milwaukee",
      "Third Ward",
      "East Side",
      "Bay View",
      "Riverwest",
      "Wauwatosa",
      "West Allis",
      "Shorewood",
      "Glendale",
      "Brookfield",
      "Greenfield",
      "Oak Creek",
    ],
    localLine:
      "Milwaukee is a lakefront city with strong local pride and a metro that moves at a steady, practical pace. People here value direct communication and reliability.",
    localLineVariations: [
      "From the Third Ward to the suburbs, Milwaukee is straightforward and community-driven. Clear plans and consistent follow-through matter here.",
      "Milwaukee blends historic neighborhoods with an easy rhythm, and the region expects you to keep things simple. The standard is organized, on time, and transparent.",
    ],
  },

  "new-orleans-la": {
    city: "New Orleans",
    region: "LA",
    areas: [
      "French Quarter",
      "CBD",
      "Garden District",
      "Uptown",
      "Mid-City",
      "Bywater",
      "Marigny",
      "Metairie",
      "Kenner",
      "Gentilly",
      "Lakeview",
      "Chalmette",
    ],
    localLine:
      "New Orleans is historic, neighborhood-driven, and shaped by its waterways and culture. The pace can be relaxed, but people still value clear plans and respectful communication.",
    localLineVariations: [
      "From Uptown to the river neighborhoods, New Orleans runs on local rhythm and strong community identity. Clear coordination and follow-through are what stand out here.",
      "New Orleans blends tourism corridors with real residential pockets where routines matter. The expectation is simple: be clear, be respectful, and stay consistent.",
    ],
  },

  "salt-lake-city-ut": {
    city: "Salt Lake City",
    region: "UT",
    areas: [
      "Downtown SLC",
      "Sugar House",
      "The Avenues",
      "Capitol Hill",
      "South Salt Lake",
      "Murray",
      "West Valley City",
      "Sandy",
      "Draper",
      "Midvale",
      "Cottonwood Heights",
      "West Jordan",
    ],
    localLine:
      "Salt Lake City is clean, organized, and growing quickly along the Wasatch Front. People here value punctuality, clear communication, and plans that are simple and respectful.",
    localLineVariations: [
      "From downtown to the south valley, the metro stretches along a narrow corridor, so timing and routing matter. Clear details keep things smooth here.",
      "SLC blends city energy with outdoor routines, and schedules are often tight. The standard is straightforward: be prepared and communicate clearly.",
    ],
  },

  "raleigh-nc": {
    city: "Raleigh",
    region: "NC",
    areas: [
      "Downtown Raleigh",
      "North Hills",
      "Five Points",
      "Cary",
      "Apex",
      "Morrisville",
      "Durham",
      "Chapel Hill",
      "Garner",
      "Wake Forest",
      "Holly Springs",
      "Fuquay-Varina",
    ],
    localLine:
      "Raleigh is part of a connected Triangle region, with steady growth and a metro that flows between multiple city centers. People here value clear communication and reliable follow-through.",
    localLineVariations: [
      "In the Triangle, routes cross Raleigh, Durham, and Cary constantly, and timing matters on busy commuter corridors. Good coordination keeps everything easy.",
      "Raleigh blends tech growth with family neighborhoods and a calm pace. The expectation is simple: be clear, be organized, and stay consistent.",
    ],
  },

  "jacksonville-fl": {
    city: "Jacksonville",
    region: "FL",
    areas: [
      "Downtown Jacksonville",
      "Riverside",
      "San Marco",
      "Avondale",
      "Southside",
      "Baymeadows",
      "Mandarin",
      "Arlington",
      "Jacksonville Beach",
      "Neptune Beach",
      "Orange Park",
      "Ponte Vedra",
    ],
    localLine:
      "Jacksonville is sprawling, coastal, and built around long drives between distinct pockets. People here value straightforward plans, clear timing, and communication that stays consistent.",
    localLineVariations: [
      "In Jax, the footprint is huge, and the metro stretches from the river to the beaches and far into the suburbs. Good coordination is what makes things smooth.",
      "Jacksonville blends beach life with business corridors and family neighborhoods across a wide area. The expectation is simple: be clear, be on time, and follow through.",
    ],
  },

  "oklahoma-city-ok": {
    city: "Oklahoma City",
    region: "OK",
    areas: [
      "Downtown OKC",
      "Bricktown",
      "Midtown",
      "Nichols Hills",
      "The Village",
      "Edmond",
      "Moore",
      "Norman",
      "Yukon",
      "Bethany",
      "Mustang",
      "Del City",
    ],
    localLine:
      "Oklahoma City is spread out, easy to navigate, and built on a steady, practical pace. People here appreciate clear plans, honest timelines, and dependable follow-through.",
    localLineVariations: [
      "From Bricktown to the suburbs, OKC runs on routines and straightforward communication. Good coordination and clarity go a long way here.",
      "Oklahoma City blends a growing core with wide suburban reach, and timing matters across distances. The standard is simple: be clear and be reliable.",
    ],
  },

  "louisville-ky": {
    city: "Louisville",
    region: "KY",
    areas: [
      "Downtown Louisville",
      "NuLu",
      "Highlands",
      "Old Louisville",
      "Germantown",
      "St. Matthews",
      "Crescent Hill",
      "Jeffersontown",
      "Middletown",
      "Shively",
      "New Albany",
      "Clarksville",
    ],
    localLine:
      "Louisville is a river city with strong neighborhood character and a metro that crosses into Southern Indiana. People here value direct communication, realistic timing, and reliability.",
    localLineVariations: [
      "From NuLu to the East End suburbs, Louisville moves at a steady pace and appreciates clear details. Consistent follow-through is what stands out here.",
      "Louisville blends historic streets with suburban reach, and routines matter across the metro. The expectation is simple: be organized and communicate clearly.",
    ],
  },

  "richmond-va": {
    city: "Richmond",
    region: "VA",
    areas: [
      "Downtown Richmond",
      "The Fan",
      "Museum District",
      "Scott's Addition",
      "Shockoe Bottom",
      "Church Hill",
      "Short Pump",
      "Henrico",
      "Chesterfield",
      "Midlothian",
      "Mechanicsville",
      "Glen Allen",
    ],
    localLine:
      "Richmond blends historic neighborhoods with fast-growing suburbs and a busy set of commuter corridors. People here value clear plans, consistent communication, and dependable execution.",
    localLineVariations: [
      "From the river districts to the west end, Richmond’s rhythm is steady and practical. Good coordination and clear details are what people appreciate.",
      "Richmond is a capital city with local pride and distinct neighborhoods that feel personal. The standard is simple: be clear and follow through.",
    ],
  },

  "hartford-ct": {
    city: "Hartford",
    region: "CT",
    areas: [
      "Downtown Hartford",
      "West End",
      "Asylum Hill",
      "East Hartford",
      "West Hartford",
      "Wethersfield",
      "Newington",
      "Manchester",
      "Glastonbury",
      "Bloomfield",
      "Farmington",
      "Windsor",
    ],
    localLine:
      "Hartford is a central Connecticut hub with quick connections between city neighborhoods and surrounding towns. People here value organized plans, clear communication, and reliability.",
    localLineVariations: [
      "In the Hartford area, trips move fast between West Hartford, Glastonbury, and nearby towns, and timing still matters. Clear details make everything smoother.",
      "Hartford blends an urban core with a strong suburban ring, and routines are steady. The expectation is simple: be clear, be prepared, and follow through.",
    ],
  },

  "providence-ri": {
    city: "Providence",
    region: "RI",
    areas: [
      "Downtown Providence",
      "College Hill",
      "Federal Hill",
      "Wayland",
      "East Side",
      "Cranston",
      "Warwick",
      "Pawtucket",
      "East Providence",
      "North Providence",
      "Johnston",
      "Seekonk",
    ],
    localLine:
      "Providence is compact, historic, and neighborhood-driven, with quick links into nearby Rhode Island and Massachusetts towns. People here value clear communication and a steady, reliable pace.",
    localLineVariations: [
      "From College Hill to Federal Hill and out toward Warwick, Providence moves on tight routes and routines. Organized details and follow-through matter here.",
      "Providence blends old streets with a modern rhythm, and the metro crosses borders quickly. The standard is simple: be clear and stay consistent.",
    ],
  },

  "buffalo-ny": {
    city: "Buffalo",
    region: "NY",
    areas: [
      "Downtown Buffalo",
      "Allentown",
      "Elmwood Village",
      "North Buffalo",
      "South Buffalo",
      "Williamsville",
      "Amherst",
      "Cheektowaga",
      "Tonawanda",
      "West Seneca",
      "Lackawanna",
      "Niagara Falls",
    ],
    localLine:
      "Buffalo is a proud lake city with strong neighborhood identity and real seasonal weather. People here appreciate direct communication, practical planning, and reliable follow-through.",
    localLineVariations: [
      "From Elmwood to the suburbs, Buffalo runs on routines and community ties, and timing matters in winter conditions. Clear plans and consistency go a long way.",
      "Buffalo blends historic streets with suburban reach, and the region expects straightforward execution. The standard is simple: be clear and dependable.",
    ],
  },

  "rochester-ny": {
    city: "Rochester",
    region: "NY",
    areas: [
      "Downtown Rochester",
      "Park Avenue",
      "South Wedge",
      "East End",
      "Charlotte",
      "Irondequoit",
      "Brighton",
      "Henrietta",
      "Pittsford",
      "Greece",
      "Webster",
      "Fairport",
    ],
    localLine:
      "Rochester is a community-driven city with distinct neighborhoods and a metro that spreads into nearby towns quickly. People here value practical planning, clear communication, and consistency.",
    localLineVariations: [
      "From Park Ave to the east-side suburbs, Rochester’s rhythm is steady and organized. Clear details and no surprises are what people appreciate.",
      "Rochester blends city routes with suburban reach, and seasons can shape timing. The expectation is simple: be clear, be prepared, and follow through.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Tier 3 - Extra coverage (still strong search volume)
  // ---------------------------------------------------------------------------
  "san-bernardino-ca": {
    city: "San Bernardino",
    region: "CA",
    areas: [
      "Downtown San Bernardino",
      "Riverside",
      "Ontario",
      "Rancho Cucamonga",
      "Fontana",
      "Redlands",
      "Moreno Valley",
      "Corona",
      "Pomona",
      "Chino",
      "Eastvale",
      "Upland",
    ],
    localLine:
      "The Inland Empire runs on logistics, long corridors, and fast-growing suburbs, with real distance between hubs. People here value clear timing, good routing, and reliable follow-through.",
    localLineVariations: [
      "From San Bernardino through Riverside and Ontario, the region is spread out and traffic patterns matter. Clear plans and strong coordination keep things smooth.",
      "The area blends mountain-edge neighborhoods with major warehouse and commuter corridors. The standard is simple: communicate clearly and stay consistent.",
    ],
  },

  "anaheim-ca": {
    city: "Anaheim",
    region: "CA",
    areas: [
      "Anaheim Resort",
      "Downtown Anaheim",
      "Garden Grove",
      "Orange",
      "Santa Ana",
      "Irvine",
      "Costa Mesa",
      "Newport Beach",
      "Huntington Beach",
      "Fullerton",
      "Buena Park",
      "Tustin",
    ],
    localLine:
      "Orange County is a web of distinct cities that feel close but move on major routes and timing windows. People here expect clean coordination, clear communication, and a polished experience.",
    localLineVariations: [
      "From Anaheim to Irvine to the beach cities, OC runs on schedules and traffic flow. Clear details and steady follow-through make everything feel easy.",
      "Orange County blends family neighborhoods, business hubs, and coastal pockets across a dense metro. The expectation is simple: be organized and communicate well.",
    ],
  },

  "san-juan-pr": {
    city: "San Juan",
    region: "PR",
    areas: [
      "Old San Juan",
      "Condado",
      "Santurce",
      "Miramar",
      "Ocean Park",
      "Hato Rey",
      "Isla Verde",
      "Carolina",
      "Guaynabo",
      "Bayamón",
      "Caguas",
      "Trujillo Alto",
    ],
    localLine:
      "San Juan blends historic streets, coastal districts, and busy commercial corridors across a compact metro. People here value respectful communication, clear timing, and follow-through that feels personal.",
    localLineVariations: [
      "From Old San Juan to Condado and the wider metro, the city moves on tight routes and strong local rhythm. Clear coordination keeps everything smooth.",
      "San Juan is vibrant and dense, with neighborhoods that shift in feel quickly from block to block. The standard is simple: be clear, be courteous, and stay consistent.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Expansion pack - add breadth so each state has real coverage (SEO + UX)
  // Paste ABOVE the final closing brace of METROS.
  // ---------------------------------------------------------------------------

  // ---------------------------
  // Tennessee - fill out the state properly
  // ---------------------------
  "memphis-tn": {
    city: "Memphis",
    region: "TN",
    areas: [
      "Downtown Memphis",
      "Midtown",
      "East Memphis",
      "Cooper-Young",
      "Germantown",
      "Collierville",
      "Bartlett",
      "Cordova",
      "Southaven",
      "Olive Branch",
      "West Memphis",
      "Millington",
    ],
    localLine:
      "Memphis is soulful, straightforward, and built around a wide metro that crosses state lines. People here value direct communication, practical planning, and reliable follow-through.",
    localLineVariations: [
      "From Midtown to the suburbs, Memphis moves with a steady rhythm and expects things to be kept simple. Clear details and consistency matter here.",
      "Memphis blends river city infrastructure with a sprawling metro into Mississippi and Arkansas. The standard is simple: be clear, be on time, and follow through.",
    ],
  },

  "knoxville-tn": {
    city: "Knoxville",
    region: "TN",
    areas: [
      "Downtown Knoxville",
      "Old City",
      "West Knoxville",
      "Bearden",
      "Farragut",
      "South Knoxville",
      "North Knoxville",
      "Karns",
      "Oak Ridge",
      "Maryville",
      "Alcoa",
      "Lenoir City",
    ],
    localLine:
      "Knoxville is a river city with a strong local core and quick access to surrounding towns and outdoor corridors. People here appreciate clear communication, steady planning, and dependable execution.",
    localLineVariations: [
      "From the Old City to west-side suburbs, Knoxville runs on routines and a practical pace. Clear details and follow-through are what stand out.",
      "Knoxville blends campus energy and family neighborhoods across a wide spread. The expectation is simple: be organized and communicate clearly.",
    ],
  },

  "chattanooga-tn": {
    city: "Chattanooga",
    region: "TN",
    areas: [
      "Downtown Chattanooga",
      "North Shore",
      "Southside",
      "St. Elmo",
      "Lookout Mountain",
      "Hixson",
      "Red Bank",
      "East Ridge",
      "Ooltewah",
      "Collegedale",
      "Cleveland",
      "Ringgold",
    ],
    localLine:
      "Chattanooga is shaped by mountains, rivers, and neighborhood pockets that sit close but move on specific corridors. People here value calm coordination, clear timing, and no surprises.",
    localLineVariations: [
      "From North Shore to the surrounding towns, Chattanooga’s routes can change quickly with bridges and hills. Clear communication and good planning keep things smooth.",
      "Chattanooga blends outdoor culture with a growing city core and suburban reach. The standard is simple: be prepared, be clear, and follow through.",
    ],
  },

  "clarksville-tn": {
    city: "Clarksville",
    region: "TN",
    areas: [
      "Downtown Clarksville",
      "Sango",
      "St. Bethlehem",
      "Exit 11",
      "Exit 1",
      "Fort Campbell",
      "Oak Grove",
      "Pleasant View",
      "Ashland City",
      "Hopkinsville",
      "Woodlawn",
      "Palmyra",
    ],
    localLine:
      "Clarksville is a fast-growing military-adjacent city with routes that stretch into Kentucky and nearby towns. People here appreciate clear planning, punctuality, and consistent communication.",
    localLineVariations: [
      "With Fort Campbell and the surrounding suburbs, Clarksville runs on schedules and timing windows. Clear details and follow-through matter here.",
      "Clarksville blends a local core with commuter corridors and new development. The expectation is simple: be organized and communicate clearly.",
    ],
  },

  "murfreesboro-tn": {
    city: "Murfreesboro",
    region: "TN",
    areas: [
      "Downtown Murfreesboro",
      "Blackman",
      "Siegel",
      "North Murfreesboro",
      "South Murfreesboro",
      "Christiana",
      "Rockvale",
      "Smyrna",
      "La Vergne",
      "Lebanon",
      "Mount Juliet",
      "Nolensville",
    ],
    localLine:
      "Murfreesboro is part of a rapidly expanding Middle Tennessee corridor where timing and traffic matter more each year. People here value clear communication, realistic schedules, and steady follow-through.",
    localLineVariations: [
      "From the city core to the growing suburbs, Murfreesboro moves on commuter patterns and busy routes. Clear plans and coordination keep everything smooth.",
      "Murfreesboro blends family neighborhoods with strong growth and regional connections. The standard is simple: be clear, be prepared, and follow through.",
    ],
  },

  "jackson-tn": {
    city: "Jackson",
    region: "TN",
    areas: [
      "Downtown Jackson",
      "North Jackson",
      "South Jackson",
      "Medina",
      "Oakfield",
      "Humboldt",
      "Milan",
      "Trenton",
      "Brownsville",
      "Dyersburg",
      "Bolivar",
      "Whiteville",
    ],
    localLine:
      "Jackson, Tennessee is a regional hub with a practical pace and strong connections to surrounding towns. People here appreciate straightforward communication, clear timing, and reliable follow-through.",
    localLineVariations: [
      "In Jackson, routes stretch outward quickly into smaller communities, so planning needs to be simple and organized. Clear details go a long way here.",
      "Jackson runs on routines and local relationships, and expectations are direct. The standard is simple: be clear and keep your word.",
    ],
  },

  "johnson-city-tn": {
    city: "Johnson City",
    region: "TN",
    areas: [
      "Downtown Johnson City",
      "Boone's Creek",
      "Piney Flats",
      "Jonesborough",
      "Gray",
      "Elizabethton",
      "Watauga",
      "Kingsport",
      "Bristol",
      "Bluff City",
      "Mount Carmel",
      "Colonial Heights",
    ],
    localLine:
      "Johnson City sits in a connected Tri-Cities region where towns blend together across short drives. People here value clear coordination, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding communities, the Tri-Cities move on a steady, practical rhythm. Clear plans and good communication fit right in.",
      "Johnson City blends college energy with mountain-town routines across a wide region. The expectation is simple: be organized and be reliable.",
    ],
  },

  "kingsport-tn": {
    city: "Kingsport",
    region: "TN",
    areas: [
      "Downtown Kingsport",
      "Colonial Heights",
      "Bloomingdale",
      "Ridgefields",
      "Weber City",
      "Gate City",
      "Church Hill",
      "Mount Carmel",
      "Bristol",
      "Johnson City",
      "Gray",
      "Elizabethton",
    ],
    localLine:
      "Kingsport is part of the Tri-Cities, where communities connect closely and routes are shaped by regional corridors. People here appreciate clear communication, steady planning, and reliability.",
    localLineVariations: [
      "In the Tri-Cities, towns sit close but each area has its own flow, so coordination matters. Clear details and follow-through are what people respect.",
      "Kingsport blends a practical pace with a wide regional footprint into nearby towns. The standard is simple: be clear, be prepared, and stay consistent.",
    ],
  },

  "gatlinburg-tn": {
    city: "Gatlinburg",
    region: "TN",
    areas: [
      "Downtown Gatlinburg",
      "Arts & Crafts Community",
      "Ober Gatlinburg",
      "Glades",
      "Chalet Village",
      "Pittman Center",
      "Cosby",
      "Pigeon Forge",
      "Sevierville",
      "Wear Valley",
      "Wears Valley",
      "Great Smoky Mountains",
    ],
    localLine:
      "Gatlinburg is a mountain town with seasonal peaks, tight roads, and a tourism-driven rhythm. People here value planning that accounts for traffic, timing, and the local flow.",
    localLineVariations: [
      "In the Smokies corridor, routes can shift fast with weekend crowds and event traffic. Clear coordination and realistic timing make everything smoother.",
      "Gatlinburg blends scenic mountain neighborhoods with busy parkway energy nearby. The expectation is simple: communicate clearly and stay organized.",
    ],
  },

  "pigeon-forge-tn": {
    city: "Pigeon Forge",
    region: "TN",
    areas: [
      "Parkway",
      "Dollywood",
      "The Island",
      "Wears Valley",
      "Sevierville",
      "Gatlinburg",
      "Kodak",
      "Seymour",
      "Townsend",
      "Wear Cove",
      "Smoky Mountain Ridge",
      "The Foothills",
    ],
    localLine:
      "Pigeon Forge runs on seasonal tourism and a corridor-style layout where traffic and timing can change quickly. People appreciate clear plans, steady communication, and flexibility when needed.",
    localLineVariations: [
      "Between Sevierville, Pigeon Forge, and Gatlinburg, the parkway flow shapes the day. Clear timing and coordination are what make things feel smooth here.",
      "Pigeon Forge blends family attractions with mountain-town routines just outside the main strip. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // ---------------------------
  // High-ROI metro coverage - adds depth across MANY states (no duplicates with your current list)
  // ---------------------------

  // Alabama
  "birmingham-al": {
    city: "Birmingham",
    region: "AL",
    areas: ["Downtown", "Homewood", "Mountain Brook", "Vestavia Hills", "Hoover", "Irondale", "Trussville", "Bessemer", "Pelham", "Alabaster", "Fultondale", "Gardendale"],
    localLine:
      "Birmingham is a practical, neighborhood-driven city with a metro that spreads quickly into surrounding suburbs. People here value clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the southern suburbs, Birmingham’s routes are simple but distances add up. Clear plans and consistent updates are what stand out.",
      "Birmingham blends historic districts with fast-growing suburbs, and expectations are straightforward. The standard is simple: be clear and be reliable.",
    ],
  },
  "huntsville-al": {
    city: "Huntsville",
    region: "AL",
    areas: ["Downtown", "Five Points", "Jones Valley", "Research Park", "Madison", "Harvest", "Meridianville", "Owens Cross Roads", "Gurley", "Decatur", "Athens", "Hazel Green"],
    localLine:
      "Huntsville is a fast-growing tech and aerospace hub with a metro that stretches across multiple connected towns. People here value efficiency, clear details, and professional follow-through.",
    localLineVariations: [
      "From Research Park to the suburbs, Huntsville runs on schedules and commuter corridors. Clear planning and strong communication keep things smooth.",
      "Huntsville blends a calm pace with serious momentum, and expectations are organized and direct. The standard is simple: be clear and stay consistent.",
    ],
  },
  "mobile-al": {
    city: "Mobile",
    region: "AL",
    areas: ["Downtown", "Midtown", "Spring Hill", "West Mobile", "Tillmans Corner", "Saraland", "Daphne", "Spanish Fort", "Fairhope", "Prichard", "Theodore", "Chickasaw"],
    localLine:
      "Mobile is a Gulf Coast city with a mix of historic neighborhoods and a metro that stretches across the bay. People here value clear communication, practical timing, and dependable follow-through.",
    localLineVariations: [
      "From Midtown to the eastern shore towns, routes and timing matter, especially around bridge traffic. Clear coordination keeps everything smooth here.",
      "Mobile blends coastal routines with a working port-city rhythm. The expectation is simple: be organized and communicate clearly.",
    ],
  },
  "montgomery-al": {
    city: "Montgomery",
    region: "AL",
    areas: ["Downtown", "Cloverdale", "East Montgomery", "Midtown", "Dalraida", "Pike Road", "Prattville", "Millbrook", "Wetumpka", "Hope Hull", "Blue Ridge", "Cecil"],
    localLine:
      "Montgomery is a capital city with a steady pace and a metro that spreads into nearby towns quickly. People here appreciate clear plans, direct communication, and reliable execution.",
    localLineVariations: [
      "From Cloverdale to the suburban edges, Montgomery runs on routines and straightforward expectations. Clear details and follow-through matter here.",
      "Montgomery blends historic neighborhoods with commuter corridors, and timing still shapes the day. The standard is simple: be clear and dependable.",
    ],
  },

  // Alaska
  "anchorage-ak": {
    city: "Anchorage",
    region: "AK",
    areas: ["Downtown", "Midtown", "South Anchorage", "East Anchorage", "West Anchorage", "Turnagain", "Spenard", "Eagle River", "Chugiak", "Girdwood", "Mountain View", "Muldoon"],
    localLine:
      "Anchorage is a true hub city where weather, distance, and seasonal rhythm shape the day. People here value preparedness, clear communication, and dependable follow-through.",
    localLineVariations: [
      "From Midtown to the hillside and out toward Eagle River, routes and conditions matter. Clear plans and steady coordination make everything smoother.",
      "Anchorage blends city routines with an outdoors-first lifestyle, and expectations are practical and direct. The standard is simple: be clear and be ready.",
    ],
  },

  // Arizona
  "tucson-az": {
    city: "Tucson",
    region: "AZ",
    areas: ["Downtown", "University Area", "Sam Hughes", "Oro Valley", "Catalina Foothills", "Marana", "Vail", "Rita Ranch", "Midtown", "South Tucson", "Casas Adobes", "Sahuarita"],
    localLine:
      "Tucson is desert-driven and community-focused, with a metro that stretches from the foothills to wide suburban corridors. People here value clear plans, calm communication, and reliability.",
    localLineVariations: [
      "From the university area to Oro Valley and Vail, Tucson covers real distance and timing matters in the heat. Clear coordination keeps things smooth.",
      "Tucson blends historic neighborhoods with suburban reach and a steady rhythm. The standard is simple: be clear and follow through.",
    ],
  },
  "flagstaff-az": {
    city: "Flagstaff",
    region: "AZ",
    areas: ["Downtown", "NAU Area", "West Flagstaff", "East Flagstaff", "Doney Park", "Kachina Village", "Munds Park", "Bellemont", "Fort Valley", "Ponderosa Trails", "Continental Country Club", "Parks"],
    localLine:
      "Flagstaff is a mountain town with real seasons, elevation, and a compact core surrounded by spread-out neighborhoods. People here value preparedness, clear timing, and steady communication.",
    localLineVariations: [
      "In Flagstaff, weather can shift quickly and routes stretch into pines and foothills. Clear plans and realistic timing make everything smoother.",
      "Flagstaff blends university energy with mountain-town routines, and expectations are practical. The standard is simple: be clear and be reliable.",
    ],
  },

  // Arkansas
  "little-rock-ar": {
    city: "Little Rock",
    region: "AR",
    areas: ["Downtown", "River Market", "Hillcrest", "Heights", "West Little Rock", "Midtown", "North Little Rock", "Sherwood", "Maumelle", "Jacksonville", "Cabot", "Benton"],
    localLine:
      "Little Rock is a central hub with distinct neighborhoods and quick connections to surrounding towns. People here appreciate straightforward communication, clear planning, and dependable follow-through.",
    localLineVariations: [
      "From the River Market to west-side suburbs, Little Rock moves at a steady, practical pace. Clear details and consistency matter here.",
      "Little Rock blends a compact core with suburban reach, and expectations are direct. The standard is simple: be organized and communicate clearly.",
    ],
  },
  "fayetteville-ar": {
    city: "Fayetteville",
    region: "AR",
    areas: ["Downtown", "University Area", "South Fayetteville", "East Fayetteville", "Springdale", "Rogers", "Bentonville", "Lowell", "Farmington", "Prairie Grove", "Cave Springs", "Johnson"],
    localLine:
      "Northwest Arkansas is a connected region where Fayetteville, Springdale, Rogers, and Bentonville flow together. People here value clear coordination, realistic timing, and professional follow-through.",
    localLineVariations: [
      "In NWA, routes between cities are constant, and the metro runs on schedules and growth. Clear details and steady communication make things smooth.",
      "Fayetteville blends campus energy with suburban expansion across a fast-moving region. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "fort-smith-ar": {
    city: "Fort Smith",
    region: "AR",
    areas: ["Downtown", "Fianna Hills", "East Side", "Southside", "Barling", "Van Buren", "Greenwood", "Lavaca", "Alma", "Mansfield", "Pocola", "Roland"],
    localLine:
      "Fort Smith is a practical regional hub where routes stretch across nearby towns and state lines. People here appreciate direct communication, clear timelines, and dependable follow-through.",
    localLineVariations: [
      "From Fort Smith to Van Buren and beyond, the area runs on steady routines and clear expectations. Good coordination keeps everything smooth.",
      "Fort Smith blends a compact city core with wide regional reach. The standard is simple: be clear and be reliable.",
    ],
  },

  // California (missing big population + logistics hubs)
  "fresno-ca": {
    city: "Fresno",
    region: "CA",
    areas: ["Downtown Fresno", "Tower District", "Fig Garden", "Sunnyside", "Woodward Park", "Clovis", "Sanger", "Selma", "Kerman", "Reedley", "Madera", "Kingsburg"],
    localLine:
      "Fresno is a Central Valley hub with a wide metro footprint and steady, practical routines. People here value clear planning, realistic timing, and communication that stays straightforward.",
    localLineVariations: [
      "From Fresno to Clovis and the surrounding towns, distances add up quickly. Clear details and good coordination make everything smoother.",
      "Fresno blends a city core with suburban reach and regional connections. The standard is simple: be clear and follow through.",
    ],
  },
  "bakersfield-ca": {
    city: "Bakersfield",
    region: "CA",
    areas: ["Downtown Bakersfield", "Westchester", "Rosedale", "Southwest", "East Bakersfield", "Oildale", "Seven Oaks", "Shafter", "Wasco", "Delano", "Tehachapi", "Lamont"],
    localLine:
      "Bakersfield is a wide, route-driven city with strong regional ties and steady day-to-day rhythm. People here value practical planning, clear timing, and dependable follow-through.",
    localLineVariations: [
      "From the west-side neighborhoods to the surrounding towns, Bakersfield runs on distance and straightforward expectations. Clear details matter here.",
      "Bakersfield blends a working-city pace with suburban growth across a large footprint. The standard is simple: be organized and communicate clearly.",
    ],
  },
  "stockton-ca": {
    city: "Stockton",
    region: "CA",
    areas: ["Downtown Stockton", "Miracle Mile", "Brookside", "Lincoln Village", "Spanos Park", "Weston Ranch", "Lodi", "Manteca", "Tracy", "Ripon", "Discovery Bay", "French Camp"],
    localLine:
      "Stockton sits in the middle of major Northern California corridors, with a metro that connects quickly to multiple nearby cities. People here appreciate clear plans, steady communication, and reliable follow-through.",
    localLineVariations: [
      "From Stockton to Tracy and Manteca, routes and timing are shaped by commuter and freight patterns. Clear coordination keeps things smooth.",
      "Stockton blends local neighborhoods with fast access to wider regional hubs. The standard is simple: be clear and be dependable.",
    ],
  },
  "modesto-ca": {
    city: "Modesto",
    region: "CA",
    areas: ["Downtown Modesto", "College Area", "Salida", "Riverbank", "Ceres", "Turlock", "Patterson", "Oakdale", "Hughson", "Newman", "Ripon", "Manteca"],
    localLine:
      "Modesto is a Central Valley city with a steady pace and strong connections to surrounding towns. People here value straightforward communication, realistic timing, and reliable follow-through.",
    localLineVariations: [
      "From Modesto to Turlock and beyond, the area runs on routes and practical schedules. Clear details and coordination matter here.",
      "Modesto blends a compact core with suburban reach across a wide footprint. The standard is simple: be clear and stay consistent.",
    ],
  },
  "oxnard-ca": {
    city: "Oxnard",
    region: "CA",
    areas: ["Downtown Oxnard", "Channel Islands", "RiverPark", "Ventura", "Camarillo", "Port Hueneme", "Thousand Oaks", "Simi Valley", "Santa Paula", "Fillmore", "Newbury Park", "Moorpark"],
    localLine:
      "Oxnard and the Ventura County coast blend beach corridors with inland valleys, and routes can change quickly with traffic. People here value clear plans, calm communication, and dependable follow-through.",
    localLineVariations: [
      "From Oxnard to Thousand Oaks and the coastal towns, timing matters because the region moves on a few key corridors. Clear coordination makes things easy.",
      "Ventura County mixes relaxed coastal energy with busy commuter patterns. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "santa-rosa-ca": {
    city: "Santa Rosa",
    region: "CA",
    areas: ["Downtown Santa Rosa", "Rincon Valley", "Roseland", "Fountaingrove", "Rohnert Park", "Cotati", "Sebastopol", "Windsor", "Healdsburg", "Petaluma", "Sonoma", "Napa"],
    localLine:
      "Santa Rosa sits at the center of Wine Country, with neighborhoods and towns connected by a few key routes. People here value respectful communication, clear timing, and plans that feel steady and reliable.",
    localLineVariations: [
      "From Santa Rosa to Petaluma, Napa, and the smaller towns, the region moves on narrow corridors and seasonal traffic. Clear coordination matters here.",
      "Wine Country blends local routines with heavy weekend movement. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // Colorado
  "colorado-springs-co": {
    city: "Colorado Springs",
    region: "CO",
    areas: ["Downtown", "Old Colorado City", "Briargate", "Stetson Hills", "Powers", "Northgate", "Broadmoor", "Manitou Springs", "Fountain", "Security-Widefield", "Monument", "Castle Rock"],
    localLine:
      "Colorado Springs is spread out along the front range, with distinct pockets from the older west-side neighborhoods to fast-growing north corridors. People here value clear plans, punctuality, and steady communication.",
    localLineVariations: [
      "From downtown to Briargate and beyond, distances add up and routes matter. Clear coordination and realistic timing keep things smooth.",
      "The Springs blends military, outdoor culture, and suburban expansion across a wide footprint. The standard is simple: be clear and follow through.",
    ],
  },
  "fort-collins-co": {
    city: "Fort Collins",
    region: "CO",
    areas: ["Old Town", "CSU Area", "Midtown", "South Fort Collins", "North Fort Collins", "Loveland", "Windsor", "Timnath", "Berthoud", "Greeley", "Longmont", "Johnstown"],
    localLine:
      "Fort Collins is a college town with a strong local core and a growing northern Colorado corridor. People here appreciate organized plans, clear communication, and a dependable pace.",
    localLineVariations: [
      "From Old Town to the surrounding communities, Fort Collins runs on routines and commuter routes. Clear timing and coordination matter here.",
      "Fort Collins blends campus energy with family neighborhoods and suburban reach. The standard is simple: be clear, be respectful, and follow through.",
    ],
  },

  // Connecticut (beyond Hartford)
  "new-haven-ct": {
    city: "New Haven",
    region: "CT",
    areas: ["Downtown", "Wooster Square", "East Rock", "Westville", "Fair Haven", "Hamden", "West Haven", "North Haven", "Branford", "Milford", "Orange", "Shelton"],
    localLine:
      "New Haven is compact and neighborhood-driven, with older streets and quick connections into surrounding shoreline towns. People here value clear plans, direct communication, and reliable follow-through.",
    localLineVariations: [
      "From East Rock to the shoreline communities, timing and routing matter, especially on busy corridors. Clear details keep things smooth here.",
      "New Haven blends a busy downtown core with quiet residential pockets. The standard is simple: be clear and be dependable.",
    ],
  },
  "stamford-ct": {
    city: "Stamford",
    region: "CT",
    areas: ["Downtown Stamford", "Harbor Point", "North Stamford", "Springdale", "Glenbrook", "Darien", "Norwalk", "Greenwich", "Old Greenwich", "New Canaan", "Wilton", "Ridgefield"],
    localLine:
      "Stamford sits in a fast-moving corridor where schedules, commuting patterns, and local expectations are high. People here value efficiency, clear communication, and reliable follow-through.",
    localLineVariations: [
      "From Harbor Point to the surrounding towns, the region moves on tight timing and busy routes. Clear plans and coordination matter here.",
      "Stamford blends city density with suburban pockets across Fairfield County. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // Delaware
  "wilmington-de": {
    city: "Wilmington",
    region: "DE",
    areas: ["Downtown Wilmington", "Trolley Square", "Riverfront", "Brandywine", "North Wilmington", "Newark", "Christiana", "Hockessin", "Bear", "Middletown", "Claymont", "New Castle"],
    localLine:
      "Wilmington is a compact hub with quick connections into surrounding Delaware towns and nearby Pennsylvania and New Jersey corridors. People here value clear communication and dependable follow-through.",
    localLineVariations: [
      "From the riverfront to the suburbs, Wilmington moves on straightforward routes, but timing still matters on busy corridors. Clear plans keep things smooth.",
      "Wilmington blends a small-city core with a wider regional footprint. The standard is simple: be clear and be reliable.",
    ],
  },

  // Florida (missing major demand corridors)
  "fort-lauderdale-fl": {
    city: "Fort Lauderdale",
    region: "FL",
    areas: ["Downtown", "Las Olas", "Victoria Park", "Wilton Manors", "Oakland Park", "Plantation", "Sunrise", "Davie", "Hollywood", "Pembroke Pines", "Pompano Beach", "Coral Springs"],
    localLine:
      "Fort Lauderdale sits in a dense South Florida corridor where cities blend together and timing matters. People here value fast communication, clear plans, and reliable follow-through.",
    localLineVariations: [
      "From Las Olas to the surrounding cities, the metro moves on traffic flow and tight schedules. Clear coordination keeps everything smooth.",
      "Fort Lauderdale blends coastal energy with suburban spread across Broward County. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "west-palm-beach-fl": {
    city: "West Palm Beach",
    region: "FL",
    areas: ["Downtown WPB", "Palm Beach", "Lake Worth Beach", "Wellington", "Royal Palm Beach", "Jupiter", "Palm Beach Gardens", "Riviera Beach", "Boynton Beach", "Delray Beach", "Greenacres", "Lantana"],
    localLine:
      "West Palm Beach is a coastal hub with distinct towns up and down the shoreline and a suburban ring inland. People here value clear communication, solid timing, and dependable follow-through.",
    localLineVariations: [
      "From the island to the inland suburbs, routes can change quickly with traffic patterns. Clear plans and coordination keep things smooth here.",
      "Palm Beach County blends coastal pockets with wide suburban reach. The standard is simple: be clear and stay consistent.",
    ],
  },
  "pensacola-fl": {
    city: "Pensacola",
    region: "FL",
    areas: ["Downtown", "East Hill", "Cantonment", "Ferry Pass", "Ensley", "Pace", "Gulf Breeze", "Navarre", "Milton", "Crestview", "Fort Walton Beach", "Niceville"],
    localLine:
      "Pensacola is a Gulf Coast city with a mix of neighborhoods and longer drives into nearby beach towns and communities. People here value practical planning, clear timing, and steady follow-through.",
    localLineVariations: [
      "From downtown to Gulf Breeze and the beach corridor, traffic and timing can shift quickly. Clear coordination keeps everything smooth.",
      "Pensacola blends local routines with seasonal coastal movement. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "fort-myers-fl": {
    city: "Fort Myers",
    region: "FL",
    areas: ["Downtown Fort Myers", "Cape Coral", "North Fort Myers", "Estero", "Bonita Springs", "San Carlos Park", "Lehigh Acres", "Fort Myers Beach", "Naples", "Marco Island", "Punta Gorda", "Port Charlotte"],
    localLine:
      "Fort Myers is part of a wide Gulf Coast region where bridges, beach traffic, and seasonal peaks shape the day. People here value clear timelines, good coordination, and communication that stays steady.",
    localLineVariations: [
      "From Cape Coral to Naples, the area stretches far and timing can change with traffic and seasonality. Clear plans keep everything smooth here.",
      "Southwest Florida blends laid-back coastal routines with long drives between hubs. The standard is simple: be clear and follow through.",
    ],
  },

  // Georgia (beyond Atlanta)
  "savannah-ga": {
    city: "Savannah",
    region: "GA",
    areas: ["Historic District", "Midtown", "Southside", "Isle of Hope", "Wilmington Island", "Georgetown", "Pooler", "Richmond Hill", "Garden City", "Tybee Island", "Port Wentworth", "Bluffton"],
    localLine:
      "Savannah is historic and coastal, with neighborhoods that feel distinct and a metro that stretches into nearby towns. People here value respectful communication, clear timing, and steady follow-through.",
    localLineVariations: [
      "From the Historic District to the islands and suburbs, routes and timing matter, especially with bridge traffic. Clear coordination keeps things smooth.",
      "Savannah blends tourism corridors with quiet residential pockets and coastal routines. The standard is simple: be clear and be dependable.",
    ],
  },
  "augusta-ga": {
    city: "Augusta",
    region: "GA",
    areas: ["Downtown Augusta", "Summerville", "National Hills", "West Augusta", "Evans", "Martinez", "Grovetown", "North Augusta", "Hephzibah", "Aiken", "Belvedere", "Appling"],
    localLine:
      "Augusta is a regional hub with a practical pace and a metro that crosses into South Carolina quickly. People here value clear plans, direct communication, and reliable execution.",
    localLineVariations: [
      "From Summerville to the growing suburbs, Augusta runs on routines and straightforward expectations. Clear details and follow-through matter here.",
      "Augusta blends a city core with a wide suburban footprint across two states. The standard is simple: be organized and communicate clearly.",
    ],
  },

  // Idaho
  "boise-id": {
    city: "Boise",
    region: "ID",
    areas: ["Downtown Boise", "North End", "Bench", "West Boise", "East Boise", "Garden City", "Meridian", "Eagle", "Nampa", "Caldwell", "Kuna", "Star"],
    localLine:
      "Boise is growing fast, with a strong downtown and a suburban corridor that keeps expanding west and south. People here value clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From the North End to Meridian and Nampa, the metro is spread out and timing matters across longer drives. Clear plans keep things smooth here.",
      "Boise blends an outdoors-first lifestyle with steady city momentum. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // Illinois (beyond Chicago)
  "rockford-il": {
    city: "Rockford",
    region: "IL",
    areas: ["Downtown Rockford", "Midtown", "East Rockford", "West Rockford", "Machesney Park", "Loves Park", "Roscoe", "Rockton", "Belvidere", "Byron", "Cherry Valley", "Pecatonica"],
    localLine:
      "Rockford is a practical, community-driven city with a metro that spreads into nearby towns quickly. People here value straightforward communication and reliable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding communities, Rockford runs on steady routines and clear expectations. Clear details matter here.",
      "Rockford blends a compact core with suburban reach, and timing still shapes the day. The standard is simple: be clear and be dependable.",
    ],
  },
  "champaign-il": {
    city: "Champaign",
    region: "IL",
    areas: ["Downtown Champaign", "UIUC Area", "Campustown", "Savoy", "Urbana", "Mahomet", "St. Joseph", "Rantoul", "Tolono", "Monticello", "Fisher", "Tuscola"],
    localLine:
      "Champaign-Urbana is a connected college region with a steady rhythm shaped by campus schedules and local routines. People here appreciate clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From Campustown to the surrounding towns, the area moves on predictable routes and seasonal peaks. Clear plans keep everything smooth here.",
      "Champaign blends university energy with community expectations that are direct and practical. The standard is simple: be clear and stay consistent.",
    ],
  },

  // Indiana
  "fort-wayne-in": {
    city: "Fort Wayne",
    region: "IN",
    areas: ["Downtown", "West Central", "North Anthony", "Southwest", "New Haven", "Leo-Cedarville", "Huntertown", "Woodburn", "Auburn", "Grabill", "Columbia City", "Decatur"],
    localLine:
      "Fort Wayne is organized and practical, with a metro that connects quickly into surrounding towns. People here value clear plans, direct communication, and reliable follow-through.",
    localLineVariations: [
      "From downtown to the suburbs, Fort Wayne runs on steady routines and straightforward expectations. Clear details matter here.",
      "Fort Wayne blends a compact city core with wide regional reach. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "south-bend-in": {
    city: "South Bend",
    region: "IN",
    areas: ["Downtown", "Notre Dame", "Mishawaka", "Granger", "Osceola", "Elkhart", "Niles", "Goshen", "Plymouth", "Chesterton", "Valparaiso", "Laporte"],
    localLine:
      "South Bend is a regional hub with strong community identity and a metro that connects across Indiana and into Michigan quickly. People here value clear communication and dependable execution.",
    localLineVariations: [
      "From the Notre Dame area to the surrounding towns, timing matters and routes can stretch farther than expected. Clear plans keep things smooth here.",
      "South Bend blends campus influence with practical, steady routines across the region. The standard is simple: be clear and follow through.",
    ],
  },

  // Iowa
  "des-moines-ia": {
    city: "Des Moines",
    region: "IA",
    areas: ["Downtown Des Moines", "East Village", "Drake", "Beaverdale", "West Des Moines", "Urbandale", "Clive", "Johnston", "Ankeny", "Waukee", "Altoona", "Norwalk"],
    localLine:
      "Des Moines is organized and easy to navigate, with a growing core and suburbs that expand steadily. People here value clear plans, straightforward communication, and reliable follow-through.",
    localLineVariations: [
      "From the East Village to the western suburbs, the metro moves on predictable routes and routines. Clear details and coordination matter here.",
      "Des Moines blends a calm pace with strong expectations for reliability. The standard is simple: be clear, be prepared, and follow through.",
    ],
  },

  // Kansas
  "wichita-ks": {
    city: "Wichita",
    region: "KS",
    areas: ["Downtown Wichita", "Old Town", "Eastborough", "College Hill", "Northwest", "South Wichita", "Derby", "Haysville", "Maize", "Park City", "Andover", "Goddard"],
    localLine:
      "Wichita is practical and straightforward, with a metro that spreads quickly into surrounding towns. People here value clear plans, direct communication, and dependable follow-through.",
    localLineVariations: [
      "From Old Town to the suburbs, Wichita runs on steady routines and simple expectations. Clear details and consistency matter here.",
      "Wichita blends a compact core with wide regional reach. The standard is simple: be clear and be reliable.",
    ],
  },

  // Kentucky
  "lexington-ky": {
    city: "Lexington",
    region: "KY",
    areas: ["Downtown Lexington", "Chevy Chase", "Kenwick", "Hamburg", "Beaumont", "UK Area", "Nicholasville", "Georgetown", "Versailles", "Winchester", "Paris", "Richmond"],
    localLine:
      "Lexington blends a lively city core with horse-country suburbs and nearby towns connected by steady corridors. People here value clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From the UK area to the suburbs, Lexington’s rhythm is steady and practical. Clear details and coordination are what people appreciate.",
      "Lexington mixes tradition with growth, and expectations are straightforward. The standard is simple: be organized and communicate clearly.",
    ],
  },

  // Louisiana
  "baton-rouge-la": {
    city: "Baton Rouge",
    region: "LA",
    areas: ["Downtown Baton Rouge", "Mid City", "LSU Area", "Highland", "Perkins Rowe", "Broadmoor", "Denham Springs", "Prairieville", "Gonzales", "Zachary", "Central", "Port Allen"],
    localLine:
      "Baton Rouge is a capital and college city with a metro that stretches into fast-growing suburban corridors. People here value clear plans, direct communication, and reliable follow-through.",
    localLineVariations: [
      "From LSU to the suburban edges, traffic and timing can shift quickly on key routes. Clear coordination keeps everything smooth here.",
      "Baton Rouge blends government, campus routines, and family neighborhoods across a wide metro. The standard is simple: be clear and stay consistent.",
    ],
  },
  "lafayette-la": {
    city: "Lafayette",
    region: "LA",
    areas: ["Downtown Lafayette", "River Ranch", "Oil Center", "Youngsville", "Broussard", "Carencro", "Scott", "Duson", "Breaux Bridge", "New Iberia", "Abbeville", "Opelousas"],
    localLine:
      "Lafayette is community-focused and regionally connected, with neighborhoods and nearby towns that sit close but run on specific corridors. People here appreciate clear communication and dependable follow-through.",
    localLineVariations: [
      "From the Oil Center to the surrounding communities, Lafayette moves on steady routines and local expectations. Clear plans matter here.",
      "Lafayette blends a compact city core with a wider regional footprint across Acadiana. The standard is simple: be clear and be reliable.",
    ],
  },

  // Maine
  "portland-me": {
    city: "Portland",
    region: "ME",
    areas: ["Downtown Portland", "Old Port", "West End", "East End", "Deering", "South Portland", "Scarborough", "Cape Elizabeth", "Falmouth", "Westbrook", "Saco", "Biddeford"],
    localLine:
      "Portland, Maine is compact and coastal, with older streets and a metro that connects quickly into nearby towns. People here value respectful communication, clear timing, and reliable follow-through.",
    localLineVariations: [
      "From the Old Port to the surrounding towns, routes can be tight and timing matters. Clear plans and steady coordination keep things smooth.",
      "Portland blends a busy seasonal rhythm with a strong local community feel. The standard is simple: be clear and be dependable.",
    ],
  },

  // Michigan
  "grand-rapids-mi": {
    city: "Grand Rapids",
    region: "MI",
    areas: ["Downtown GR", "Eastown", "Heritage Hill", "Creston", "Kentwood", "Wyoming", "Walker", "Grandville", "Rockford", "Ada", "Holland", "Muskegon"],
    localLine:
      "Grand Rapids is growing fast with a strong local core and a wider West Michigan corridor. People here value clear communication, practical planning, and reliable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding towns, Grand Rapids runs on steady routines and straightforward expectations. Clear details matter here.",
      "West Michigan blends city routes with longer drives into nearby communities. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "ann-arbor-mi": {
    city: "Ann Arbor",
    region: "MI",
    areas: ["Downtown Ann Arbor", "Kerrytown", "Burns Park", "Pittsfield", "Ypsilanti", "Saline", "Dexter", "Chelsea", "Canton", "Novi", "Brighton", "Farmington Hills"],
    localLine:
      "Ann Arbor blends campus energy with neighborhood calm and a metro that connects quickly toward Detroit. People here value clear plans, respectful communication, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding towns, routines and timing matter, especially on commuter corridors. Clear coordination keeps everything smooth.",
      "Ann Arbor is organized, community-focused, and detail-oriented. The standard is simple: be clear, be prepared, and follow through.",
    ],
  },

  // Mississippi
  "jackson-ms": {
    city: "Jackson",
    region: "MS",
    areas: ["Downtown Jackson", "Fondren", "Belhaven", "North Jackson", "Ridgeland", "Madison", "Flowood", "Brandon", "Pearl", "Clinton", "Byram", "Vicksburg"],
    localLine:
      "Jackson, Mississippi is a regional hub with a practical pace and strong connections to surrounding towns. People here appreciate direct communication, clear timing, and reliable follow-through.",
    localLineVariations: [
      "From Fondren to the suburbs, Jackson moves on straightforward routes and steady routines. Clear plans keep things smooth here.",
      "Jackson blends a city core with wide regional reach, and expectations are direct. The standard is simple: be clear and be dependable.",
    ],
  },
  "gulfport-ms": {
    city: "Gulfport",
    region: "MS",
    areas: ["Gulfport", "Biloxi", "Ocean Springs", "D'Iberville", "Long Beach", "Pass Christian", "Bay St. Louis", "Waveland", "Saucier", "Gautier", "Pascagoula", "Diamondhead"],
    localLine:
      "The Mississippi Gulf Coast is a connected strip of cities where bridges, beach traffic, and seasonal peaks shape the rhythm. People here value clear timing, good coordination, and steady communication.",
    localLineVariations: [
      "From Gulfport to Ocean Springs and beyond, routes can shift with events and coastal traffic. Clear plans keep everything smooth here.",
      "The coast blends laid-back routines with busy weekend movement. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // Nebraska
  "omaha-ne": {
    city: "Omaha",
    region: "NE",
    areas: ["Downtown Omaha", "Old Market", "Midtown", "Aksarben", "Dundee", "West Omaha", "Ralston", "La Vista", "Papillion", "Bellevue", "Council Bluffs", "Gretna"],
    localLine:
      "Omaha is easy to navigate and community-driven, with a metro that crosses into Iowa and spreads quickly into suburbs. People here value clear plans, direct communication, and reliable follow-through.",
    localLineVariations: [
      "From the Old Market to west-side suburbs, Omaha moves on steady routines and straightforward expectations. Clear details matter here.",
      "Omaha blends a strong city core with a wide regional footprint. The standard is simple: be clear and be dependable.",
    ],
  },
  "lincoln-ne": {
    city: "Lincoln",
    region: "NE",
    areas: ["Downtown Lincoln", "Haymarket", "Near South", "UNL Area", "South Lincoln", "North Lincoln", "Waverly", "Hickman", "Seward", "Crete", "Gretna", "Ashland"],
    localLine:
      "Lincoln is organized and practical, with a strong university presence and nearby towns connected by steady routes. People here appreciate clear communication and dependable follow-through.",
    localLineVariations: [
      "From the Haymarket to the outskirts, Lincoln runs on routines and straightforward expectations. Clear plans keep things smooth here.",
      "Lincoln blends college-town rhythm with a calm, community-focused pace. The standard is simple: be clear and stay consistent.",
    ],
  },

  // Nevada
  "reno-nv": {
    city: "Reno",
    region: "NV",
    areas: ["Downtown Reno", "Midtown", "South Reno", "North Reno", "Sparks", "Spanish Springs", "Sun Valley", "Washoe Valley", "Carson City", "Incline Village", "Truckee", "Fernley"],
    localLine:
      "Reno is a high-desert hub with a growing metro that connects quickly into nearby towns and mountain corridors. People here value clear plans, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From Reno to Sparks and up toward the lake routes, distances and traffic windows matter. Clear coordination keeps everything smooth.",
      "Reno blends a fast-growing city pace with outdoor-minded routines. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // New Hampshire
  "manchester-nh": {
    city: "Manchester",
    region: "NH",
    areas: ["Downtown Manchester", "North End", "West Side", "South End", "Bedford", "Goffstown", "Hooksett", "Derry", "Londonderry", "Nashua", "Merrimack", "Concord"],
    localLine:
      "Manchester is a compact hub with quick connections across southern New Hampshire’s towns and corridors. People here value clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding communities, routes are straightforward but timing still matters on busy corridors. Clear plans keep things smooth.",
      "Manchester blends a small-city core with a wider regional footprint. The standard is simple: be clear and be reliable.",
    ],
  },

  // New Jersey
  "newark-nj": {
    city: "Newark",
    region: "NJ",
    areas: ["Downtown Newark", "Ironbound", "University Heights", "East Orange", "Harrison", "Jersey City", "Hoboken", "Elizabeth", "Union", "Bloomfield", "Montclair", "Bayonne"],
    localLine:
      "Newark sits at the center of a dense, fast-moving region where timing and coordination matter every day. People here value clarity, punctuality, and communication that stays sharp.",
    localLineVariations: [
      "In North Jersey, everything is close but traffic and routes can be unpredictable. Clear plans and steady follow-through keep things smooth.",
      "From the Ironbound to the Hudson waterfront cities, the pace is quick and expectations are high. The standard is simple: be clear and stay on track.",
    ],
  },

  // New Mexico
  "albuquerque-nm": {
    city: "Albuquerque",
    region: "NM",
    areas: ["Downtown Albuquerque", "Nob Hill", "Uptown", "North Valley", "Westside", "Rio Rancho", "Corrales", "Los Ranchos", "Bernalillo", "Santa Fe", "Belen", "Los Lunas"],
    localLine:
      "Albuquerque is wide, scenic, and route-driven, with a metro that stretches along the river and out toward nearby towns. People here value clear timing, practical planning, and dependable follow-through.",
    localLineVariations: [
      "From Nob Hill to the west side and Rio Rancho, distances add up and timing matters. Clear coordination keeps everything smooth.",
      "Albuquerque blends a relaxed pace with real regional reach and busy corridors. The standard is simple: be clear and be reliable.",
    ],
  },

  // New York (beyond NYC/Buffalo/Rochester)
  "albany-ny": {
    city: "Albany",
    region: "NY",
    areas: ["Downtown Albany", "Center Square", "Pine Hills", "Delmar", "Guilderland", "Colonie", "Latham", "Troy", "Schenectady", "Clifton Park", "Saratoga Springs", "Rensselaer"],
    localLine:
      "Albany is a capital region hub where multiple cities and suburbs connect closely across the Hudson. People here value clear plans, practical timing, and communication that stays consistent.",
    localLineVariations: [
      "From Albany to Troy and Schenectady, the region moves across short drives but distinct pockets. Clear coordination keeps everything smooth.",
      "The Capital Region blends government routines with neighborhood life and suburban reach. The standard is simple: be clear and follow through.",
    ],
  },
  "syracuse-ny": {
    city: "Syracuse",
    region: "NY",
    areas: ["Downtown Syracuse", "Armory Square", "University Hill", "Eastwood", "Westcott", "Liverpool", "Cicero", "Clay", "Baldwinsville", "Fayetteville", "Manlius", "Dewitt"],
    localLine:
      "Syracuse is community-driven and seasonally shaped, with a metro that connects quickly into surrounding towns. People here value practical planning, clear communication, and reliability in all conditions.",
    localLineVariations: [
      "From Armory Square to the suburbs, Syracuse runs on routines, and winter weather can change timing. Clear coordination makes everything smoother.",
      "Syracuse blends a compact core with suburban reach, and expectations are straightforward. The standard is simple: be clear and be dependable.",
    ],
  },

  // North Carolina
  "greensboro-nc": {
    city: "Greensboro",
    region: "NC",
    areas: ["Downtown Greensboro", "Lindley Park", "College Hill", "Friendly Center", "Guilford College", "High Point", "Jamestown", "Kernersville", "Winston-Salem", "Burlington", "Graham", "Whitsett"],
    localLine:
      "Greensboro is part of a connected Triad region where cities and suburbs blend together across steady routes. People here value clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the wider Triad corridor, timing matters on commuter routes and regional drives. Clear plans keep everything smooth.",
      "Greensboro blends a calm pace with strong expectations for reliability. The standard is simple: be clear, be organized, and follow through.",
    ],
  },
  "asheville-nc": {
    city: "Asheville",
    region: "NC",
    areas: ["Downtown Asheville", "River Arts District", "West Asheville", "Biltmore Village", "North Asheville", "East Asheville", "Arden", "Weaverville", "Black Mountain", "Hendersonville", "Candler", "Leicester"],
    localLine:
      "Asheville is a mountain city with a lively core and surrounding towns connected by scenic but sometimes tight routes. People here value respectful communication, clear timing, and reliable follow-through.",
    localLineVariations: [
      "From downtown to the mountain towns, timing can shift with terrain and seasonal traffic. Clear plans and coordination keep things smooth.",
      "Asheville blends tourism energy with strong local community routines. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // Ohio (adds major missing demand)
  "dayton-oh": {
    city: "Dayton",
    region: "OH",
    areas: ["Downtown Dayton", "Oregon District", "Kettering", "Oakwood", "Beavercreek", "Centerville", "Miamisburg", "Huber Heights", "Fairborn", "Trotwood", "Springfield", "Xenia"],
    localLine:
      "Dayton is practical and regionally connected, with a metro that spreads quickly into surrounding towns. People here value clear plans, direct communication, and reliable follow-through.",
    localLineVariations: [
      "From the Oregon District to the suburbs, Dayton runs on steady routines and straightforward expectations. Clear details matter here.",
      "Dayton blends a compact core with wider regional reach, and timing still shapes the day. The standard is simple: be clear and be dependable.",
    ],
  },
  "toledo-oh": {
    city: "Toledo",
    region: "OH",
    areas: ["Downtown Toledo", "Old West End", "South Toledo", "West Toledo", "Oregon", "Sylvania", "Perrysburg", "Maumee", "Rossford", "Waterville", "Monroe", "Temperance"],
    localLine:
      "Toledo is a lake-region hub with neighborhoods and suburbs that connect quickly across state lines. People here value practical planning, clear communication, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the suburbs, Toledo runs on steady routines and straightforward expectations. Clear details and coordination matter here.",
      "Toledo blends a compact city core with regional reach into Michigan and surrounding towns. The standard is simple: be clear and be reliable.",
    ],
  },

  // Oklahoma
  "tulsa-ok": {
    city: "Tulsa",
    region: "OK",
    areas: ["Downtown Tulsa", "Midtown", "Cherry Street", "Brookside", "South Tulsa", "Bixby", "Jenks", "Broken Arrow", "Owasso", "Sand Springs", "Catoosa", "Sapulpa"],
    localLine:
      "Tulsa blends a strong city core with a wide suburban footprint and distinct neighborhood pockets. People here value clear communication, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding towns, Tulsa runs on routes and steady routines. Clear plans and coordination keep everything smooth.",
      "Tulsa’s expectations are straightforward and practical. The standard is simple: be clear, be organized, and follow through.",
    ],
  },

  // Pennsylvania
  "harrisburg-pa": {
    city: "Harrisburg",
    region: "PA",
    areas: ["Downtown Harrisburg", "Midtown", "Camp Hill", "Lemoyne", "Mechanicsburg", "Hershey", "Hummlestown", "Carlisle", "Enola", "Dauphin", "Linglestown", "New Cumberland"],
    localLine:
      "Harrisburg is a capital region hub with a metro that spreads quickly into surrounding towns and corridors. People here value clear plans, direct communication, and dependable follow-through.",
    localLineVariations: [
      "From Midtown to the west-shore towns, timing and routing matter, especially on commuter corridors. Clear coordination keeps things smooth.",
      "Harrisburg blends government routines with suburban reach, and expectations are practical. The standard is simple: be clear and be reliable.",
    ],
  },
  "allentown-pa": {
    city: "Allentown",
    region: "PA",
    areas: ["Downtown Allentown", "West End", "South Side", "Bethlehem", "Easton", "Whitehall", "Emmaus", "Macungie", "Nazareth", "Catasauqua", "Hellertown", "Quakertown"],
    localLine:
      "The Lehigh Valley is a connected region where Allentown, Bethlehem, and Easton move as one metro. People here value clear coordination, realistic timing, and dependable follow-through.",
    localLineVariations: [
      "From city centers to surrounding townships, routes and timing matter on busy regional corridors. Clear plans keep everything smooth.",
      "The Lehigh Valley blends historic cores with suburban growth across a wide footprint. The standard is simple: be clear and stay consistent.",
    ],
  },

  // South Carolina
  "charleston-sc": {
    city: "Charleston",
    region: "SC",
    areas: ["Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island", "Johns Island", "North Charleston", "Summerville", "Goose Creek", "Hanahan", "Folly Beach", "Isle of Palms", "Kiawah Island"],
    localLine:
      "Charleston blends historic streets, coastal islands, and fast-growing suburban corridors across a connected region. People here value respectful communication, clear timing, and steady follow-through.",
    localLineVariations: [
      "From the peninsula to Mount Pleasant and the islands, bridges and traffic windows shape the day. Clear coordination keeps everything smooth.",
      "Charleston mixes tourism corridors with real neighborhood routines, and expectations are direct. The standard is simple: be clear and be dependable.",
    ],
  },
  "greenville-sc": {
    city: "Greenville",
    region: "SC",
    areas: ["Downtown Greenville", "North Main", "Augusta Road", "Taylors", "Greer", "Mauldin", "Simpsonville", "Five Forks", "Traveler's Rest", "Easley", "Spartanburg", "Duncan"],
    localLine:
      "Greenville is growing fast, with a strong downtown core and suburban corridors that extend across the Upstate. People here value clear plans, friendly communication, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the wider Upstate region, timing matters on busy commuter routes. Clear coordination keeps everything smooth.",
      "Greenville blends neighborhood pride with rapid growth and regional connections. The standard is simple: be clear and stay consistent.",
    ],
  },

  // South Dakota
  "sioux-falls-sd": {
    city: "Sioux Falls",
    region: "SD",
    areas: ["Downtown Sioux Falls", "East Side", "West Side", "South Sioux Falls", "Brandon", "Harrisburg", "Tea", "Crooks", "Hartford", "Worthing", "Lennox", "Dell Rapids"],
    localLine:
      "Sioux Falls is straightforward and efficient, with a metro that connects quickly into surrounding towns. People here value clear plans, direct communication, and reliable follow-through.",
    localLineVariations: [
      "From downtown to the suburbs, Sioux Falls runs on steady routines and simple expectations. Clear details matter here.",
      "Sioux Falls blends a compact core with regional reach, and people appreciate consistency. The standard is simple: be clear and be dependable.",
    ],
  },

  // Texas (add missing big metros beyond your current TX set)
  "fort-worth-tx": {
    city: "Fort Worth",
    region: "TX",
    areas: ["Downtown Fort Worth", "Stockyards", "Near Southside", "TCU / University", "Cultural District", "Arlington", "North Richland Hills", "Hurst", "Euless", "Grapevine", "Keller", "Benbrook"],
    localLine:
      "Fort Worth has its own identity and pace, with historic districts, modern growth, and a metro that blends into the wider DFW footprint. People here value clear plans, punctuality, and dependable follow-through.",
    localLineVariations: [
      "From the Stockyards to the mid-cities, routes and timing matter on busy corridors. Clear coordination keeps everything smooth.",
      "Fort Worth blends tradition with rapid expansion, and expectations are practical and direct. The standard is simple: be clear and be reliable.",
    ],
  },
  "el-paso-tx": {
    city: "El Paso",
    region: "TX",
    areas: ["Downtown El Paso", "Central", "West Side", "East Side", "Northeast", "Far East", "Ysleta", "Socorro", "Horizon City", "Anthony", "Sunland Park", "Fort Bliss"],
    localLine:
      "El Paso is wide and route-driven, shaped by the border region and long east-west stretches across the city. People here value clear timing, practical planning, and communication that stays steady.",
    localLineVariations: [
      "From the west side to the far east, distances add up quickly and timing matters. Clear plans and coordination keep things smooth here.",
      "El Paso blends a calm pace with strong community expectations. The standard is simple: be clear and follow through.",
    ],
  },
  "corpus-christi-tx": {
    city: "Corpus Christi",
    region: "TX",
    areas: ["Downtown Corpus Christi", "Bay Area", "South Side", "Flour Bluff", "Calallen", "Portland", "Ingleside", "Rockport", "Aransas Pass", "Kingsville", "Robstown", "Mathis"],
    localLine:
      "Corpus Christi is coastal and spread out, with bayside routes and nearby towns connected by a few key corridors. People here value clear timing, practical plans, and reliable follow-through.",
    localLineVariations: [
      "From the bay neighborhoods to the surrounding communities, distances and bridge routes shape the day. Clear coordination keeps everything smooth.",
      "Corpus blends laid-back coastal routines with real regional reach. The standard is simple: be clear and be dependable.",
    ],
  },
  "waco-tx": {
    city: "Waco",
    region: "TX",
    areas: ["Downtown Waco", "Baylor Area", "Woodway", "Hewitt", "Bellmead", "China Spring", "Robinson", "Lorena", "McGregor", "Temple", "Killeen", "Bryan-College Station"],
    localLine:
      "Waco is a central Texas hub with steady routines and a metro that connects quickly into nearby towns. People here value clear plans, direct communication, and dependable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding communities, timing matters on regional corridors. Clear coordination keeps things smooth here.",
      "Waco blends campus energy with family neighborhoods and practical expectations. The standard is simple: be clear and follow through.",
    ],
  },

  // Utah
  "provo-ut": {
    city: "Provo",
    region: "UT",
    areas: ["Downtown Provo", "BYU Area", "Orem", "Vineyard", "Pleasant Grove", "American Fork", "Lehi", "Springville", "Spanish Fork", "Payson", "Lindon", "Highland"],
    localLine:
      "Provo sits in a fast-growing corridor where towns connect closely along the valley routes. People here value punctuality, clear communication, and plans that stay simple and organized.",
    localLineVariations: [
      "From Provo to Orem and Lehi, timing matters on busy commuter corridors. Clear coordination keeps everything smooth.",
      "Utah Valley blends campus routines with family neighborhoods and rapid growth. The standard is simple: be clear and be dependable.",
    ],
  },
  "ogden-ut": {
    city: "Ogden",
    region: "UT",
    areas: ["Downtown Ogden", "Historic 25th Street", "South Ogden", "North Ogden", "Riverdale", "Roy", "Clearfield", "Layton", "Syracuse", "Clinton", "Bountiful", "Farmington"],
    localLine:
      "Ogden is part of the Wasatch Front corridor, with towns connected closely along the highway spine. People here value clear plans, punctual timing, and reliable follow-through.",
    localLineVariations: [
      "From downtown Ogden to the surrounding cities, routes are straightforward but timing matters on commuter patterns. Clear coordination keeps things smooth.",
      "Ogden blends a practical pace with strong neighborhood identity across a connected region. The standard is simple: be clear and stay consistent.",
    ],
  },

  // Virginia (big missing demand corridor)
  "virginia-beach-va": {
    city: "Virginia Beach",
    region: "VA",
    areas: ["Virginia Beach", "Oceanfront", "Town Center", "Chesapeake", "Norfolk", "Portsmouth", "Suffolk", "Hampton", "Newport News", "Williamsburg", "Poquoson", "Smithfield"],
    localLine:
      "Hampton Roads is a connected region where tunnels, bridges, and traffic windows shape how the area moves. People here value clear timing, strong coordination, and communication that stays consistent.",
    localLineVariations: [
      "From the Oceanfront to Norfolk and Chesapeake, routing matters because crossings can change the day fast. Clear plans keep everything smooth.",
      "Virginia Beach blends coastal routines with a wide regional footprint across multiple cities. The standard is simple: be clear and follow through.",
    ],
  },

  // Washington
  "spokane-wa": {
    city: "Spokane",
    region: "WA",
    areas: ["Downtown Spokane", "South Hill", "North Spokane", "Hillyard", "Spokane Valley", "Liberty Lake", "Cheney", "Airway Heights", "Mead", "Post Falls", "Coeur d'Alene", "Rathdrum"],
    localLine:
      "Spokane is a regional hub with a wide footprint and strong connections into Idaho and nearby towns. People here value clear plans, practical timing, and dependable follow-through.",
    localLineVariations: [
      "From South Hill to Spokane Valley and across the border, routes and timing matter across the region. Clear coordination keeps things smooth.",
      "Spokane blends a steady pace with real regional reach and seasonal weather. The standard is simple: be clear and be reliable.",
    ],
  },
  "tacoma-wa": {
    city: "Tacoma",
    region: "WA",
    areas: ["Downtown Tacoma", "Stadium District", "Hilltop", "North End", "South Tacoma", "University Place", "Lakewood", "Puyallup", "Federal Way", "Fife", "Gig Harbor", "Auburn"],
    localLine:
      "Tacoma is a port city with distinct neighborhoods and a metro that blends into the wider Puget Sound corridor. People here value clear plans, steady communication, and reliable follow-through.",
    localLineVariations: [
      "From downtown to the surrounding cities, timing matters on busy corridors up and down the Sound. Clear coordination keeps everything smooth.",
      "Tacoma blends a strong local identity with regional movement and commuter routines. The standard is simple: be clear and stay consistent.",
    ],
  },

  // Wisconsin
  "madison-wi": {
    city: "Madison",
    region: "WI",
    areas: ["Downtown Madison", "Capitol Area", "UW Area", "Near East Side", "Near West Side", "Middleton", "Fitchburg", "Verona", "Sun Prairie", "Waunakee", "Monona", "Stoughton"],
    localLine:
      "Madison is organized and neighborhood-driven, shaped by lakes, campus routines, and steady commuter corridors. People here value clear plans, respectful communication, and dependable follow-through.",
    localLineVariations: [
      "From the Capitol area to the suburbs, Madison runs on schedules and straightforward expectations. Clear details keep things smooth here.",
      "Madison blends a calm pace with high standards for reliability. The standard is simple: be clear and follow through.",
    ],
  },
  "green-bay-wi": {
    city: "Green Bay",
    region: "WI",
    areas: ["Downtown Green Bay", "De Pere", "Ashwaubenon", "Howard", "Suamico", "Allouez", "Bellevue", "Appleton", "Kaukauna", "Oshkosh", "Fond du Lac", "Manitowoc"],
    localLine:
      "Green Bay is community-driven with a metro that connects quickly into surrounding Fox Valley cities. People here value practical planning, clear communication, and reliable follow-through.",
    localLineVariations: [
      "From De Pere to the wider valley corridor, routes are straightforward but timing still matters across distances. Clear coordination keeps things smooth.",
      "Green Bay blends local pride with steady routines and regional connections. The standard is simple: be clear and be dependable.",
    ],
  },

  // West Virginia
  "charleston-wv": {
    city: "Charleston",
    region: "WV",
    areas: ["Downtown Charleston", "East End", "South Hills", "Kanawha City", "North Charleston", "Dunbar", "South Charleston", "Nitro", "Hurricane", "Teays Valley", "St. Albans", "Cross Lanes"],
    localLine:
      "Charleston, West Virginia is a river city with a practical pace and routes shaped by hills and valleys. People here value straightforward communication, clear timing, and dependable follow-through.",
    localLineVariations: [
      "From South Hills to the surrounding towns, geography shapes routes and timing. Clear plans keep everything smooth here.",
      "Charleston blends a compact city core with regional reach and steady expectations. The standard is simple: be clear and be reliable.",
    ],
  },

  // Wyoming
  "cheyenne-wy": {
    city: "Cheyenne",
    region: "WY",
    areas: ["Downtown Cheyenne", "South Cheyenne", "North Cheyenne", "Ranchettes", "Fox Farm", "East Cheyenne", "West Cheyenne", "Burns", "Pine Bluffs", "Wellington", "Fort Collins", "Laramie"],
    localLine:
      "Cheyenne is a high plains hub with wide spacing between neighborhoods and nearby towns, plus weather that can shape timing. People here value preparedness, clear plans, and dependable follow-through.",
    localLineVariations: [
      "From Cheyenne to the surrounding communities, distances and conditions matter, especially in winter wind and snow. Clear coordination keeps things smooth.",
      "Cheyenne blends a small-city core with regional reach across open roads. The standard is simple: be clear, be ready, and follow through.",
    ],
  },
};
