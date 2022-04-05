import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/main'}>Main</Link>
            <Link to={'/volunteer'}>Volunteer</Link>
        </nav>
    );
};

export default Header;