import React from 'react'

export default function Hamburger() {

    // const hamburger = useRef

    // const mobileMenu = (e) => {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    //   }

    // useEffect(() => {
    //     hamburger.addEventListener("click", mobileMenu)
    //     return () => {
    //       hamburger.removeEventListener('scroll', mobileMenu)
    //     }
    //   })

    return(
        <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    )
}