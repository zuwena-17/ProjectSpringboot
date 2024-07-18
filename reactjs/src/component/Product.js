

import React, { useState } from 'react';
import './Product.css';
import Navbar from './Navbar';

const Product = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  
  const products = [
    {
      id: 1,
      name: 'Paracetamol',
      description: 'is a medication commonly used to treat pain and fever. It is often recommended for mild to moderate pain relief, including headaches, muscle aches, arthritis, backache, toothaches, and colds. Here are some common uses of paracetamol:t, et vestibulum nulla volutpat.',
      uses: 'Used for treating condition fever and flue. Take orally once a day.'
    },
    {
      id: 2,
      name: 'Citrizen',
      description: ' is an antihistamine medication used to relieve allergy symptoms. It is effective in treating symptoms caused by hay fever (allergic rhinitis) and other upper respiratory allergies, as well as chronic urticaria (hives)..',
      uses: 'Apply topically on affected area twice daily.'
    },
    {
      id: 3,
      name: 'Amoxilin',
      description: ' Is a commonly prescribed antibiotic that belongs to the penicillin class of drugs. It is used to treat a wide variety of bacterial infections by inhibiting the growth of bacteria. Here are some common uses of amoxicillin: ..',
      uses: 'Apply topically on affected area twice daily.'
    },
    
  ];

 
  const handleProductSelect = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="product-list">
          <h2>Product List</h2>
          <ul>
            {products.map(product => (
              <li key={product.id} onClick={() => handleProductSelect(product.id)}>
                {product.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-details">
        
          <h2>Product Details</h2>
          {selectedProduct ? (
            <div>
              <h3>{selectedProduct.name}</h3>
              <p><strong>Description:</strong> {selectedProduct.description}</p>
              <p><strong>Uses:</strong> {selectedProduct.uses}</p>
            </div>
          ) : (
            <p>Select a product from the list to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
