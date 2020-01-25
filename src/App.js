import React from 'react';
import logo from './logo.svg';
import './App.css';
import products from "./ch23/productsFromApi.js";
import Product from  "./ch23/Product.js";

function App() {
  const productArr = products.map(productElement => <Product obj={productElement} />);
  return (
   productArr
  );
}

export default App;
