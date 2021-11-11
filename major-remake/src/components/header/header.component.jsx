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
            <div className="logo">
                <NavLink activeClassName="nav-active" to="/" className="option home-container">
                    DP
                </NavLink>
            </div>


            <div className="right-side-wrap">
                {/* WEB BUTTONS */}
                <div className="web-options">
                    <div className="links">
                        <NavLink exact to="/projects" className="option"> projects </NavLink>
                        <NavLink to="/blogs" className="option"> blogs </NavLink>
                        <NavLink to="/resume" className="option"> resume </NavLink>
                        <NavLink to="/contact" className="option"> contact </NavLink>
                    </div>
                </div>


                {/* MOBILE HAMBURGER*/}
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