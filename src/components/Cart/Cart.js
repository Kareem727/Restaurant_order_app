import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import stylesss from './Cart.module.css'

import TheCreatedContext from '../store/cart-context';
import CartItemmm from './CartItem';
import CardAddress from './AddressInfo';
const Cart = (props) =>{
    const [ShowAddress ,setonShowAddress] = useState(false);
    const ctx = useContext(TheCreatedContext);
    const TotalAmount = `$${ctx.TotalAmount.toFixed(2)}`
    const hasItem = ctx.items.length > 0;
    const cartItemRemoveHandler =(id) =>{
        ctx.removeItem(id);
    }
    const cartItemAddHandler =(item) =>{
        ctx.addItem({...item, amount:1});
    }

const submitOrderHandler = (userdata) =>{
  fetch('https://restorant-sushi-default-rtdb.firebaseio.com/orders.json',{
  method: 'POST',
  body: JSON.stringify({
  user: userdata,
  orderedItems: ctx.items
  })
  
  });
}

    const CartItem = (
   
     <ul>
          {ctx.items.map((item) => (
         <CartItemmm
         key={item.id}
         name={item.name}
         amount={item.amount}
         price={item.price}
         onRemove={cartItemRemoveHandler.bind(null, item.id)}
         onAdd={cartItemAddHandler.bind(null, item)}
         />
    ))}
     </ul>
    );

   const onCheackHandler = () =>{
      setonShowAddress(true);

      submitOrderHandler();
      

   }
    return(
    <Modal onClose={props.onClose}>
     <div className={stylesss['cart-items']}>
        {CartItem}
     <div className={stylesss.total}>
         <span>Total Amount</span>
         <span>{TotalAmount}</span>
     </div>


     { ShowAddress && <CardAddress onCancel={props.onClose}/>}

     
     { !ShowAddress && <div className={stylesss.actions}>
         <button className={stylesss['button--alt']} onClick={props.onClose} >Close</button>
         { hasItem && <button className={stylesss.button} onClick={onCheackHandler}  >Order</button>}

     </div>}
     </div>
     </Modal>
    );
}

export default Cart;