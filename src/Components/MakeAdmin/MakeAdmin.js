import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {
    
    const [email,setEmail] =useState('');
    const [success , setSuccess] = useState(false);
    const handleOnChange = e =>{
      setEmail(e.target.value);
  }
  const handleadmin = e =>{
    e.preventDefault();
     const user ={email};
    fetch('http://localhost:5000/users/admin',{
        method : 'PUT',
        headers :{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        console.log(data)
        setSuccess(true);
      }
      
    });
      
  }
    return (
        <div className="makeadmin">
            <h1 className="makeadmin-title "> Make Admin</h1>
            {success && <Alert severity="success">Admin Added successfully!</Alert>}
        <div className="proceed-orders">
        <form onSubmit={handleadmin}>
                <input type="email" placeholder="Enter your email" name="email" onChange={handleOnChange}/><br/>
                
                <input type="submit" value="Make Admin" className="btn btn-primary"/>
            </form> 
              
        </div>
        </div>
    );
};

export default MakeAdmin;