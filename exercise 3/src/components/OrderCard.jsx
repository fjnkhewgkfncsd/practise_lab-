import React from "react";

export default function OrderCard({ order, index, updateQuantity }) {
  const handleAdd = () => {
    updateQuantity(index, order.quantity + 1); // Increment quantity
  };

  const handleMinus = () => {
    if (order.quantity > 0) {
      updateQuantity(index, order.quantity - 1); // Decrement quantity
    }
  };

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>${order.price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleMinus}>
          -
        </div>
        <h4>{order.quantity}</h4>
        <div className="order-button" onClick={handleAdd}>
          +
        </div>
      </div>
    </div>
  );
}