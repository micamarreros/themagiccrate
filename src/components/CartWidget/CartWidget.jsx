import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className='cart-widget'>
      <Link to={"/cart"}>
        <img className='imgCart' src='/shopping-cart.png' alt='Shopping cart image'></img>

        {
          totalQuantity > 0 && <strong className='cart-count'> {totalQuantity} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget