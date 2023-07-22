import React from 'react'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <div>
        <div><Navbar/></div>
         <div>
        <div className='container w-50 form-head border border-dark'>
      <form>
        <h2 className='heading'>Log In</h2>
          <div className="mb-3">
            <label htmlForfor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              
          </div>
          <div className="mb-3">
            <label htmlForfor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control w-75" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-success w-25">Login</button>
           <Link to="/signup" className="btn btn-dark m-3 w-25">New User</Link>
        
       </form>
        
  </div>



    </div>
    </div>
  )
}
