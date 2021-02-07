import React, { Component } from "react";

import '../styles/Header.css';

import logo from "../images/1200x630wa.png"


const Header = () => {
    return (
        <header className="header">
                <img src={logo} alt="logo"/>
            </header>
    );
}


export default Header;
