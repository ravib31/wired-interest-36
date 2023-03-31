import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.productImg} alt={product.name} />
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
