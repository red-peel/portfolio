import React from 'react';
import Router from './components/Router';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex flex-col '>
      <Navbar/>
      <Router/>
    </div>    
  );
}

export default App;
