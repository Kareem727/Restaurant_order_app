import Input from '../../UI/Input';
import stylesss from './MealItem.Form.module.css'
import { useRef, useState } from 'react';


const MealItemForm = (props) =>{
    const [AmountValid , SetAmountValid ] = useState(true);
    const amountInputRef = useRef();

    const onSubmitHandler =(event) =>{
event.preventDefault();
        const enteredAmount = amountInputRef.current.value; //string
        const enteredAmountNumver = +enteredAmount; //converted to int

        if(enteredAmount.trim().length === 0 || enteredAmountNumver < 1 || enteredAmountNumver > 5){
            SetAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumver);
    }
return(
<form className={stylesss.form} onSubmit={onSubmitHandler}>
    <Input  
          ref={amountInputRef}
        input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ ADD</button>
    {!AmountValid && <p>Please enter a valid amount (1-5)</p>}
</form>
);
}

export default MealItemForm;