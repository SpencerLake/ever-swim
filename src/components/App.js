import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Navbar from './Nav/Navbar'
import Home from './Home'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
