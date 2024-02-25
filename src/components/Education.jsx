import React from "react";
import {motion} from 'framer-motion'
import edu from "../images/edu.jpg";
export default function Education() {
  return (
    <div className="my-24 md:my-[240px] md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
        <div className="lg:w-1/4">
          <h2 className="text-5xl font-semibold">Education Details..</h2>
          <p className="pt-4 text-slate-500">Hey! This is my Education Backgroud.</p>
        </div>
        <div className="w-full lg:w-3/4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
          <motion.div initial={{x: 50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}} 
           className="min-h-[300px] shadow-lg bg-slate-300 w-[250px] rounded-xl flex justify-center items-center flex-col p-4 hover:-translate-y-4 transition-all duration-300">
            <div>
              <img
                src={edu}
                alt=""
                className="h-[150px] w-[190px] rounded-lg"
              />
            </div>
            <div className="pl-3 pt-3">
              <h5 className="font-bold text-lg">High School</h5>
              <p>
                G.K Silver Stone Public School Chandausi, Sambhal Uttar Pradesh
              </p>
              <h4 className="font-bold text-lg text-slate-600">With 92%</h4>
            </div>
          </motion.div>
          <motion.div initial={{x: 50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}}  
          className="min-h-[300px] shadow-lg bg-slate-300 w-[250px] rounded-xl flex justify-center items-center flex-col p-4 hover:-translate-y-4 transition-all duration-300 md:mt-16">
            <div>
              <img
                src={edu}
                alt=""
                className="h-[150px] w-[190px] rounded-lg"
              />
            </div>
            <div className="pl-3 pt-3">
              <h5 className="font-bold text-lg">10+2 School</h5>
              <p>
                 Silver Stone Public School Chandausi, Sambhal Uttar Pradesh
              </p>
              <h4 className="font-bold text-lg text-slate-600">With 95%</h4>
            </div>
          </motion.div>
          <motion.div initial={{x: 50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{type:'tween', duration: '1'}}  
          className="min-h-[300px] shadow-lg bg-slate-300 w-[250px] rounded-xl flex justify-center items-center flex-col p-4 hover:-translate-y-4 transition-all duration-300">
            <div>
              <img
                src={edu}
                alt=""
                className="h-[150px] w-[190px] rounded-lg"
              />
            </div>
            <div className="pl-3 pt-3">
              <h5 className="font-bold text-lg">B.Tech</h5>
              <p>
               Currently doing B.Tech from Computer Science and Engineering
              </p>
              <h4 className="font-bold text-lg text-slate-600">with 9 sgpa</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
