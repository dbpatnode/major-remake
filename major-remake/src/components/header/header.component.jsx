import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
    <nav id="nav-wrap">
        <NavLink exact to="/" className="home-container">
            Daniel Patnode
        </NavLink>
        <div className='options'>
            <NavLink exact to="/about" className="option">
                ABOUT
            </NavLink>
            <NavLink exact to="/resume" className="option">
                RESUME
            </NavLink>
            <NavLink exact to="/projects" className="option">
                PROJECTS
            </NavLink>
            <NavLink exact to="/contact" className="option">
                CONTACT
            </NavLink>
        </div>
    </nav>
)

export default Header