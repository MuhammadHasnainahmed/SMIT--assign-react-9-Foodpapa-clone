
import {  Router, Routes, Route } from "react-router-dom";
import Herosection from "./Pages/Herosection";
import Product from "./Pages/Productsection";
import Detailpage from "./Pages/Detailpage";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Showcart from "./Component/Showcart";

function App() {
 
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
    

    
      <div className="bg-gray-50 min-h-screen text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Product />
              </>
            }
          />
          <Route path="/product/:id" element={<Detailpage />} />
          <Route path="/showcart" element={<Showcart />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
   


    </div>
  );
}

export default App;
