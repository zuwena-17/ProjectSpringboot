
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Product from './component/Product';
import Inventory from './component/Inventory';
import Supplier from './component/Supplier';
import Addstock from './component/Addstock';
import StockLevel from './component/StockLevel';


function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='addstock' element={<Addstock/>}/>
      <Route path='stocklevel' element={<StockLevel/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='product' element={<Product/>}/>
      {/* /<Route path='supplier' element={<Supplier/>}/> */}
      <Route path='inventory' element={<Inventory/>}/>
      <Route path="/" exact component={<Addstock/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
