import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Route,Routes } from 'react-router';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './components/PageNotFound';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
         <SearchBox/>
         <Homepage/>
        </>
        }/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
