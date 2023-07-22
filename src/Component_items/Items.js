import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CartCounter from './cart_counter';


function ItemsList(){
    const [count,setCount] = useState(0);
    const [cart,setCart] = useState([]);
    const [cartIds,setCartIds] = useState([]);
    const [cost,setCost] = useState(0);


    const items = [
        {
            id: 1,
            name:'Ice cream',
            cost: 200
        },
        {
            id: 2,
            name:'Biryani',
            cost:300
        },
        {
            id: 3,
            name:'Lassi with ice cream',
            cost: 250
        }

    ];

    
    function addToNameCost(task) {
        setCount(count + 1);
        setCost(cost + task.cost);
        
        task['count'] = 1;
        setCart(prevState => [...prevState, task])
        setCartIds(prevState => [...prevState, task.id])
        
    }

    function increment(item){
        setCount(count + 1);
        setCost(cost + item.cost);
        const newState = cart.map(obj => {
            
            if (obj.id === item.id) {
              return {...obj, count: obj.count + 1 };
            }
      
            
            return obj;
          });
      
          setCart(newState);
    }
     
    function decrement(item){
        setCount(count - 1);
        setCost(cost - item.cost);
        
        const newState = cart.map(obj => {
            if (obj.id === item.id){
                return {...obj, count: obj.count - 1};
            }
            
            return obj;
        });

        setCart(newState);
    }

    return(
        <>
        <ol>
            {items.map(item => (
                <li>
                    {item.name} - {item.cost} 
                    {  cartIds.indexOf(item.id) > -1  ?
                     <p> 
                        <CartCounter item={item} cart={cart} handleIncrement={increment} handleDecrement={decrement} />
                     </p> :
                        <button class="btn btn-secondary" onClick={() => addToNameCost(item)}>Add to cart</button>
                        
                        }
                </li>
            ))}
        </ol>
        <h3>Cart </h3>
        <p>Number of Items: {count}</p>
        <p>Total cost:{cost}</p>
        </>
    );
};

export default ItemsList;