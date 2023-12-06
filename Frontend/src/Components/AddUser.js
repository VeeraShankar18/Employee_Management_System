import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

function AddUser() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:""
    })

    const handleChange=(e)=>
    {
      e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        Axios.post("http://localhost:9090/employee/add",user).then(res=>{navigate('/Body')}).catch(err=>{console.log(err)})
    }

  return (
    <div className='container mt-5 w-50 pb-4 pt-4 shadow-lg'>
    <form onSubmit={handleSubmit}>
      <h2 className='text-center'>Add User Details</h2>

      <label htmlFor='firstName' className='mt-4'>First Name:</label>
      <input type='text' name='firstName' class='form-control'
      value={user.firstName} onChange={handleChange}/>

      <label htmlFor='lastName' className='mt-4'>Last Name:</label>
      <input type='text' name='lastName' class='form-control'
      value={user.lastName} onChange={handleChange}/>

      <label htmlFor='email' className='mt-4'>Email:</label>
      <input type='text' name='email' class='form-control'
      value={user.email} onChange={handleChange}/>
      
      <div className='text-center mt-5'>
        <button className='btn btn-primary me-3 w-25'>Save</button>
        <Link className='btn btn-outline-danger ms-3 w-25' to='/Body'>Cancel</Link>
      </div>
    </form>

    </div>
  )
}

export default AddUser
