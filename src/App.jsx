import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import IntroHome from './components/IntroHome/IntroHome'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Categories from './components/Categories/Categories';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <IntroHome home="A whole new reading experience."/>
          
      <Categories/>
      <ItemListContainer/>
    </>
  )
}

export default App
