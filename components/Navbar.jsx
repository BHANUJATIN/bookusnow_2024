import React from 'react'
import Location from './Location'
import Navigation from './Navigation'
import "@/styles/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar--container'>
        <div className='location--section'>
            <Location/>
        </div>
        <div className='nav--section'>
            <Navigation/>
        </div>
    </div>
  )
}

export default Navbar