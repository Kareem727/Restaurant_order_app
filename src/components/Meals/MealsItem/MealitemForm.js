import Input from '../../UI/Input';
import stylesss from './MealItem.Form.module.css'

const MealItemForm = (props) =>{
return(
<from className={stylesss.form}>
    <Input/>
    <button>+ ADD</button>
</from>
);
}

export default MealItemForm;