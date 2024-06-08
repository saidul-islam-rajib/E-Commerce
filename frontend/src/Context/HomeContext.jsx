import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product";

export const HomeContext = createContext(null);

// Create empty cart
const getDefaultCart = () => {
    let cart = {}; // initially cart will be empty object
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 1;
    }
    return cart;
}


const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());   
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({            
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
        console.log("id choosed : ", cartItems[itemId])
    }
    const removeFromCart = (itemId)=> {
        setCartItems((prev)=> ({
            ...prev,
            [itemId]: (prev[itemId]) - 1
        }));
        console.log("Cart items Delete: ", cartItems[itemId])
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart};

    return(
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;
