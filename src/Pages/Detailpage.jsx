import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import Addcartbutton from '../Component/Addcartbutton';

function Detailpage() {
    const [showdetail, setShowdetail] = useState(false);
   
    const {id} = useParams();
    console.log(id);
   
 
     useEffect(() => {
    fetchProduct();
  }, [id]);

  async function fetchProduct() {
    try {
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await response.json();
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
    <>
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Product Detail Page</h1>
        <p>This is the detail page for a specific product.</p>
         
       
       { showdetail && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src={showdetail.image}
            alt={showdetail.title}
            className="w-full md:w-1/2 object-cover rounded-lg" 
          />
          <div className="md:ml-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">{showdetail.title}</h2>
            <p className="text-gray-700 mb-4">{showdetail.description}</p>
            <p className="text-gray-600">Price: ${showdetail.price}</p>
            <div className="mt-4">
                <Addcartbutton product={showdetail} />
            </div>
          </div>
        </div>
      )}
        
        </div>


    </>
  )
}

export default Detailpage
