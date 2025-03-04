'use client'

import React, { } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { Rubik } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'


const NavbarNav = ({ parsedClass }: { parsedClass: string }) => {

  const activeLink = usePathname()

  const linkStyle = "p-2 px-3 lg:px-5 rounded-full uppercase font-medium text-sm transition ease-in-out duration-500"
  const paragraphStyle = "font-medium text-xs"

  return (

    <>
      {
        (
          <>
            <AnimatePresence>
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ ease: 'easeInOut', duration: .5 }}
                className="z-50 fixed w-full transition ease-in-out duration-700">
                <div className="grid grid-cols-12">
                  <div className="col-span-1"></div>
                  <div className="col-span-12 lg:col-span-10 py-8 px-2 lg:px-0">
                    <div className="flex flex-row justify-between items-center">
                      <Link href={'/'}>
                        <div className="bg-white rounded-full p-3">
                          <Image
                            className="h-[2em] w-[2em]"
                            src="/logo_icon.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            unoptimized
                            priority
                          />
                        </div>
                      </Link>
                      <div className={`font-sans bg-white p-1 flex flex-row items-center rounded-full gap-2`}>
                        <Link href={'/'} className={`${linkStyle} ${activeLink === '/' ? 'bg-black text-white' : 'text-black'}`}>
                          <p className={`${paragraphStyle} ${parsedClass}`}>My Profile</p>
                        </Link>
                        <Link href={'/about'} className={`${linkStyle} ${activeLink === '/about' ? 'bg-black text-white' : 'text-black'}`}>
                          <p className={`${paragraphStyle} ${parsedClass}`}>About Me</p>
                        </Link>
                        <Link href={'/projects'} className={`${linkStyle} ${activeLink === '/projects' ? 'bg-black text-white' : 'text-black'}`}>
                          <p className={`${paragraphStyle} ${parsedClass}`}>Projects</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )
      }
    </>
  )
}

export default NavbarNav