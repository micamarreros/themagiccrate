import { useState, useEffect } from "react";
import './Categories.css'

const Categories = () => {
    const [category, setCategory] = useState("");

    useEffect( ()=> {
        document.title = `${category}`;
    }, [category])

    /* Funcion para modificar estado category*/
    const handleCategory = (category) => {
        setCategory(category)
    }

  return (
    <div className="categories-container">
        <h2 className="category-title"> Books by Genre </h2>
        <h3 className="category-subtitle"> {category} </h3>

        <button onClick={() => handleCategory("All genres")}>All genres</button>
        <button onClick={() => handleCategory("Classics")}>Classics</button>
        <button onClick={() => handleCategory("Fantasy")}>Fantasy</button>
        <button onClick={() => handleCategory("Fiction")}>Fiction</button>
        <button onClick={() => handleCategory("Historical Fiction")}>Historical Fiction</button>
        <button onClick={() => handleCategory("Mystery")}>Mystery</button>
        <button onClick={() => handleCategory("Romance")}>Romance</button>
        <button onClick={() => handleCategory("Science Fiction")}>Science Fiction</button>
        
    </div>
  )
}

export default Categories