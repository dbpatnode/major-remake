import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
    <div className="header">

        <NavLink exact to="/" className="home-container">
            HOME
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
    </div>
)

export default Header