import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
   const [cartItems, setCartItems] = useState([]);
   const [totalAmount, setTotalAmount] = useState(0);

  
   const addItemToCartHandler = (item) => {
    console.log(item);
        setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }
      setTotalAmount((prevAmount) => prevAmount + item.price * item.amount);
      console.log("Item being added:", item.id, item.name);
      return updatedItems;
    });
    
};

   const removeItemFromCartHandler = (id) => {
  setCartItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(i => i.id === id);
    const existingItem = prevItems[existingItemIndex];
    if (!existingItem) return prevItems;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = prevItems.filter(i => i.id !== id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = updatedItem;
    }

    setTotalAmount(prevTotal => prevTotal - existingItem.price);
    return updatedItems;
  });
};

   const cartContext={
    cartItems,
    totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
   }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider
