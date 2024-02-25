import React, { useRef }  from 'react'

import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gai54mf', 'template_24qh8s1', form.current, {
        publicKey: 'OYdy5KdALa9VKr-kz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.warn('email sent successfully');
          alert("Email sent Successfully! 😊");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='mt-24 md:px-14 px-4 max-w-screen-2xl mx-auto bg-black rounded-xl min-h-[90vh] text-white'>
      <div className='pt-10 flex items-center justify-center'>
        <h1 className='text-xl font-medium'>You can contact me by sending me the email through the given form! 😊</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <div className='flex flex-col items-center justify-center pt-[70px]'>
        <div className='mb-4'>
            <label htmlFor="name " className='text-2xl'>Name: </label> <br />
            <input type="text" placeholder='Enter your name...' className='md:w-[600px] md:h-[50px] rounded-lg placeholder:p-4 placeholder:text-xl border border-black mt-5 text-slate-600 p-4 text-xl' name='my_name'/>
        </div>
        <div className='mb-4'>
            <label htmlFor="email" className='text-2xl'>Email: </label> <br />
            <input type="email" placeholder='Enter your email...' className='md:w-[600px] md:h-[50px] rounded-lg placeholder:p-4 placeholder:text-xl border border-black mt-5 text-slate-600 p-4 text-xl' name='user_name'/>
        </div>
        <div>
            <label htmlFor="name " className='text-2xl'>Message: </label> <br />
            <textarea as="text"  col='50' placeholder='Enter your name...' className='md:w-[600px] md:h-[50px] rounded-lg placeholder:p-4 placeholder:text-xl border  border-black mt-5 text-slate-600 p-4 text-xl' name='message' />
        </div>
        <div>
        <motion.button whileTap={{scale: 0.75}} className='w-[200px] mt-5  h-12 rounded-lg text-white font-semibold shadow-md p-2 bg-blue-700'><a >Send Email</a></motion.button>
        </div>
      
      </div>
      </form>
      <div className='flex justify-center text-2xl mt-10 mb-4'>
        <h1>Made By Gauri Varshney ❤️ </h1>
      </div>
    </div>
  )
}
