export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

export type RegionalCost = {
  region: string;
  currency: string;
  price: number;
  unit: string;
};

export type MaterialDetails = {
  summary: string;
  uses: string[];
  image: string;
  imageAlt: string;
  regionalCosts: RegionalCost[];
};

export type StockFilter = "all" | "inStock" | "outOfStock";
