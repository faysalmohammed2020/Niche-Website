import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
//     const {user} = useAuth
//     const { register, handleSubmit,reset } = useForm();
    
// const onSubmit = data => {
//     console.log(data)


const{ user} = useAuth();
const { register, handleSubmit,reset } = useForm();
const onSubmit = data => {
    console.log(data)

    axios.post('http://localhost:5000/addreview',data)
    .then(res => {
        if(res.data.insertedId){
            alert('Reviews Added Successfully');
            reset();
        }
    })

  };
    return (
        <div className="Shipping">
            <h1 className="shipping-title text-sucess"> Reviews Form</h1>
        <div className="proceed-orders">
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("DisplayName") } defaultValue={user.displayName}/>
      <textarea {...register("description")} placeholder="Enter Reviews"/>
      <input  {...register("review")} placeholder="give review as number (0-5) Star" />
      <input type="submit" className="btn btn-success"/>
    </form>   
        </div>
        </div>
    );

  };
    //return (
    //     <div className="add-service">
    //         <h3>Add  Service</h3>
    //         <p>{user.displayName}</p>
    //         {/* <form onSubmit={handleSubmit(onSubmit)}>
    //     <input {...register("displayName") } defaultValue={user.displayName}/>
    //   <input {...register("email")} defaultValue={user.email} />
    //   <textarea {...register("description")} placeholder="Enter Reviews"/>
    //   <input type="number" {...register("review")} placeholder="give review as number (0-5)"/>
    //   <button type="submit" className="btn btn-danger">Add review</button> */}
    // {/* </form> */}
  

    //     </div>
    // );
    


export default AddReview;