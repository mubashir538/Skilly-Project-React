import React from 'react'
import './instructor.css'
import InstructorSection from '../../components/instructorsection/instructorsection'
import SearchBar from '../../components/searchbar/searchbar'
const Instructor = () => {
  return (<>
    <div className="page-title">Instructor</div>
  <div className="instructors">
    <SearchBar placeholder={"Search Instructor"}/>
    <InstructorSection title="Programming" />
    <InstructorSection title="Business" />
  </div>
  </>
  )
}

export default Instructor