import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img className='logo' src='/logo.svg' alt="The Magic Crate" />
        </Link>

        <nav>
          <ul>

            <li className='navbar-item'>
              <Link to="/">Home</Link>
            </li>

            <li className='navbar-item'>
              <NavLink to="products">Products</NavLink>
            </li>

            <li className='navbar-item'>
              <NavLink to="category/1">Romance</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to="category/2">Science Fiction</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to="category/3">Fantasy</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to="category/4">Mystery</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to="category/5">Thriller</NavLink>
            </li>

            <li className='navbar-item'>
              <NavLink>About</NavLink>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </header>
    </>
  )
}

export default NavBar