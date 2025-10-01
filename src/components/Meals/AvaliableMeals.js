import Card from '../UI/Card';
import classes from "./AvaliableMeals.module.css";
import MealItem from './MealItem';

const AvaliableMeals = (props) => {
 

  return (
    <Card className= {classes.meals}>
          <ul>
        {props.items.map((item) =>{
        return <MealItem key={item.id} id={item.id} itemName={item.itemName} description={item.description} price={item.price}/>
        })}
    </ul>
    </Card>
   
  );
  
}

export default AvaliableMeals
