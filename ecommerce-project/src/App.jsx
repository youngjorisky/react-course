import "./App.css";
import { HomePage } from "./Pages/HomPage";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage";
import { OrdersPage } from "./Pages/OrdersPage";
import { Routes, Route } from "react-router";
import { TrackingPage } from "./Pages/TrackingPage";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
