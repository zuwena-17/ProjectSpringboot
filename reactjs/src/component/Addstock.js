import React, { useState } from 'react';
import './AddStock.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const AddStock = () => {
  const [medicineName, setMedicineName] = useState('');
  const [id, setId] = useState('');
  const [batch, setBatch] = useState('');
  const [quality, setQuality] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate= useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMedicine = {
      name: medicineName,
      id,
      batch,
      quality,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      expiryDate,
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/inventory/adds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMedicine),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Medicine added:', data);

      
      setSuccessMessage('Submitted successfully!');
      setMedicineName('');
      setId('');
      setBatch('');
      setQuality('');
      setPrice('');
      setQuantity('');
      setExpiryDate('');
      setError('');

      // Redirect to StockLevel component using useHistory
      navigate.push('/stock-level');
    } catch (error) {
      console.error('Error adding medicine:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="addstock-container">
        <h1>Inventory</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="medicineName">Medicine Name</label>
            <input
              type="text"
              id="medicineName"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              id="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quality">Quality</label>
            <input
              type="text"
              id="quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Stock</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default AddStock;
