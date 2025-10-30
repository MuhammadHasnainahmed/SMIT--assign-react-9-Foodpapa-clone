import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../CartContext.jsx';
import { Link } from 'react-router-dom';
import Showcart from './Showcart.jsx';

function Addtocart() {
    const {cart} = useContext(CartContext)

    console.log("cart", cart);
    
    return (
    <>
      <Link to="/showcart"> 
       <button className="relative text-blue-400 hover:text-blue-300">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 rounded-full">
              {cart.length}
            </span>
          </button>
      </Link>
    </>
  )
}

export default Addtocart
