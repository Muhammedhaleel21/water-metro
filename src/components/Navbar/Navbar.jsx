import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/water-metro-logo.png'

function Navbar() {
  return (
    <>
        <div className='navbar-container'>
            <div className='navbar-logo'>
              <img src={logo} alt='Water Metro Logo'/>
            </div>
            <ul className='nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/route'>Route</Link></li>
                <li><Link to='/terminal'>Terminals</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar