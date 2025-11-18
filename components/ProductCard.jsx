import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <span className="category">{product.category}</span>

      <p className="rating">⭐ {product.rating}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

