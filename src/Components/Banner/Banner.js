import React from 'react';
import './Banner.css';
import banner from '../../images/HomeBanner.jpg'

const Banner = () => {
    return (
        <div>
          <div className="banner">
          <div className="Banner-text">
            <h1>Welcome to Car Shop</h1>
            <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood is neighborhood a beautiful day for a would you be mine could you be mine its a neighborly day.</p>
          </div>
           <div className="banner-img">
             <img style={{width:'80%' }}src={banner} alt="banner-image"/>
            </div>
          </div>

          
        </div>
    );
};

export default Banner;