'use client'

import Link from 'next/link'
import React from 'react'

type TargetType = '_self' | '_blank' | '_parent' | '_top' | string;

const ActionButton = ({
    keyVal,
    link,
    name,
    target,
    className
}: {
    keyVal?: string,
    link: string,
    name: string,
    target?: TargetType
    className?: string
}) => {

    return (
        <Link href={link} target={target} className={`${className} ${keyVal} group`}>
            <button className={`cursor-pointer flex flex-row gap-2 items-center bg-transparent rounded-full transition ease-in-out duration-700`}>
                <div className='transition ease-in-out duration-700
                     group-hover:-translate-x-1
                     group-hover:opacity-0
                     overflow-hidden max-w-max'>
                    <svg className='w-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="url(#paint0_linear_688_55)" />
                        <defs>
                            <linearGradient id="paint0_linear_688_55" x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7C3DFD" />
                                <stop offset="1" stopColor="#9A06CB" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="transition ease-in-out duration-700 bg-white 
                    group-hover:bg-gradient-to-r group-hover:from-[#884dfe] group-hover:to-[#c321f9]
                    group-hover:-translate-x-1 grow
                      rounded-full w-full">
                    <p className='py-2 px-5 uppercase transition ease-in-out duration-700 text-slate-900 group-hover:text-white'>{name}</p>
                </div>
            </button>
        </Link>
    )
}

export default ActionButton