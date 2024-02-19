
import { TeamMembers } from '../components/TeamMembers'
import Hero from '../components/Hero'

const getJobs= async()=> {
  let response= await fetch("http://localhost:3000/api/teams", {cache:"no-store"})
  if (!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
    return {res:"Error"}
  }
  else{
    let data= await response.json()
    return data
  }
  
}

export const page = async () => {

  const serviceApi= await getJobs()
   console.log(serviceApi)
   const teams=[
    {details:serviceApi.result.map((item: {name:string, description:string, design:string})=> item)}
    // design:serviceApi.result.map((item: {design:string})=> item.design),
    // description:serviceApi.result.map((item: {description:string})=> item.description)}
]
const team = [
  { name: 'Bonnie Green', description: 'Bonnie drives the technical strategy of the flowbite platform and brand', design: 'CEO & Web Developer' },
  { name: 'Bonnie Green', description: 'Bonnie drives the technical strategy of the flowbite platform and brand', design: 'CEO & Web Developer' },
  { name: 'Bonnie Green', description: 'Bonnie drives the technical strategy of the flowbite platform and brand', design: 'CEO & Web Developer' },
  { name: 'Bonnie Green', description: 'Bonnie drives the technical strategy of the flowbite platform and brand', design: 'CEO & Web Developer' },
];


  return (
    <div>
      <Hero
        height={500}
        isVisible={true}
        title='Our Team'
        path='/asset/img/bg.png'
        description='Meet our Stylist'
      />
      <section className="dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

         

            {teams.map((teamMembers, index) => (
            <TeamMembers
              key={index}
              name={teamMembers.details.name}
              design={teamMembers.details.description}
              description={teamMembers.details.design}
            />
          ))}

          
{team.map((teamMembers, index) => (
            <TeamMembers
              key={index}
              name={teamMembers.name}
              design={teamMembers.design}
              description={teamMembers.description}
            />
          ))}

        
        </div>
      </section>
    </div>
  )
}

export default page