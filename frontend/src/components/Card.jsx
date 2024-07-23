import React from "react";
import { useState } from "react";
import "./Card.css";
import { useDispatchCart } from "./ContextReducer";

const Card = ({ item,id, name, image, price, description }) => {
  let obj = useDispatchCart();
  let { dispatch, state } = obj;

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: id,
      name: name,
      price: price,
      qty: qty,
    });
    console.log(state);
  };

  const [qty, setQty] = useState(1);
  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <h2 className="product-price">Rs. {price}</h2>
        <p className="product-description">{description}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
