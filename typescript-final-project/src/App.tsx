import type { Product } from "./types";
import { products as initialProductshow } from "./data/product";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>(initialProductshow);
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [stockFilter, setStockFilter] = useState<
    "all" | "inStock" | "outOfStock"
  >("all");

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
      return currentProducts.filter((product) => product.id !== productId);
    });
  }

  function editProduct(productId: string) {
    setEditingProductId(productId);

    const product = products.find((product) => product.id === productId);

    if (product) {
      setProductName(product.name);
      setPrice(String(product.price));
      setCategory(product.category);
    }
  }

  function resetForm() {
    setProductName("");
    setPrice("");
    setCategory("");
  }

  function searchProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function clearFilters() {
    setSearchTerm("");
    setStockFilter("all");
  }

  const filteredProducts = products.filter((product) => {
    const searchMatches = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (stockFilter === "all") {
      return searchMatches;
    } else if (stockFilter === "inStock" && product.inStock === true) {
      return searchMatches;
    } else if (stockFilter === "outOfStock" && product.inStock === false) {
      return searchMatches;
    }
  });

  return (
    <div className="app">
      <h1>Product Manager</h1>

      {/* Product Form */}
      <div className="product-form">
        <h2>{editingProductId ? "Edit Product" : "Add Product"}</h2>

        <div className="form-inputs">
          <input
            value={productName}
            onChange={typingName}
            placeholder="Input product name"
          />

          <input
            value={price}
            onChange={typingPrice}
            placeholder="Input product price"
            type="number"
          />

          <input
            value={category}
            onChange={typingCategory}
            placeholder="Input product category"
          />

          <button
            onClick={() => {
              if (
                productName.trim() === "" ||
                price === "" ||
                category.trim() === ""
              ) {
                return;
              }

              if (Number(price) <= 0) {
                return;
              }

              if (editingProductId) {
                setProducts((currentProducts) => {
                  return currentProducts.map((product) => {
                    if (product.id === editingProductId) {
                      return {
                        ...product,
                        name: productName.trim(),
                        price: Number(price),
                        category: category.trim(),
                      };
                    }

                    return product;
                  });
                });

                setEditingProductId(null);
                resetForm();
              } else {
                if (
                  products.some(
                    (product) =>
                      product.name.trim().toLowerCase() ===
                      productName.trim().toLowerCase(),
                  )
                ) {
                  return;
                }

                const newProduct: Product = {
                  id: crypto.randomUUID(),
                  name: productName.trim(),
                  price: Number(price),
                  category: category.trim(),
                  inStock: true,
                };

                addProduct(newProduct);
                resetForm();
              }
            }}
          >
            {editingProductId ? "Save Changes" : "Add Product"}
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="controls">
        <div className="search-box">
          <input
            value={searchTerm}
            onChange={searchProduct}
            placeholder="Search products..."
          />
        </div>

        <div className="filter-buttons">
          <button onClick={() => setStockFilter("all")}>All</button>

          <button onClick={() => setStockFilter("inStock")}>In Stock</button>

          <button onClick={() => setStockFilter("outOfStock")}>
            Out of Stock
          </button>

          <button className="clear-button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* Product Count */}
      <p className="product-count">Total Products: {filteredProducts.length}</p>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>

            <p className="product-price">${product.price}</p>

            <p className="product-category">{product.category}</p>

            <span
              className={`stock-status ${
                product.inStock ? "stock-in" : "stock-out"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>

            <div className="product-actions">
              <button
                className="delete-button"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>

              <button
                className="edit-button"
                onClick={() => editProduct(product.id)}
              >
                Edit
              </button>

              <button
                className="stock-button"
                onClick={() => toggleProductStock(product.id)}
              >
                Toggle Stock
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
