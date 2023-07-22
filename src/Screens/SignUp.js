import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <div><Navbar /></div>
      <div className='container mt-5 w-50 border border-dark'>
        <form>
        <h2 className='heading'>Sign Up</h2>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label"> Full Name</label>
            <input type="email" className="form-control w-75" id="exampleInputName" />

          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control w-75" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label ">Profession</label>
          <select class="form-select w-75" aria-label="Default select example">
            <option selected disabled>select the option</option>
            <option value="1">Student</option>
            <option value="2">Teacher</option>
            <option value="3">others</option>
          </select>
          </div>
          <div><Link to="/login"><button type="submit" className="btn btn-dark mt-3 w-25 btn-signup">SignUp</button></Link></div>
          <div><Link to="/Login" className='alreadyuser'>Already an user</Link></div>

        </form>


      </div>

    </div>
  )
}
