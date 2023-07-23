import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import {Link,useNavigate} from 'react-router-dom'
export default function Login() {

let navigate =useNavigate();

const [credintals,setcredintals]=useState({
  email:"",
  password:""
})

const handleChange=(event)=>{
  setcredintals({...credintals,[event.target.name]:event.target.value})
}


// handle submit where is creditinals are checked and send the user on authorization to access the application.


const handleSubmit = async(e)=>{
   e.preventDefault();
   const response = await fetch("http://localhost:5000/api/login",{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
      },
     body:JSON.stringify({
      email:credintals.email,
      password:credintals.password
    }),
   });

   const json = await response.json();
   console.log(json);
   if(!json.success){
    console.log("Error occured");
    alert("Opps !! Try to Login with correct creditinals");
   }
   else{
    alert("Awesome!! You are logged in");
    navigate("/");
   }


}

  return (
    <div>
        <div><Navbar/></div>
         <div>
        <div className='container w-50 form-head border border-dark'>
      <form onSubmit={handleSubmit}>
        <h2 className='heading'>Log In</h2>
          <div className="mb-3">
            <label htmlForfor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credintals.email} onChange={handleChange}/>      
          </div>
          <div className="mb-3">
            <label htmlForfor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control w-75" id="exampleInputPassword1" name="password" value={credintals.password} onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-success w-25">Login</button>
           <Link to="/signup" className="btn btn-dark m-3 w-25">New User</Link>
        
       </form>
        
  </div>



    </div>
    </div>
  )
}
