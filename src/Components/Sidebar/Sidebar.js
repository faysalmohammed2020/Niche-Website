import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
    const{user} = useAuth();
    return (
        <div className="sidebar">
            
            <img style={{width:'20%',marginTop:'20px'}}src={user.photoURL} className="userimg"/><br/>
            <span style={{color:'white',textAlign:'center'}} className="Displayname">{user.displayName}</span>
        <ul>
            <li><Link to="/MakeAdmin">Add Admin</Link></li>
            <li><Link to="/MyOrder">My Order</Link></li>
            <li><Link to="/AddService">Add Service</Link></li>
            <li><Link to="/AddReview">Add Review</Link></li>
            <li><Link to="/ManageAllOrder">Manage All Order</Link></li>
            <li><Link to="/AllProducts">All Products</Link></li>
            <li><Link to="/PayMent">Pay Ment</Link></li>
        </ul>
        </div>
    );
};

export default Sidebar;