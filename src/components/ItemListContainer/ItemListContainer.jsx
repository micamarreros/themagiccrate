import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProduct] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const myProducts = idCategory ? query(collection(db, "inventario"), where("idCat", "==", idCategory)) : collection(db, "inventario");

    getDocs(myProducts)
      .then(res => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProduct(newProducts);
      })
      .catch(error => console.log(error))
  }, [idCategory])

  return (
    <>
      <h2>Products</h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer