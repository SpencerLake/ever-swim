import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Dashboard'

function App() {

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const isSticky = (e) => {
    const header = document.querySelector('.header')
    const scrollTop = window.scrollY
    scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky')
  }


  return (
    <div className="App">
      <div className='header'>
        <div className='header-content-left'>
          <div className='icon'></div>
          <a className='nav-item'>Tops</a>
          <a className='nav-item'>Bottoms</a>
          <a className='nav-item'>One Pieces</a>
        </div>
        <div className='header-content-right'>
          <a className='nav-item'>Login</a>
        </div>
      </div>
      <div className='content'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
