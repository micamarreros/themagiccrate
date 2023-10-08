import './Item.css'

const Item = ({id, img, name, author, price}) => {
  return (
    <div className='product-card'>
      <img className='product-image' src={img} alt={name}/>
        <h3 className='product-name'> {name} </h3>
        <h4 className='product-author'> {author} </h4>
        <p className='product-price'> ${price} </p>
        <button className='product-button' id={id}> View Product </button>
    </div>
  )
}

export default Item