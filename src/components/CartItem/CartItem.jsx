import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartItem.css";

export const CartItem = ({ item, quantity }) => {
    const { deleteProduct } = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <h4 className='cart-item-title'> {item.name} </h4>
            <p className='cart-item-info'>Quantity: {quantity} </p>
            <p className='cart-item-info'>Price: {item.price} </p>
            <button onClick={() => deleteProduct(item.id)}> Delete </button>
            <hr />
        </div>
    )
}