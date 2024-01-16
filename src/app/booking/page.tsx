import Image from 'next/image'
import Button from '../components/Button'
import Link from 'next/link'
import Hero from '../components/Hero'

const page = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Hero
      height={400}
      isVisible={false}
      path='/asset/img/login.png'
      title='Reserve Your Slot'
      />
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="flex items-center justify-center p-12">
        

    <div className="mx-auto w-full h-full">
      <form action="" method="POST">
      
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <h3
                className="mb-3 block text-base font-medium text-tertiary"
              >
                Date
              </h3>

              <input
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <h3
                className="mb-3 block text-base font-medium text-tertiary"
              >
                Time
              </h3>
              <input
                type="time"
                name="time"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
  
    
        {/* <div className="mb-5 pt-3">
          <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Address Details
          </label>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="area"
                  id="area"
                  placeholder="Enter area"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="Post Code"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="mb-5 pt-3">
          <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Select Your Service
          </label>
        <details className="dropdown  h-fit w-fit">
    <summary className="m-1 btn btn-outline btn-secondary">Choose..</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </details>
  </div>
  {/* <div className="mb-5 pt-3">
          <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Select Your Artist
          </label>
        <details className="dropdown  h-fit w-fit">
    <summary className="m-1 btn btn-outline btn-secondary">Choose..</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </details>
  </div> */}
  
  <div className="mb-5">
  <label
            className="mb-5 block text-base font-semibold text-tertiary sm:text-xl"
          >
            Email Id or Number
          </label>

          <input
                  type="text"
                  name="email"
                  id="area"
                  placeholder="Enter email or number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

        <div className='text-center p-5 m-5 '>
          <Link href='/cart'>
          <Button
          title='Book Your Appointment'

          />
          </Link>
         
        
        </div>
      </form>
    </div>
  </div>
  </div>
  </section>
  )
}

export default page
