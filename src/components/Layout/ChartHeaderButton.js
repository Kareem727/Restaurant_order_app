import { useContext } from 'react';

import CartContext from '../store/cart-context';
import stylesss from './ChartHeaderButton.module.css'

const ChartButton =(props) =>{
   const ctx = useContext(CartContext);
   const numberOfCartItems = ctx.items.reduce((curNumber, item) =>{
       return curNumber + item.amount;
   }, 0);
return(
    <button className={stylesss.button} onClick={props.onConfirm}> 
        <span className={stylesss.icon}><i class="fas fa-shopping-cart"></i></span>
        <span>Chart</span>
        <span className={stylesss.badge} >{numberOfCartItems}</span>
    </button>
);

}

export default ChartButton;

