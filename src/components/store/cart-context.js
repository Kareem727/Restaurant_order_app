
import React from "react";

const TheCreatedContext = React.createContext({

     items:[],
     TotalAmount: 0,
     addItem:(item) =>{},
     removeItem: (id) =>{}


});


export default TheCreatedContext;
