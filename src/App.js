import './App.css';
import Cart from './components/Cart/Cart';
import Headerr from './components/Layout/Headerr';
import Meals from './components/Meals/Meals';
function App(props) {
  return (
   <div>
     <Cart/>
     <Headerr/>
     <Meals/>
   </div>

  );
}

export default App;
