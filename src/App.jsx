import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/About/About'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ShopCart from './components/ShopCart/ShopCart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/about' element={<About home="A whole new reading experience." />} />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<ShopCart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2> Under Construction </h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
