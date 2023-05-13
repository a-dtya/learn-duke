import React from 'react';
import './App.css';
import  Hire  from './Hire'
import Hero from './Hero'
import Navbar from './NavBar';
import Community from './Community';
import Why from './Why';
import Login from './Login';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar/> 
      <Hero/>
      <Community/>
      <Why/>
      <Login/>
    </>
      
  );
}

export default App;
