import React from 'react';
import Router from './components/Router';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar/>
      <Router/>
      <Footer/>
    </div>    
  );
}

export default App;
