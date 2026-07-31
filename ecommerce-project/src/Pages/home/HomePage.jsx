import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import homeFavicon from "../../assets/images/home-favicon.png";

import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Home";

    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = homeFavicon;

    const getHomeData = async () => {
      const response = await axios.get("/api/products");

      setProducts(response.data);
    };

    getHomeData();
  }, []);

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
