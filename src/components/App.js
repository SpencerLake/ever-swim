import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Navbar from './Nav/Navbar'
import Home from './Home'
import Bottoms from './Bottoms'
import Tops from './Tops'
import Onepieces from './Onepieces'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/tops" element={<Tops />}/>
          <Route path="/bottoms" element={<Bottoms />}/>
          <Route path="/one-pieces" element={<Onepieces />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
