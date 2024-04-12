import React from 'react'
import Location from './Location'
import Navigation from './Navigation'
import "@/styles/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar--container'>
        <div className='location--section'>
<<<<<<< HEAD
            <Location containerClassName="navbar-location--container" iconClassName="locaiton--icon" arrowFlag={true}/>
=======
            <Location/>
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
        </div>
        <div className='nav--section'>
            <Navigation/>
        </div>
    </div>
  )
}

export default Navbar