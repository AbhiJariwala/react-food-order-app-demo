
import classes from './HeaderCartButton.module.css';
import CartIcon from "../../../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../../../store/cart-context";

const HeaderCartButton = props => {

  const cartContext = useContext(CartContext);

  const [btnIsHighlighted, setIsBtnHighlighted] = useState(false);

  const {items} = cartContext;

  const noOfItemsInCart = items.reduce((cur, next) => cur + next.qty, 0);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);
    const timer = setTimeout(() => setIsBtnHighlighted(false), 300);
    return () => {
      clearTimeout(timer)
    };
  }, [items]);


  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItemsInCart}</span>
    </button>
  );
}

export default HeaderCartButton;