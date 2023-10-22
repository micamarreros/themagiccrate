import React from 'react';
import { useState } from 'react';

const ItemCount = ({start, stock, functionAdd}) => {

    const [count, setCount] = useState(start);

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const substract = () => {
        if (count > start) {
            setCount(count - 1);
        }
    }

  return (
    <>
        <div>
            <button onClick={add}> + </button>
            <p> {count} </p>
            <button onClick={substract}> - </button>
        </div>
        <button onClick={()=> functionAdd(count)}> Add to cart </button>
    </>
  )
}

export default ItemCount