import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Navbar from './components/Nabar/navbar';
import Footer from './components/Footer/footer';
import './App.css'
import SignupLogin from './views/signup-login/signup-login';
import Instructor from './views/instructor/instructor';
import Home from './views/home/home';
import About from './views/about/about';
import Courses from './views/courses/courses';
import Category from './views/category/category';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    
    <>
   <Navbar/>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/signup' element={<SignupLogin/>}/>
    <Route path='/login' element={<SignupLogin/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/instructor' element={<Instructor/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
