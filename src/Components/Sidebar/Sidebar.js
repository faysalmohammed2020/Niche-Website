import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Sidebar = () => {
    const{user,admin} = useAuth();
    //let { path, url } = useRouteMatch();
    return (
        <div className="sidebar">
            
            <img style={{width:'20%',marginTop:'20px'}}src={user.photoURL} className="userimg"/><br/>
            <span style={{color:'white',textAlign:'center'}} className="Displayname">{user.displayName}</span>
        <ul>
            
        {admin && <div>
            <li><Link to="/MakeAdmin">Add Admin</Link></li> 
            <li><Link to="/ManageAllOrder">Manage All Order</Link></li>
            </div>}
            <li><Link to="/MyOrder">My Order</Link></li>
            <li><Link to="/AddService">Add Service</Link></li>
            <li><Link to="/AddReview">Add Review</Link></li>
            
            <li><Link to="/AllProducts">All Products</Link></li>
            <li><Link to="/PayMent">Pay Ment</Link></li>
        </ul>
        {/* <Switch>

        <Route path={`${path}/MakeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </Route>
      </Switch> */}
        </div>
    );
};

export default Sidebar;