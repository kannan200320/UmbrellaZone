// UmbrellaZone Product Catalog Data - Specialty Rain Gear Edition
const PRODUCTS_DATA = [
  // ==================== UMBRELLAS ====================
  {
    id: "vortex-9-compact",
    name: "Vortex-9 Windproof Automatic Umbrella",
    category: "umbrellas",
    subCategory: "Compact & Commuter",
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviewCount: 342,
    badge: "Best Seller",
    tagline: "Built with 9 strong fiberglass ribs that do not break or turn inside out in heavy monsoon winds.",
    shortDesc: "One-touch auto open & close windproof umbrella engineered with flexible 9-rib fiberglass frame and Teflon™ EcoElite water-shedding canopy. Ideal for daily office, college, metro transit, and sudden coastal storm squalls.",
    longDesc: "Designed specifically for severe stormy weather, cyclonic monsoons, and heavy coastal downpours. Standard umbrellas invert, bend, and permanently break when sudden wind gusts hit. The Vortex-9 features 9 flexible aerospace-grade fiberglass ribs and an aerodynamic dual-canopy vent system that allows gale-force winds to pass safely through without inverting the frame. The high-density 300T pongee fabric is treated with superhydrophobic Teflon™ nano-coating that casts off water droplets with a single quick flick, allowing you to slip the umbrella directly into your work bag or backpack without wetting documents or electronics.",
    images: [
      "https://i.pinimg.com/1200x/85/f4/76/85f476f2ea3f6c20df249004a3fd7a87.jpg",
      "assets/images/vortex-9-blue.png",
      "assets/images/vortex-9-green.png"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#0f172a" },
      { name: "Ocean Blue", hex: "#0284c7" },
      { name: "Forest Green", hex: "#166534" }
    ],
    sizes: ["Standard (43\" Arc)", "XL Commuter (48\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 75 km/h monsoon winds",
      "Canopy Size": "43 inches (109 cm) - Covers 1-2 people",
      "Folded Length": "11.8 inches (30 cm) - Fits easily in bag",
      "Ribs": "9 Flexible Fiberglass Ribs",
      "Fabric": "High-Density 300T Water-Repellent Fabric",
      "Weight": "385 grams",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Press button to open and press again to close automatically",
      "Windproof dual-vented canopy lets strong wind pass safely",
      "Comfortable anti-slip rubber grip handle with wrist strap",
      "Water drops slide right off with a single shake",
      "Includes protective water-resistant carry pouch"
    ],
    stockStatus: "In Stock (Ships in 24 Hours with Express Tracking)"
  },
  {
    id: "titanium-aero-stick",
    name: "Titanium Long Walking Stick Umbrella",
    category: "umbrellas",
    subCategory: "Executive & Golf",
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewCount: 198,
    badge: "Executive Choice",
    tagline: "Classic full-length stick umbrella with comfortable wooden handle and extra-wide canopy for two people.",
    shortDesc: "Full-length executive cane umbrella with 12 titanium alloy ribs, polished natural wood curved handle, and broad 52-60\" canopy offering complete 2-person rain shelter.",
    longDesc: "A masterclass in classic craftsmanship combined with modern storm resilience. Crafted with a full titanium central shaft and 12 high-tension alloy ribs, the Titanium Aero Stick withstands heavy continuous cloudbursts and gusty winds without shaking. The generous canopy diameter provides comfortable, shoulder-to-shoulder rain protection for two adults, preventing side-drips on formal attire. Completed with an ergonomic carved wooden j-handle and a reinforced brass ground ferrule that doubles comfortably as a sturdy walking cane.",
    images: [
      "https://i.pinimg.com/1200x/17/83/d2/1783d24167ad3c951fe2694d04c58cc6.jpg",
      "https://i.pinimg.com/1200x/43/44/cf/4344cf1fb638f415092d569f6e7c8a71.jpg",
      "https://i.pinimg.com/1200x/75/1d/71/751d714fa0876445eb2e6f3b81dc3f51.jpg"
    ],
    colors: [
      { name: "Royal Navy Blue", hex: "#1e293b" },
      { name: "Deep Green", hex: "#134e4a" },
      { name: "Slate Grey", hex: "#334155" }
    ],
    sizes: ["Executive (52\" Arc)", "Grand Master (60\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 65 km/h wind gusts",
      "Canopy Size": "52 to 60 inches - Full 2-person coverage",
      "Total Length": "36 inches (91 cm)",
      "Ribs": "12 High-Strength Titanium Alloy Ribs",
      "Handle": "Solid Polished Natural Wood",
      "Weight": "520 grams",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Smooth curved natural wooden handle fits firmly in hand",
      "Durable brass reinforced tip can be rested on ground like a cane",
      "Quick button-release deployment opens in half a second",
      "Wide umbrella curve protects both people completely from sideways rain"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "invisishield-inverted",
    name: "InvisiShield Inverted Reverse-Folding Umbrella",
    category: "umbrellas",
    subCategory: "Smart Inverted",
    price: 799,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 420,
    badge: "Smart Design",
    tagline: "Folds inside out to lock wet raindrops inside. Keeps your car seats, clothes, and floor completely dry.",
    shortDesc: "Inside-out reverse-folding umbrella that traps wet raindrops inside when closed, keeping car seats, clothes, and indoor floors bone dry. Equipped with a hands-free C-handle and reflective night trim.",
    longDesc: "Solves the biggest annoyance of rainy commutes: dripping water inside vehicles and offices. The InvisiShield closes upwards in reverse, folding the wet surface inwards and exposing only the dry underside. Getting into your car or hailing transit during torrential rain is effortless—you can close the umbrella through a tiny door crack without letting water inside. The ergonomic rubberized C-handle loops over your wrist so both hands remain completely free to hold a phone, umbrella bag, or child's hand. When set down, it stands upright on flat ground on its own to dry naturally.",
    images: [
      "https://i.pinimg.com/1200x/b5/ad/4c/b5ad4c4367bd1a8ddf42141a6bb6f27a.jpg",
      "https://media.kohlsimg.com/is/image/kohls/3335128_Black?wid=800&hei=800&op_sharpen=1",
      "https://i.pinimg.com/1200x/fc/00/ee/fc00ee7b9268a8ff71d403f1f02e0224.jpg"
    ],
    colors: [
      { name: "Sky Blue & Grey", hex: "#0284c7" },
      { name: "Classic Black", hex: "#0f172a" },
      { name: "Maroon Wine", hex: "#881337" }
    ],
    sizes: ["Universal (46\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 60 km/h wind gusts",
      "Canopy Size": "46 inches (117 cm)",
      "Folded Length": "12.5 inches (32 cm)",
      "Ribs": "8 Inverted Dual-Flex Ribs",
      "Handle": "Hands-Free Ergonomic C-Handle",
      "Weight": "410 grams",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Inverted reverse fold keeps the wet surface inside when closed",
      "C-shaped handle rests on wrist so your hands remain free for phone or bags",
      "Stands upright on flat floors on its own to dry without a stand",
      "Night safety reflective border alerts drivers in heavy rain"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "ultralight-feather-pocket",
    name: "Ultralight Pocket Mini Umbrella",
    category: "umbrellas",
    subCategory: "Pocket & Travel",
    price: 599,
    originalPrice: 899,
    rating: 4.7,
    reviewCount: 176,
    badge: "Ultralight",
    tagline: "Weighs only 180 grams. Compact 6-fold design with UPF 50+ UV sun protection and monsoon rain shelter.",
    shortDesc: "Ultra-compact 6-fold pocket umbrella weighing only 180 grams. Combines UPF 50+ UV titanium heat barrier with instant rain repellency for handbag, briefcase, or vehicle glovebox carry.",
    longDesc: "Lighter than a modern smartphone and folding down to just 17 centimeters, this is the ultimate daily carry weather companion. Engineered with aircraft-grade aluminum alloy and flexible carbon composite tips, it provides reliable rain protection during sudden tropical squalls without adding bulk to your commute bag. On bright sunny days, the inner titanium black layer blocks 99% of harmful UVA/UVB rays and lowers the temperature beneath the canopy by 5°C. Includes a waterproof zippered protective travel case.",
    images: [
      "https://i.pinimg.com/1200x/68/95/8b/68958bc02a8bd11a945c81176b12b696.jpg",
      "assets/images/pocket-mini-charcoal.jpg",
      "assets/images/pocket-mini-pink.jpg"
    ],
    colors: [
      { name: "Sunny Yellow", hex: "#eab308" },
      { name: "Matte Charcoal", hex: "#475569" },
      { name: "Rose Pink", hex: "#f43f5e" }
    ],
    sizes: ["Pocket Mini (38\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 45 km/h winds",
      "Canopy Size": "38 inches (96 cm)",
      "Folded Length": "Only 6.7 inches (17 cm) - Pocket size",
      "Sun Protection": "UPF 50+ (Blocks 99% harmful UV rays)",
      "Weight": "180 grams (Lighter than a smartphone)",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Folds down smaller than a 6-inch smartphone",
      "Heat-blocking inner silver layer keeps you cool under harsh sun",
      "Flexible carbon rib tips bend under wind pressure without breaking",
      "Includes a snug water-tight zippered carry pouch"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "stormcommander-68-golf",
    name: "StormCommander 68\" Giant Windproof Umbrella",
    category: "umbrellas",
    subCategory: "Executive & Golf",
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewCount: 289,
    badge: "Heavy Duty",
    tagline: "Extra-large 68-inch dual-canopy umbrella that comfortably covers 3 to 4 people in heavy storms.",
    shortDesc: "Massive 68-inch dual-canopy windproof umbrella providing complete sheltered coverage for 3 to 4 people. Built with lightning-safe non-conductive fiberglass and auto push-button deployment.",
    longDesc: "Engineered for maximum shelter across open grounds, sports courses, school drop-offs, and outdoor construction sites. The massive 68-inch canopy spans over 1.7 meters, shielding entire families from torrential sideways downpours. The double-canopy construction features wind-relief vents that equalize air pressure during coastal gusts, preventing the umbrella from being ripped from your grip. Entirely metal-free in its rib and shaft construction, making it safe from electrical conduction during thunderstorms.",
    images: [
      "https://i.pinimg.com/1200x/ce/97/f8/ce97f8bd9669290db3d86579615c8c29.jpg",
      "https://i.pinimg.com/1200x/e2/a3/d4/e2a3d49ab7b4db8ef1a85f792e9fbb11.jpg",
      "https://i.pinimg.com/1200x/1d/87/8b/1d878b5765a56cfe95c4af1dc0bdd362.jpg"
    ],
    colors: [
      { name: "Navy & White", hex: "#0f172a" },
      { name: "Solid Black", hex: "#111827" },
      { name: "Bottle Green", hex: "#14532d" }
    ],
    sizes: ["Giant Family Master (68\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 80 km/h cyclone gusts",
      "Canopy Size": "Massive 68 inches (173 cm) - Covers 3-4 people",
      "Frame Material": "All-Fiberglass Lightning-Safe Non-Conductive Frame",
      "Handle": "Soft Cushion Foam Grip Handle",
      "Weight": "690 grams",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Large enough to cover 3 to 4 people or family members together",
      "Dual canopy vents let heavy wind escape without pulling umbrella from hands",
      "Lightning-safe fiberglass shaft and ribs with zero metal conduction",
      "Automatic push button opens the giant canopy instantly"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "clearview-panoramic-dome",
    name: "ClearView Transparent Bubble Dome Umbrella",
    category: "umbrellas",
    subCategory: "Fashion & City",
    price: 699,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 215,
    badge: "City Style",
    tagline: "Deep transparent bell-shaped canopy provides 360-degree clear visibility in pouring rain.",
    shortDesc: "Deep transparent bubble dome umbrella offering 360-degree road visibility while enclosing head and shoulders in a water-repellent cocoon against driving wind and splash.",
    longDesc: "Walk confidently through crowded city streets, pedestrian markets, and busy transit hubs without colliding with fellow commuters. The deep birdcage silhouette wraps around your upper torso, effectively blocking horizontal rain, car road splashes, and cold wind gusts while keeping your hairstyle and makeup pristine. The ultra-clear optical grade PVC canopy never fogs or yellows over time, and the pinch-proof safety runner protects fingers during rapid opening and closing.",
    images: [
      "https://i.pinimg.com/1200x/71/69/0d/71690d49d72b323039478dc20d169a17.jpg",
      "https://i.pinimg.com/1200x/96/c0/21/96c021434356b46679ee58af66eca050.jpg",
      "https://i.pinimg.com/1200x/e6/01/50/e601508360a40e31abf956e6da54481a.jpg"
    ],
    colors: [
      { name: "Crystal Clear", hex: "#e2e8f0" },
      { name: "Clear with Pink Border", hex: "#f43f5e" },
      { name: "Clear with Black Border", hex: "#1e293b" }
    ],
    sizes: ["Deep Dome (50\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 55 km/h winds",
      "Canopy Size": "50 inches (127 cm) Deep Dome",
      "Material": "Thick Optical Clear Waterproof Film",
      "Frame": "Flexible Fiberglass Dome Skeleton",
      "Weight": "420 grams",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Deep bubble shape wraps around head and shoulders to block side rain",
      "Crystal clear material never fogs up or turns yellow",
      "Finger-friendly safety runner does not pinch fingers when opening",
      "Classic matching curved handle gives comfortable grip"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "typhoon-x-titanium-storm",
    name: "Typhoon-X Titanium Carbon-Core Storm Umbrella",
    category: "umbrellas",
    subCategory: "Executive & Golf",
    price: 1699,
    originalPrice: 2299,
    rating: 5.0,
    reviewCount: 312,
    badge: "Typhoon Certified",
    tagline: "Reinforced titanium carbon-fiber hybrid ribs engineered for 85 km/h squalls with automatic open.",
    shortDesc: "85 km/h storm-rated titanium walking umbrella with carbon-fiber rib articulation, dual-vent pressure escape canopy, and solid ergonomic rubber grip.",
    longDesc: "Engineered for maximum wind velocity in open coastal squalls and stormy downpours. The Typhoon-X pairs a lightweight, corrosion-proof titanium center shaft with high-density carbon-fiber tension ribs that absorb violent aerodynamic buffeting without inverting. The 60-inch canopy is woven from 300T pongee infused with hydrophobic Teflon™ EcoElite nano-barrier that sheds water instantly, keeping multiple people dry in horizontal rains. Finished with a non-conductive lightning-safe composite tip and an anti-slip textured grip.",
    images: [
      "assets/images/typhoon-x-grey.png",
      "assets/images/typhoon-x-marine.png",
      "assets/images/typhoon-x-black.png"
    ],
    colors: [
      { name: "Titanium Matte Grey", hex: "#475569" },
      { name: "Deep Marine", hex: "#1e3a8a" },
      { name: "Midnight Obsidian", hex: "#0f172a" }
    ],
    sizes: ["Executive Tour (60\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 85 km/h squalls",
      "Canopy Size": "60 inches (152 cm) 2-Person Coverage",
      "Shaft": "Reinforced Titanium Composite",
      "Ribs": "Carbon-Fiber & Titanium Hybrid Skeleton",
      "Warranty": "Lifetime Frame Replacement Guarantee"
    },
    features: [
      "Hybrid titanium shaft withstands 85 km/h storm gusts",
      "Dual-vent canopy lets high wind pass without flipping",
      "One-touch button auto open mechanism",
      "Non-slip rubber ergonomic grip with wrist strap"
    ],
    stockStatus: "In Stock"
  },

  // ==================== RAINCOATS ====================
  {
    id: "aegis-urban-trench",
    name: "Aegis Waterproof Commuter Raincoat Trench",
    category: "raincoats",
    subCategory: "Urban Commuter",
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviewCount: 310,
    badge: "Best Seller",
    tagline: "Tailored breathable raincoat with fully taped waterproof seams for office goers and city commuters.",
    shortDesc: "20,000mm waterproof tailored commuter trench coat with 3-layer breathable membrane, heat-sealed taped seams, detachable brimmed storm hood, and internal waterproof device pockets.",
    longDesc: "Engineered for daily urban professionals who need complete rain protection without the suffocating sweat of plastic raincoats. The Aegis Trench utilizes a microporous 3-layer membrane that allows perspiration and body heat to escape while blocking 100% of relentless downpours. Tailored with a sharp formal silhouette that fits neatly over suits and work clothes, it features magnetic front storm closures, fleece-lined handwarmer pockets, and a dedicated internal waterproof pocket that keeps laptops, smartphones, and transit passes completely dry.",
    images: [
      "assets/images/aegis-trench-beige.jpg",
      "assets/images/aegis-trench-black.jpg",
      "assets/images/aegis-trench-olive.jpg"
    ],
    colors: [
      { name: "Classic Sand", hex: "#d6c7b2" },
      { name: "Midnight Black", hex: "#0f172a" },
      { name: "Deep Olive", hex: "#283618" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: {
      "Waterproof Level": "Heavy Rain Resistant (20,000 mm Pressure)",
      "Breathability": "High Air Flow (No Sticky Perspiration)",
      "Seams": "100% Heat-Sealed Waterproof Taped Seams",
      "Zippers": "Water-Tight Front Zipper with Button Flap",
      "Warranty": "3-Year Fabric & Stitching Guarantee"
    },
    features: [
      "Magnetic flap covers front zipper to stop water ingress",
      "Soft fleece inside side pockets to keep hands warm and dry",
      "Detachable rain hood with brim shields forehead from drips",
      "Inside waterproof security pocket protects phone and wallet",
      "Breathable back vent keeps you cool in humid rains"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "hydroshield-technical-parka",
    name: "HydroShield All-Weather Monsoon Parka & Suit",
    category: "raincoats",
    subCategory: "Expedition & Extreme",
    price: 2999,
    originalPrice: 3999,
    rating: 5.0,
    reviewCount: 164,
    badge: "Heavy Rain Rider",
    tagline: "Heavy-duty waterproof rain suit engineered for bike riders and outdoor commuters facing non-stop rains.",
    shortDesc: "25,000mm heavy-duty monsoon rain suit and parka designed for motorbike riders, highway commuters, and outdoor field personnel. Features double storm flaps, underarm cooling vents, and 3M night safety reflectors.",
    longDesc: "Built to conquer severe cyclonic storms and prolonged highway riding in heavy rain. Constructed from ultra-durable ripstop polyester with internal polyurethane seam tape, the HydroShield blocks driving wind and rain up to 100 km/h. Dual overlapping storm flaps protect the heavy-duty front zipper against high-speed water ingress, while zippered underarm ventilation ports allow continuous airflow to keep riders cool and dry. Includes a helmet-compatible adjustable hood and high-visibility 3M reflective striping across the chest, back, and cuffs for night navigation.",
    images: [
      "assets/images/hydroshield-suit-grey.jpg",
      "assets/images/hydroshield-suit-blue.jpg",
      "assets/images/hydroshield-suit-orange.jpg"
    ],
    colors: [
      { name: "Graphite Grey", hex: "#334155" },
      { name: "Ocean Blue", hex: "#0369a1" },
      { name: "High-Vis Neon Orange", hex: "#ea580c" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    specs: {
      "Waterproof Level": "Severe Torrential Rain Proof (25,000 mm)",
      "Fabric": "Heavy-Duty Ripstop Polyester Shell",
      "Ventilation": "Underarm Air Zips for Riding Comfort",
      "Pockets": "4 Deep Waterproof Exterior Pockets + 2 Inside",
      "Warranty": "3-Year Fabric Guarantee"
    },
    features: [
      "Storm hood fits comfortably over helmet or cap",
      "Double front storm flaps block water during fast bike riding",
      "Adjustable wrist cuffs with velcro seal rain completely out of sleeves",
      "Bright reflective night bands on chest, back, and arms"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "zephyr-poncho-green",
    name: "Zephyr Packable Bike & Travel Rain Poncho",
    category: "raincoats",
    subCategory: "Packable & Cycling",
    price: 999,
    originalPrice: 1499,
    rating: 4.9,
    reviewCount: 248,
    badge: "Bike & Commuter",
    tagline: "100% waterproof ripstop travel poncho with backpack expansion space & handlebar clips.",
    shortDesc: "18,000mm ripstop cycling and travel rain poncho with expandable 35L backpack cover, handlebar thumb loops, stiffened hood visor, and integrated 15-second self-packing chest pouch.",
    longDesc: "The ultimate packable rain shelter for two-wheeler commuters, cyclists, and weekend hikers. Crafted from lightweight 210T ripstop nylon reinforced with silicone coating, the Zephyr drapes effortlessly over riders and their backpacks up to 35 liters. Ergonomic thumb loops anchor the front hem to handlebars to prevent the poncho from flying up in headwinds, while side snap buttons create instant comfortable arm sleeves. Folds neatly into its own zippered chest pouch in seconds, making it easy to store in any bag or bike trunk.",
    images: [
      "assets/images/zephyr-poncho-green.jpg",
      "assets/images/zephyr-poncho-black.jpg",
      "assets/images/zephyr-poncho-yellow.jpg"
    ],
    colors: [
      { name: "Alpine Pine Green", hex: "#1b4d3e" },
      { name: "Onyx Stealth Black", hex: "#111827" },
      { name: "High-Vis Signal Yellow", hex: "#eab308" }
    ],
    sizes: ["Free Size (Unisex Fits All)"],
    specs: {
      "Waterproof Rating": "18,000 mm Hydrostatic Head",
      "Packed Size": "18cm x 12cm Compact Pouch",
      "Weight": "310 grams",
      "Warranty": "2-Year Doorstep Monsoon Guarantee"
    },
    features: [
      "Drapes completely over commuter backpacks up to 35 liters",
      "Integrated thumb loops keep poncho pinned to bike handlebars",
      "Stiffened hood visor protects eyes and eyeglasses from sideways rain",
      "Folds into its own chest zipper pouch in 15 seconds"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "aeroshield-hooded-poncho",
    name: "AeroShield All-Weather Hooded Rain Poncho",
    category: "raincoats",
    subCategory: "Packable & Cycling",
    price: 1199,
    originalPrice: 1699,
    rating: 4.9,
    reviewCount: 215,
    badge: "Clear Visor Shield",
    tagline: "Full-coverage hooded rain poncho with built-in clear face visor & side snap sleeves for cycling & commuting.",
    shortDesc: "Full-coverage hooded rain poncho featuring an integrated HD clear face visor, side snap armholes, and expansive waterproof drape for zero-obstruction road visibility during cycling and walking.",
    longDesc: "Eliminate the annoyance of stinging raindrops in your eyes and foggy eyeglasses. The AeroShield Poncho incorporates an extended clear optical polycarbonate face shield that deflects wind-driven rain away from your face while ensuring an unrestricted 180-degree view of traffic. Its spacious, flowing silhouette provides generous airflow to prevent condensation, covers oversized work backpacks, and fastens securely at the sides with rust-resistant storm snaps.",
    images: [
      "assets/images/aeroshield-poncho-blue.png",
      "assets/images/aeroshield-poncho-green.png",
      "assets/images/aeroshield-poncho-yellow.png"
    ],
    colors: [
      { name: "Navy Blue", hex: "#1e293b" },
      { name: "Forest Green", hex: "#14532d" },
      { name: "Signal Yellow", hex: "#eab308" }
    ],
    sizes: ["Free Size (Unisex Fits All)"],
    specs: {
      "Waterproof Rating": "15,000 mm Hydrostatic Head",
      "Face Shield": "HD Anti-Fog Clear Polycarbonate Visor",
      "Packed Size": "20cm x 15cm Portable Storage Pouch",
      "Weight": "280 grams",
      "Warranty": "2-Year Doorstep Monsoon Guarantee"
    },
    features: [
      "Clear face visor keeps eyeglasses completely dry in heavy showers",
      "Generous oversized drape covers backpacks and shoulder bags up to 30L",
      "Side snap buttons create instant comfortable arm openings",
      "Ultralight ripstop fabric shakes dry in under 10 seconds"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "nordic-expedition-anorak",
    name: "Nordic All-Weather Pullover Rain Jacket",
    category: "raincoats",
    subCategory: "Expedition & Extreme",
    price: 2199,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 142,
    badge: "Sport Pullover",
    tagline: "Lightweight sporty pullover rain jacket with kangaroo storm pocket for phone, keys, and wallet.",
    shortDesc: "20,000mm sporty pullover rain jacket with moisture-wicking anti-stick mesh lining, center kangaroo storm vault pocket, and full-length side entrance zipper for rapid slip-on.",
    longDesc: "A modern, high-performance athletic pullover engineered for fast-paced urban commutes, morning jogs in the rain, and mountain trail hikes. The Nordic Anorak features fully taped waterproof construction lined with an ultra-soft breathable mesh that prevents the fabric from clinging to skin during humid weather. Its oversized center kangaroo pocket features water-tight zipper flaps to safeguard mobile phones, wallets, and keys. An extended side-vent zipper allows you to slip the jacket on and off in under three seconds.",
    images: [
      "assets/images/nordic-anorak-blue.jpg",
      "assets/images/nordic-anorak-green.jpg",
      "assets/images/nordic-anorak-grey.jpg"
    ],
    colors: [
      { name: "Cobalt Blue", hex: "#1d4ed8" },
      { name: "Pine Green", hex: "#2d4a22" },
      { name: "Steel Grey", hex: "#4b5563" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: {
      "Waterproof Level": "20,000 mm Pressure Rating",
      "Lining": "Soft Anti-Stick Moisture Wicking Mesh",
      "Front Pocket": "Sealed Storm Vault Pocket",
      "Warranty": "3-Year Fabric Guarantee"
    },
    features: [
      "Tall chin collar keeps water from running down your neck",
      "Center waterproof kangaroo pocket protects phone and cash",
      "Side zipper allows slipping on and off in under three seconds",
      "Drawstring waist cinch blocks road water splashes"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "vanguard-motorcycle-rider-suit",
    name: "Vanguard Motorcycle Monsoon Rider Rainsuit",
    category: "raincoats",
    subCategory: "Expedition & Extreme",
    price: 2799,
    originalPrice: 3699,
    rating: 4.9,
    reviewCount: 195,
    badge: "Highway Rider",
    tagline: "Heavy-duty 2-piece rider rain suit with dual storm flaps, boot gaiters, and 360° reflective piping.",
    shortDesc: "28,000mm heavy-duty 2-piece motorbike rain suit featuring welded heat-taped seams, double front storm flaps, built-in boot gaiters, and 360-degree night safety reflectors for high-speed highway riding.",
    longDesc: "Engineered specifically for high-speed highway motorcycle commutes in torrential monsoons. Built with high-tensile 300D Oxford nylon laminated with a breathable polyurethane membrane, the Vanguard withstands 100 km/h wind-driven rainfall without water ingress. Dual storm closures seal off the front zipper against high-velocity spray, while underarm and rear exhaust vents eliminate condensation. Includes reinforced anti-abrasion seat panels and elasticized ankle gaiters that lock over boots.",
    images: [
      "assets/images/vanguard-rider-blue.png",
      "assets/images/vanguard-rider-orange.jpg",
      "assets/images/vanguard-rider-grey.png"
    ],
    colors: [
      { name: "Cobalt Monsoon Blue", hex: "#1d4ed8" },
      { name: "High-Vis Safety Orange", hex: "#ea580c" },
      { name: "Tactical Slate Grey", hex: "#475569" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    specs: {
      "Waterproof Level": "28,000 mm Torrential Pressure",
      "Fabric": "300D High-Tensile Oxford Nylon",
      "Seams": "100% Heat-Welded Polyurethane Tape",
      "Warranty": "3-Year Fabric Guarantee"
    },
    features: [
      "Double storm flaps stop high-speed rain entering front zipper",
      "Reinforced waterproof seat panel prevents puddle seepage on bike seat",
      "3M Scotchlite reflective stripes ensure 360° visibility at night",
      "Elastic boot gaiters seal rainwater away from socks"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "stormrider-commuter-rain-jacket",
    name: "StormRider Packable Commuter Rain Shell",
    category: "raincoats",
    subCategory: "Urban Commuter",
    price: 1899,
    originalPrice: 2599,
    rating: 4.8,
    reviewCount: 168,
    badge: "Ultralight Shell",
    tagline: "Featherlight 2.5-layer breathable waterproof rain jacket tailored for cycling and city walking.",
    shortDesc: "Ultralight 20,000mm commuter rain shell weighing just 220g. Features 2.5-layer breathable membrane, waterproof chest pocket, drop-tail hem for cycling splash protection, and packable stow pocket.",
    longDesc: "The quintessential urban shell for morning walks, transit connections, and sudden tropical downpours. Constructed from featherweight ripstop nylon with a dry-touch printed backing that eliminates clamminess against bare arms. An elongated drop-tail hem shields trousers from rear bicycle wheel spray, while adjustable cuff tabs prevent wind and water from creeping up sleeves. Packs down into its own chest pocket smaller than a water bottle.",
    images: [
      "assets/images/stormrider-shell-green.jpg",
      "assets/images/stormrider-shell-black.jpg",
      "assets/images/stormrider-shell-grey.jpg"
    ],
    colors: [
      { name: "Forest Pine Green", hex: "#14532d" },
      { name: "Stealth Black", hex: "#18181b" },
      { name: "Urban Stone Grey", hex: "#94a3b8" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: {
      "Waterproof Level": "20,000 mm Hydrostatic Rating",
      "Weight": "220 grams ultra-packable",
      "Seams": "Fully Taped Micro-Seams",
      "Warranty": "2-Year Doorstep Monsoon Guarantee"
    },
    features: [
      "Packs into its own chest pocket for easy daily bag carry",
      "Drop-tail hem prevents tire water splash during bike rides",
      "Breathable dry-touch interior prevents skin sticking",
      "Waterproof zipper with interior storm guard"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "alpine-ridge-packable-raincoat",
    name: "Alpine Ridge Lightweight Packable Rain Parka",
    category: "raincoats",
    subCategory: "Packable & Cycling",
    price: 1399,
    originalPrice: 1899,
    rating: 4.8,
    reviewCount: 220,
    badge: "Pocket Stash",
    tagline: "Self-packing hooded rain parka that folds into its own interior pocket in 10 seconds flat.",
    shortDesc: "Packable all-weather rain parka with adjustable brimmed hood, dual zippered hand pockets, and breathable back airflow cape. Perfect for travel, college campuses, and daily bag carry.",
    longDesc: "Never get caught unprepared by an unexpected torrential cloudburst. The Alpine Ridge Parka delivers comprehensive head-to-thigh rain coverage while folding down into a tidy 15cm pouch that slips effortlessly into backpacks, briefcases, or glove compartments. Features a storm-brim hood with dual cinch cords to prevent rain dripping into eyes, and concealed rear ventilation slats that circulate air continuously.",
    images: [
      "assets/images/alpine-ridge-grey.jpg",
      "assets/images/alpine-ridge-navy.jpg",
      "assets/images/alpine-ridge-green.jpg"
    ],
    colors: [
      { name: "Slate Fog Grey", hex: "#475569" },
      { name: "Midnight Navy", hex: "#1e293b" },
      { name: "Pine Forest Green", hex: "#15803d" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    specs: {
      "Waterproof Rating": "16,000 mm Pressure Rating",
      "Weight": "260 grams",
      "Pack Time": "10-Second Self-Stow Pocket",
      "Warranty": "2-Year Doorstep Monsoon Guarantee"
    },
    features: [
      "Self-stows into integrated interior pocket in 10 seconds",
      "Extended mid-thigh length shields shorts and pants from driving rain",
      "Concealed back airflow cape vents body heat in humid monsoon weather",
      "Deep zippered pockets protect smartphones and wallets"
    ],
    stockStatus: "In Stock"
  },

  // ==================== RAIN BOOTS ====================
  {
    id: "thames-chelsea-boot",
    name: "Thames All-Weather Rubber Rain Boot",
    category: "boots",
    subCategory: "Chelsea & Commuter",
    price: 1699,
    originalPrice: 2299,
    rating: 4.9,
    reviewCount: 450,
    badge: "Best Seller",
    tagline: "100% waterproof natural rubber ankle boot with anti-skid grip for slippery roads and rain puddles.",
    shortDesc: "Handcrafted 100% natural vulcanized rubber Chelsea ankle boot with anti-skid wet traction tread, ergonomic pull tabs, and cushioned memory foam arch support for daily city commutes.",
    longDesc: "Say goodbye to ruined leather shoes, soaked socks, and waterlogged work commutes. Handcrafted from pure vulcanized natural tree rubber, the Thames Chelsea Boot provides 100% waterproof protection while maintaining a sleek, tailored profile suitable for both jeans and formal trousers. The dual elastic side gussets and reinforced front/back pull tabs ensure effortless on-and-off in seconds. Underneath, a razor-grooved hexagonal traction outsole grips firmly on slick granite floors, wet tile walkways, and flooded curbs.",
    images: [
      "assets/images/thames-boot-black.png",
      "assets/images/thames-boot-olive.png",
      "assets/images/thames-boot-brown.png"
    ],
    colors: [
      { name: "Matte Black", hex: "#18181b" },
      { name: "Olive Green", hex: "#4a5538" },
      { name: "Chestnut Brown", hex: "#78350f" }
    ],
    sizes: ["Size 6", "Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Material": "100% Waterproof Natural Vulcanized Rubber",
      "Insole": "Cushioned Arch Support Memory Foam",
      "Sole Grip": "Anti-Skid Hexagon Wet Traction Tread",
      "Height": "5.5 inches (Covers above ankles)",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Waterproof elastic side bands stretch for easy slip-on in two seconds",
      "Front and back pull tabs make wearing and taking off hassle-free",
      "Deep grooved sole prevents slipping on wet metro tiles or muddy paths",
      "Removable cushioned insole can be washed and air-dried"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "highland-tall-wellies",
    name: "Highland Tall Knee-High Mud & Water Gumboots",
    category: "boots",
    subCategory: "Tall & Expedition",
    price: 2299,
    originalPrice: 2999,
    rating: 5.0,
    reviewCount: 230,
    badge: "Heavy Duty",
    tagline: "Heavy knee-length waterproof gumboots for deep waterlogging, heavy garden mud, and flooded roads.",
    shortDesc: "15-inch knee-high heavy-duty gumboots featuring thick natural rubber, 5mm insulated neoprene/fleece lining, self-cleaning mud shedding treads, and an adjustable calf expansion gusset.",
    longDesc: "When urban drainage systems overflow or trails turn into deep mud, these knee-high gumboots provide impenetrable protection. Standing 15 inches tall, they safeguard your trousers and socks up to the knee in standing water, flooded streets, and thick mud. The deep-cleated lug outsole features a self-cleaning channel design that ejects mud as you walk, preventing clogging and slipping. The adjustable buckle strap expands comfortably to accommodate athletic calves, and a rear kick spur allows hands-free boot removal without dirtying your fingers.",
    images: [
      "assets/images/highland-wellies-green.png",
      "assets/images/highland-wellies-black.png",
      "assets/images/highland-wellies-burgundy.png"
    ],
    colors: [
      { name: "Hunter Green", hex: "#1b4332" },
      { name: "Solid Black", hex: "#18181b" },
      { name: "Rustic Burgundy", hex: "#581c2d" }
    ],
    sizes: ["Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Material": "Thick Natural Rubber with Neoprene Lining",
      "Height": "15 inches (Full knee-high protection)",
      "Outsole": "Deep-Tread Self-Cleaning Mud Lugs",
      "Calf Fit": "Adjustable buckle strap expands for wider calves",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Extra tall 15-inch height keeps socks 100% dry even in deep puddles",
      "Heavy sole lugs grip firmly on slippery mud and slimy road moss",
      "Hands-free kick spur at heel lets you remove boots without touching wet mud",
      "Breathable sweat-wicking inner cloth lining"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "urban-puddle-sneaker",
    name: "Urban Splash-Proof Rubber Sneaker Shoes",
    category: "boots",
    subCategory: "Chelsea & Commuter",
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewCount: 310,
    badge: "Trending",
    tagline: "Looks like everyday casual sneakers, but performs like 100% waterproof rubber gumboots.",
    shortDesc: "Ultra-lightweight injection-molded rubber waterproof sneakers designed for college, office, and walking. Features street-smart styling, anti-slip traction sole, and bouncy all-day comfort footbed.",
    longDesc: "Standard canvas or mesh sneakers soak up muddy puddle water within seconds, leaving you with cold, wet feet all day. The Urban Puddle Sneaker combines the sleek look of modern street footwear with 100% seamless molded rubber waterproofing. Completely splash-proof and puddle-resistant, it features a sealed tongue gusset that blocks water ingress up to the ankle. After a messy commute, simply rinse under a running tap for ten seconds to restore a brand-new look. Features a high-rebound cushioned insole for 10,000+ daily steps.",
    images: [
      "assets/images/urban-sneaker-yellow.png",
      "assets/images/urban-sneaker-grey.png",
      "assets/images/urban-sneaker-black.png"
    ],
    colors: [
      { name: "Monsoon Yellow", hex: "#eab308" },
      { name: "Concrete Grey", hex: "#64748b" },
      { name: "All Black", hex: "#18181b" }
    ],
    sizes: ["Size 6", "Size 7", "Size 8", "Size 9", "Size 10"],
    specs: {
      "Material": "Seamless Injected Waterproof Rubber",
      "Outsole": "Flexible Anti-Slip Rubber Tread",
      "Weight": "Super light (340 grams per shoe)",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Sneaker styling matches everyday jeans, chinos, and casual wear",
      "Sealed rubber tongue prevents water splashes entering at ankles",
      "Wipes clean in 10 seconds under running tap water",
      "Soft bouncy footbed comfortable for 10,000+ daily steps"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "coastline-slip-on-deck",
    name: "Coastline Waterproof Slip-On Grip Shoes",
    category: "boots",
    subCategory: "Chelsea & Commuter",
    price: 1599,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 184,
    badge: "Extra Grip",
    tagline: "Waterproof slip-on shoes with razor-cut grip sole for slippery wet floors, metro stairs, and wet pavements.",
    shortDesc: "Waterproof low-profile slip-on shoes engineered with razor-siped gum rubber outsoles for exceptional grip on wet boat decks, slippery tiles, metro stairs, and slick pavements.",
    longDesc: "Engineered specifically for extreme wet-floor traction. The Coastline Slip-On features razor-siped non-marking rubber outsoles—the same technology used in marine deck gear—which channel water away from the contact patch to grip securely on wet tiles, slick lobby floors, metal stair edges, and polished stone. Built with an elastic neoprene ankle collar for immediate slip-on ease and an antimicrobial breathable interior that keeps bare feet fresh throughout humid monsoons.",
    images: [
      "assets/images/coastline-slip-on-navy.png",
      "assets/images/coastline-slip-on-grey.png",
      "assets/images/coastline-slip-on-teal.png"
    ],
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Charcoal Grey", hex: "#475569" },
      { name: "Deep Teal", hex: "#115e59" }
    ],
    sizes: ["Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Material": "Seamless Molded Rubber with Neoprene Collar",
      "Sole": "Razor-Siped Anti-Skid Rubber Bottom",
      "Height": "6 inches ankle coverage",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Non-marking rubber sole prevents slipping on smooth wet tiles",
      "Wide pull loops for effortless slip-on in one second",
      "Antimicrobial breathable inner lining keeps socks fresh",
      "Flexible ankle flex zone comfortable for driving two-wheelers and cars"
    ],
    stockStatus: "In Stock"
  },

  // ==================== ADDITIONAL SPECIALTY RAIN GEAR ====================
  {
    id: "cyclone-54-double-canopy",
    name: "Cyclone 54\" Heavy-Gale Double-Canopy Umbrella",
    category: "umbrellas",
    subCategory: "Compact & Commuter",
    price: 1099,
    originalPrice: 1599,
    rating: 4.9,
    reviewCount: 228,
    badge: "Storm Tested",
    tagline: "Dual-canopy active air vent lets gale-force winds pass safely through without inverting the umbrella.",
    shortDesc: "54-inch heavy-gale windproof umbrella with active dual-canopy pressure release vents, 9 flexible fiberglass ribs, and 300T Teflon™ nano-repel fabric tested against 80 km/h storm gusts.",
    longDesc: "Engineered for open waterfront wind tunnels, bridges, and violent thunderstorm gusts. The Cyclone 54 features an overlapping dual-canopy vent system that allows turbulent wind to bleed harmlessly through internal channels, eliminating aerodynamic lift and preventing inversion. The expansive 54-inch canopy provides ample personal coverage while maintaining commuter portability with its one-touch automatic deployment button and reinforced titanium-alloy center shaft.",
    images: [
      "https://i.pinimg.com/1200x/66/63/b2/6663b2e5b9bf286f4b54ab88587adcf7.jpg",
      "https://i.pinimg.com/1200x/ad/95/4b/ad954b095cf895d16285e0ed1dc1d74f.jpg",
      "https://i.pinimg.com/736x/71/4e/3d/714e3dd8b274802cc2935f3a1b8a6b75.jpg"
    ],
    colors: [
      { name: "Storm Black", hex: "#0f172a" },
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Slate Grey", hex: "#475569" }
    ],
    sizes: ["Standard (54\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 80 km/h wind gusts",
      "Canopy Arc": "54 inches (137 cm)",
      "Ribs": "9 High-Flex Fiberglass Ribs",
      "Fabric": "300T Teflon Nano-Repel Pongee",
      "Warranty": "2-Year Doorstep Monsoon Guarantee"
    },
    features: [
      "Overlapping wind vents prevent inversion in heavy winds",
      "One-touch instant auto-open button mechanism",
      "Hydrophobic nano-coating dries in one quick shake",
      "Reinforced titanium central support column"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "stormguard-reflective-compact",
    name: "StormGuard High-Vis Reflective Safety Umbrella",
    category: "umbrellas",
    subCategory: "Compact & Commuter",
    price: 999,
    originalPrice: 1399,
    rating: 4.8,
    reviewCount: 176,
    badge: "Night Safety",
    tagline: "360-degree reflective border shines brightly under vehicle headlights during dark rainy commutes.",
    shortDesc: "Compact windproof safety umbrella with a continuous 360-degree 3M micro-prismatic reflective border that shines brightly under vehicle headlights up to 150 meters away during dark, rainy commutes.",
    longDesc: "Pedestrian visibility drops drastically during evening rains and dark storm clouds. The StormGuard incorporates a high-luminance 3M Scotchlite™ reflective border around its entire circumference, illuminating brightly when caught in car and bus headlights to keep you safe at pedestrian crossings. Under the canopy, 9 flexible wind-flex fiberglass ribs absorb gust forces without permanent deformation, while the one-touch auto open/close mechanism makes entering and exiting public transit effortless.",
    images: [
      "https://i.pinimg.com/736x/1c/c4/2b/1cc42bebf266f0ee2aebe65356d3853a.jpg",
      "https://i.pinimg.com/736x/85/80/72/8580725821e200b5ca36178a86f5d4e3.jpg",
      "assets/images/stormguard-amber.png"
    ],
    colors: [
       { name: "Olive Green", hex: "#252b1a" },
      { name: "Reflective Obsidian", hex: "#18181b" },
      { name: "High-Vis Amber", hex: "#d97706" }
    ],
    sizes: ["Compact Commuter (44\" Arc)"],
    specs: {
      "Wind Rating": "Tested against 70 km/h wind speeds",
      "Reflective Trim": "360° 3M High-Luminance Silver Edge",
      "Folded Length": "12 inches (30.5 cm)",
      "Warranty": "2-Year Doorstep Monsoon Guarantee"
    },
    features: [
      "Bright 360° reflective edge alerts oncoming cars and bikes",
      "Auto open and auto close with single push-button",
      "Non-slip ergonomic rubber grip with secure wrist loop",
      "Water-repellent fabric sheds water droplets instantly"
    ],
    stockStatus: "In Stock"
  },
  
  {
    id: "mudmaster-knee-high-wellie",
    name: "MudMaster Knee-High Heavy-Duty Waterproof Wellies",
    category: "boots",
    subCategory: "Tall & Expedition",
    price: 2199,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 162,
    badge: "Deep Water",
    tagline: "16-inch tall natural vulcanized rubber boots with deep mud cleats for submerged streets and wet terrain.",
    shortDesc: "16-inch tall natural vulcanized rubber wellies with deep self-cleaning mud cleats, steel-shank arch stability, and adjustable calf gussets for submerged streets and heavy terrain.",
    longDesc: "Engineered for deep-water challenges, severe monsoon flooding, rural trails, and heavy outdoor work. Standing a full 16 inches high, the MudMaster provides an impenetrable barrier against flooded road crossings, deep puddles, and heavy mud. Built from pure vulcanized natural tree rubber with a moisture-wicking breathable cotton lining, it features an embedded steel shank for arch support and impact stability on rough ground. Deep self-cleaning mud lugs grip slippery moss, mud, and slick pavement effortlessly.",
    images: [
      "https://i.pinimg.com/736x/d7/57/09/d757099fb1aa19e46834c558a0416e35.jpg",
      "assets/images/mudmaster-wellie-black.png",
      "assets/images/mudmaster-wellie-magenta.png"
    ],
    colors: [
      { name: "Highland Forest Green", hex: "#166534" },
      { name: "Mud Black", hex: "#18181b" },
      { name: "Vibrant Magenta", hex: "#a14794" }
    ],
    sizes: ["Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Height": "16 inches (40.5 cm) Full Knee Coverage",
      "Material": "100% Vulcanized Tree Rubber with Cotton Lining",
      "Outsole": "Deep-Lug Self-Cleaning Anti-Skid Rubber",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Full knee-height keeps pants clean in deep standing water",
      "Cushioned memory foam insole for comfortable all-day walking",
      "Reinforced toe cap and heel bumper protect feet from rocks",
      "Adjustable side buckle gusset fits any calf size comfortably"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "stormtrek-neoprene-insulated-boot",
    name: "StormTrek Neoprene Insulated Waterproof Muck Boot",
    category: "boots",
    subCategory: "Tall & Expedition",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewCount: 210,
    badge: "5mm Neoprene",
    tagline: "14-inch insulated waterproof work boot with 5mm flexible neoprene upper and aggressive traction lugs.",
    shortDesc: "14-inch tall all-weather muck boot featuring 100% waterproof vulcanized rubber foot shell, flexible 5mm insulating neoprene shaft, breathable airmesh lining, and multi-directional mud-cleat outsole.",
    longDesc: "Engineered for deep-water challenges, muddy construction zones, and torrential downpours. The StormTrek combines an impenetrable vulcanized rubber foot chassis with a 5mm flexible neoprene shaft that hugs the calf comfortably while flexing with every step. Breathable Airmesh lining circulates air inside the boot to prevent sweaty feet during warm monsoon downpours, while aggressive self-cleaning lugs bite into muddy inclines and slippery wet terrain.",
    images: [
      "assets/images/stormtrek-muck-black.png",
      "assets/images/stormtrek-muck-burgundy.png",
      "assets/images/stormtrek-muck-green.png"
    ],
    colors: [
      { name: "Matte Black", hex: "#18181b" },
      { name: "Oxblood Crimson", hex: "#7f1d1d" },
      { name: "Hunter Moss Green", hex: "#283618" }
    ],
    sizes: ["Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Material": "Vulcanized Rubber + 5mm Insulating Neoprene",
      "Height": "14 inches (35.5 cm) Calf Coverage",
      "Outsole": "Deep-Lug Self-Cleaning Traction Rubber",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "5mm neoprene shaft flexes naturally while sealing water out",
      "Hands-free kick spur at heel for quick removal",
      "Airmesh breathable lining keeps feet dry from sweat",
      "Deep traction cleats grip firmly on mud, moss, and wet stones"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "aquagrip-slip-on-rain-clogs",
    name: "AquaGrip Waterproof Slip-On Rain Clogs",
    category: "boots",
    subCategory: "Chelsea & Commuter",
    price: 1199,
    originalPrice: 1599,
    rating: 4.7,
    reviewCount: 175,
    badge: "Quick Slip",
    tagline: "Ultra-comfy closed-cell waterproof rubber garden & balcony clogs with anti-skid drainage tread.",
    shortDesc: "Seamless injection-molded closed-cell rubber rain clogs with textured arch massage footbed, pivoting heel strap, and anti-slip wet floor grip for doorstep, garden, and quick monsoon errands.",
    longDesc: "The ideal slip-on footwear for stepping out during rainy weather without soaking your everyday socks or sneakers. Molded entirely from single-piece closed-cell EVA and natural rubber blend, AquaGrip clogs are 100% waterproof, odor-resistant, and buoyant. The dual-mode pivoting heel strap flips forward for easy slide-in or back for a secure fit, while the channel-siped outsole prevents slips on wet verandah tiles and slippery apartment lobbies.",
    images: [
      "assets/images/urban-sneaker-yellow.png",
      "assets/images/urban-sneaker-grey.png",
      "assets/images/urban-sneaker-black.png"
    ],
    colors: [
      { name: "Bright Mustard", hex: "#ca8a04" },
      { name: "Cool Slate", hex: "#475569" },
      { name: "Pitch Black", hex: "#18181b" }
    ],
    sizes: ["Size 6", "Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Material": "Seamless Molded Closed-Cell Rubber",
      "Weight": "Ultralight (210 grams per shoe)",
      "Outsole": "Anti-Skid Drainage Channel Tread",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Slip on in one second without bending down or tying laces",
      "Rinses completely clean in 5 seconds under tap water",
      "Textured massage insole prevents bare feet from sliding inside",
      "Pivoting heel strap converts from slip-on clog to secure shoe"
    ],
    stockStatus: "In Stock"
  },
  {
    id: "maritime-ankle-deck-boot",
    name: "Maritime All-Weather Ankle Deck Boot",
    category: "boots",
    subCategory: "Chelsea & Commuter",
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewCount: 240,
    badge: "Marine Grade",
    tagline: "Commercial fisherman grade 100% natural rubber ankle boot with non-marking siped razor outsole.",
    shortDesc: "Commercial marine grade 100% natural rubber low-cut deck boot with chevron razor-siped non-marking outsole, dual heavy-duty pull tabs, and quick-drying antimicrobial moisture-wicking lining.",
    longDesc: "Derived from offshore commercial fishing gear, the Maritime Deck Boot features a razor-siped chevron gum rubber sole that creates hydraulic suction against wet fiberglass, slick metal ramps, and flooded marble tile. The 6-inch low profile slips on effortlessly via heavy-duty webbing loops and fits comfortably under straight-leg jeans and commuter trousers.",
    images: [
      "assets/images/maritime-deck-black.png",
      "assets/images/maritime-deck-navy.png",
      "assets/images/maritime-deck-tan.png"
    ],
    colors: [
      { name: "Anchor Black", hex: "#0f172a" },
      { name: "Harbor Blue", hex: "#1e3a8a" },
      { name: "Coastline Tan", hex: "#854d0e" }
    ],
    sizes: ["Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
    specs: {
      "Material": "100% Natural Hand-Laid Vulcanized Rubber",
      "Height": "6 inches (15 cm) Ankle Height",
      "Outsole": "Non-Marking Chevron Razor-Siped Rubber",
      "Warranty": "2-Year Waterproof Guarantee"
    },
    features: [
      "Commercial-grade razor-siped sole grips wet boat decks and slick tile",
      "Dual heavy-duty front and rear pull tabs for instant slip-on",
      "Antimicrobial quick-dry lining prevents odors in humid weather",
      "Reinforced toe cap protects against curbs and rocks"
    ],
    stockStatus: "In Stock"
  }
];

// Helper to look up a product by ID
function getProductById(id) {
  if (!id) return null;
  const cleanId = String(id).trim().toLowerCase();
  if (!cleanId) return null;
  
  // Aliases and legacy mappings
  if (cleanId === 'typhoon-x-storm') return PRODUCTS_DATA.find(p => p.id === 'vortex-9-compact') || PRODUCTS_DATA[0];
  if (cleanId === 'vanguard-motorcycle-suit' || cleanId === 'vanguard-rider-suit') {
    return PRODUCTS_DATA.find(p => p.id === 'vanguard-motorcycle-rider-suit') || PRODUCTS_DATA[0];
  }
  if (cleanId === 'stormtrek-muck-boot') return PRODUCTS_DATA.find(p => p.id === 'stormtrek-muck-boot') || PRODUCTS_DATA[0];
  if (cleanId === 'zephyr-ultralight-poncho' || cleanId === 'zephyr-packable-poncho' || cleanId === 'zephyr-poncho-black' || cleanId === 'zephyr-poncho-yellow') {
    return PRODUCTS_DATA.find(p => p.id === 'zephyr-poncho-green') || PRODUCTS_DATA[0];
  }
  if (cleanId === 'aegis-trench-sand' || cleanId === 'aegis-trench-beige' || cleanId === 'aegis-trench-black' || cleanId === 'aegis-trench-olive') {
    return PRODUCTS_DATA.find(p => p.id === 'aegis-urban-trench') || PRODUCTS_DATA[0];
  }
  if (cleanId === 'nordic-anorak-blue' || cleanId === 'nordic-anorak-cobalt' || cleanId === 'nordic-storm-anorak' || cleanId === 'nordic-anorak-green' || cleanId === 'nordic-anorak-grey') {
    return PRODUCTS_DATA.find(p => p.id === 'nordic-expedition-anorak') || PRODUCTS_DATA[0];
  }
  if (cleanId === 'hydroshield-suit-grey' || cleanId === 'hydroshield-monsoon-suit' || cleanId === 'hydroshield-suit-blue' || cleanId === 'hydroshield-suit-orange' || cleanId === 'stormshield-heavy-raincoat') {
    return PRODUCTS_DATA.find(p => p.id === 'hydroshield-technical-parka') || PRODUCTS_DATA[0];
  }
  if (cleanId === 'aeroshield-poncho-blue' || cleanId === 'aeroshield-all-weather-poncho' || cleanId === 'aeroshield-poncho-green' || cleanId === 'aeroshield-poncho-yellow') {
    return PRODUCTS_DATA.find(p => p.id === 'aeroshield-hooded-poncho') || PRODUCTS_DATA[0];
  }
  
  // Exact match
  let found = PRODUCTS_DATA.find(p => p.id.toLowerCase() === cleanId);
  if (found) return found;

  // Partial substring match
  found = PRODUCTS_DATA.find(p => cleanId.includes(p.id.toLowerCase()) || p.id.toLowerCase().includes(cleanId));
  if (found) return found;

  return null;
}

// Helper to get products by category
function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
