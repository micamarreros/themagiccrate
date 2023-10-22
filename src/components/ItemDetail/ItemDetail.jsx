import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({id, img, name, author, price}) => {
  return (
    <div className='itemContainer'>
        <img className='product-image' src={img} alt={name}/>
        <h2 className='product-name'> {name} </h2>
        <h3 className='product-author'> {author} </h3>
        <h4 className='product-price'> ${price} </h4>
        <h3 className='product-id'> ID: {id} </h3>
        <p className='product-description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam dolorem praesentium maiores, est vitae natus! Odit, obcaecati! Mollitia amet enim repellat culpa ut sed at temporibus, eum ipsam animi! </p>
    </div>
  )
}

export default ItemDetail