import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';
import "./ShopCart.css";

const ShopCart = () => {
    const { cart, emptyCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
                <div className='empty-cart'>
                    <h2> The Cart is empty </h2>
                    <Link className='products-link' to="/"> View Our Products </Link>
                </div>
            </>
        )
    }
    return (
        <div className='shop-cart'>
            {
                cart.map(product => <CartItem key={product.item.id} {...product} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Total Quantity: {totalQuantity} </h3>
            <button onClick={() => emptyCart()} > Empty Cart </button>
            <hr/>
            <Link className='finish-purchase' to="/checkout">Finish Purchase</Link>
        </div>
    )
}

export default ShopCart