import {Fragment, useState} from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartModal = () => {
    setIsCartVisible(true);
  }

  const hideCartModal = () => {
    setIsCartVisible(false)
  }

  return (
    <Fragment>
      { isCartVisible && <Cart onClose={hideCartModal} />}
      <Header onCartOpen={showCartModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
