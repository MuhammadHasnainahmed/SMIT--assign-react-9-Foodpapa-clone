import React from "react";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1E40AF] to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Perfect Laptop & Accessories
        </h2>
        <p className="text-lg mb-6 text-yellow-200">
          Explore top brands and latest tech gear at unbeatable prices.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for laptops or accessories..."
            className="w-72 md:w-96 px-4 py-3 rounded-l-lg text-gray-900 border-none outline-none"
          />
          <button className="bg-[#FACC15] text-[#111827] px-5 py-3 rounded-r-lg font-semibold hover:bg-yellow-400">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
