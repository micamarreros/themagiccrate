import React from 'react'
import './About.css'

const ItemListContainer = (props) => {
  return (
    <div>
      <img className='img-01' src='/about/img-01.jpg' alt="Hands holding an open book on a wooden surface" />

      <h2 className='about-title'> {props.home} </h2>

      <p className='text'>Enter our literary haven, where a renowned monthly subscription service offers personalized book selections and delightful extras. Join our community and explore the magic of reading!</p>

      <hr className='divider-line' />

      <img className='img-02' src='/about/img-02.jpg' alt="Hands holding an open book on a wooden surface" />

      <h4 className='about-subtitle'> Read On </h4>

      <p className='text'> Step into our digital sanctuary for book lovers, where the magic of literature comes alive! At our virtual haven, our esteemed monthly subscription service reigns supreme, captivating bookworms around the globe. With our subscription, passionate readers receive a meticulously handpicked array of enthralling novels, enriching non-fiction treasures, and timeless literary classics, all tailored to their unique tastes. And that's not all our subscription unveils an enchanting world of bookish delights, from exclusive bookmarks to artisanal teas, transforming each reading session into a magical journey. Join our thriving community of literary enthusiasts and embark on an endless adventure through the captivating realms of books, month after month. Unveil the enchantment of reading with us! </p>
    </div>
  )
}

export default ItemListContainer