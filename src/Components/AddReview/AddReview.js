import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
//     const {user} = useAuth
//     const { register, handleSubmit,reset } = useForm();
    
// const onSubmit = data => {
//     console.log(data)


const{ user} = useAuth();
const { register, handleSubmit,reset } = useForm();
const onSubmit = data => {
    console.log(data)

    axios.post('https://glacial-ridge-81046.herokuapp.com/addreview',data)
    .then(res => {
        if(res.data.insertedId){
            alert('Reviews Added Successfully');
            reset();
        }
    })

  };
    return (
        <div className="Review">
            <h1 className="review-title text-sucess"> Reviews Form</h1>
        <div className="proceed-review">
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("DisplayName") } defaultValue={user.displayName}/>
      <textarea {...register("description")} placeholder="Enter Reviews"/>
      <input  type=" Number "{...register("review")} placeholder="give review as number (0-5) " />
      <input type="submit" className="btn btn-success"/>
    </form>   
        </div>
        </div>
    );

  };
    
    


export default AddReview;