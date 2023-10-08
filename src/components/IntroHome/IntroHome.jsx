import React from 'react'
import './IntroHome.css'

const ItemListContainer = (props) => {
  return (
    <div>
      <img className='home-banner' src='/home/home-banner.jpg' alt="Hands holding an open book on a wooden surface"/>
      
      <h2 className='home-title'> {props.home} </h2>

      <p className='introduction'>Enter our literary haven, where a renowned monthly subscription service offers personalized book selections and delightful extras. Join our community and explore the magic of reading!</p>      
    </div>
  )
}

export default ItemListContainer