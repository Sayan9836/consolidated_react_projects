// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [text1, settext1] = useState('Enable DarkMode');

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const removeClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls) => {
    removeClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    showalert(cls + "mode has been Enabled", "success");
    //**************************************************************** */
    // for light and dark mode only
    if (mode !== 'dark' && cls == null) {
      setmode('dark');
      settext1('Enable lightMode');
      document.body.style.backgroundColor = '#414248';
      showalert("dark mode has been Enabled", "success");
    } else if (mode === 'dark') {
      setmode('light');
      settext1('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been Enabled", "success")
    }

  }


  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="about" /> */}
      <Router>
        <Navbar title='TextUtils' aboutText='About' text1={text1} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text:" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}



export default App;
