import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TeamMembers } from '../components/TeamMembers'

export const page = () => {
  return (
<section    className="bg-white dark:bg-gray-900">
  <div    className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div    className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2    className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p    className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Meet our stylist </p>
      </div> 
      <div    className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        
          <TeamMembers
          name='Bonnie Green'
          description='Bonnie drives the technical strategy of the flowbite platform and brand'
          design='CEO & Web Developer'
          />

<TeamMembers
          name='Bonnie Green'
          description='Bonnie drives the technical strategy of the flowbite platform and brand'
          design='CEO & Web Developer'
          />
           <TeamMembers
          name='Bonnie Green'
          description='Bonnie drives the technical strategy of the flowbite platform and brand'
          design='CEO & Web Developer'
          />
           <TeamMembers
          name='Bonnie Green'
          description='Bonnie drives the technical strategy of the flowbite platform and brand'
          design='CEO & Web Developer'
          />
      </div>  
  </div>
</section>  )
}
export default page