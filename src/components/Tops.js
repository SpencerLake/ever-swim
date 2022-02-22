import React from 'react'
import Navbar from './Nav/Navbar'

export default function Tops() {

    function getProducts() {
        fetch()
    } 

    getProducts()

    return(
        <div>
            <div className='topsPage'>
                <Navbar />
                <div className='content'>
                    <div className='itemTypes'>

                    </div>
                    <div className='allItems'>
                        <div className='testItem'>
                            <div className='testPic'></div>
                            <div className='testDescrip'></div>
                        </div>
                        <div className='testItem'>
                            <div className='testPic'></div>
                            <div className='testDescrip'></div>
                        </div>
                        <div className='testItem'>
                            <div className='testPic'></div>
                            <div className='testDescrip'></div>
                        </div>
                        <div className='testItem'>
                            <div className='testPic'></div>
                            <div className='testDescrip'></div>
                        </div>
                        <div className='testItem'>
                            <div className='testPic'></div>
                            <div className='testDescrip'></div>
                        </div>
                        <div className='testItem'>
                            <div className='testPic'></div>
                            <div className='testDescrip'>$15 - flush</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}