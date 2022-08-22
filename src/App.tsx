import React from 'react';

import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {NavbarComponent} from './components/Navbar';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Productpage} from "./components/ProductPage";
import { Cart } from './components/Cart';
import {Register} from './components/Register'
import { Profile } from './components/Profile';
import {Footer} from "./components/Footer";
import {VendorRegister} from "./components/VendorRegister";
import {Itempage} from "./components/Itempage";
function App() {
  return (
    <>
    <div className="App">
    <Router>
      <div>
      <NavbarComponent/>
      <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Productpage/>}/>
      <Route path="/products/:id" element={<Itempage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/vendorregistration" element={<VendorRegister/>}/>
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
    
      
       
       
    </div>
   

    </>
  );
}

export default App;
