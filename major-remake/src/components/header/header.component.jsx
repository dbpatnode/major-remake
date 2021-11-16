import React from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

import './header.style.scss';

function Header() {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };



    return (
        <nav className="header">

            {/* LOGO */}
            <NavLink activeClassName="logo" to="/">
                <div className="logo-image" />
            </NavLink>


            <div>
                {/* WEB BUTTONS */}
                <div className="web-options">
                    <div className="links">
                        <NavLink exact to="/projects"> projects </NavLink>
                        <NavLink to="/blogs"> blogs </NavLink>
                        <NavLink to="/resume"> resume </NavLink>
                        <NavLink to="/contact"> contact </NavLink>
                    </div>
                </div>


                {/* MOBILE HAMBURGER BUTTON*/}
                <div class="hamburger-wrapper">
                    <div className={isActive ? "navigation active" : "navigation"} >
                        <div className="ham-btn" onClick={ToggleClass}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* HAMBURGER BUTTONS */}
                        <div className="links">
                            <div className="link" onClick={ToggleClass}>
                                <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
                            </div>
                            <div className="link" onClick={ToggleClass}>
                                <NavLink activeClassName="nav-active" to="/projects">Projects</NavLink>
                            </div>
                            <div className="link" onClick={ToggleClass}>
                                <NavLink activeClassName="nav-active" to="/blogs">Blogs</NavLink>
                            </div>
                            <div className="link" onClick={ToggleClass}>
                                <NavLink activeClassName="nav-active" to="/resume" >Resume</NavLink>
                            </div>
                            <div className="link" onClick={ToggleClass}>
                                <NavLink activeClassName="nav-active" to="/contact">contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header