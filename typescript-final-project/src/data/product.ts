import type { Product } from ".././types";

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
  {
    id: "silica-sand",
    name: "silica sand",
    price: 5,
    category: "raw material",
    inStock: true,
  },
  {
    id: "iron-ore",
    name: "iron ore",
    price: 6,
    category: "raw material",
    inStock: false,
  },
  {
    id: "fly-ash",
    name: "fly ash",
    price: 7,
    category: "supplementary cementitious material",
    inStock: true,
  },
  {
    id: "slag",
    name: "granulated blast-furnace slag",
    price: 8,
    category: "supplementary cementitious material",
    inStock: true,
  },
  {
    id: "pozzolan",
    name: "natural pozzolan",
    price: 9,
    category: "supplementary cementitious material",
    inStock: false,
  },
  {
    id: "gypsum-powder",
    name: "gypsum powder",
    price: 10,
    category: "additive",
    inStock: true,
  },
];
