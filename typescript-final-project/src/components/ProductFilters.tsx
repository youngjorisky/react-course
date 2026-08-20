import type React from "react";
import type { StockFilter } from "../types";
import "./ProductFilters.css";

type ProductFiltersProps = {
  searchTerm: string;
  stockFilter: StockFilter;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStockFilterChange: (filter: StockFilter) => void;
  onClear: () => void;
};

function ProductFilters({
  searchTerm,
  stockFilter,
  onSearchChange,
  onStockFilterChange,
  onClear,
}: ProductFiltersProps) {
  return (
    <section className="controls">
      <div className="search-box">
        <input
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search products..."
        />
      </div>
      <div className="filter-buttons">
        <button
          className={stockFilter === "all" ? "active-filter" : ""}
          onClick={() => onStockFilterChange("all")}
        >
          All
        </button>
        <button
          className={stockFilter === "inStock" ? "active-filter" : ""}
          onClick={() => onStockFilterChange("inStock")}
        >
          In Stock
        </button>
        <button
          className={stockFilter === "outOfStock" ? "active-filter" : ""}
          onClick={() => onStockFilterChange("outOfStock")}
        >
          Out of Stock
        </button>
        <button className="clear-button" onClick={onClear}>
          Clear Filters
        </button>
      </div>
    </section>
  );
}

export default ProductFilters;
