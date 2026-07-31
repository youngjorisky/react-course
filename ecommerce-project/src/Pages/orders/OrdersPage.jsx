import axios from "axios";
import { useState, useEffect } from "react";

import "./OrdersPage.css";
import { Header } from "../../components/Header";

import ordersFavicon from "../../assets/images/orders-favicon.png";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = "Orders";

    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = ordersFavicon;

    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrdersData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
