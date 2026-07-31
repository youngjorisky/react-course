import { Fragment, useState, useEffect } from "react";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";
import "./CartItemDetails.css";

export function CartItemDetails({ cartItem, deliveryOptions, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  useEffect(() => {
    setQuantity(cartItem.quantity);
  }, [cartItem.quantity]);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const handleUpdateClick = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
      return;
    }

    setIsUpdatingQuantity(true);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <Fragment>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            <input
              className="quantity-textbox"
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              style={{ display: isUpdatingQuantity ? "inline-block" : "none" }}
            />
            <span
              className="quantity-label"
              style={{ display: isUpdatingQuantity ? "none" : "inline" }}
            >
              {cartItem.quantity}
            </span>
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={handleUpdateClick}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>

      <DeliveryOptions
        cartItem={cartItem}
        deliveryOptions={deliveryOptions}
        loadCart={loadCart}
      />
    </Fragment>
  );
}
