import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product";

export const HomeContext = createContext(null);

// Create empty cart
const getDefaultCart = () => {
    let cart = {}; // initially cart will be empty object
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}


const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());   
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({            
            ...prev,
            [itemId]: (prev[itemId]) + 1
        }));
    }
    const removeFromCart = (itemId)=> {
        setCartItems((prev)=> ({
            ...prev,
            [itemId]: (prev[itemId]) - 1
        }));
    }

    const getTotalCartamount= ()=>{
        let totalAmount  = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }            
        }
        return totalAmount;
    }

    const contextValue = {getTotalCartamount, all_product, cartItems, addToCart, removeFromCart};

    return(
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;
