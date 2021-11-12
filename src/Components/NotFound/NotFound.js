import React from 'react';
import img from '../../images/notfound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-img">
            <img src={img} alt="404"/>
        </div>
    );
};

export default NotFound;