import { useContext } from 'react';

import TheCreatedContext from "../store/cart-context";
import stylesss from './ChartHeaderButton.module.css'

const ChartButton =(props) =>{
    const ctx = useContext(TheCreatedContext);
    const numberOfCartItem = ctx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    } , 0);
return(
    <button className={stylesss.button} onClick={props.onConfirm}> 
        <span className={stylesss.icon}><i className="fas fa-shopping-cart"></i></span>
        <span>Chart</span>
        <span className={stylesss.badge} >{numberOfCartItem}</span>
    </button>
);

}

export default ChartButton;

