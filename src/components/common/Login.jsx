import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const{register,handleSubmit,formState:{errors}}=useForm();
  const naviagate=useNavigate();

  const submitHandler=(data)=>
  {
    localStorage.setItem("tokan","qwertghjkmjnbfdsd");
    naviagate("/user")
  }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
           <input type="text" {...register("name")}/>
            <input type="password" {...register("password")}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
