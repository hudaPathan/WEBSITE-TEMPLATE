"use client"
import React from 'react'
import Hero from '../components/Hero'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const page = () => {
   
  return (
    <div className='items-center'>  
        <Hero
        height={400}
        isVisible={false}
        path='/asset/img/hero_opening.png'
        title='Featured Job'

        />
        <div className='container p-5 m-5 md:m-5 bg-gray-400 border rounded-xl w-full md:w-[90%] mx-auto'>
    <div className='flex flex-col md:flex-row justify-between items-center -m-2'>
      <div className='md:mr-5 mb-5 md:mb-0'>
        <h3 className='inline-block px-2.5 py-1 text-xs text-white font-medium bg-tertiary uppercase rounded-md mb-2 md:mb-4'>
          Hair do
        </h3>
        <h1 className='text-xl text-black font-heading mb-2.5 font-bold leading-snug'>
          Hair Stylist
        </h1>
        <p>Remote <span className='md:mx-2'>FullTime</span></p>
      </div>
     
      
  
    </div>
  </div>

     
    </div>
  )
}

export default page
