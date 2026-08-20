import type { Product } from "../types";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

type ProductGridProps = {
  products: Product[];
  onDelete: (productId: string) => void;
  onEdit: (productId: string) => void;
  onToggleStock: (productId: string) => void;
  onOpen: (productId: string) => void;
};

function ProductGrid({
  products,
  onDelete,
  onEdit,
  onToggleStock,
  onOpen,
}: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleStock={onToggleStock}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
