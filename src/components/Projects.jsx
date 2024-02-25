import React from 'react'
import {project} from './Data'
import {motion} from 'framer-motion'
function Projects() {
    console.log(project)
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
      <div>
        <h1 className='text-5xl font-semibold '>My Projects....</h1>
      </div>
      <div>
        <div className='mt-10 flex-col items-center justify-center w-full'>
            {
                project?.map((item,key)=>(
                   <div className='bg-slate-300 shadow-xl flex flex-col-reverse md:flex md:flex-row items-center justify-center w-full md:h-[350px] mb-10 rounded-xl'>
                   <motion.div initial={{x: -50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}} 
                   className='md:w-[60%] p-2'>
                        <h1 className=' text-xl font-medium md:text-4xl md:font-semibold'>{item.name}</h1>
                        <h1 className='font-semibold pt-2 pb-2 text-blue-950'>Using {item.language}</h1>
                        <p className=' text-[10px] md:text-lg md:text-slate-500'>{item.para}</p>
                    <div>
                    <motion.button whileTap={{scale: 0.75}} className='min-w-10 mt-3 mb-3 h-12 rounded-lg text-white font-semibold shadow-md p-2 bg-blue-700'><a href={item.code}>Get Code</a></motion.button>
                    </div>
                    </motion.div>
                    <motion.div initial={{x: 50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}} >
                        <img src={item.img} alt="" className='w-[300px] h-[150px] p-3 md:w-[400px] md:h-[250px] rounded-xl'/>
                    </motion.div>
                   </div>
                ))
            }
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-semibold '>Get More Projects In Future 💕</h1>
      </div>
    </div>
  )
}

export default Projects
