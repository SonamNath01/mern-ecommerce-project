import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* ---------- About Section ---------- */}
      <div className="text-3xl sm:text-4xl text-center pt-10 pb-4 border-t font-semibold tracking-wide text-gray-900">
        <Title text1={'About'} text2={'US'} />
      </div>

      <div className="my-14 flex flex-col md:flex-row gap-14 md:gap-20 px-6 md:px-20 max-w-6xl mx-auto">
        <img
          className="w-full md:max-w-[480px] rounded-3xl shadow-xl shadow-gray-300"
          src={assets.about_img}
          alt="About Us"
        />

        <div className="flex flex-col justify-center gap-6 md:w-3/5 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Welcome to <span className="font-semibold text-gray-900 text-lg">ShopEase</span> — your go-to destination for effortless
            fashion, modern lifestyle essentials, and products that make
            everyday life better.
          </p>

          <p>
            Founded in 2023, ShopEase was built with a vision to make online
            shopping smoother, faster, and more enjoyable. From stylish outfits
            and accessories to useful gadgets and home essentials — everything
            we offer is curated with quality, comfort, and affordability in mind.
          </p>

          <p className="font-bold text-xl text-gray-900">Our Mission</p>

          <p>
            We believe shopping isn’t just buying things — it’s expressing your
            vibe, your style, and your personality. Our aim is to bring products
            that inspire confidence and make your everyday moments better.
          </p>
        </div>
      </div>

      {/* ---------- Why Choose Us Section ---------- */}
      <div className="text-3xl sm:text-4xl py-8 text-center font-semibold tracking-wide text-gray-900">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20 pb-24 max-w-6xl mx-auto">
        
        {/* ---------- Quality Assurance ---------- */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg">
          <p className="text-xl font-semibold text-gray-900">Quality Assurance</p>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            Every product undergoes strict quality checks to ensure you receive
            premium, durable, and trustworthy items — always.
          </p>
        </div>

        {/* ---------- Convenience ---------- */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg">
          <p className="text-xl font-semibold text-gray-900">Convenience</p>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            A seamless shopping experience designed around you — fast browsing,
            smooth checkout, and quick doorstep delivery.
          </p>
        </div>

        {/* ---------- Exceptional Customer Service ---------- */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg">
          <p className="text-xl font-semibold text-gray-900">Exceptional Support</p>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            Our customer support team is always ready to help — ensuring a
            friendly, fast, and reliable experience every time you shop.
          </p>
        </div>

      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
