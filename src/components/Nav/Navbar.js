import React from 'react'
import Hamburger from './Hamburger.js'

export default function Navbar() {

    return(
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
                <div className='header-content-right'>
                    {/* <a className='nav-item' href='#'>Login</a> */}
                </div>
            </nav>
            <Hamburger />
        </div>
    )
}