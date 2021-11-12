
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
            <Link to="/Home">
                Home
            </Link>
            
            <Link to="/Register">
                Register
            </Link>
            </div>
            <p>&copy;2021 Made by Faysal Mohammed Shah</p>
        </div>
    );
};

export default Footer;