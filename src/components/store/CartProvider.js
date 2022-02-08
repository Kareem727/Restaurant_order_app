import { useReducer } from "react";
import TheCreatedContext from "./cart-context";

const deafaultCartState = {
    items: [],
    TotalAmount:0
}
const  cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        
        const updatedTotalAmount = state.TotalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItemss;
        
        if(existingCartItem){
           const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItemss = [...state.items];
            updatedItemss[existingCartItemIndex] = updatedItem;

        }else{
            updatedItemss = state.items.concat(action.item);
        }

        
        return{
            items: updatedItemss,
            TotalAmount: updatedTotalAmount,
        };
    }
    if(action.type === 'Remove'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.TotalAmount - existingCartItem.price;
        let updatedItemssss;
        if(existingCartItem.amount === 1){
            updatedItemssss = state.items.filter(item=> item.id !== action.id);
        }else{
           const updatedItem ={...existingCartItem, amount:existingCartItem.amount - 1};
           updatedItemssss = [...state.items];
           updatedItemssss [existingCartItemIndex] = updatedItem;

        }

        return{
            items: updatedItemssss,
            TotalAmount: updatedTotalAmount
        }
    }
 return deafaultCartState;
}

const CartProvider =(props) =>{

const [cartState, dispatchCart] = useReducer(cartReducer,deafaultCartState);

const addItemFromCartHandler = (item) =>{
    dispatchCart({type: 'ADD', item: item});
}

const removeItemFromCharthandler =(id) =>{
    dispatchCart({type: 'Remove', id: id});
}

const Value_Context = ({
    items: cartState.items,
    TotalAmount: cartState.TotalAmount,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCharthandler
})

    return(

        <TheCreatedContext.Provider value={Value_Context}>
         
            {props.children}

        </TheCreatedContext.Provider>
    );
}

export default CartProvider;
