import React from 'react';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, img, name, stock, author, price, description }) => {
  const [addQuantity, setAddQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const handleQuantity = (quantity) => {
    setAddQuantity(quantity);
    const item = { id, name, price };
    addToCart(item, quantity);
  }

  return (
    <div className='itemContainer'>
      <img className='product-image' src={img} alt={name} />
      <h2 className='product-name'> {name} </h2>
      <h3 className='product-author'> {author} </h3>
      <h4 className='product-price'> ${price} </h4>
      <h3 className='product-id'> ID: {id} </h3>
      <h3 className='product-stock'> Stock: {stock} </h3>
      <p className='product-description'> {description} </p>
      {
        addQuantity > 0 ? (<Link to="/cart">Finish Purchase</Link>) : (<ItemCount start={1} stock={stock} functionAdd={handleQuantity} />)
      }

      <hr/>
      <Link to="/">Continue Shopping</Link>

    </div>
  )
}

export default ItemDetail