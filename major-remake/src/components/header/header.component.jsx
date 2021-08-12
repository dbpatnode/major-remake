import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-scroll'
import './header.style.scss';

const Header = () => (
    <nav id="nav-wrap">
        <NavLink exact to="/" className="home-container">
            Daniel Patnode
        </NavLink>
        <div className='options'>
            <NavLink exact to="/resume" className="option">
                resume
            </NavLink>
            <NavLink exact to="/projects" className="option">
                projects
            </NavLink>
            <NavLink exact to="/blogs" className="option">
                blogs
            </NavLink>
            <NavLink exact to="/contact" className="option">
                contact
            </NavLink>
        </div>
    </nav>
)

export default Header