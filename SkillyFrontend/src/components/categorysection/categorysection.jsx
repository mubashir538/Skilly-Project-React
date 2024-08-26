import React from 'react'
import "./categorysection.css"
import { assets } from '../../assets/app'

const CategorySection = () => {
  return (
    <>
    <div className="button">
        <div className="icon">
            <img src={assets.business_cat} alt="" />
        </div>
        <div className="text">
            <h1>Business</h1>
            <p>Web development refers to the building, 
                creating, and maintaining of websites. It 
                includes aspects such as web design, 
                web publishing, web programming, and 
                database management. It is the creation of an
                application that works over the internet
                i.e. websites</p>
        </div>
    </div>
    </>
  )
}

export default CategorySection