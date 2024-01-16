import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TeamMembers } from '../components/TeamMembers'
import { link } from 'fs'
import Hero from '../components/Hero'



export const page = () => {

  const team = [
    {member:'Bonnie Green', des:'Bonnie drives the technical strategy of the flowbite platform and brand',designation:'CEO & Web Developer'},
    {member:'Bonnie Green', des:'Bonnie drives the technical strategy of the flowbite platform and brand',designation:'CEO & Web Developer'},
    {member:'Bonnie Green', des:'Bonnie drives the technical strategy of the flowbite platform and brand',designation:'CEO & Web Developer'},
    {member:'Bonnie Green', des:'Bonnie drives the technical strategy of the flowbite platform and brand',designation:'CEO & Web Developer'},

  ]
  return (
    <div>
      <Hero
      height={450}
      isVisible={false}
      title='Our Team'
      path='/asset/img/bg.png'
      description='Meet our Stylist'
      />
<section    className=" dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
     
      <div    className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
      {team.map((team, index) => (
          <TeamMembers key={index} name={team.member} design={team.designation} description={team.des} />
        ))} 
        
        
      </div>  
</section> 
</div> )
}
export default page