import React from 'react';
import './App.css';
import  Hire  from './Hire'
import Hero from './Hero'
import Navbar from './NavBar';
import Community from './Community';
import Why from './Why';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar/> 
      <Hero/>
      <Community/>
      <Why/>
    </>
      
  );
}

export default App;
