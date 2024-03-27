import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// Route
import Landingpage from './pages/Landingpage'
import Homepage from './pages/Homepage'

// Library
import 'aos/dist/aos.css'; // Import CSS AOS
import AOS from 'aos';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage />}/>
        <Route path='/home' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
