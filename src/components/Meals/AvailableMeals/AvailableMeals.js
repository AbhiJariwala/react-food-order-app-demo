import classes from './AvailableMeals.module.css';
import {DUMMY_MEALS} from "./dummy-meals";
import Card from "../../UI/Card/Card";
import MealsItem from "../MealsItem/MealsItem";

const AvailableMeals = () => {

  const mealList = DUMMY_MEALS.map(meal => (
    <MealsItem key={meal.id} mealName={meal.name} mealDescription={meal.description} mealPrice={meal.price}/>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;