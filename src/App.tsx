import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className='p-4 flex-grow-1'>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
      </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
