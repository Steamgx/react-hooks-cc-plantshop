import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Manage the search query state
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants data from the server
  // Fetch plants data from the server with no-cache
  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-7u6e.onrender.com/plants")
    const url = `https://react-hooks-cc-plantshop-7u6e.onrender.com/plants?_=${new Date().getTime()}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]); // Add new plant to the list
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Toggle the sold-out status for a plant
  const toggleSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchQuery={setSearchQuery} />
      <PlantList
        plants={filteredPlants}
        toggleSoldOut={toggleSoldOut} // Pass toggleSoldOut function to PlantList
      />
      <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut} />
    </main>
  );
}

export default PlantPage;