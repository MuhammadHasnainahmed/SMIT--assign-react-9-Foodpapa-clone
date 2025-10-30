import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'

function Addcartbutton({ product }) { 
  const { addToCart } = useContext(CartContext);

  // console.log("product mil gaya:", product);
  

  return (
    <>
      <button 
        onClick={() => addToCart(product)}  
        className="mt-3 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </>
  );
}

export default Addcartbutton;
