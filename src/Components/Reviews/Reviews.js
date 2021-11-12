import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Reviews.css'
const Reviews = () => {
    
    
    const[reviews,setReviews] =useState([]);
       useEffect(()=>
       fetch('http://localhost:5000/addreview')
       .then(res => res.json())
       .then(data => setReviews(data))
       ,[]);
    return (
        <div>
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
                <p className="card-text"> {reviews?.review}</p>
                
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