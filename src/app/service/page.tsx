
import Image from "next/image"
import Link from "next/link"
import Button from "../components/Button"
import Service from "../components/Service"



const page = () => {
  return (
    <main className="bg-quaternary mx-auto px-12 grid w-full grid-cols-1 gap-10 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

<Service
path="/asset/img/service1.jpeg"
title="By Our Makeover Stylist"
text="Makeup should never be used to hide yourself. It should be used to enhance your natural beauty"
/>
<Service
path="/asset/img/service2.jpeg"
title="By Our Hair Couture Stylist"
text="Your hair tells a story; make it a masterpiece"

/>
<Service
path="/asset/img/service3.jpeg"
title="By Our Skin Care Speacialist"
text="Skincare is like dieting. You have to invest time and effort. There is no instant miracle cure."


/>

<Service
path="/asset/img/service4.jpeg"
title="In our wellness center"
text="Relax, renew, rejuvenate!! the three Rs of a wonderful experience"


/>

<Service
path="/asset/img/service5.png"
title="By Our Nail Artists"
text="Why blend in when your nails can stand out?"


/>


    </main>
  )
}

export default page
