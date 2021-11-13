import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './AllProducts.css';
const AllProducts = () => {
    const {user} = useAuth();
    
    const[services,setServices] =useState([]);
       useEffect(()=>
       fetch('https://glacial-ridge-81046.herokuapp.com/services')
       .then(res => res.json())
       .then(data => setServices(data))
       ,[]);


       const handleBooking = (index) =>{
          const bookData =  services[index];
          bookData.email = user.email;
          bookData.Status = "Pending";
          console.log(bookData)
          
          fetch('https://glacial-ridge-81046.herokuapp.com/addOrders',{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(bookData)
            
          })
          .then(res => res.json())
          .then(data => console.log(data));
        
       }
    return (
        <div>
            <h1 className="text-center">All Products</h1>
        <div className ="service-container">
            
            <div className="service">
            {
                services.map((service,index) => //<Service
                //service={service}></Service>
        <div className="Service-container">
        <div className="card" >
            <img src={service?.img} className="card-img-top " alt="" />
                <div className="card-body">
                    <h5 className="card-title">{service?.name}</h5>
                    <p className="card-text">{service?.description}</p>
                    <p className="card-text">Tour Price: {service?.Price}</p>
                    
                   
            
                <button href="#" className="btn btn-outline-primary" onClick={()=> handleBooking(index)} >Book Now</button>
                
                </div>
        </div>
</div>)
            }
            </div>
        </div>
    </div>
    );
};

export default AllProducts;