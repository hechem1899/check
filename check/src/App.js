import React from 'react';
import './App.css';
import ProductTable from './component/product table .js';
function App() {
  
    const products =[{name:"iphone",category:"pc",price:1500},{name:"samsung",category:"pc",price:1500}]
    return (
      <div>
        <ProductTable table= {products}/>
      </div>
  );
}

export default App;
