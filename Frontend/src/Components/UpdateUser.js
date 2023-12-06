import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [user,setUser]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

    useEffect(()=>
    {
        Axios.get(`http://localhost:9090/employee/get/${id}`).then(res=>{setUser(res.data)}).catch(err=>{console.log(err)})
    },[])

    const handleChange=(e)=>
    {
      e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>
    {
      e.preventDefault();
      Axios.put(`http://localhost:9090/employee/update/${id}`,user).then(res=>{navigate('/Body')}).catch(err=>{console.log(err)})
    }

  return (
    <div className='container mt-5 w-50 pb-4 pt-4 shadow-lg'>
    <form onSubmit={handleSubmit}>
      <h2 className='text-center'>Edit User Details</h2>

      <label htmlFor='firstName' className='mt-4'>First Name:</label>
      <input type='text' name='firstName' className='form-control'
      value={user.firstName} onChange={handleChange}/>

      <label htmlFor='lastName' className='mt-4'>Last Name:</label>
      <input type='text' name='lastName' className='form-control'
      value={user.lastName} onChange={handleChange}/>

      <label htmlFor='email' className='mt-4'>Email:</label>
      <input type='text' name='email' className='form-control'
      value={user.email} onChange={handleChange}/>
      
      <div className='text-center mt-5'>
        <button className='btn btn-primary me-3 w-25'>Update</button>
        <Link className='btn btn-outline-danger ms-3 w-25' to='/Body'>Cancel</Link>
      </div>
    </form>

    </div>
  )
}

export default UpdateUser
