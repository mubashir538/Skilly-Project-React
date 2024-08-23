import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Navbar from './Nabar/navbar'
import Footer from './Footer/footer';
import './App.css'

function App() {

  return (
    <>
   <Navbar/>
   <div style={{height:"50vh"}}></div>
   <Footer/>
    </>
  )
}

export default App
