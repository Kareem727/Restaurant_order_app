
import { useRef, useState } from 'react';
import classes from './Address.module.css';

const CardAddress = (props) =>{
    const [formInputValidity, setFormInputvalidity] = useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    });
const nameInputRef   = useRef();
const streetInputRef = useRef();
const postalInputRef = useRef();
const cityInputRef   = useRef();

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;


    const onSubmitHandler = (event) =>{
     event.preventDefault();

            const enteredName =nameInputRef.current.value;
            const enteredStreet =streetInputRef.current.value;
            const enteredPostal =postalInputRef.current.value;
            const enteredCity =cityInputRef.current.value;
     
            const enteredNameIsValid = !isEmpty(enteredName);
            const enteredStreetIsValid = !isEmpty(enteredStreet);
            const enteredPostalIsValid = !isEmpty(enteredPostal);
            const enteredCityIsValid = isFiveChars(enteredCity);
setFormInputvalidity({

        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalIsValid
});
  
            
            const formValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;
            if (!formValid){
                return;
            } 
  
        };
        const nameClassess = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
        const streetClassess = `${classes.control} ${formInputValidity.street ? '' :classes.invalid}`;
        const postalClassess = `${classes.control} ${formInputValidity.postalCode ? '' :classes.invalid}`;
        const cityClassess = `${classes.control} ${formInputValidity.city ? '' :classes.invalid}`;

return(
        <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={nameClassess}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef} />
          {!formInputValidity.name && <p>please enter a valid name</p>}
        </div>
        <div className={streetClassess}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetInputRef} />
          {!formInputValidity.street && <p>please enter a valid name</p>}

        </div>
        <div className={postalClassess}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalInputRef} />
          {!formInputValidity.postalCode && <p>please enter a valid name</p>}

        </div>
        <div className={cityClassess}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInputRef} />
          {!formInputValidity.city && <p>please enter a valid name</p>}

        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    );
   
};

export default CardAddress;