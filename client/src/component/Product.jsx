// Product.js
import React from "react";
import AddToCartButton from "./AddToCartButton";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
              <img src={product.image} className="card-img-top product-image" alt={product.name} />

      <div className="card">
        <div className="card-body product-details">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text price">${product.price}</p>
          <AddToCartButton product={product} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
