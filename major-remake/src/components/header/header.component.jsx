import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
    <div className="header">

        <Link to="/" className="home-container">
            HOME
        </Link>
        <div className='options'>
            <Link to="/about" className="option">
                ABOUT
            </Link>
            <Link to="/resume" className="option">
                RESUME
            </Link>
            <Link to="/projects" className="option">
                PROJECTS
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header