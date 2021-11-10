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
        // <nav id="nav-wrap">
        //     <NavLink exact to="/" className="home-container">
        //         Daniel Patnode
        //     </NavLink>
        //     <div className='options'>
        //         <NavLink exact to="/projects" className="option">
        //             projects
        //         </NavLink>
        //         <NavLink exact to="/blogs" className="option">
        //             blogs
        //         </NavLink>
        //         <NavLink exact to="/resume" className="option">
        //             resume
        //         </NavLink>
        //         <NavLink exact to="/contact" className="option">
        //             contact
        //         </NavLink>
        //     </div>
        // </nav>
        <nav className="header">

            {/* Left side buttons (disapear on mobile) */}
            <div className="options">
                <NavLink activeClassName="nav-active" to="/" className="option home-container">
                    Daniel Patnode
                </NavLink>
            </div>

            <div className='options'>
                <span className="web-options">
                    <NavLink exact to="/projects" className="option">
                        projects
                    </NavLink>
                    <NavLink exact to="/blogs" className="option">
                        blogs
                    </NavLink>
                    <NavLink exact to="/resume" className="option">
                        resume
                    </NavLink>
                    <NavLink exact to="/contact" className="option">
                        contact
                    </NavLink>
                </span>

                {/* right side buttons (hamburger not opened) */}
                <span class="right-nav">
                    <div className={isActive ? "navigation active" : "navigation"} >
                        <div className="ham-btn" onClick={ToggleClass}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="links">
                            <div className="link">
                                <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/locations">Locations</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/menu" >Menu</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/about">About</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/jobs">Jobs</NavLink>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </nav >
    )
}

export default Header