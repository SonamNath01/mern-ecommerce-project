
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitems from "./Productitems.jsx";

const BestSeller = () => {
  const { products } = useContext(ShopContext); 
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) =>( item.bestseller));
    setBestSeller(bestProduct.slice(0, 10));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'Best'} text2={'Seller'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item, index) => (
          <Productitems
            key={index}
            id={item.id}
            name={item.name}
            images={item.images}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
