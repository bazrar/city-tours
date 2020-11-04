import React , {useState} from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar';
// import Tour from './components/Tour/Tour';
import TourList from './components/TourList';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <TourList  />
    </div>
  );
}

export default App;
