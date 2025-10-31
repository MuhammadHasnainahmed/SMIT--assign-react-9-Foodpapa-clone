import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Addcartbutton from "../Component/Addcartbutton";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=10"
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-[#1E40AF] text-lg font-medium">
        Loading products...
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-10">Top Deals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white  shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between border-t-4 border-[#FACC15]"
            >
              <Link
                to={`/product/${item.id}`}
                onClick={() =>
                  localStorage.setItem("productdetail", JSON.stringify(item))
                }
                className="block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
              </Link>

              <p className="text-[#1E40AF] font-bold mt-1">${item.price}</p>

              <Addcartbutton product={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
