import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

function ViewUser() {

    const {id}=useParams()

    const [user,setUser]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

    useEffect((e)=>{
        Axios.get(`http://localhost:9090/employee/get/${id}`).then(res=>{setUser(res.data)}).catch(err=>{console.log(err)})
    },[])

  return (
    <div className='container mt-5 w-50 shadow'>
        <div className='row'>
            <h1 className='text-center my-4'>User Details</h1>
            <div className='card'>
                <div className='card-header text-center'><h4>User Details of ID: {id}</h4></div>
                <div className='card-body container w-50 '>
                    <ul className='list-group'>
                        <li className='list-group-item'><b>First Name:</b> &nbsp; {user.firstName}</li>
                        <li className='list-group-item'><b>Last Name:</b> &nbsp; {user.lastName}</li>
                        <li className='list-group-item'><b>Email:</b> &nbsp; {user.email}</li>
                    </ul>
                </div>
            </div>
            <div className='text-center mt-3 mb-4'>
            <Link className='btn btn-primary w-25' to='/Body'>Home</Link>
            </div>
        </div>
    </div>
  )
}

export default ViewUser
