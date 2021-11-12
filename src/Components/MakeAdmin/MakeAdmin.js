import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {
    
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="makeadmin">
            <h1 className="makeadmin-title text-sucess"> Make Admin</h1>
        <div className="proceed-orders">
        <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("email")} placeholder = "Enter Email "/>
      
      
      <input type="submit" className="btn btn-success"/>
    </form>   
        </div>
        </div>
    );
};

export default MakeAdmin;