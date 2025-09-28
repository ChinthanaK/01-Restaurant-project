import { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvaliableMeals from "./components/Meals/AvaliableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  
  const items = [
    {id:1, itemName:"sushi",description:"finext fish and veggies", price:22.99},
    {id:2, itemName:"Schnitzel", description:"A german specialtty!", price:16.50},
    {id:3, itemName:"Barbecue Burger", description:"American, raw, meaty", price:12.99},
    {id:4, itemName:"Green Bowl", description:"Healthy... and green...", price:19.99}
  ]

  const [shown, setShown] = useState(false);
   const showCartHandler = () =>{
    setShown(true);
  }
  const hideCartHandler =() =>{
    setShown(false);
  }
 
  return (
    <CartProvider>
      {shown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <MealsSummary />
      <AvaliableMeals items={items}/>
      
    </CartProvider>
  );
}

export default App;
