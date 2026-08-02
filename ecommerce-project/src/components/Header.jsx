import { useState, useEffect } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import "./header.css";
import SearchIcon from "../assets/images/icons/search-icon.png";
import CartIcon from "../assets/images/icons/cart-icon.png";

export function Header({ cart }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  let totalQuantity = 0;

  cart?.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchText(search);
    }
  }, [searchParams]);

  const handleSearch = () => {
    navigate(`/?search=${encodeURIComponent(searchText)}`);
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <button className="search-button" onClick={handleSearch}>
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
