import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user,setUser]=useState({
        username:'',
        password:''
    })

    let navigate=useNavigate()

    const handleChange=(e)=>
    {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        if(user.username=="Employee" && user.password=="Employee123")
        {
            navigate('/Body')
        }
        else
        {
            alert("Wrong UserName or Password")
        }
    }

  return (
    <div className='container mt-5 w-50 shadow pt-5 pb-5'>
      <h1 className='text-center text-primary'><b>login Form</b></h1>
      <form action='#' onSubmit={handleSubmit}>
        <label className='mt-4' htmlFor='username'><b>UserName:</b></label>
        <input type='text' name='username' placeholder='UserName' className='form-control border-dark mt-1' autoComplete='off'
        value={user.username} onChange={handleChange}/>

        <label className='mt-3' htmlFor='password'><b>Password:</b></label>
        <input type='password' name='password' placeholder='Password' className='form-control border-dark mt-1' autoComplete='off'
        value={user.password} onChange={handleChange}/>

        <div className='text-center mt-5'>
        <button className='btn btn-primary w-50'><b>Login</b></button>
        </div>
      </form>
    </div>
  )
}

export default Login
