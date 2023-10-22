import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  
  const {idCategory} = useParams();

  useEffect( () => {
    const functionProducts = idCategory ? getProductsByCategory : getProducts;

    functionProducts(idCategory)
      .then(res => setProduct(res))
  }, [idCategory])

  return (
    <>
      <h2>Products</h2>
      <ItemList products = {products} />
    </>
  )
}

export default ItemListContainer