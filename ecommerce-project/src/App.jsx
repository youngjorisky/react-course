import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "./Pages/home/HomePage";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage";
import { OrdersPage } from "./Pages/orders/OrdersPage";
import { Routes, Route } from "react-router";
import { TrackingPage } from "./Pages/TrackingPage";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
