import React from 'react'
import skill from './Data'
export default function Skills() {
  console.log(skill)
  return (
    <div className='mt-24 md:my-[200px] md:px-14 px-4 max-w-screen-2xl mx-auto'>
      <div className=''>
        <h1 className='text-5xl font-semibold '>My Skills...</h1>
        <p className='text-slate-500 pt-4'>I am highly organized and skilled in managing  time and priorities effectively,  highly valued as a team member due to your willingness to listen to others, offer support, and actively contribute to group projects , I have also a leadership Quality.</p>
      </div>
      <div className='mt-10 flex items-center justify-center'>
        <marquee behavior={"scroll"} direction={"left"} scrollamount={"30"} loop={""}>
        <div className="lg:w-3/4 flex flex-row items-center justify-center gap-4">
            {
              skill?.map((item,key)=>(
                <div className="min-h-[230px] shadow-lg bg-slate-300 min-w-[200px] rounded-xl flex justify-center items-center flex-col p-4 hover:-translate-y-4 transition-all duration-300">
                  <img src={item.img} alt="" className='h-[100px] w-[140px] rounded-xl'/>
                  <h1 className='text-2xl font-semibold p-4'>{item.name}</h1>
                </div>
              ))
            }
        </div>
        </marquee>
      </div>
    </div>
  )
}
