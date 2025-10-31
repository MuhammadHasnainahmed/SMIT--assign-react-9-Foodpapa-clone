import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Addcartbutton from "../Component/Addcartbutton";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Detailpage() {
  const [showdetail, setShowdetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  async function fetchProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setShowdetail(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  if (!showdetail) {
    return (
      <div className="text-center mt-10 text-gray-500 text-lg">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto h-[73vh] p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#1E40AF] text-center">
        Product Detail
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        See full product details below 👇
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-10">
        {/* ✅ Product Image with Zoom */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Zoom>
            <img
              src={showdetail.image}
              alt={showdetail.title}
              className="w-[80%] md:w-[70%] object-contain rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </Zoom>
        </div>

        {/* ✅ Product Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3 text-[#111827]">
            {showdetail.title}
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            {showdetail.description}
          </p>

          <p className="text-lg font-semibold text-[#1E40AF] mb-4">
            Price:{" "}
            <span className="text-[#FACC15]">${showdetail.price}</span>
          </p>

          <div className="mt-4">
            <Addcartbutton product={showdetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
