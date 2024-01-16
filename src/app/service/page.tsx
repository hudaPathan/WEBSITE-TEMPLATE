
import Image from "next/image"
import Link from "next/link"
import Button from "../components/Button"
import Service from "../components/Service"
import Hero from "../components/Hero"
import { THREADING, WAXING } from "../constants"




const page = () => {
  const services = [
    { path: "/asset/img/service1.png", title: THREADING.title, details: THREADING.details },
    { path: "/asset/img/service2.png", title: WAXING.title, details: WAXING.details },
    { path: "/asset/img/service3.png", title: "SUGAR EPILATION", details: THREADING.details },
    { path: "/asset/img/service4.png", title: "FACIAL", details: THREADING.details },
    { path: "/asset/img/service5.png", title: "MANICURE", details: THREADING.details },
    { path: "/asset/img/service6.png", title: "PEDICURE", details: THREADING.details },
    // Add more services as needed
  ];
  


  return (
    <main>
      <Hero
      path="/asset/img/hero_service.png"
      height={500}
      isVisible={false}
      title="Services we Offer"
      description="We provide best and comprehensive beauty services"
      />
    <div className="bg-white mx-auto px-12 grid w-full grid-cols-1 gap-10 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:gap-10">
    {services.map((service, index) => (
          <Service key={index} path={service.path} title={service.title} details={service.details} />
        ))}   


    </div>
    </main>
  )
}

export default page
