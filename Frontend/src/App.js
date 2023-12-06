import React from 'react'
import Body from './Components/Body'
import AddUser from './Components/AddUser'
import UpdateUser from './Components/UpdateUser'
import ViewUser from './Components/ViewUser'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/Body' Component={Body}></Route>
          <Route path='/AddUser' Component={AddUser}></Route>
          <Route path='/UpdateUser/:id' Component={UpdateUser}></Route>
          <Route path='/ViewUser/:id' Component={ViewUser}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
