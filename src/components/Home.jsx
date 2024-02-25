// import { Button } from 'react-bootstrap'
import React from 'react'
import {motion} from 'framer-motion'
import Logo from '../images/logo.jpg'
import '../style.css'

export default function Home() {
  return (
    <div>
      <div className='bg-black md:m-auto rounded-br-[200px] md:my-[100px]  rounded-[20px] md:w-screen md:min-h-[70vh] bg-gradient-to-r  flex flex-col-reverse md:flex-row justify-center items-center'>
        <motion.div initial={{x: -50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}} 
        className='w-full p-4 md:w-[60%]  md:p-4 md:h-full md:ml-4 flex items-start justify-center flex-col'>
            <h1 className='text-6xl  font-semibold pb-3 text-white md:text-8xl'>Gauri Varshney</h1>
            <p className='text-md pb-3 text-gray-500 md:w-[80%] md:text-lg'>
As a web developer, I am exhibits a blend of technical prowess, creativity, and problem-solving skills. I am  proficient in various programming languages such as HTML, CSS, JavaScript, and possibly others like C++ and DSA.
I am likely familiar with frameworks and libraries like React</p>
            <div className='m-4 flex text-center justify-center'>
            <motion.button whileTap={{scale: 0.75}} className='min-w-10 h-12 rounded-lg text-white font-semibold shadow-md p-2 bg-blue-700 mb-4 mr-3'>Download Resume</motion.button>
            <motion.button whileTap={{scale: 0.75}} className='min-w-10 h-12 rounded-lg text-white font-semibold shadow-md p-2 bg-blue-700' ><a href='/contact'>Contact me</a></motion.button>
            </div>
        </motion.div>
        <motion.div initial={{x: 50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}} 
        className=' mb-3 md:p-4 md:h-full md:ml-[100px] w-full h-[400px]  md:w-[40%]'>
            <img src={Logo} alt="loading" className='md:h-full h-full w-full  md:w-[70%]'/>
        </motion.div>
      </div>
    </div>
  )
}
