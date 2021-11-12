import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ManageAllOrder.css'

const ManageAllOrder = () => {
    const{user}= useAuth()
    const[allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/myOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    const handleDelete = (id) =>{
        const proceed = window.confirm("Are you Want To Delete Order?")
        if(proceed){
        const url =`https://grim-broomstick-26209.herokuapp.com/myOrders/${id}`;
        fetch(url,{
            method :'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Order SuccessFully Deleted');
                const remaining = allOrders.filter(allOrders => allOrders._id !== id);
            setAllOrders(remaining);
            }
        })
        }

    }
    return (
<div>
            <h1 className="Manageallorder-h1 text-success">Manage Order:{allOrders.length}</h1>
            <div className="Manageallorder">
            
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Order id</th>
      <th scope="col">Orders Name</th>
      <th scope="col">User Email</th>
      <th scope="col"> Price</th>
    </tr>
  </thead>
  <tbody>
    {
        allOrders.map(allOrders =>
            <tr>
      <th scope="row">{allOrders?._id}</th>
      <td>{allOrders?.name}</td>
      <td>{allOrders?.email}</td>
      <td>{allOrders?.Price}</td>
      <td><button href="#" className="btn btn-outline-danger" onClick={() => handleDelete(allOrders._id)} >Delete</button></td>
    </tr>)
    }
  </tbody>
</table>


            </div>
        </div>
    );
};

export default ManageAllOrder;