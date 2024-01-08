import Link from "next/link";
import Image from "next/image";

import Button from "./Button";
type ServiceProps={
  path:string;
  text:string;
  title:string;

}

export const Service = ({path,text,title}:ServiceProps) => {
  return (
    <div className="block bg-tertiary">
    <div className="mt-8 mb-8 rounded bg-yellow-lighter px-6 py-8 sm:mt-10 sm:mb-10 md:px-10">
    <h4 className="mt-0 font-body text-lg font-normal text-blue-dark dark:text-blue-dark sm:text-xl"> {text}</h4>
    <span className="block pt-2 font-body text-sm font-light text-blue-dark underline"> {title}</span>
    <div className="mt-8 mb-0 border-tertiary text-center ">
        <Image className="mt-3 mb-3 w-fit" src={path} width={500} height={500} alt=""/>
    <Button 
    title="Book Now"
    />
</div>    
</div>
</div>     
  )
}

export default Service;
