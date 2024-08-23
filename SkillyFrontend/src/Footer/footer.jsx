import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/1x/logo.png'
import { Button, Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <>
    <div className='foothead'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="pages">
            <h1>Pages</h1>
            <p>Categories</p>
            <p>Instructors</p>
            <p>Courses</p>
            <p>About</p>
        </div>
        <div className="social">
            <h1>Social</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Github</p>
            <p>Youtube</p>
        </div>
        <div className="contact">
        <button class="btn-shine">
            <span>Contact Me</span>
        </button>
            <h1>Contact</h1>
            <p>Phone: 03232730519</p>
            <p>Email: mubashirahmed24500@gmail.com</p>
        </div>
    </div>
    <div className="foottail">
        <FontAwesomeIcon icon={faCopyright} />
        <p>Skilly 2024. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer