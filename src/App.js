import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from './components/Main'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App ">
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Main/>}/>
          <Route path="/home" element={<Main/>}/>
          <Route path="/education" element={  <Education/>}/>
          <Route path="/skills" element={ <Skills/>}/>
          <Route path="/projects" element={  <Projects/>}/>
          <Route path="/contact" element={  <Contact/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
