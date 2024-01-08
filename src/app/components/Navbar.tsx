"use client"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "../constants"
import Button from "./Button"
import React, { useState } from 'react';


const Navbar = () => {
  
  const Logo = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
      <div
        className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
          {isHovering ? (
            <Image src="/asset/img/user-clicked.png" width={30} height={30} alt="logo" />
          ) : (
            <Image src="/asset/img/user.png" width={30} height={30} alt="logo" />
          )}
      </div>
    );
  };
  return (
    <nav className=" flexBetween max-container pt-4   padding-container relative z-30 bg-quaternary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
      <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </button>
        </div> */}
          <Link href={"/"}>
            <Image src="/asset/img/fanash.png" width={74} height={29} alt="fanash"></Image>
          </Link>
          <ul className="hidden h-full gap-8 lg:flex items-ri py-3">
            {NAV_LINKS.map((link) => (
              <Link className=" hover:bg-tertiary hover:text-primary rounded-md px-3 py-2 text-sm font-medium regular-16 text-tertiary flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                href={link.href} key={link.key}>{link.label} </Link>
            )

            )}
          </ul>


          <div className="ss:hidden flex justify-center items-center px-2">

            <div className="flex gap-3">
              <Link href="/login">
                <Logo/>
              </Link>
              <Image width={32} height={32}
                src="/asset/img/menu.png"
                alt="Make Up Icon"
                className="inline-block cursor-pointer lg:hidden bg-white"
              />
            </div>


          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
