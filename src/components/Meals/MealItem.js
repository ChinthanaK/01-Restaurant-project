import React,{useContext} from 'react';
import Button from '../UI/Button';
import classes from "./MealItem.module.css";
import CartContext from '../../store/CartContext';

const MealItem = (props) => {
const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.itemName,
      price: props.price,
      amount: 1 
    });
  };
  return (<li className={classes.meal}>
                <div>
                    <h4>{props.itemName}</h4>
                    <p>{props.description}</p>
                    <span>${props.price.toFixed(2)}</span>
                </div>
                <form>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" defaultValue='1' min='1' max='5'/>
                    <Button type="button" onClick={addToCartHandler}>+ Add</Button>
                </form>
                <hr />
            </li>
  )
   
  
}

export default MealItem
