import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import car_icon from '../Assets/cart_icon.png';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>Sober</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>Shop{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}>Men{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}>Women{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kid") }}>Kids{menu === "kid" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={car_icon} alt="Cart Icon" />
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    );
}
