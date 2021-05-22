import classes from './MealsItem.module.css';
import MealItemForm from "./MealItemForm/MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealsItem = props => {

  const cartCtx = useContext(CartContext);
  const price = `$${props.mealPrice.toFixed(2)}`

  const addItemToCartHandler = qty => {
    cartCtx.addItem({
      id: props.id,
      price: props.mealPrice,
      qty: qty,
      name: props.mealName
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItemToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;