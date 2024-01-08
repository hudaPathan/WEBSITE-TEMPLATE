
"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'


const page = () => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(int);
  }, []);

  // Dynamic image source
  const dynamicSrc = `/asset/img/image_${page}.png`;

  return (
    <main className='relative flex w-full flex-col justify-center items-center h-full'>
      <div className="relative flex w-full flex-col justify-center items-center h-96  ">
        <Image 
          src={dynamicSrc}
          width={500}
          height={500}
          alt={`Image${page}`}
          className='w-full h-full object-cover object-center'
        />

        <div className='absolute bottom-20 text-white left-10 py-3 px-8  '>
          <h2>Image {page}</h2>
        </div>
        <div
    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

      </div>
      

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/asset/img/image_1.png" width={500} height={500} alt=""/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/asset/img/image_2.png" width={500} height={500} alt=""/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/asset/img/image_3.png" width={500} height={500} alt=""/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/asset/img/image_4.png" width={500} height={500} alt=""/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/asset/img/hero.png" width={500} height={500} alt=""/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/asset/img/product-01.jpg" width={500} height={500} alt=""/>
    </div>
   </div>
   

      
      </main>


  
  )
}

export default page
