import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import Counter from "./Counter";

function Addcartbutton({ product }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

 
  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true); 
  };

  return (
    <div className="mt-3">
      {!added ? (
        <button
          onClick={handleAddToCart}
          className="cursor-pointer bg-[#1E40AF] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <Counter />
        </div>
      )}
    </div>
  );
}

export default Addcartbutton;
