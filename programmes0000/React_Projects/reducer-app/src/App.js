
import './App.css';
import Home from './components/Home';
import Datacontext from './Datacontext';
import Product from './components/Product';
function App() {

  return (
    <div className="App">
    <Datacontext>
      {/* <Home/> */}
      <Product/>
    </Datacontext>
    </div>
  );
}

export default App;
