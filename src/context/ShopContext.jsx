
import {createContext} from 'react';
import {products} from '../assets/assets/frontend_assets/assets.js'

export const ShopContext = createContext();   
const ShopContextProvider =({children}) =>{
    const currency='$';
    const delivery_fee=10;
    const value ={
        products,
        currency,
        delivery_fee
    }
    console.log(products)
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;