import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants'
import page from '../about/page'
import { pages } from 'next/dist/build/templates/app-page'
import Button from './Button'

const Footer = () => {
  return (
    <footer className='flexCenter pt-10 bg-cover' style={{ backgroundImage: "url('/asset/img/footer1.png')"}}>
      <div className='padding-container max-container flex w-full flex-col gap-14'>

        <div className='flex flex-col items-start px-5 justify-center gap-[5%] md:flex-row '>
        <Link href="/" className='mb-10'>
          <Image src="/asset/img/fanash.png" width={74} height={29} alt="fanash"></Image>
        </Link>

        <div className='flex flex-wrap mx-10 sm:justify-between md:flex-1'>
          {/* Page Links */}
           <FooterColumn title='Learn More'>
           <ul className="regular-14 flex flex-col gap-4 text-gray-600">
            {FOOTER_LINKS.map((link) => (
              <Link className=" flex flex-col gap-5 transition-all hover:font-bold"
                href={link.href} key={link.key}>{link.label} </Link>
            )

            )}
          </ul>
          </FooterColumn>
            {/* Contact */}
            <div className="flex flex-col gap-5 mx-10">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  
                  <Button
                  title={link.label}
                  /> 
                  // <Link
                  //   href="/"
                  //   key={link.label}
                  //   className="flex gap-4 md:flex-col lg:flex-row"
                  // >
                  //   <p className="whitespace-nowrap">
                  //     {link.label}:
                  //   </p>
                  //   <p className="medium-14 whitespace-nowrap text-blue-70">
                  //     {link.value}
                  //   </p>
                  // </Link>
                ))}
              </FooterColumn>
            </div>
              {/* Social Icons */}
            <div className="flex flex-col mr-4">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14  text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/"> 
                     <div className="flex items-center mb-5">
                    <Image className='mb-2'src={link.src} alt="logo" width={24} height={24} /> 
                    <span className="ml-1 mb-2 text-gray-600">{link.label}</span>
                    </div>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          
          </div>
        </div>

        <div className="border  border-gray-700" />
        <p className="regular-14 w-full text-center text-gray-30 pb-3">2023 Fanash Beauty | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer