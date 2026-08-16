import type { Product } from "./types";
import { products as initialProductshow } from "./data/product";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>(initialProductshow);
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  function addProduct(product: Product) {
    setProducts([...products, product]);
  }

  function typingName(event: React.ChangeEvent<HTMLInputElement>) {
    setProductName(event.target.value);
  }

  function typingPrice(event: React.ChangeEvent<HTMLInputElement>) {
    setPrice(event.target.value);
  }

  function typingCategory(event: React.ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }

  return (
    <div>
      <h1>Products</h1>

      <input
        value={productName}
        onChange={typingName}
        placeholder="Input product name"
      />
      <input
        value={price}
        onChange={typingPrice}
        placeholder="Input product price"
      />
      <input
        value={category}
        onChange={typingCategory}
        placeholder="Input product category"
      />
      <button
        onClick={() => {
          const newProduct: Product = {
            id: crypto.randomUUID(),
            name: productName,
            price: Number(price),
            category: category,
            inStock: true,
          };

          addProduct(newProduct);
        }}
      >
        Add Product
      </button>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
