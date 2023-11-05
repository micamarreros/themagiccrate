import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartItem = (item, quantity) => {
    const { deleteProduct } = useContext(CartContext);

    return (
        <div>
            <h4> {item.name} </h4>
            <p>Quantiyu: {quantity} </p>
            <p>Price: {item.price} </p>
            <button onClick={() => deleteProduct(item.id)}> Delete </button>
            <hr />
        </div>
    )
}