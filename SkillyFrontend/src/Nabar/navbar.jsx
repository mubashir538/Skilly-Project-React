import React from 'react'
import './navbar.css'
import logo from '../assets/1x/logo-small.png'

export const Navbar = () => {
  return (
    <>
    <div className="container-fluid navbar navbar-expand-md">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="nav-items collapse navbar-collapse" id="navbarText">
            <ul>
                <li className='selected'>Home</li>
                <li>Category</li>
                <li>Instructors</li>
                <li>Courses</li>
                <li>About</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
