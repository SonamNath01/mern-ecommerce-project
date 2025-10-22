
import {createContext} from 'react';
import {products} from '../assets/assets/frontend_assets/assets.js'
import { useState } from 'react';

export const ShopContext = createContext();   
const ShopContextProvider =({children}) =>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch] = useState('');
    const[showSearch,setShowSearch]=useState(false);
    const value ={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }
    console.log(products)
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;