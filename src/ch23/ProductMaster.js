import React from 'react';
import products from "./productsFromApi.js";
import Product from  "./Product.js";

function ProductMaster() {
  const productArr = products.map(productElement => <Product obj={productElement} />);
  return (
   productArr
  );
}

export default ProductMaster;
