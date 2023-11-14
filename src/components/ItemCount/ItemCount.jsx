import React from 'react';
import { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({ start, stock, functionAdd }) => {

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
            <div className='counter'>
                <button onClick={add}> + </button>
                <p> {count} </p>
                <button onClick={substract}> - </button>
            </div>
            <div className='button-add'>
                <button onClick={() => functionAdd(count)}> Add to cart </button>
            </div>
        </>
    )
}

export default ItemCount