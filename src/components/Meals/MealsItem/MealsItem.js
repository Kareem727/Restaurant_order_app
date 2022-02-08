import { useContext } from 'react';
import TheCreatedContext from '../../store/cart-context';
import MealItemForm from './MealitemForm';
import stylesss from './MealsItem.module.css'
const MealItem = (props) =>{
   const ctx = useContext(TheCreatedContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount =>{
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }
    return(
       <li className={stylesss.meal}>
           <div>
               <h3>{props.name}</h3>
               <div className={stylesss.description}>{props.description}</div>
               <div className={stylesss.price}>{price}</div>
           </div>
           <div>
               <MealItemForm onAddToCart={addToCartHandler}/>
           </div>
       </li>
    );
}

export default MealItem;