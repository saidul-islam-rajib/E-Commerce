import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/female_1.jpg'
import nav_profile from '../../assets/female_1.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav-logo' src={nav_logo} alt="" />
      <img className='nav-profile' src={nav_profile} alt="" />
    </div>
  )
}

export default Navbar;