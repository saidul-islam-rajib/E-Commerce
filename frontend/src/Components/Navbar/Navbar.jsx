import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import car_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
import nav_downdown from '../Assets/nav_dropdown.png'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(HomeContext)
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link style={{ textDecoration: 'none' }} to='/'><img src={logo} alt="Logo" /></Link>
        <Link style={{ textDecoration: 'none' }} to='/'><p>Sober</p></Link>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_downdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        <Link style={{ textDecoration: 'none' }} to='/cart'><img src={car_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
