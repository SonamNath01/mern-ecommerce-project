import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../../../admin/src/assets/admin_assets/assets.js";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location]);

  return (
    showSearch &&
    visible && (
      <div className="border-t border-b bg-gray-50 text-center py-4">
        <div className="flex items-center justify-between border border-gray-300 bg-white/70 backdrop-blur-md py-2 px-5 my-3 mx-auto rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-11/12 sm:w-3/4 lg:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-transparent text-sm px-2 py-2"
            type="text"
            placeholder="Search"
          />
          <img className="w-4 cursor-pointer" src={assets.search} alt="search" />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 ml-3 cursor-pointer"
          src={assets.cross}
          alt="close"
        />
      </div>
    )
  );
};

export default SearchBar;
