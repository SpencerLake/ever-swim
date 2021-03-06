import React from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Navbar from './Nav/Navbar'

export default function Home() {
    return(
        <div>
            <div className="App">
            <Navbar />
            <div className='content'>
                <Dashboard />
            </div>
            </div>
        </div>
    )
}