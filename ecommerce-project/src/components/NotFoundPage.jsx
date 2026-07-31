import { Header } from "./Header";
import "./NotFoundPage.css";

export function NotFoundPage({ cart }) {
  return (
    <>
      <Header cart={cart} />

      <h1>404 (NOT FOUND)</h1>
    </>
  );
}
