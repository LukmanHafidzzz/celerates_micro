import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// Route
import Landingpage from './pages/Landingpage'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'

// Library
import 'aos/dist/aos.css';
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
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
