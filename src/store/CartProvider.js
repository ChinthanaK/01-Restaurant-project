import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    
     const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
    const addItemToCartHandler = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id
      );
      const existingItem = prevItems[existingItemIndex];

      let updatedItems;

      if (existingItem) {
        // Update amount
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        
        updatedItems = prevItems.concat(item);
      }

      return updatedItems;
    });

    setTotalAmount((prevTotal) => prevTotal + item.price * item.amount);
  };
    const cartContext={
        cartItems,
        totalAmount,
        addItem:addItemToCartHandler,
        
    }
    
  return <CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>
}

export default CartProvider
