import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isInventoryDropdownOpen, setIsInventoryDropdownOpen] = useState(false);

  const toggleInventoryDropdown = () => {
    setIsInventoryDropdownOpen(!isInventoryDropdownOpen);
  };

  return (
    <div className='navigation'>
      <p><Link to="/product">Product</Link></p>
      <p 
        onMouseEnter={toggleInventoryDropdown} 
        onMouseLeave={toggleInventoryDropdown}
      >
        Inventory
        {isInventoryDropdownOpen && (
          <div className="dropdown">
            <p><Link to="/Addstock">Add Stock</Link></p>
            <p><Link to="/StockLevel">StockLevel</Link></p>
          
          </div>
        )}
      </p>
       
    </div>
  );
}
