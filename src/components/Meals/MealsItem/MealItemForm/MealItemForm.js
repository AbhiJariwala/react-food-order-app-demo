import classes from './MealItemForm.module.css';
import Input from "../../../UI/Input/Input";
import {useRef, useState} from "react";

const MealItemForm = props => {

  const qtyInputRef = useRef();
  const [isQtyValid, setIsQtyValid] = useState(true);

  const submitCartHandler = event => {
    event.preventDefault();
    const enteredQty = +qtyInputRef.current.value;
    if (isNaN(enteredQty) || enteredQty < 1 || enteredQty > 5) {
      setIsQtyValid(false);
      return;
    }
    setIsQtyValid(true);
    props.onAddItemToCart(enteredQty);
  }

  return (
    <form className={classes.form} onSubmit={submitCartHandler}>
      <Input ref={qtyInputRef} label='Quantity'
             input={{type: 'number', min: '1', max: '5', step: '1', defaultValue: '1', id: 'qty'}}/>
      <button type='submit'>+ Add</button>
      {!isQtyValid && <p>Please provide a valid quantity (1-5) </p>}
    </form>
  );
}

export default MealItemForm;