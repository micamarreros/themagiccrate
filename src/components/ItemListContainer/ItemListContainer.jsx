import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProduct] = useState([]);

  useEffect( () => {
    getProducts()
      .then(response => setProduct(response))
      .catch(error => console.log(error))
  }, [])


  return (
    <>
      <h2>Products</h2>
      <ItemList products = {products} />
    </>
  )
}

export default ItemListContainer