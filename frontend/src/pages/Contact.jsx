import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="bg-gray-50 pb-20">
      
      {/* ---------- Contact Title ---------- */}
      <div className="text-center text-3xl sm:text-4xl pt-10 pb-4 border-t font-semibold tracking-wide text-gray-900">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* ---------- Contact Content ---------- */}
      <div className="my-14 flex flex-col md:flex-row items-center md:items-start justify-center gap-14 px-6 md:px-20 max-w-6xl mx-auto">

        {/* Image */}
        <img
          className="w-full md:max-w-[480px] rounded-2xl shadow-lg shadow-gray-300"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center items-start gap-6 text-gray-700">

          {/* Store Info */}
          <p className="font-semibold text-2xl text-gray-900">Our Store</p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            4563 Civil Road <br />
            Suite 350, Kanpur, India
          </p>

          {/* Contact Info */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            (415) 555-0132 <br />
            Email: <span className="text-gray-800 font-medium">admin@clova.com</span>
          </p>

          {/* Careers */}
          <p className="font-semibold text-2xl text-gray-900">Careers at Clova</p>
          <p className="text-base sm:text-lg text-gray-600">
            Discover growth opportunities and be a part of a creative, passionate team.
          </p>

          {/* Button */}
          <button className="border border-black px-10 py-4 text-sm sm:text-base rounded-lg hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Explore Jobs
          </button>

        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
