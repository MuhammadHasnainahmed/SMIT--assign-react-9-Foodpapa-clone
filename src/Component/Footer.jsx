import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">ASSC Tech 💻</h3>
        <p>Delivering next-gen technology right to your desk.</p>
        <p className="text-sm mt-3 text-gray-500">
          © {new Date().getFullYear()} ASSC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
