/**
 * Official Menu Data for MIE GANBATTE
 * Extracted directly from official menu specifications
 */

export const categories = [
  { id: "ALL", name: "Semua Menu", count: 20 },
  { id: "RAMEN CHILI OIL", name: "Ramen Chili Oil", count: 4 },
  { id: "MIE CHILI OIL", name: "Mie Chili Oil", count: 6 },
  { id: "CLASSIC", name: "Classic Series", count: 2 },
  { id: "WONTON", name: "Wonton Bara", count: 3 },
  { id: "ADD-ON", name: "Add-On", count: 5 }
];

export const menuItems = [
  {
    id: "ramen-chili-oil-supreme",
    name: "Ramen Chili Oil Supreme",
    category: "RAMEN CHILI OIL",
    series: "Signature Line",
    description: "Kuah kaldu ayam pedas gurih dengan racikan rempah chili oil.",
    price: "Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",
    priceRange: "Rp16.500 – Rp17.500",
    priceNumber: 16500,
    priceLevels: {
      "Level 1": "Rp16.500",
      "Level 2, 5, 8": "Rp17.500"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "BEST SELLER",
    isBestSeller: true,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-ramen-supreme.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus", "Hiniku"]
  },
  {
    id: "ramen-chili-oil-gochujang",
    name: "Ramen Chili Oil Gochujang",
    category: "RAMEN CHILI OIL",
    series: "Signature Line",
    description: "Kuah kaldu ayam gurih dengan perpaduan gochujang dan chili oil.",
    price: "Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",
    priceRange: "Rp16.500 – Rp17.500",
    priceNumber: 16500,
    priceLevels: {
      "Level 1": "Rp16.500",
      "Level 2, 5, 8": "Rp17.500"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-ramen-gochujang.jpg",
    suggestedAddons: ["Ajitama", "Saus Keju"]
  },
  {
    id: "ramen-chili-oil-nusantara",
    name: "Ramen Chili Oil Nusantara",
    category: "RAMEN CHILI OIL",
    series: "Signature Line",
    description: "Kuah kaldu ayam gurih dengan rasa pedas manis khas Indonesia.",
    price: "Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",
    priceRange: "Rp16.500 – Rp17.500",
    priceNumber: 16500,
    priceLevels: {
      "Level 1": "Rp16.500",
      "Level 2, 5, 8": "Rp17.500"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-ramen-nusantara.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus"]
  },
  {
    id: "ramen-chili-oil-tantanmen",
    name: "Ramen Chili Oil Tantanmen",
    category: "RAMEN CHILI OIL",
    series: "Signature Line",
    description: "Kuah kaldu ayam creamy gurih dengan wijen dan rempah khas Tantanmen.",
    price: "Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",
    priceRange: "Rp16.500 – Rp17.500",
    priceNumber: 16500,
    priceLevels: {
      "Level 1": "Rp16.500",
      "Level 2, 5, 8": "Rp17.500"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-ramen-tantanmen.jpg",
    suggestedAddons: ["Ajitama", "Hiniku"]
  },
  {
    id: "shoyu-ramen",
    name: "Shoyu Ramen",
    category: "CLASSIC",
    series: "Classic Series",
    description: "Kaldu ayam asin gurih yang ringan dan nikmat, tidak pedas.",
    price: "Rp16.500",
    priceRange: "Rp16.500",
    priceNumber: 16500,
    priceLevels: {
      "Standar": "Rp16.500"
    },
    spicyLevels: [],
    badge: "TIDAK PEDAS",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Non-Spicy",
    image: "assets/dish-shoyu-ramen.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus"]
  },
  {
    id: "paitan-katsuobushi",
    name: "Paitan Katsuobushi",
    category: "CLASSIC",
    series: "Classic Series",
    description: "Kaldu seafood creamy, lembut, dan gurih dengan aroma khas katsuobushi.",
    price: "Rp16.500",
    priceRange: "Rp16.500",
    priceNumber: 16500,
    priceLevels: {
      "Standar": "Rp16.500"
    },
    spicyLevels: [],
    badge: "TIDAK PEDAS",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Non-Spicy",
    image: "assets/dish-paitan-katsuobushi.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus"]
  },
  {
    id: "mie-ganbatte-goreng",
    name: "Mie Ganbatte Goreng",
    category: "MIE CHILI OIL",
    series: "Mie Chilli Oil Series",
    description: "Mie chili oil rasa gurih pedas dengan sentuhan mala yang memberikan rasa umami.",
    price: "Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2, 5, 8": "Rp12.000"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "BEST SELLER",
    isBestSeller: true,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-mie-goreng.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus", "Saus Keju"]
  },
  {
    id: "mie-ganbatte-nyemek",
    name: "Mie Ganbatte Nyemek",
    category: "MIE CHILI OIL",
    series: "Mie Chilli Oil Series",
    description: "Mie setengah basah dengan chili oil, rasa gurih, dan sensasi pedas mala.",
    price: "Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2, 5, 8": "Rp12.000"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-mie-nyemek.jpg",
    suggestedAddons: ["Ajitama", "Hiniku"]
  },
  {
    id: "mie-gaspol",
    name: "Mie Gaspol",
    category: "MIE CHILI OIL",
    series: "Mie Chilli Oil Series",
    description: "Mie chili oil dengan rasa pedas manis khas Nusantara.",
    price: "Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2, 5, 8": "Rp12.000"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "BEST SELLER",
    isBestSeller: true,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-mie-gaspol.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus", "Saus Mentai"]
  },
  {
    id: "mie-gokil",
    name: "Mie Gokil!",
    category: "MIE CHILI OIL",
    series: "Mie Chilli Oil Series",
    description: "Mie tidak pedas dengan pilihan rasa asin atau manis.",
    price: "Rp11.000",
    priceRange: "Rp11.000",
    priceNumber: 11000,
    priceLevels: {
      "Asin / Manis": "Rp11.000"
    },
    options: ["Asin", "Manis"],
    spicyLevels: [],
    badge: "TIDAK PEDAS",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Non-Spicy (Asin / Manis)",
    image: "assets/dish-mie-gokil.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus"]
  },
  {
    id: "mie-gaskeun",
    name: "Mie Gaskeun!",
    category: "MIE CHILI OIL",
    series: "Mie Chilli Oil Series",
    description: "Mie chili oil dengan rasa pedas wijen.",
    price: "Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2, 5, 8": "Rp12.000"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-mie-gaskeun.jpg",
    suggestedAddons: ["Ajitama", "Hiniku"]
  },
  {
    id: "mie-gochujang",
    name: "Mie Gochujang",
    category: "MIE CHILI OIL",
    series: "Mie Chilli Oil Series",
    description: "Mie dengan gochujang yang pedas, manis, dan gurih.",
    price: "Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2, 5, 8": "Rp12.000"
    },
    spicyLevels: [1, 2, 5, 8],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 5, 8",
    image: "assets/dish-mie-gochujang.jpg",
    suggestedAddons: ["Ajitama", "Saus Keju"]
  },
  {
    id: "wonton-goreng",
    name: "Wonton Goreng",
    category: "WONTON",
    series: "Wonton Bara",
    description: "Wonton dengan tekstur renyah di luar dan isian gurih.",
    price: "Level 1: Rp11.000 | Level 2–3: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2–3": "Rp12.000"
    },
    spicyLevels: [1, 2, 3],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 3",
    image: "assets/dish-wonton-goreng.jpg",
    suggestedAddons: ["Saus Mentai", "Saus Keju"]
  },
  {
    id: "wonton-rebus",
    name: "Wonton Rebus",
    category: "WONTON",
    series: "Wonton Bara",
    description: "Wonton lembut yang direbus dengan tekstur ringan dan gurih.",
    price: "Level 1: Rp11.000 | Level 2–3: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2–3": "Rp12.000"
    },
    spicyLevels: [1, 2, 3],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 3",
    image: "assets/dish-wonton-rebus.jpg",
    suggestedAddons: ["Ajitama", "Hiniku"]
  },
  {
    id: "wonton-kuah",
    name: "Wonton Kuah",
    category: "WONTON",
    series: "Wonton Bara",
    description: "Wonton lembut yang disajikan dengan kuah hangat.",
    price: "Level 1: Rp11.000 | Level 2–3: Rp12.000",
    priceRange: "Rp11.000 – Rp12.000",
    priceNumber: 11000,
    priceLevels: {
      "Level 1": "Rp11.000",
      "Level 2–3": "Rp12.000"
    },
    spicyLevels: [1, 2, 3],
    badge: "PEDAS",
    isBestSeller: false,
    isSpicy: true,
    spicyNote: "Lv 1, 2, 3",
    image: "assets/dish-wonton-kuah.jpg",
    suggestedAddons: ["Ajitama", "Gyoza Kukus"]
  },
  {
    id: "ajitama",
    name: "Ajitama",
    category: "ADD-ON",
    series: "Add-On",
    description: "Telur ramen dengan pilihan tingkat kematangan.",
    price: "1/2: Rp3.500 | 1: Rp6.000",
    priceRange: "Rp3.500 – Rp6.000",
    priceNumber: 3500,
    priceLevels: {
      "1/2 Butir": "Rp3.500",
      "1 Butir Utuh": "Rp6.000"
    },
    spicyLevels: [],
    badge: "",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Topping Favorit",
    image: "assets/dish-addon-ajitama.jpg",
    suggestedAddons: []
  },
  {
    id: "hiniku",
    name: "Hiniku",
    category: "ADD-ON",
    series: "Add-On",
    description: "Ayam cincang sebagai tambahan topping.",
    price: "Rp5.000",
    priceRange: "Rp5.000",
    priceNumber: 5000,
    priceLevels: {
      "Porsi": "Rp5.000"
    },
    spicyLevels: [],
    badge: "",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Topping Gurih",
    image: "assets/dish-addon-hiniku.jpg",
    suggestedAddons: []
  },
  {
    id: "gyoza-kukus",
    name: "Gyoza Kukus",
    category: "ADD-ON",
    series: "Add-On",
    description: "Gyoza kukus sebagai tambahan pendamping.",
    price: "Rp4.000",
    priceRange: "Rp4.000",
    priceNumber: 4000,
    priceLevels: {
      "Porsi": "Rp4.000"
    },
    spicyLevels: [],
    badge: "",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Dimsum Pendamping",
    image: "assets/dish-addon-gyoza.jpg",
    suggestedAddons: []
  },
  {
    id: "saus-keju",
    name: "Saus Keju",
    category: "ADD-ON",
    series: "Add-On",
    description: "Tambahan saus keju creamy.",
    price: "Rp5.000",
    priceRange: "Rp5.000",
    priceNumber: 5000,
    priceLevels: {
      "Porsi": "Rp5.000"
    },
    spicyLevels: [],
    badge: "",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Creamy Cheese",
    image: "assets/dish-addon-gyoza.jpg", // fallback placeholder with custom badge icon
    isSauce: true,
    suggestedAddons: []
  },
  {
    id: "saus-mentai",
    name: "Saus Mentai",
    category: "ADD-ON",
    series: "Add-On",
    description: "Tambahan saus mentai creamy dan gurih.",
    price: "Rp5.000",
    priceRange: "Rp5.000",
    priceNumber: 5000,
    priceLevels: {
      "Porsi": "Rp5.000"
    },
    spicyLevels: [],
    badge: "",
    isBestSeller: false,
    isSpicy: false,
    spicyNote: "Savory Mentai",
    image: "assets/dish-addon-gyoza.jpg", // fallback placeholder with custom badge icon
    isSauce: true,
    suggestedAddons: []
  }
];

export const spicyLevelsInfo = [
  {
    level: 1,
    label: "MILD",
    peppers: 1,
    description: "Pedas santai dan ramah di lidah dengan aroma rempah chili oil yang wangi.",
    suitableFor: "Ramen Chili Oil, Mie Chili Oil, Wonton Bara",
    color: "#F5C518",
    intensityPercent: 20
  },
  {
    level: 2,
    label: "MEDIUM",
    peppers: 2,
    description: "Sensasi pedas gurih seimbang yang mulai menendang dan bikin nagih.",
    suitableFor: "Ramen Chili Oil, Mie Chili Oil, Wonton Bara",
    color: "#F47A20",
    intensityPercent: 40
  },
  {
    level: 3,
    label: "WONTON BARA",
    peppers: 3,
    description: "Tingkat pedas maksimal khusus seri Wonton Bara untuk sensasi renyah/lembut pedas nendang.",
    suitableFor: "Wonton Goreng, Wonton Rebus, Wonton Kuah",
    color: "#E25822",
    intensityPercent: 60,
    specialTag: "KHUSUS WONTON"
  },
  {
    level: 5,
    label: "HOT",
    peppers: 5,
    description: "Pedas membara dengan sensasi mala dan chili oil pekat untuk pecinta pedas sejati.",
    suitableFor: "Ramen Chili Oil, Mie Chili Oil",
    color: "#D92727",
    intensityPercent: 80
  },
  {
    level: 8,
    label: "EXTREME",
    peppers: 8,
    description: "Puncak kepedasan ekstrem Mie Ganbatte! Sensasi pedas nendang maksimal yang membakar selera.",
    suitableFor: "Ramen Chili Oil, Mie Chili Oil",
    color: "#990000",
    intensityPercent: 100,
    isExtreme: true
  }
];

export const bestSellers = [
  menuItems.find(item => item.id === "ramen-chili-oil-supreme"),
  menuItems.find(item => item.id === "mie-ganbatte-goreng"),
  menuItems.find(item => item.id === "mie-gaspol")
];
