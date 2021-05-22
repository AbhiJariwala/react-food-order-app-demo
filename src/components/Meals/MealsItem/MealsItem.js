import classes from './MealsItem.module.css';
import MealItemForm from "./MealItemForm/MealItemForm";

const MealsItem = props => {

  const price = `$${props.mealPrice.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealsItem;