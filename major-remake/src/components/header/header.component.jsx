import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
    <div>
        <Link to="/" className="logo-container">
            HOME
        </Link>
    </div>
)

export default Header