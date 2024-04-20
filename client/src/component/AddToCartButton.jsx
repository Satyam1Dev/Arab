// AddToCartButton.js
import React from "react";

const AddToCartButton = ({ product, onAddToCart }) => {
  const handleClick = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <button className="add-to-cart-button" onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
