import React, { useRef, useEffect, useState } from 'react'

export default function Hamburger() {

    const hamburger = useState()
    const ham = useRef()

    hamburger.active = false

    console.log(hamburger.active)
    
    function setActive(e) {
        e.preventDefault()
        hamburger.active = false
        
        if(hamburger.active = false) {
            console.log('works')
            ham.current.classList.add('active')
            hamburger.classList = true
        } else if( hamburger.classList = true) {
            hamburger.active = false
            ham.current.classList.remove('active')
        }
    }
    
    return(
        <div className='hamburger' ref={ham} onClick={setActive}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    )
}



// const mobileMenu = (e) => {
    //     e.preventDefault()
    //     hamburger.classList.toggle("active");
    //     // navMenu.classList.toggle("active");
    //   }
    
    // useEffect(() => {
        //     hamburger.addEventListener("click", mobileMenu)
        //     return () => {
            //       hamburger.removeEventListener('scroll', mobileMenu)
            //     }
            //   })