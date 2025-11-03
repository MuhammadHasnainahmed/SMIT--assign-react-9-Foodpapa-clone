import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

function Showcart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
        🛍️ Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-20">
          Your cart is empty 😕 <br />
          <span className="text-sm text-gray-400">Add some products to see them here!</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain p-6 bg-gray-100 rounded-t-2xl"
                />
                <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow">
                  ${item.price}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description || "No description available."}
                </p>

                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
                    Remove
                  </button>
                  <span className="text-gray-700 font-semibold">
                    Qty: <span className="text-gray-900">{item.quantity}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-12 bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
            🧾 Order Summary
          </h2>
          <div className="flex justify-between text-gray-700 mb-3">
            <span>Total Items:</span>
            <span>{cart.length}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-semibold text-lg">
            <span>Total Price:</span>
            <span>
              $
              {cart
                .reduce((total, item , quantity) => total + item.price, 0)
                .toFixed(2)}
            </span>
          </div>
          <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Showcart;
