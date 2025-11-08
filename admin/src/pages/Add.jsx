
import React, { useState } from "react";
import { assets } from "../../../admin/src/assets/admin_assets/assets.js";
import axios from "axios";
import { backendURL } from '../App.jsx';
const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
   const onSubmitHandler = async (e) => {
    e.preventDefault();
    try{
      const formData = new FormData();
    
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      const response = await axios.post(backendURL + '/api/product/add', formData, {headers: {token}});
      console.log(response.data);
    }catch(err){
      console.log("Error in submitting the form:", err);
    }
   };



  
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div className="flex gap-2">
        <p className="mb-2 font-medium text-gray-700">Upload Image</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <label htmlFor="image1">
          <img
            className="w-20 cursor-pointer"
            src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
            alt="upload"
          />
        </label>
        <input
          onChange={(e) => setImage1(e.target.files[0])}
          type="file"
          id="image1"
          hidden
        />

        <label htmlFor="image2">
          <img
            className="w-20 cursor-pointer"
            src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
            alt="upload"
          />
        </label>
        <input
          onChange={(e) => setImage2(e.target.files[0])}
          type="file"
          id="image2"
          hidden
        />

        <label htmlFor="image3">
          <img
            className="w-20 cursor-pointer"
            src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
            alt="upload"
          />
        </label>
        <input
          onChange={(e) => setImage3(e.target.files[0])}
          type="file"
          id="image3"
          hidden
        />

        <label htmlFor="image4">
          <img
            className="w-20 cursor-pointer"
            src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
            alt="upload"
          />
        </label>
        <input
          onChange={(e) => setImage4(e.target.files[0])}
          type="file"
          id="image4"
          hidden
        />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="w-full">
          <p className="mb-2">Product name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full max-w-[500px] px-3 py-2 border rounded"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">Product description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full max-w-[500px] px-3 py-2 border rounded"
            placeholder="Write content here"
            required
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <p className="mb-2">Product category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-[160px] px-3 py-2 border rounded"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Sub category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subCategory}
              className="w-[160px] px-3 py-2 border rounded"
            >
              <option value="TopWear">TopWear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Product Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-[120px] px-3 py-2 border rounded"
              type="number"
              placeholder="Enter price"
              required
            />
          </div>
        </div>
      </div>

      <div>
  <p className="mb-2">Product Sizes</p>
  <div className="flex gap-3 flex-wrap">
    {["S", "M", "L", "XL", "XXL"].map((size) => {
      const isSelected = sizes.includes(size);
      return (
        <p
          key={size}
          onClick={() => toggleSize(size)}
          className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all duration-200 shadow-sm ${
            isSelected
              ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md scale-105"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          {size}
        </p>
      );
    })}
  </div>
</div>


      <div className="flex gap-2 mt-2">
        <input 
          onChange={(e) => setBestseller(prev => !prev)}
          type="checkbox"
          id="bestseller"
          checked={bestseller}
         
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Bestseller
        </label>
      </div>

      <button className="mt-4 bg-black text-white px-6 py-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default Add;
