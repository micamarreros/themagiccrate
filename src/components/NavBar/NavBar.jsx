import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
    <header>
    <img className='logo' src='/logo.svg' alt="The Magic Crate"/>
      
      <nav>
        <ul>
          <li className='navbar-item'>Home</li>
          <li className='navbar-item'>Subscriptions</li>
          <li className='navbar-item'>Shop</li>
          <li className='navbar-item'>About</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
    </>
  )
}

export default NavBar