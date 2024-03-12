import './App.css';

import Products from './components/products';
import Product from './components/product';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
