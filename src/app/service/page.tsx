
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
text="Your hair tells a story; make it a masterpiece"
/>
<Service
path="/asset/img/service2.jpeg"
title="By Our Hair Couture Stylist"
text="Your hair tells a story; make it a masterpiece"

/>
<Service
path="/asset/img/service1.jpeg"
title="By Our Hair Couture Stylist"
text="Your hair tells a story; make it a masterpiece"


/>

<Service
path="/asset/img/service1.jpeg"
title="By Our Hair Couture Stylist"
text="Your hair tells a story; make it a masterpiece"


/>

<Service
path="/asset/img/service1.jpeg"
title="By Our Hair Couture Stylist"
text="Your hair tells a story; make it a masterpiece"


/>


    </main>
  )
}

export default page
