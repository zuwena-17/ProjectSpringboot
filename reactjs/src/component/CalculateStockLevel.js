import React, { useState } from 'react';
import Navbar from './Navbar';

const StockLevel = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    id: '',
    batch: '',
    quality: '',
    price: '',
    quantity: 0,
  });

 
  const handleAddItem = () => {
    setInventory((prevInventory) => [...prevInventory, newItem]);
    setNewItem({
      name: '',
      id: '',
      batch: '',
      quality: '',
      price: '',
      quantity: 0,
    });
  };

  const calculateStockLevel = () => {
    const totalStock = inventory.reduce((acc, item) => acc + Number(item.quantity), 0);
    return totalStock;
  };

  return (
    <div>
    <Navbar />
      <h1>Inventory Management System</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="ID"
          value={newItem.id}
          onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Batch"
          value={newItem.batch}
          onChange={(e) => setNewItem({ ...newItem, batch: e.target.value })}
        />
        <input
          type="text"
          placeholder="Quality"
          value={newItem.quality}
          onChange={(e) => setNewItem({ ...newItem, quality: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <button type="button" onClick={handleAddItem}>Add Item</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Batch</th>
            <th>Quality</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.batch}</td>
              <td>{item.quality}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Stock Level: {calculateStockLevel()}</p>
    </div>
  );
};

export default StockLevel;
