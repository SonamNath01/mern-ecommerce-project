import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* ---------- About Section ---------- */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 md:gap-20 px-6 md:px-16">
        <img
          className="w-full md:max-w-[450px] rounded-2xl shadow-lg shadow-gray-300"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-gray-900">ShopEase</span> — your one-stop destination for trendy fashion,
            lifestyle essentials, and everyday comfort.
          </p>
          <p>
            Founded in 2023, ShopEase was created with a simple idea: to make
            online shopping easier, faster, and more enjoyable. From stylish
            clothing and accessories to tech gadgets and home decor, we bring
            you handpicked products that combine quality, affordability, and
            style.
          </p>
          <b className="text-gray-900 text-lg">Our Mission</b>
          <p>
            We believe shopping isn’t just about buying products — it’s about
            finding something that fits your style, your vibe, and your
            lifestyle.
          </p>
        </div>
      </div>

      {/* ---------- Why Choose Us Section ---------- */}
      <div className="text-xl py-6 text-center">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16 pb-20">
        {/* ---------- Quality Assurance ---------- */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
          <b className="text-gray-900 text-lg">Quality Assurance</b>
          <p className="text-gray-600 mt-3">
            Every product that reaches you goes through a strict quality control
            process to ensure you receive only the best — because you deserve
            excellence.
          </p>
        </div>

        {/* ---------- Convenience ---------- */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
          <b className="text-gray-900 text-lg">Convenience</b>
          <p className="text-gray-600 mt-3">
            We’ve designed every step of your experience with simplicity and
            speed in mind — so you can shop stress-free, anytime, anywhere.
          </p>
        </div>

        {/* ---------- Exceptional Customer Service ---------- */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
          <b className="text-gray-900 text-lg">Exceptional Customer Service</b>
          <p className="text-gray-600 mt-3">
            We don’t just sell products — we build relationships. Our support
            team ensures that you feel valued, heard, and supported at every
            step.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
