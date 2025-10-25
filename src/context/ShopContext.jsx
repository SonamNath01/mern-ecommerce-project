
import {createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {products} from '../assets/assets/frontend_assets/assets.js'
import { useState } from 'react';
import { toast } from 'react-toastify';

export const ShopContext = createContext();   
const ShopContextProvider =({children}) =>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch] = useState('');
    const[showSearch,setShowSearch]=useState(false);
    const[cartItems,setCartItems]=useState({});
    const navigate = useNavigate();
    const addToCart= async(itemId,size)=>{
        if(!size){
            toast.error("Please select a size");
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId] ={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);
    }

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
  const updateQuantity = async(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

  }
  const getCartAmount = () =>{
    let totalAmount = 0 ;
    for(const items in cartItems){
        let itemInfo = products.find((product)=>product._id===items);
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item]>0){
                    totalAmount += itemInfo.price*cartItems[items][item];
                }
            }
            catch(error){

            }
        }
    }
    return totalAmount;

  }


    const value ={
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
        navigate
    }
    console.log(products)
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;