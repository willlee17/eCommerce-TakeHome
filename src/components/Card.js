import React from "react";
import '../App.css';

const Card = ({ product }) => {
  return (
    <div className="product__card">
      <img src={product.image} className="product__image" />
      <div>
        <p className="product__title">{product.title}</p>
        <p className="product__price">{product.price}</p>
      </div>
    </div>
  );
};

export default Card;
