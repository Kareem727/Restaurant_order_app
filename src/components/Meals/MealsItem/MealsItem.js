
import MealItemForm from './MealitemForm';
import stylesss from './MealsItem.module.css'
const MealItem = (props) =>{
    const price = `$${props.price.toFixed(2)}`
    return(
       <li className={stylesss.meal}>
           <div>
               <h3>{props.name}</h3>
               <div className={stylesss.description}>{props.description}</div>
               <div className={stylesss.price}>{price}</div>
           </div>
           <div>
               <MealItemForm/>
           </div>
       </li>
    );
}

export default MealItem;