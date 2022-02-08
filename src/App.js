import React, {useState} from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Cart from './components/Cart/Cart';
import Headerr from './components/Layout/Headerr';
import Meals from './components/Meals/Meals';
import CartProvider from './components/store/CartProvider';

function App(props) {
  const [ShowCart, setShowCart] = useState(false);
  const ShowHandler = () =>{
    setShowCart(true);
  }
  const HideHandler =() =>{
    setShowCart(false);
  }
  
 

  return (
    
    <CartProvider>
     
      {ShowCart && <Cart onClose={HideHandler}/> }
     <Headerr onConfirm={ShowHandler}/>
     <Meals/>
     
     </CartProvider>
  );
}

export default App;
