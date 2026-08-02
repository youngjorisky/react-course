import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Header } from "../../components/Header";
import "./HomePage.css";
import homeFavicon from "../../assets/images/home-favicon.png";

import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    document.title = "Home";

    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = homeFavicon;
  }, []);

  useEffect(() => {
    const getHomeData = async () => {
      const path = search
        ? `/api/products?search=${encodeURIComponent(search)}`
        : "/api/products";
      const response = await axios.get(path);

      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <Header cart={cart} />

      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
