import type React from "react";
import "./ProductForm.css";

type ProductFormProps = {
  editingProductId: string | null;
  productName: string;
  price: string;
  category: string;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

function ProductForm({
  editingProductId,
  productName,
  price,
  category,
  onNameChange,
  onPriceChange,
  onCategoryChange,
  onSubmit,
}: ProductFormProps) {
  return (
    <section className="product-form">
      <h2>{editingProductId ? "Edit Product" : "Add Product"}</h2>
      <div className="form-inputs">
        <input
          value={productName}
          onChange={onNameChange}
          placeholder="Input product name"
        />
        <input
          value={price}
          onChange={onPriceChange}
          placeholder="Input product price"
          type="number"
        />
        <input
          value={category}
          onChange={onCategoryChange}
          placeholder="Input product category"
        />
        <button onClick={onSubmit}>
          {editingProductId ? "Save Changes" : "Add Product"}
        </button>
      </div>
    </section>
  );
}

export default ProductForm;
