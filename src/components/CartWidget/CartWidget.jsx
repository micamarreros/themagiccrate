import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
        <img className='imgCart' src='/shopping-cart.png' alt='Shopping cart image'></img>
        <strong> 4 </strong>
    </div>
  )
}

export default CartWidget