import type { MaterialDetails } from "../types";

const image = (query: string) =>
  `https://images.unsplash.com/${query}?auto=format&fit=crop&w=1200&q=85`;

export const materialDetails: Record<string, MaterialDetails> = {
  clinker: {
    summary:
      "Clinker is the kiln-fired core of ordinary Portland cement, made by heating limestone and clay into hard grey nodules.",
    uses: [
      "Portland cement production",
      "High-strength concrete",
      "Road and bridge construction",
    ],
    image: image("photo-1503387762-592deb58ef4e"),
    imageAlt: "Industrial cement production machinery",
    regionalCosts: [
      {
        region: "East Africa",
        currency: "USD",
        price: 74,
        unit: "per metric ton",
      },
      {
        region: "South Asia",
        currency: "USD",
        price: 68,
        unit: "per metric ton",
      },
      {
        region: "Western Europe",
        currency: "USD",
        price: 104,
        unit: "per metric ton",
      },
    ],
  },
  limestone: {
    summary:
      "Limestone is a calcium-rich mineral used as the primary feedstock for clinker and as an aggregate in construction.",
    uses: [
      "Cement and lime manufacture",
      "Concrete aggregate",
      "Soil conditioning",
    ],
    image: image("photo-1518005020951-eccb494ad742"),
    imageAlt: "Light stone construction material",
    regionalCosts: [
      {
        region: "East Africa",
        currency: "USD",
        price: 22,
        unit: "per metric ton",
      },
      {
        region: "South Asia",
        currency: "USD",
        price: 19,
        unit: "per metric ton",
      },
      {
        region: "Western Europe",
        currency: "USD",
        price: 41,
        unit: "per metric ton",
      },
    ],
  },
  gypsum: {
    summary:
      "Gypsum controls cement setting time and helps produce smooth, workable finishes in construction products.",
    uses: [
      "Cement set-time control",
      "Drywall and plasterboard",
      "Decorative plaster",
    ],
    image: image("photo-1518709268805-4e9042af9f23"),
    imageAlt: "White mineral rock texture",
    regionalCosts: [
      {
        region: "East Africa",
        currency: "USD",
        price: 31,
        unit: "per metric ton",
      },
      {
        region: "South Asia",
        currency: "USD",
        price: 27,
        unit: "per metric ton",
      },
      {
        region: "Western Europe",
        currency: "USD",
        price: 56,
        unit: "per metric ton",
      },
    ],
  },
};

const genericDetails: MaterialDetails = {
  summary:
    "This material supports modern cement and construction systems, with its value determined by quality, processing, freight, and local supply.",
  uses: [
    "Cement production",
    "Concrete and infrastructure",
    "Blended construction materials",
  ],
  image: image("photo-1504307651254-35680f356dfd"),
  imageAlt: "Construction site and building materials",
  regionalCosts: [
    {
      region: "East Africa",
      currency: "USD",
      price: 46,
      unit: "per metric ton",
    },
    {
      region: "South Asia",
      currency: "USD",
      price: 39,
      unit: "per metric ton",
    },
    {
      region: "Western Europe",
      currency: "USD",
      price: 78,
      unit: "per metric ton",
    },
  ],
};

export function getMaterialDetails(productId: string) {
  return materialDetails[productId] ?? genericDetails;
}
