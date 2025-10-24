import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import Title from '../components/Title.jsx';
import { assets } from "../assets/assets/frontend_assets/assets.js";

const Card = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size],
            data: products.find((product) => product._id === item)
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className='border-t pt-14 px-4 sm:px-8'>
      <div className='text-2xl mb-6 font-semibold text-gray-800'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      {
        cartData.map((item,index)=>{
          const productData = products.find((product) => product._id === item._id);
          return(
            <div 
              key={index} 
              className='py-4 px-4 sm:px-6 mb-4 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-4 sm:gap-6'>
                <img className='w-16 sm:w-20 rounded-md object-cover' src={productData.image[0]} alt=""/>
                <div>
                  <p className='text-sm sm:text-lg font-medium text-gray-900'>{productData.name}</p>
                  <div className='flex items-center gap-4 mt-2'>
                    <p className='text-gray-700 font-semibold'>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border border-gray-300 rounded bg-gray-100 text-sm font-medium'>{item.size}</p>
                  </div>
                </div>
              </div>
              <div className='text-gray-600 font-medium'>{item.quantity} pcs</div>

              <img className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt=""/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card;
