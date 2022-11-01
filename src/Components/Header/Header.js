import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className="header-div">
            <div className="left-div">
                <img src={logo} alt=""/>
            </div>
            <div className="right-div">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact Us</a>
                <a href="/shop">Shop</a>
            </div>
        </div>
    );
};

export default Header;