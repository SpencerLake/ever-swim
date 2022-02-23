import React from 'react'
import Navbar from './Nav/Navbar'
import Retrieve from './Retrieve'

export default function Tops() {

    function getProducts() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            // .then(console.log(json))
            .then((json) => Retrieve(json)) 
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