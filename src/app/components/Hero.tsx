import React from 'react'
import GetStarted from './GetStarted'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'
import Button from "./Button"


const Hero = () => {
    const bg_discount_gradient = 'bg-gradient-to-tr from-[#94618e] to-[#f4decb]'
    const text_gradient = 'bg-gradient-to-br from-[#f4decb] via-[#49274a]to-[#f4decb] text-transparent bg-clip-text';
  
  return (
  <div className=' bg-cover bg-no-repeat '
  style={{backgroundImage: "url(/asset/img/hero.jpg"}} >

    <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6 bg-no-repeat bg-cover`}>
   
    <div className="flex-1 flex justify-center  items-start flex-col xl:px-4 sm:px-16 px-6 ">
      {/* <div className={`flex flex-row items-center py-[6px] px-4 ${bg_discount_gradient} rounded-[10px] mb-2` }>
       <Image src="/asset/img/logo-apple.svg" width={32} height={32} alt="discount"></Image>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div> */}

      <div className="flex flex-row justify-between items-center w-full">
        
      <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full ${text_gradient} `}>Fanash</h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          {/* <GetStarted /> */}
        </div>
      </div>

      <h1 className=" font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Beauty
      </h1>
      <p className="text-white font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>

    </div>


    <div className="ss:hidden flex justify-center items-center px-2">
    <div className="flex gap-3">
            <Link href='/Datepicker'>
            <div className="hidden group-hover:block">
            <Button 
                title="Book Your Slot"
                icon="/asset/img/calendar-clicked.png"
                />
            </div>
            <div className="block group-hover:hidden">
            <Button 
                title="Book Your Slot"
                icon="/asset/img/calendar.png"
                />
            </div>
                
                      </Link>
    </div>
    </div>
  </section> 
  </div> )
}

export default Hero
