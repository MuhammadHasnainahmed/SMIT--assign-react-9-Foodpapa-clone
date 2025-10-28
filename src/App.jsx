import React, { useEffect, useState } from "react";
import Herosection from "./Pages/Herosection";
import Restaurantssection from "./Pages/Restaurantssection";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // API call
    async function fetchRestaurants() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setRestaurants(data.products); 
    }

    fetchRestaurants();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* 🌟 Navbar */}
    

      {/* 🍕 Hero Section */}
      <Herosection />
      {/* 🏪 Restaurants Section */}
      <Restaurantssection/>

      {/* 🧁 Footer */}
      
    </div>
  );
}

export default App;
