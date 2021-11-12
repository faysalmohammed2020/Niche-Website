import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import './Register.css';
import login from '../../images/login.jpg';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth } from '@firebase/auth';
import { useHistory } from 'react-router';

const Register = () => {
    const[registerInfo,setRegisterInfo] = useState({});
    
    const {  user, registerUser , isLoading, authError} = useAuth();
    const history = useHistory();
    const handleOnChange = e =>{
            const field = e.target.name;
            const value =e.target.value;
            const newRegisterInfo = {...registerInfo};
            newRegisterInfo[field] = value;
            setRegisterInfo(newRegisterInfo);
        }
         const handleregister = e =>{
             const auth = getAuth();
             if(registerInfo.password !== registerInfo.password2){
                 alert('Your Password Did not Matched');
                 return;
             }
            
            registerUser( registerInfo.email , registerInfo.password,registerInfo.name,history);
            e.preventDefault();


         }
    return (
        <div >
            <div className="register">
                <img style={{width:'50%'}}src={login} />
        <div className="register-form">
            <h1 style={{color:'white'}}>Register</h1>
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {!isLoading &&<form onSubmit={handleregister} >
                 <input type="text" placeholder="Enter your name" name="name" onChange={handleOnChange}/><br/> 
                <input type="email" placeholder="Enter your email" name="email" onChange={handleOnChange}/><br/>
                <input type="password" placeholder="Password" name="password" onChange={handleOnChange}/><br/>
                <input type="password" placeholder="Re-Type Password" name="password2" onChange={handleOnChange}/><br/>
                <input type="submit" value="Register" className="btn btn-primary"/>
            </form>}
            {isLoading && <CircularProgress />}
             {user?.email && <Alert severity="success">User Created successfully!</Alert>} 
            {authError && <Alert severity="error">{authError}</Alert>}
            <Link style={{textDecoration:'none',color:'white'}}to="/Login">
                Do you Have Account? Login
            </Link>
            </div>
        </div>
        </div>
        
    );
};

export default Register;