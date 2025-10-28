import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Foodpapa 🍔
          </h3>
          <p>Delivering happiness at your doorstep ❤️</p>
          <p className="text-sm mt-3 text-gray-500">
            © {new Date().getFullYear()} Foodpapa. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
