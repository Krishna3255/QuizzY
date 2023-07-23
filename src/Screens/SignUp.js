import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'




export default function SignUp() {

  // Dynamically collecting the data from the user 
  const [credintals, setcredintals] = useState({
    name: "",
    email: "",
    password: "",
    // profession:["Student","Faculty","Others"]
  });


  const handleChange = (event) => {

    setcredintals({ ...credintals, [event.target.name]: event.target.value });

  };

  // On submit the user details the stored in the database under user collection

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name:credintals.name,
          email:credintals.email,
          password:credintals.password,
          // profession:credintals.profession
        }),
    });

    const json = await response.json();
    console.log(json);

    if(!json.success){
      alert("nope an error occured !!");
    }
    else{
      alert("Successfully registered .... Log In")
    }

     



  };


  return (
    <div>
      <div><Navbar /></div>
      <div className='container mt-5 w-50 border border-dark'>
        <form onSubmit={handleSubmit}>
          <h2 className='heading'>Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label"> Full Name</label>
            <input type="text" className="form-control w-75" id="exampleInputName" name='name'
              value={credintals.name}
              onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" value={credintals.email} onChange={handleChange} name='email' />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control w-75" id="exampleInputPassword1" name='password' value={credintals.password} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label ">Profession</label>
            {/* <select class="form-select w-75" aria-label="Default select example">
              <option selected disabled>select the option</option>
              <option name='Student' value={credintals.profession } onChange={handleChange}  >Student</option>
              <option name='Teacher' value={credintals.profession} >Faculty</option>
              <option name='Others' value={credintals.profession} onChange={handleChange}>Others</option>
            </select> */}
          </div>
          <button type="submit" className="btn btn-dark mt-3 w-25 btn-signup">SignUp</button>
          <div><Link to="/Login" className='alreadyuser'>Already an user</Link></div>

        </form>


      </div>

    </div>
  )
}
