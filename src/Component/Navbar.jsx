import React from "react";
import { FaHome, FaLaptop, FaTags } from "react-icons/fa";
import Addtocart from "./Addtocart.jsx";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="bg-[#1E40AF] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-[#FACC15]">H-A-A Tech</h1>

        <nav className="hidden md:flex items-center gap-8 text-gray-100">
          <Link to="/" className="flex items-center gap-2 hover:text-[#FACC15] transition">
            <FaHome /> Home
          </Link>
          <Link to="/" className="flex items-center gap-2 hover:text-[#FACC15] transition">
            <FaLaptop /> Products
          </Link>
          <a href="#" className="flex items-center gap-2 hover:text-[#FACC15] transition">
            <FaTags /> Offers
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Addtocart />
          <button className="bg-[#FACC15] hover:bg-yellow-400 text-[#111827] px-5 py-2 rounded-lg font-semibold">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
