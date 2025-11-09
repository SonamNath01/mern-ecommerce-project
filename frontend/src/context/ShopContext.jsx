
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'; 

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');

  const navigate = useNavigate();
  


  const addToCart = async (itemId, size) => {
  if (!size) {
    toast.error("Please select a size");
    return;
  }

  let cartData = structuredClone(cartItems);
  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
  } else {
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  }

  setCartItems(cartData);

  if (token) {
    try {
      await axios.post(
        backendURL + '/api/cart/add',
        { itemId, size },
        { headers: { token } }
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  } else {
    toast.error("Please login first");
  }
};

  
  

  const getCartCount = () => {
    let totalCount = 0;
    try {
      for (const item in cartItems) {
        for (const size in cartItems[item]) {
          if (cartItems[item][size] > 0) {
            totalCount += cartItems[item][size];
          }
        }
      }
    } catch (err) {
      console.error("Error calculating cart count:", err);
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if(token){
      try {
        await axios.post(
          backendURL + '/api/cart/update',
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error("Failed to update cart");
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalAmount;

  };
 


  const getProducts = async () => {
    try {
      const response = await axios.get(backendURL + '/api/product/list');
      if(response.data.success){
        setProducts(response.data.products);
      }else{
        toast.error('Failed to load products');
      }
      
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    }
  };
  const getUserCart = async (token) => {
    try{
      const response = await axios.post(backendURL + '/api/cart/get', {}, {headers: {token}});
      if(response.data.success){
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.error( error);
      toast.error(error.message);
    }
  };



  useEffect(() => {
    getProducts();
  }, []); 
  useEffect(() => {
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'));
      getUserCart(localStorage.getItem('token'));
    }

  }, [token]);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendURL,
    setToken,
    token,
    setCartItems
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
