import React from 'react';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
<div className="dashboard">
    <h1 style={{textAlign:"center",padding:'5px'}}>Dashboard</h1>
<div>
<Sidebar></Sidebar>
</div>


</div>
    );
};

export default Dashboard;