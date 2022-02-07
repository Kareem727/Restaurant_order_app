import Input from '../../UI/Input';
import stylesss from './MealItem.Form.module.css'

const MealItemForm = (props) =>{
return(
<from className={stylesss.form}>
    <Input  
          
        input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ ADD</button>
</from>
);
}

export default MealItemForm;