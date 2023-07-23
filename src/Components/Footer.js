import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div>
     {/* <div class="position-absolute bottom-0 start-0"></div> */}
   
    <footer className="py-3 my-4 position-fixed w-100 bottom-0">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 bg-light text-dark ">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-dark text-dark">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-dark text-dark">Features</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-dark text-dark">Pricing</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-dark text-dark">FAQs</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-dark text-dark">About</Link></li>
    </ul>
    <p className="text-center text-body-dark text-dark">© {new Date().getFullYear()} QuizzY, Inc</p>
  </footer>
  

   
    </div>
  )
}
