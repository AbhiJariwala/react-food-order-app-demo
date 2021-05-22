import {Fragment} from "react";
import classes from './Header.module.css';
import mealsHeaderImage from "../../../assets/images/meals-header.jpg";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <button type='button'>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsHeaderImage} alt='Meals' />
      </div>
    </Fragment>
  );
}

export default Header;