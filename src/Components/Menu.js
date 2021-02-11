import React, { Component } from "react";

import '../styles/Menu.css';
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <nav className="navigation">
            <div className="link">
                <NavLink to="/main" activeClassName="active_link">Main</NavLink>
            </div>
            <div className="link">
                <NavLink to="/dialogs" activeClassName="active_link">Dialogs</NavLink>
            </div>

        </nav>
    );
}


export default Menu;
