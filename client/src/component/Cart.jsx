// Cart.js
import React from "react";

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
