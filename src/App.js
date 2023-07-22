
import './App.css';
import React from 'react'
import Home from './Screens/Home'
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
 
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/SignUp" element={<SignUp/>} />
          <Route exact path="/Login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}

