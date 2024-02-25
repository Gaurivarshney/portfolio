import React, { useState } from 'react'
import Logo from '../images/logos.png'
import { Link,NavLink } from 'react-router-dom'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { motion } from 'framer-motion';
export default function Navbar() {
    const [ismenu, setmenu]= useState(false);
    const handleMenu=()=>{
        setmenu(!ismenu);
    }

  return (
<>

     
   <div>
   <nav>
    <div className='w-screen h-[70px] flex items-center justify-between p-2 fixed left-0 right-0 top-0 z-[101] bg-white md:m-auto md:p-4 shadow-lg'>
         <div className='flex items-center '>
             <img src={Logo} alt="Loading...." className='w-16 h-15 rounded-full'/>
             <motion.span className='text-blue-950 font-bold text-xl' whileTap={{scale: 0.75}}><a href='/'>Gauri's Portfolio</a></motion.span>
         </div>
         <div>
             <ul
             className='hidden md:text-xl md:font-bold md:text-blue-950 md:flex md:items-start space-x-6'>
                 <motion.li whileTap={{scale: 0.75}}><a href='/home'>Home</a></motion.li>
                 <motion.li whileTap={{scale: 0.75}}><a href='/education'>Education</a></motion.li>
                 <motion.li whileTap={{scale: 0.75}}><a href='/skills'>Skills</a></motion.li>
                 <motion.li whileTap={{scale: 0.75}}><a href='/projects'>Projects</a>   </motion.li>
                 <motion.li whileTap={{scale: 0.75}}><a href='/contact'>Contact</a></motion.li>
             </ul>
         </div>
         <div className='hidden md:text-3xl md:font-bold md:text-blue-950 md:flex md:items-start space-x-6'>
             <motion.span whileTap={{scale: 0.75}}><a href='https://www.linkedin.com/in/gauri-varshney-89bb42230' ><FaLinkedin /></a></motion.span>
             <motion.span whileTap={{scale: 0.75}}><a href='https://github.com/Gaurivarshney'><FaGithub/></a></motion.span>
         </div>
         <div className='md:hidden'>
            <motion.button onClick={handleMenu} whileTap={{scale: 0.75}}>
            {
                 ismenu?(<ImCross className='text-blue-950 text-xl'/>): (<IoMenu className='text-blue-950 text-3xl'/>)
             }
            </motion.button>
         </div>
     </div>
    </nav>
   </div>
   
    <div className='mt-16'>
     <ul className={` text-blue-950 font-semibold text-xl bg-slate-200 p-4 space-y-3  ${ismenu? "block relative  top-0 left-0 right-0": "hidden"} md:hidden`}>
                 <li><a href='/home'>Home</a></li>
                 <li><a href='/education'>Education</a></li>
                 <li><a href='/skills'>Skills</a></li>
                 <li><a href='/projects'>Projects</a></li>
                 <li><a href='/contact'>Contact</a></li>
             </ul>
     </div>
</>
  )
}
