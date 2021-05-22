
import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";

const Cart = props => {

  const cartItems = [{id: 'c1', name: 'Test', qty: 2, price: 12.99}].map(item => <li>{item.name}</li>)

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;