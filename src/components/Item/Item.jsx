import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, img, name, author, price, stock }) => {
  return (
    <div className='product-card'>
      <img className='product-image' src={img} alt={name} />
      <h3 className='product-name'> {name} </h3>
      <h4 className='product-author'> {author} </h4>
      <p className='product-price'> ${price} </p>
      <p className='product-stock'> Stock: {stock} </p>
      <Link to={`/item/${id}`}> View Details </Link>
    </div>
  )
}

export default Item