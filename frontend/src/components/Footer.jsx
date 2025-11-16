import React from 'react';
import { assets } from '../../../admin/src/assets/admin_assets/assets.js';

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-700 pt-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12 px-6 text-sm">

        {/* Brand Info */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Clova Logo" />

          <p className="w-full md:w-3/4 text-gray-600 leading-relaxed">
            Clova brings you the latest fashion trends with premium quality 
            and effortless style. Discover clothing designed to elevate your 
            everyday look — modern, comfortable, and made for everyone.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-4 text-gray-900">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About Us</li>
            <li className="hover:text-black cursor-pointer transition">Store Locator</li>
            <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-4 text-gray-900">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black transition cursor-pointer">
              +1-212-456-7890
            </li>
            <li className="hover:text-black transition cursor-pointer">
              support@clova.com
            </li>
            <li className="hover:text-black transition cursor-pointer">
              Help & Support
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 mt-10"></div>

      <p className="py-4 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Clova — Crafted with ❤️ for your style
      </p>
    </div>
  );
};

export default Footer;
