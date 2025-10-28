import React, { useEffect, useState } from "react";
import { FaHome, FaUtensils, FaTags, FaShoppingCart } from "react-icons/fa";

function Navbar() {
     const [cartCount, setCartCount] = useState(0);

   useEffect(() => {
  const updateCart = () => {
    const updated = JSON.parse(localStorage.getItem("cartdata")) || [];
    setCartCount(updated.length);
  };




  console.log(cartCount.length);

  updateCart();
}, []);



    
    

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-pink-600 flex items-center gap-2">
            Foodpapa
          </h1>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-gray-700">
            <a href="#" className="flex items-center gap-2 hover:text-pink-600 font-medium">
              <FaHome /> Home
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-pink-600 font-medium">
              <FaUtensils /> Restaurants
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-pink-600 font-medium">
              <FaTags /> Offers
            </a>
          </div>

          {/* Login + Cart */}
          <div className="flex items-center gap-4">
            <button className="text-pink-600 hover:text-pink-700 relative">
              <FaShoppingCart size={22} />
              <span  className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            </button>
            <button className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
