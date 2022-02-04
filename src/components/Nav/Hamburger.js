import React, { useRef, useEffect, useState } from 'react'

export default function Hamburger() {

    const hamburger = useState()
    const ham = useRef()

    hamburger.active = false

    // console.log(hamburger.active)
    
    function setActive(e) {
        e.preventDefault()
        // hamburger.active = false

        // hamburger.active ? false : true ham.current.classList.add('active')
        
        if(hamburger.active === false) {
            console.log('works')
            hamburger.active = true
            ham.current.classList.add('active')
            console.log(hamburger.active)
        } else {
            hamburger.active = false
            ham.current.classList.remove('active')
            console.log(hamburger.active)
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