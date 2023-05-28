import {useState, React} from 'react';
import './App.css';
import Header from './Header'
import Cart from './Cart'

// import products
import {products} from './Products'



function App() {

  const [product, setProduct] = useState(products);

  return (
    <div className="App">
      <Header />
      <Cart newProduct={product} />
    </div>
  );
}

export default App;
