import React, { useRef, useEffect, useState } from 'react'

export default function Hamburger() {

    // Variables
    const hamburger = useState()
    const ham = useRef()
    const dropdown = useRef()

    hamburger.active = false

    // Function to change hamburger menu symbol, and pull up dropdown menu or close it
    function setActive(e) {
        e.preventDefault()
        
        if(hamburger.active === false) {
            console.log('works')
            hamburger.active = true
            ham.current.classList.add('active')
            dropdown.current.classList.add('active')
            console.log(hamburger.active)
        } else {
            hamburger.active = false
            ham.current.classList.remove('active')
            dropdown.current.classList.remove('active')
            console.log(hamburger.active)
        }
    }
    
    return(
        <div>
            {/* Hamburger Button */}
            <div className='hamburger' ref={ham} onClick={setActive}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            {/* Dropdown Menu */}
            <div className='dropdown' ref={dropdown}>
                <p className='ham-option'>Tops</p>
                <p className='ham-option'>Bottoms</p>
                <p className='ham-option'>One Piece</p>
            </div>
        </div>
    )
}

