import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div>
      <Link to={"/cart"}>
        <img className='imgCart' src='/shopping-cart.png' alt='Shopping cart image'></img>

        {
          totalQuantity > 0 && <strong> {totalQuantity} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget