import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/cta-logo.png'
import './Header.css';

const Header = () => {

    const {user,logOut} = useAuth();
    return (
        <div>
            
        <div className = "Header">
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
           <div className="Header-nav">
           <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#F85C37',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Home">Home</NavLink>
           <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#F85C37',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/AllProducts">All Products</NavLink>
            
            
            
        
        {user.email?<NavLink activeStyle={{
            fontWeight: "bold",
            color: "white",
            background: '#F85C37',
            padding:'10px',
            borderRadius:'10px'
            }}
             to="/Dashboard">Dashboard</NavLink> :"" }
        <span className="Displayname" style={{color:'white'}}>{user.displayName}</span>
        <img src={user.photoURL} className="userimg"/>
       
        

        {user.email ?
        
        <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#F85C37',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Register" onClick={logOut}>LogOut</NavLink>
        
        
        : <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#F85C37',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Login">Login</NavLink> }
           </div>
        </div>
        </div>
    );
};

export default Header;