
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import Children from './components/Children';
import { useState } from 'react';
import Callback from './components/Callback';
function App() {
  const [UIcolor, setUIcolor] = useState(null);
  const [text, setText] = useState('');


  const arr = useState(4);

  // callback function
  const getColor = (color) => {
    setUIcolor(color);
  };

  const getData = (Text1) => {
    setText(Text1)
    // alert("hello Developer")
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product name="sayan" desc="sdubaskjbasbab" />} />
        <Route path='/*' element={<h1>Error Page</h1>} />
      </Routes>
      <Children name="sayan">
        <p>Sayan is a good boy</p>
      </Children>
      <div>
        <div className='App_color_container'
          style={{ background: `${UIcolor}`}}
        >
          {text}
        </div>
      </div>   
      <h1>{arr}</h1>
      <Callback getData={getData} getColor={getColor} />                       
    </div>                                                                
  );
}

export default App;


