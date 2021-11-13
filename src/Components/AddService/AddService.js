import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    
const { register, handleSubmit,reset } = useForm();
const onSubmit = data => {
    console.log(data)

    axios.post('https://glacial-ridge-81046.herokuapp.com/services',data)
    .then(res => {
        if(res.data.insertedId){
            alert('Service Added Successfully');
            reset();
        }
    })

  };
    return (
<div className="add-service">
            <h3>Add  Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter Service Name" />
      <textarea {...register("description")} placeholder="Enter Service Description"/>
      <input type="number" {...register("Price")} />
      <input {...register("img")} placeholder="Insert Image URL" />
      <button type="submit" className="btn btn-danger">Add Service</button>
    </form>
  

        </div>
    );
};

export default AddService;