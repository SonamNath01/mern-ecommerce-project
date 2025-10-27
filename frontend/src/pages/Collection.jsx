import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets/admin_assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import Productitems from "../components/Productitems.jsx";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch&&search){
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }


    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case "low-to-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-to-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Side - Filter Section */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown}
            alt="dropdown"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              <span>Men</span>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              <span>Women</span>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Children"
                onChange={toggleCategory}
              />{" "}
              <span>Children</span>
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUBCATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onChange={toggleSubcategory}
              />{" "}
              <span>Topwear</span>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubcategory}
              />{" "}
              <span>Bottomwear</span>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubcategory}
              />{" "}
              <span>Winterwear</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className="flex-1">
        {/* Sort and Title Section */}
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />

          <select
            className="border-2 border-gray-300 text-sm px-3 py-1 rounded-md hover:border-gray-400 transition-all duration-200 cursor-pointer"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <Productitems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
