import React from 'react'

function Herosection() {
  return (
    <>
     <section className="relative bg-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find the best food near you 🍔
          </h2>
          <p className="text-lg mb-6">
            Discover and order from top-rated restaurants in your city.
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search for restaurants..."
              className="w-72 md:w-96 px-4 py-3 rounded-l-lg text-gray-700 outline-none"
            />
            <button className="bg-gray-900 px-5 py-3 rounded-r-lg hover:bg-gray-800">
              Search
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Herosection
