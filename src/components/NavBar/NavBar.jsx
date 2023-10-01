import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
    <header>
      <h1>The Magic Crate</h1>
      
      <nav>
        <ul>
          <li><img src='/logo.svg'></img></li>
          <li>Home</li>
          <li>Subscriptions</li>
          <li>Shop</li>
          <li>About</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
    </>
  )
}

export default NavBar