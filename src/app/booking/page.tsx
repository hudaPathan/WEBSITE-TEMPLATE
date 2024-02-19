"use client"
import Button from '../components/Button'
import Hero from '../components/Hero'
import { useState } from 'react'


  

const getTime= async()=> {
  let response= await fetch("http://localhost:3000/api/availabity", {cache:"no-store"})
  if (!response.ok){
    return {res:"Error"}
  }
  else{
    let data= await response.json()
    return data
  }
  
}
const getServices= async()=> {
  let response= await fetch("http://localhost:3000/api/services", {cache:"no-store"})
  if (!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  else{
    let data= await response.json()
    return data
  }
  
}
const page = async() => {

  const [date, setDate]=useState("");
  const [time, setTime]=useState("");
  const [service, setService]=useState("");
  const [email, setEmail]=useState("");
  const [contact, setContact]=useState("");
  const servicesApi= await getServices()
  console.log(servicesApi)

 
  const services = [
    {  title: "THREADING", details: servicesApi.result.filter((item: {category:string})=> item.category=== 'Threading').map((item: {category:string})=> item) },
    {  title: "WAXIN", details:servicesApi.result.filter((item: {category:string})=> item.category=== 'Waxing').map((item: {category:string})=> item)  },
    {  title: "SUGAR EPILATION", details: servicesApi.result.filter((item: {category:string})=> item.category=== 'Sugar Epilation').map((item: {category:string})=> item) },
    {  title: "FACIAL", details: servicesApi.result.filter((item: {category:string})=> item.category=== 'Facial').map((item: {category:string})=> item) },
    {  title: "MANICURE", details: servicesApi.result.filter((item: {category:string})=> item.category=== 'Manicure').map((item: {category:string})=> item)},
    {  title: "PEDICURE", details: servicesApi.result.filter((item: {category:string})=> item.category=== 'Pedicure').map((item: {category:string})=> item) },
    {  title: "MASSAGE", details: servicesApi.result.filter((item: {category:string})=> item.category=== 'Massage').map((item: {category:string})=> item) },


    // Add more services as needed
  ];
  
  

  const booking = async()=> {
    const data = {
      date: date,
      time: time,
      service: service,
      email: email,
      contact: contact
    };
    console.log(date,time,service,email,contact)
    const result = await fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      body: JSON.stringify(data)
    });

  }
  
  const bookingApi= await getTime()
  console.log(servicesApi)
  const slots = [
    {time: bookingApi.result.filter((item: {availability:string})=> item.availability=== 'true').map((item: {time:string, availability:string})=> {return item.time}) },
  
  ];
  console.log(slots)
 
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Hero
      height={400}
      isVisible={false}
      path='/asset/img/login.png'
      title='Reserve Your Slot'
      />
    <div>
    <div className="flex items-center justify-center p-12">
        

    <div className="mx-auto w-full h-full">
      <form action="" method="POST">
      
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <h3 className="mb-3 block text-base font-medium text-tertiary"> Date </h3>

              <input type="date" name="date" id="date" value={date} onChange={(e)=> setDate(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <h3 className="mb-3 block text-base font-medium text-tertiary"> Time </h3>
              <input
                type="time" name="time" id="time" value={time} onChange={(e)=> setTime(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div> */}
        </div>
  
        <div className="mb-5 pt-3">
          <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Time slots
          </label>
        <select value={service} onChange={(e)=> setService(e.target.value)} className="dropdown w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
    <option className="m-1 btn btn-outline btn-secondary">Choose..</option>
    {slots.map((time, index) => (
    <option key={index}>{time.time}</option>
    
  ))}
    
     
  </select>
  </div>
        
        <div className="-mx-3 flex flex-wrap">
          <div className='w-full px-3 sm:w-1/2'>
          
          <div className='mb-5 pt-3'><label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Service Type
          </label>
          <select value={service} onChange={(e)=> setService(e.target.value)} className="dropdown w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
    <option className="m-1 btn btn-outline btn-secondary">Choose..</option>
    {services.map((service, index) => (
          <option>{service.title}</option>
        ))}   
    
  </select></div>
  </div>
  <div className='w-full px-3 sm:w-1/2'>
          
          <div className='mb-5 pt-3'><label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Select Your Service
          </label>
          <select value={service} onChange={(e)=> setService(e.target.value)} className="dropdown w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
    <option className="m-1 btn btn-outline btn-secondary">Choose..</option>
        {services.map((service, index) => (
          <option>{service.title}</option>
        ))} 
  </select></div>
  </div>
        
  </div>
  
  <div className="mb-5">
  <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Email Id
          </label>

          <input value={email} onChange={(e)=> setEmail(e.target.value)} 
                  type="text"
                  name="email"
                  id="area"
                  placeholder="Enter email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
  <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Contact Number
          </label>

          <input value={contact} onChange={(e)=> setContact(e.target.value)} 
                  type="text"
                  name="email"
                  id="area"
                  placeholder="Enter number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

        <div className='text-center p-5 m-5 '>
          <Button
          action={booking}
          title='Book Your Appointment'
          />
                 
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  )
}

export default page
