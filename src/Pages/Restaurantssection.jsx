
import React, { useEffect, useState } from "react";

function Restaurantssection() {
 const [restaurants, setRestaurants] = useState([]);
 const [cart, setCart] = useState([])
  useEffect(() => {
    // API call
    async function fetchRestaurants() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setRestaurants(data.products); 
    }

    fetchRestaurants();
  }, []);


    function addtocard(rest){
        console.log("Added to cart:", rest);
     let filtered= cart.filter((item)=> item.id === rest.id)
     if(filtered.length > 0){
        alert("Item already in cart")
     }else{
        setCart([...cart, rest])
        alert("Item added to cart")
        localStorage.setItem("cartdata", JSON.stringify([...cart, rest]) )
     }
    }

  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Popular Restaurants 🍴
        </h2>

        {restaurants.length === 0 ? (
          <p className="text-center text-gray-500">Loading restaurants...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {restaurants.map((rest) => (
              <div
                key={rest.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={rest.thumbnail}
                  alt={rest.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{rest.title}</h3>
                  <p className="text-gray-500 text-sm">{rest.category}</p>
                  <p className="mt-2 text-yellow-500 font-medium">
                    ⭐ {rest.rating}
                  </p>
                  <button onClick={()=> addtocard(rest)} className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default Restaurantssection
