import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';
import Hero from './components/Hero';
import Map from './components/Map';

export default function Home() {
  const background_color = '#f4decb';


  const handleClick = () => {
    console.log('Button clicked!');
  };  
  
  return (
    <main className="relative cursor-default  bg-quaternary" >
    <div 
    x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
    }">
     <Script src="/asset/js/main.js"/>
  
      <div className="bg-quaternary">
       
  <Hero/>
  <h3
          className="pt-8 pb-8 text-lg font-semibold uppercase  lg:text-4xl text-tertiary text-center "
        >
          Services We Offer
        </h3>
  <div
    className=" border-secondary grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 md:gap-0 md:pt-0 lg:grid-cols-2 bg-[#f8eee7]"
   >
     <div className="group rounded px-8 py-12 shadow hover:bg-primary bg-cover bg-no-repeat" 
    style={{
      backgroundImage: "url(/asset/img/hairstyling.jpeg",
      }}>
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28" >
        <div className="hidden group-hover:block">
          <Image width={100} height={100}
            src="/asset/img/hair-dryer.png"
            alt="Hair"
            style={{ filter: 'invert(100%)' }} 
          />
        </div>
        <div className="block group-hover:hidden">
          <Image width={100} height={100}
            src="/asset/img/hair-dryer.png"
            alt="Hair"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className=" pt-8 text-lg font-semibold uppercase text-secondary group-hover:text-yellow lg:text-xl"
        >
         Hair Styling
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-primary md:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    
    <div className="group rounded px-8 py-12 shadow hover:bg-primary bg-cover bg-no-repeat" 
    style={{
      backgroundImage: "url(/asset/img/bridal.jpeg",
      }}>
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28" >
        <div className="hidden group-hover:block">
          <Image width={100} height={100}
            src="/asset/img/makeup.svg"
            alt="Make Up Icon"
            style={{ filter: 'invert(100%)' }} 
          />
        </div>
        <div className="block group-hover:hidden">
          <Image width={100} height={100}
            src="/asset/img/makeup.svg"
            alt="Make Up Icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className=" pt-8 text-lg font-semibold uppercase text-secondary group-hover:text-yellow lg:text-xl"
        >
          Bridal Make-Up
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-primary md:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary bg-cover bg-no-repeat" style={{backgroundImage: "url(/asset/img/make-up.jpeg"}}>
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28" >
        <div className="hidden group-hover:block">
          <Image width={100} height={100}
            src="/asset/img/makeup.png"
            alt="Make Up"
            style={{ filter: 'invert(100%)' }} 
          />
        </div>
        <div className="block group-hover:hidden">
          <Image width={100} height={100}
            src="/asset/img/makeup.png"
            alt="Make Up"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className=" pt-8 text-lg font-semibold uppercase text-secondary group-hover:text-yellow lg:text-xl"
          

        >
         Make-Up
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-quaternary md:text-base ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary bg-cover" style={{backgroundImage: "url(/asset/img/spa.jpeg"}}>
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28" >
        <div className="hidden group-hover:block">
          <Image width={100} height={100}
            src="/asset/img/bath-tube.svg"
            alt="Bath Icon"
            style={{ filter: 'invert(100%)' }} 
          />
        </div>
        <div className="block group-hover:hidden">
          <Image width={100} height={100}
            src="/asset/img/bath-tube.svg"
            alt="Bath Icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className=" pt-8 text-lg font-semibold uppercase text-secondary group-hover:text-yellow lg:text-xl"
       
        >
         Skin Care
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
  <h1 className="pt-8  text-center text-lg font-semibold uppercase text-tertiary lg:text-4xl"
> Best Seller</h1>
  
  <div
      className="mx-auto px-12 grid w-full grid-cols-1 gap-10 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
    >
      <Link href="" className="shadow">
        <div
          style={{backgroundImage: "url(/asset/img/product-01.jpg)"}}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span
            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
          <span
            className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-secondary text-secondary px-6 py-2 text-center font-body text-sm font-bold uppercase  md:text-base"
            
            >Explore</span>
          
        </div>
        <div className="bg-primary py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-center text-tertiary"

            > Huda Beauty</span>
          <span className="block pt-2 font-body text-grey-20"
            ></span >
        </div>
      </Link>
      <Link href="" className="shadow">
        <div
          style={{backgroundImage: "url(/asset/img/product-02.jpg)"}}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span
            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
          <span
            className="absolute right-0 bottom-0 border-secondary text-secondary mr-4 mb-4 block rounded-full border-2 px-6 py-2 text-center font-body text-sm font-bold uppercase md:text-base"

            >Explore</span>
          
        </div>
        <div className="bg-primary py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-tertiary  text-center"
                      >  Bath and Body Works</span>

          <span className="block pt-2 font-body text-grey-20"
            ></span>
          
        </div>
      </Link>
      <Link href="" className="shadow">
        <div
          style={{backgroundImage: "url(/asset/img/product-03.jpg)"}}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span
            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
          <span
            className="absolute border-secondary text-secondary right-0 bottom-0 mr-4 mb-4 block rounded-full border-2  px-6 py-2 text-center font-body text-sm font-bold uppercase  md:text-base"

            >Explore</span>
          
        </div>
        <div className="bg-primary py-6 px-5 xl:py-8">
          <span className=" text-tertiary block font-body text-lg font-semibold  text-center"

            > Sephora </span>
          
          <span className="block pt-2 font-body text-grey-20"
            ></span>
          
        </div>
      </Link>
     
  </div>
  <div>
  </div>
  
  <div className="text-center py-3">
     {/* <Button label="View all" onClick={handleClick} /> */}
    </div>
   
  
  </div>
   </div> 

  
   
  </main>
  
    
   
  )
}
