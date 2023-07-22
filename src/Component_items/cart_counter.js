import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function CartCounter(props){
    
    
    return(
      <>
        <button class="btn btn-secondary" onClick={() => props.handleIncrement(props.item)}>+</button>
        <span>{props.cart.find(i => i.id === props.item.id).count}</span>
        <button class="btn btn-secondary" onClick={() => props.handleDecrement(props.item)}>-</button>
      </>
    )
};
 
export default CartCounter;

