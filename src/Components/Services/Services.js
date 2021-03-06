import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Services.css';

const Services = () => {
    const {user} = useAuth();
    
    const[services,setServices] =useState([]);
       useEffect(()=>
       fetch('https://glacial-ridge-81046.herokuapp.com/services')
       .then(res => res.json())
       .then(data => setServices(data.slice(0,6)))
       ,[]);


       const handleBuy = (index) =>{
          const buyData =  services[index];
          buyData.email = user.email;
          buyData.Status = "Pending";
          console.log(buyData)
          
          fetch('https://glacial-ridge-81046.herokuapp.com/addOrders',{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(buyData)
            
          })
          .then(res => res.json())
          .then(data => console.log(data));
        
       }
    return (
        <div className="services-section">
            <h1 className="text-center">Our Products</h1>
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
                    
                   
            
                <button href="#" className="btn btn-outline-primary" onClick={()=> handleBuy(index)} >Buy Now</button>
                
                </div>
        </div>
</div>)
            }
            </div>
        </div>
    </div>
    );
};

export default Services;