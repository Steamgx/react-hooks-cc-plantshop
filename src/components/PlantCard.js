import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((prevStock) => !prevStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      <button className={isInStock ? "primary" : ""} onClick={handleToggleStock}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
