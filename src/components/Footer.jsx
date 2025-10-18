import React from 'react'
import { assets } from '../assets/assets/admin_assets/assets.js'

const Footer = () => {
  return (
    <div className="bg-white text-gray-700">
       <div className="max-w-[1200px] mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 px-6 text-sm">
        
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Clova Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">Home</li>
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">About</li>
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">Delivery</li>
            <li className="hover:text-black transition-colors duration-200 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@clova.com</li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray-300"></div>
      <p className="py-5 text-sm text-center text-gray-600">
        Copyright © 2024 clova.com — All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
