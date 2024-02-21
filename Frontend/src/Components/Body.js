import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Body() {

    const [employee,setEmployee]=useState([])

    useEffect(()=>{
      loadUsers()
    },[])

    const loadUsers=()=>
    {
      Axios.get("http://localhost:9090/employee/getAll")
      .then(response=>{setEmployee(response.data)})
      .catch(error=>{console.log(error)})
    }

    const handleDelete=(id)=>
    {
      Axios.delete(`http://localhost:9090/employee/delete/${id}`).then(res=>{loadUsers()}).catch(err=>{console.log(err)})
    }

  return (
    <div>
     <Header/>
    <div className='container mt-4'>
      <h2 className='text-center'>Employee Details</h2>
      <Link className='btn btn-primary w-25 mt-4' to='/AddUser'>Add New User</Link>
      <div className='mainTable text-center'>
      <table className='table table-bordered table-hover table-primary mb-5'>
        <thead className='tHead'>
            <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            employee.map((data,index)=>{
              return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td><Link to={`/ViewUser/${data.id}`} className='btn btn-primary me-5'>View</Link>
                        <Link to={`/UpdateUser/${data.id}`} className='btn btn-outline-primary'>Edit</Link>
                        <button className='btn btn-danger ms-5' onClick={()=>handleDelete(data.id)}>Delete</button>
                        </td>
                     </tr>
            })
          }
        </tbody>
      </table>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Body
