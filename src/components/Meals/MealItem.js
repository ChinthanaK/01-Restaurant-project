import React from 'react';
import Button from '../UI/Button';
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (<li className={classes.meal}>
                <div>
                    <h4>{props.itemName}</h4>
                    <p>{props.description}</p>
                    <span>${props.price.toFixed(2)}</span>
                </div>
                <form>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" defaultValue='1' min='1' max='5'/>
                    <Button>+ Add</Button>
                </form>
                <hr />
            </li>
  )
   
  
}

export default MealItem
