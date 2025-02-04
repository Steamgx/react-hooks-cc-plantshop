import React, { useState } from "react";

const PlantList = ({ plants }) => {
  const [soldOut, setSoldOut] = useState({});

  const toggleSoldOut = (id) => {
    setSoldOut((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id} data-testid="plant-item">
          <h4>{plant.name}</h4>
          <img src={plant.image} alt={plant.name} />
          <p>Price: {plant.price}</p>
          <button
            onClick={() => toggleSoldOut(plant.id)}
          >
            {soldOut[plant.id] ? "Out of Stock" : "In Stock"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
