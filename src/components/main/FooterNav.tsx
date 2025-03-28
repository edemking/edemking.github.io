'use client'

import React from 'react'
import ActionButton from './ActionButton'
import Link from 'next/link'
import { AnimatePresence, motion, useInView } from 'framer-motion'


const FooterNav = ({ parsedClass }: { parsedClass: string }) => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="grid grid-cols-12 my-[2em]">
        <div className="col-span-12 px-5 lg:px-25">
          <AnimatePresence>
            {
              true &&
              <>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  exit={{ opacity: 0, y: 10 }} className="flex flex-col lg:flex-row gap-10 items-center my-[2em]">
                  <div className={`${parsedClass} py-2 px-4 bg-[#161616] rounded-full max-w-max w-full grow`}>
                    <p className='uppercase flex flex-nowrap text-center lg:text-left'>Don&apos;t Wait, Let&apos;s Create Together!</p>
                  </div>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, 'width': '0px' }}
                    animate={isInView ? { opacity: 1, 'width': '100%' } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='bg-white h-[1px] my-auto'></motion.div>
                </motion.div>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  exit={{ opacity: 0, y: 10 }} className={`${parsedClass} rounded-2xl bg-[#161616] py-3 lg:py-6 px-10 flex flex-col lg:flex-row justify-between`}>
                  <div className='flex flex-col lg:flex-row gap-2 lg:gap-4 items-center'>
                    <ActionButton keyVal={'emailMeBtn'} link='mailto:davidedemofc@gmail.com' name='Shoot Me An Email' target='_blank' className={''} />
                    <div className="h-full bg-white w-[1px]">
                    </div>
                    <div className='flex flex-col'>
                      <Link href={'tel:+233551760788'} className='group/number'>
                        <p className='text-base group-hover/number:text-transparent group-hover/number:bg-clip-text group-hover/number:bg-gradient-to-r from-[#7C3DFD] to-[#9A06CB]
                transition ease-in-out duration-700'>+233 55 176 0788</p>
                      </Link>
                      {/* <Link href={'tel:+233551760788'} className='group/number absolute top-10'>
                  <p className='text-base group-hover/number:text-transparent group-hover/number:bg-clip-text group-hover/number:bg-gradient-to-r from-[#7C3DFD] to-[#9A06CB]
                transition ease-in-out duration-700'>+233 55 176 0788</p>
                </Link> */}
                    </div>
                  </div>
                  <div className='bg-white h-[1px] w-1/4 my-3 mx-auto lg:hidden'></div>
                  <div className='flex flex-col lg:flex-row gap-2 items-center'>
                    <div className="h-full bg-white w-[1px]">
                    </div>
                    <div className='items-center flex flex-col lg:flex-row gap-3 lg:gap-5'>
                      <p className='text-base text-white
                transition ease-in-out duration-700'>
                        Designed by&nbsp;
                        <Link href={'https://degovernor.com'} target='_blank' className=''>
                          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#884dfe] to-[#c321f9]'>Governor</span>
                        </Link>
                      </p>
                      <p className='text-base text-white
                transition ease-in-out duration-700'>
                        Developed by&nbsp;
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#884dfe] to-[#c321f9]'>Moi</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            }
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default FooterNav