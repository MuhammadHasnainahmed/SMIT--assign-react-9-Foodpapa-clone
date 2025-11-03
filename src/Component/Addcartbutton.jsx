import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";


function Addcartbutton({ product }) {
  const { addToCart } = useContext(CartContext);
 
  

 
  const handleAddToCart = () => {
    addToCart(product);
    
  };

  return (
    <div className="mt-3">
      
        <button
          onClick={handleAddToCart}
          className="cursor-pointer bg-[#1E40AF] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      
    </div>
  );
}

export default Addcartbutton;
