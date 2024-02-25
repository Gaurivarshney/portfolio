import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Main() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
