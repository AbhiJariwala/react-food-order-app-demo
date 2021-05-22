import {useState} from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartModal = () => {
    setIsCartVisible(true);
  }

  const hideCartModal = () => {
    setIsCartVisible(false)
  }

  return (
    <CartProvider>
      {isCartVisible && <Cart onClose={hideCartModal}/>}
      <Header onCartOpen={showCartModal}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
