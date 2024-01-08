import Image from "next/image"
import Link from "next/link"
import Button from "../components/Button"

const page = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    {/* <Link href="\" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image className="mr-2" src="/asset/img/fanash.png" alt="logo" width={32} height={32}/>
        </Link> */}

<div className=" grid grid-cols-2" >      
          <div className="relative lg:max-w-md">
            <video autoPlay muted loop style={{ height:'500px', width: '500px'}} > 
            <source src="/asset/img/video.mp4"/>
            </video>
           </div>
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-quaternary">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create and account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />   
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />    
                    </div>
                    <div>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>   
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>   
                        <label className="ml-3"> Remember me</label>
                        </div>

                        <div className="ml-3 text-sm">
                        </div>
                    </div>
                    <Button
                    title="Create account"
                    />
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default page
