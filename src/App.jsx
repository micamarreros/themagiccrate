import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import IntroHome from './components/IntroHome/IntroHome'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ShopCart from './components/ShopCart/ShopCart';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<IntroHome home="A whole new reading experience." />} />
            <Route path='/products' element={<ItemListContainer/>} />
            <Route path='/category/:idCategory' element={<ItemListContainer/>} />
            <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<ShopCart/>} />
            <Route path='*' element={<h2> Under Construction </h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
