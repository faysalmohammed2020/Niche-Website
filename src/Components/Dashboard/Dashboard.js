import React from 'react';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  

const Dashboard = () => {
    const {user} = useAuth();
    return (
<div className="dashboard">
    <h1 style={{textAlign:"center",padding:'5px', background:"#314051" ,color:"white"}}>Dashboard</h1>
    
<div className="dashboard-container">
<div>
{/* <span className="username">Hello User,{user.displayName}</span> */}
<div className="username card bg-success text-white ">
  <div className="card-body">
  <img src={user.photoURL} className="userimg" />
  Hello,{user.displayName}


  {/* <Switch>

        <Route path={`${path}/MakeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </Route>
      </Switch> */}
  </div>
</div>
</div>
<div>
<Sidebar></Sidebar>
</div>
</div>


</div>
    );
};

export default Dashboard;