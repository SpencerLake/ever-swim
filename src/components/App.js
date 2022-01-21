import React, { useRef, useEffect } from 'react'
import './App.css'
import Dashboard from './Dashboard'

function App() {

  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })
  useEffect(() => {
    hamburger.addEventListener("click", mobileMenu)
    return () => {
      hamburger.removeEventListener('scroll', mobileMenu)
    }
  })

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const isSticky = (e) => {
    const header = document.querySelector('.header')
    const scrollTop = window.scrollY
    scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky')
  }


  


  return (
    <div className="App">
      <div className='header'>
        <nav className='nav-menu'>
          <ul className='header-content-left'>
            <div className='nav-logo'></div>
            <li className='nav-item'>
              {/* Change all p tags into a tags when routes set up */}
              <p href='#' className='nav-link'>Tops</p>
            </li>
            <li className='nav-item'>
              <p href='#' className='nav-link'>Bottoms</p>
            </li>
            <li className='nav-item'>
              <p href='#' className='nav-link'>One Piece</p>
            </li>
          </ul>
          <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
          <div className='header-content-right'>
            <a className='nav-item'>Login</a>
          </div>
        </nav>
      </div>
      <div className='content'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
