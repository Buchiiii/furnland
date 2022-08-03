import React from 'react';

import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {NavbarComponent} from './components/Navbar';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Productpage} from "./components/ProductPage";
function App() {
  return (
    <div className="App">
    <Router>
      <NavbarComponent/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Productpage/>}/>
      </Routes>
    </Router>
       
       
       
    </div>
  );
}

export default App;
