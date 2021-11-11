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

            {/* Left side buttons (disapear on mobile) */}
            <div className="options">
                <NavLink activeClassName="nav-active" to="/" className="option home-container">
                    Daniel Patnode
                </NavLink>
            </div>

            <div className='options'>
                <div className="right-side-wrap">
                    <div className="web-options">
                        <div className="web">
                            <NavLink exact to="/projects" className="option">
                                projects
                            </NavLink>
                        </div>
                        <div className="web">
                            <NavLink to="/blogs" className="option">
                                blogs
                            </NavLink>
                        </div>
                        <div className="web">
                            <NavLink to="/resume" className="option">
                                resume
                            </NavLink>
                        </div>
                        <div className="web">
                            <NavLink to="/contact" className="option">
                                contact
                            </NavLink>
                        </div>
                    </div>
                    {/* right side buttons (hamburger not opened) */}
                    <div class="hamburger-wrapper">
                        <div className={isActive ? "navigation active" : "navigation"} >
                            <div className="ham-btn" onClick={ToggleClass}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
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
            </div>
        </nav >
    )
}

export default Header