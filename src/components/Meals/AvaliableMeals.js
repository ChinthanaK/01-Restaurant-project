//import React from 'react'
import Card from '../UI/Card';
import classes from "./AvaliableMeals.module.css";

const AvaliableMeals = (props) => {
 

  return (
    <Card className= {classes.meals}>
          <ul>
        {props.items.map((item) =>{
        return <li key={item.id}>
                <h4>{item.itemName}</h4>
                <p>{item.description}</p>
                <span>${item.price.toFixed(2)}</span>
                <hr />
            </li>
        })}
    </ul>
    </Card>
   
  );
  
}

export default AvaliableMeals
