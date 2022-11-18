import React from 'react';
import './Cart.css'
const Cart = ({cart, handleDelete}) => {
    // console.log(cart)
    return (
        <div className='cart'>
            {cart?.map(product =>
             <div className='cart-info'>
                <li>{product.strPlayer} </li>
                <button onClick={()=>handleDelete(product.idPlayer)} className='cart-btn'>Del</button>
            </div>)}
        </div>
    );
};

export default Cart;