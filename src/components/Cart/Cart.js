import Modal from '../UI/Modal';
import stylesss from './Cart.module.css'


const Cart = (props) =>{
    const CartItem =[{id:'c1', name:'Sushi', price:22.22, amount:2}].map(item => <li>{item.name}</li>);
 
    return(
    <Modal onClose={props.onClose}>
     <div className={stylesss['cart-items']}>
        {CartItem}
     <div className={stylesss.total}>
         <span>Total Amount</span>
         <span>99.99</span>
     </div>
     <div className={stylesss.actions}>
         <button className={stylesss['button--alt']} onClick={props.onClose} >Close</button>
         <button className={stylesss.button}>Order</button>

     </div>
     </div>
     </Modal>
    );
}

export default Cart;