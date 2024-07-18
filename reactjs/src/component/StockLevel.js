import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './StockLevel.css'; 

const StockLevel = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/inventory/all');
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const calculateTotalStock = () => {
    return inventory.reduce((acc, item) => acc + item.quantity, 0);
  };

  const renderTableHeader = () => {
    if (inventory.length === 0) return null;
    return (
      <tr>
        {Object.keys(inventory[0]).map((key, index) => (
          <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
        ))}
      </tr>
    );
  };

  return (
    <div>
      <Navbar />
      <h1>Inventory Management System - Stock Level</h1>
      <p>Total Stock Quantity: {calculateTotalStock()}</p>
      <table>
        <thead>
          {renderTableHeader()}
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockLevel;
