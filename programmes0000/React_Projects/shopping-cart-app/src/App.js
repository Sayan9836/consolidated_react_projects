
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';
function App() {
  const[click,setClick]=useState(false);
  return (
    <div className="App">
     <Header click={click} setClick={setClick}/>
        <Routes>
        <Route path='/' element={<Home click={click}/>} />
        <Route path='/Cart' element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;
