import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Rating from 'react-rating';
import './Reviews.css'
const Reviews = () => {
    
    
    const[reviews,setReviews] =useState([]);
       useEffect(()=>
       fetch('https://glacial-ridge-81046.herokuapp.com/addreview')
       .then(res => res.json())
       .then(data => setReviews(data))
       ,[]);
    return (
        <div className="review-header">
        <h1 className="text-center">Our Clints Reviews</h1>
    <div className ="reviews-container">
        
        <div className="review">
        {
            reviews.map((reviews,index) => 
    <div className="review-container">
    <div className="card" >
            <div className="card-body">
            
                <h5 className="card-title">{reviews?.DisplayName}</h5>
                
                <p className="card-text">{reviews?.description}</p>
                <Rating 
                initialRating={reviews?.review}
                emptySymbol="far fa-star star-color"
                fullSymbol="fas fa-star star-color"
                readonly/>
                
  
                
                
    </div>
    </div>
</div>)
        }
        </div>
    </div>
</div>
    );
};

export default Reviews;