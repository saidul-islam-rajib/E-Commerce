import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { SoberCategory } from './Pages/SoberCategory';
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { Authentication } from './Pages/Authentication'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<SoberCategory category="mens" />} />
          <Route path='/womens' element={<SoberCategory category="womens" />} />
          <Route path='/kids' element={<SoberCategory category="kids" />} />
          <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Authentication />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
