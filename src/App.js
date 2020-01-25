import React from 'react';
import logo from './logo.svg';
import './App.css';
import products from "./ch23/productsFromApi.js";
import Product from  "./ch23/Product.js";
import ProductMaster from  "./ch23/ProductMaster.js";

function App() {
  return (
    <ProductMaster />
    );
}

export default App;
