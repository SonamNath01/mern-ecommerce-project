import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets/frontend_assets/assets.js";
import RealatedProduct from "../components/RealatedProduct.jsx";

const Products = () => {
  const { productId } = useParams(); // get productId from url params
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*-----------product data------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*------------------product image------------------*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:scale-105 transition ease-in-out duration-300"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*------------------product details------------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`py-2 px-5 border rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    item === size
                      ? "bg-blue-600 text-white border-blue-700 shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p> 100% Original product</p>
            <p> Cash on delivery is Available on this product.</p>
            <p> Easy return and exchnage policy within 7 days.</p>

          </div>
        </div>
      </div>
 {/*-----------Description and reviews section------------*/}
<div className="mt-20 max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
  {/* Tabs */}
  <div className="flex items-center border-b border-gray-200">
    <button className="px-6 py-3 text-l font-medium text-black  border-b-2 border-black bg-gray-50 rounded-t-lg">
      Description
    </button>
    <button className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors">
      Reviews (122)
    </button>
  </div>

  {/* Description Section */}
  <div className="flex flex-col gap-4 p-6 text-sm text-gray-600 leading-relaxed bg-white">
    <p>
      An e-commerce (electronic commerce) website is an online platform where
      people can buy and sell products or services over the internet. It allows
      users to browse products, add them to a cart, make secure payments, and
      get items delivered to their doorstep.
    </p>
    <p>
      An E-Commerce Website is an online platform that allows users to buy and
      sell products or services over the internet. It provides a digital
      shopping experience where customers can browse items, add them to a cart,
      and make secure payments — all from the comfort of their devices.
    </p>
  </div>
</div>
  {/*-----------display realted products------------*/}
  <RealatedProduct category={productData.category} subCategory={productData.subCategory}/>


      </div>
    
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
