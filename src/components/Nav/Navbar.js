import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger.js'

export default function Navbar() {

    return(
        <div className='header'>
            <nav className='nav-menu'>
                <ul className='header-content-left'>
                    <div className='nav-logo'></div>
                    <li className='nav-item'>
                        {/* Change all p tags into a tags when routes set up */}
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        {/* Change all p tags into a tags when routes set up */}
                        <Link to='/tops' className='nav-link'>Tops</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/bottoms' className='nav-link'>Bottoms</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/one-pieces' className='nav-link'>One Piece</Link>
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