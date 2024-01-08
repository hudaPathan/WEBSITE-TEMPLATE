import Image from "next/image"
import Link from "next/link"
type ButtonProps=
{
    title:string
    icon?:string
}
const Button = ({title, icon}:ButtonProps) => {
  const handleClick = () => {

  };  
  return (
    <div>

      <button type="button" className="text-quaternary border-quaternary border-2 bg-secondary hover:bg-primary hover:text-secondary focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-3 items-center"
     >

        {icon && <Image src={icon} alt={title} height={24} width={24} 
        />}
       
        <label>{title}</label>

        </button>
    </div>
  )
}

export default Button
