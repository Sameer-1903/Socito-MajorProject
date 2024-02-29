import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Registration from './Components/Login/Registration';
import Nabvar from './Components/Navbar/Nabvar';

function App() {
  return (
    
    <BrowserRouter>
    {/* <Nabvar/> */}
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/home" element={<HomePage />}/>
   
        
     
    </Routes>
  </BrowserRouter>
      
  );
}

export default App;
