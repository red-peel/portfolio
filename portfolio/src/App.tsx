import React from 'react';
import Router from './components/Router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='min-h-screen flex flex-col h-screen'>
      <Navbar/>
      <Router/>
    </div>    
  );
}

export default App;
