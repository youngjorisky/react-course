import type { MaterialDetails } from "../types";

export const materialDetails: Record<string, MaterialDetails> = {
  clinker: {
    summary:
      "Clinker is the kiln-fired core of ordinary Portland cement, made by heating limestone and clay into hard grey nodules.",
    uses: [
      "Portland cement production",
      "High-strength concrete",
      "Road and bridge construction",
    ],
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
