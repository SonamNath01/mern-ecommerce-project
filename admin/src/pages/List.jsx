
import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendURL, currency } from "../App.jsx";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch product list", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendURL + '/api/product/remove', {id},{headers: {token} });
      if(response.data.success){
        toast.success('Product removed successfully');
        await fetchList();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to remove product", error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <p className="mb-2">Products List</p>
      <div className="flex flex-col gap-2">
        {/*---------------List Table Title------------------*/}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {/*---------------Product List-----------------*/}
        {list.map((item, index) => (
            <div key={index} className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-1 px-2 border text-sm">
              <img className="w-12" src={item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className="text-right md:text-center cursor-pointer text-lg" onClick={()=>removeProduct(item._id)}>X</p>
            </div>
        ))}
      </div>
    </>
  );
};

export default List;
