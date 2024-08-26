import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Button, Container } from 'react-bootstrap';
import { assets } from '../../assets/app';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
    <div className='foothead'>
        <div className="logo">
            <img src={assets.logo} alt="logo" />
        </div>
        <div className="pages">
            <h1>Pages</h1>
            <p><Link to="/category">Categories</Link></p>
            <p><Link to="/instructor">Instructors</Link></p>
            <p><Link to="/courses">Courses</Link></p>
            <p><Link to="/about">About</Link></p>
        </div>
        <div className="social">
            <h1>Social</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Github</p>
            <p>Youtube</p>
        </div>
        <div className="contact">
        <button className="btn-shine">
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