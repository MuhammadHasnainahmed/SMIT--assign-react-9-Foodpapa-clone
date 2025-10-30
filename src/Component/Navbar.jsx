import React from "react";
import { FaHome, FaLaptop, FaTags } from "react-icons/fa";
import Addtocart from "./addtocart";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-400">ASSC Tech</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <Link to="/"  className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaHome /> Home
          </Link>
          <Link to="/" className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaLaptop /> Products
          </Link>
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaTags /> Offers
          </a>
        </nav>

        {/* Cart + Login */}
        <div className="flex items-center gap-4">
          <Addtocart />
          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
