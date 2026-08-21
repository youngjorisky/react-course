import type { Product } from "./types";
import { products as initialProductshow } from "./data/product";
import "./App.css";
import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductFilters from "./components/ProductFilters";
import ProductGrid from "./components/ProductGrid";
import MaterialDetails from "./components/MaterialDetails";

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
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

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

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId,
  );

  if (selectedProduct) {
    return (
      <div className="app">
        <MaterialDetails
          product={selectedProduct}
          onBack={() => setSelectedProductId(null)}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Product Manager</h1>

      <ProductForm
        editingProductId={editingProductId}
        productName={productName}
        price={price}
        category={category}
        onNameChange={typingName}
        onPriceChange={typingPrice}
        onCategoryChange={typingCategory}
        onSubmit={() => {
          if (
            productName.trim() === "" ||
            price === "" ||
            category.trim() === ""
          )
            return;
          if (Number(price) <= 0) return;

          if (editingProductId) {
            setProducts((currentProducts) =>
              currentProducts.map((product) =>
                product.id === editingProductId
                  ? {
                      ...product,
                      name: productName.trim(),
                      price: Number(price),
                      category: category.trim(),
                    }
                  : product,
              ),
            );
            setEditingProductId(null);
            resetForm();
            return;
          }

          if (
            products.some(
              (product) =>
                product.name.trim().toLowerCase() ===
                productName.trim().toLowerCase(),
            )
          )
            return;

          addProduct({
            id: crypto.randomUUID(),
            name: productName.trim(),
            price: Number(price),
            category: category.trim(),
            inStock: true,
            image: "/images/materials/calcined-clay.jpg",
          });
          resetForm();
        }}
      />

      <ProductFilters
        searchTerm={searchTerm}
        stockFilter={stockFilter}
        onSearchChange={searchProduct}
        onStockFilterChange={setStockFilter}
        onClear={clearFilters}
      />

      <p className="product-count">Total Products: {filteredProducts.length}</p>

      <ProductGrid
        products={filteredProducts}
        onDelete={deleteProduct}
        onEdit={editProduct}
        onToggleStock={toggleProductStock}
        onOpen={setSelectedProductId}
      />
    </div>
  );
}

export default App;
