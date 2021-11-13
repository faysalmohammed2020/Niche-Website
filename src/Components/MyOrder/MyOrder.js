import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const{user} =useAuth();
    const[orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))

    },[])
    const handleDelete = (id) =>{
        const proceed = window.confirm("Are you Want To Delete Order?")
        if(proceed){
        const url =`https://glacial-ridge-81046.herokuapp.com/myOrders/${id}`;
        fetch(url,{
            method :'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Order SuccessFully Deleted');
                const remaining = orders.filter(orders => orders._id !== id);
            setOrders(remaining);
            }
        })
        }

    }
    return (
        <div className="myodrers-page">
            <h1>My All Oders :{orders.length}</h1>
        <div className="myOdrer">
            
            {
                orders.map((order) => 
                <div className="myodrers-container">
        <div className="card" >
            <img src={order?.img} className="card-img-top " alt="" />
                <div className="card-body">
                    <h5 className="card-title">{order?.name}</h5>
                    <p className="card-text">{order?.description}</p>
                    <p className="card-text">User Email:<br/>{order?.email}</p>
                    <p className="card-text">Tour Price: {order?.Price}</p>
                    <button href="#" className="btn btn-outline-danger" onClick={() => handleDelete(order._id)} >Delete</button>
                    <button href="#" className="btn btn-outline-success"><Link to="/Shipping">Proceed To Shippnig</Link></button>
           
                </div>
        </div>
</div>)
            }

        </div>
        </div>
    );
};

export default MyOrder;