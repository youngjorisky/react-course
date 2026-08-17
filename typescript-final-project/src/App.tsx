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

  function toggleProductStock(productId: string) {
    setProducts((currentProducts) => {
      return currentProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            inStock: !product.inStock,
          };
        }

        return product;
      });
    });
  }

  function deleteProduct(productId: string) {
    setProducts((currentProducts) => {
      return currentProducts.filter((product) => {
        if (product.id === productId) {
          return product.id !== productId;
        }

        return product;
      });
    });
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
          <button onClick={() => toggleProductStock(product.id)}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
