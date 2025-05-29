import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newslatter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs
            </h3>
            <p className='text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis possimus numquam impedit neque </p>

            <div className='w-full space-x-4'>
                <input type="email"  name='email' placeholder='name@gmail.com' className='w-full block pl-3 py-1 border focus:outline-none mb-2'/>

               <input type="submit" value={"Subscribe"} className='w-full block pl-3 py-1 border focus:outline-none bg-[#3575E2] rounded-sm text-white cursor-pointer font-semibold' />
            </div>

            
        </div>


        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get Noticed Faster
            </h3>
            <p className='text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis possimus numquam impedit neque </p>

            <div className='w-full space-x-4'>
               

               <input type="submit" value={"Upload Your Resume"} className='w-full block pl-3 py-1 border focus:outline-none bg-[#3575E2] rounded-sm text-white cursor-pointer font-semibold' />
            </div>

            
        </div>
    </div>
  )
}

export default Newslatter