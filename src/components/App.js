import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Navbar from './Nav/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
