import type { Product } from "./type";

export const products: Product[] = [
  {
    id: "clinker",
    name: "clinker",
    price: 1,
    category: "raw material1",
    inStock: true,
  },
  {
    id: "limestone",
    name: "limestone",
    price: 2,
    category: "raw material2",
    inStock: true,
  },
  {
    id: "gypsum",
    name: "gypsum",
    price: 3,
    category: "raw material3",
    inStock: false,
  },
  {
    id: "calcined clay",
    name: "calcined clay",
    price: 4,
    category: "raw material4",
    inStock: true,
  },
];
