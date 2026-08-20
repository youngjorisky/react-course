import type { Product } from "../types";
import "./ProductCard.css";

type ProductCardProps = {
  product: Product;
  onDelete: (productId: string) => void;
  onEdit: (productId: string) => void;
  onToggleStock: (productId: string) => void;
  onOpen: (productId: string) => void;
};

function ProductCard({
  product,
  onDelete,
  onEdit,
  onToggleStock,
  onOpen,
}: ProductCardProps) {
  return (
    <article className="product-card" onClick={() => onOpen(product.id)}>
      <button
        className="product-info-button"
        onClick={() => onOpen(product.id)}
      >
        <h2>{product.name}</h2>
        <p className="product-category">{product.category}</p>
        <span className="view-material">View material details &rarr;</span>
      </button>
      <p className="product-price">${product.price}</p>
      <span
        className={`stock-status ${product.inStock ? "stock-in" : "stock-out"}`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
      <div className="product-actions">
        <button
          className="delete-button"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(product.id);
          }}
        >
          Delete
        </button>
        <button
          className="edit-button"
          onClick={(event) => {
            event.stopPropagation();
            onEdit(product.id);
          }}
        >
          Edit
        </button>
        <button
          className="stock-button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleStock(product.id);
          }}
        >
          Toggle Stock
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
