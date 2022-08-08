import React from 'react';

import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {NavbarComponent} from './components/Navbar';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Productpage} from "./components/ProductPage";
import { Cart } from './components/Cart';
import {Register} from './components/Register'
function App() {
  return (
    <div className="App">
    <Router>
      <NavbarComponent/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Productpage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
       
       
       
    </div>
  );
}

export default App;
