import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';

const ShopCart = () => {
    const { cart, emptyCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
                <h2> The Cart is empty </h2>
                <Link to="/products"> View Products </Link>
            </>
        )
    }
    return (
        <div>
            {
                cart.map(product => <CartItem key={product.id} {...product} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Total Quantity: {totalQuantity} </h3>
            <button onClick={() => emptyCart()} > Empty Carrito </button>
            <Link to="/checkout">Finish Purchase</Link>
        </div>
    )
}

export default ShopCart