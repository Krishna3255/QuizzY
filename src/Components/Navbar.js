import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
      <Link className="navbar-brand text-dark fs-2 mx-2" to="/">QuizzY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarNav">
     </div>
      <div className='d-flex'>
      <Link className="btn btn-dark mx-1" aria-current="page" to="/SignUp">Sign Up</Link>
      <Link className="btn btn-dark mx-3" to="/login">Sing In</Link>
      </div>
  </div>
</nav>
    </div>
  )
}
