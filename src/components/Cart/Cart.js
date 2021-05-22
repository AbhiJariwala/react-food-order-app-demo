import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = props => {

  const cartContext = useContext(CartContext);

  const cartItemAddHandler = item => {
    cartContext.addItem({
      ...item,
      qty: 1
    });
  }

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id);
  }

  const cartItems = cartContext.items.map(item => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      qty={item.qty}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;