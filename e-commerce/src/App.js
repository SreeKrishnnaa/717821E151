import React from 'react';
import ProductList from './ProductList';

const App = () => {
  const products = [
    { productName: 'Product 1', price: 20, rating: 4.5, discount: 10 },
    { productName: 'Product 2', price: 30, rating: 4.0, discount: 5 },
    { productName: 'Product 3', price: 25, rating: 4.8, discount: 15 },
  ];

  return (
    <div>
      {products && products.length > 0 && <ProductList products={products} />}
    </div>
  );
};

export default App;
