import React, { useState } from 'react';
import Navbar from './Navbar';

function Inventory() {
  const [medicines, setMedicines] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    totalMedicine: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicines(prevMedicines => [...prevMedicines, formData]);
    setFormData({
      name: '',
      totalMedicine: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <div >
      <Navbar />
      <div className='inve'>
        <div className='content'>
          <h1>Inventory List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Medicines</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
                </thead>
            
             
            <tbody id='medicine_list'>
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <td>{medicine.name}</td>
                  <td>{medicine.totalMedicine}</td>
                  <td>{medicine.quantity}</td>
                  <td>{medicine.price}</td>
          
              
          
                </tr>
              ))}
            </tbody>
            </table>
          

          <form id='medicine-form' onSubmit={handleSubmit}>
           <input type='text 'id='name' placeholder='Medicine Name'value={formData.name} onChange={handleChange}required/>

         <input type='number' id='totalMedicine' placeholder='Total Medicines' value={formData.totalMedicine} onChange={handleChange} required />

          <input type='number' id='quantity'placeholder='Quantity' value={formData.quantity} onChange={handleChange}required/>
           
          <input type='number'id='price'placeholder='Price'value={formData.price }onChange={handleChange}required/>

           <button type='submit'>Add Medicine</button>
         
           
           </form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
