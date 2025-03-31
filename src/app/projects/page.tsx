'use client'

import React from 'react'
import { BlurIn } from "@/components/animations/BlurIn";
import localFont from 'next/font/local'
import SectionTitle from '@/components/main/SectionTitle';
import SectionParagraph from '@/components/main/SectionParagraph';
import Image from 'next/image';
import { AnimatePresence, motion} from 'framer-motion';

// import MagicCursor from "@/components/main/MagicCursor";

const recklessNeue = localFont({ src: '../fonts/Reckless-Neue-normal-500-100.otf' })
const recklessNeueNormal = localFont({ src: '../fonts/Reckless-Neue-normal-300-100.otf' })

const Page = () => {
    const sectionTitleClass = `${recklessNeue.className} section-title text-8xl lg:text-9xl`;
    // const ref = React.useRef(null);
    // const isInView = useInView(ref, { once: true });
    const projectTitle = `${recklessNeueNormal.className} text-2xl lg:text-4xl`;
    const projectDesc = `text-sm lg:text-xl`;
    // const [isHoveredMain, setIsHoveredMain] = useState(false)
    // const [isHoveredMin, setIsHoveredMin] = useState(false)

    const projects = [
        {
            id: 1,
            img: '/diba-chocolate-website.png',
            title: 'Diba Delight',
            desc: 'Chocolate website & e-commerce',
            link: 'https://foods.wearediba.com'
        },
        {
            id: 2,
            img: '/ulani-website.png',
            title: 'Ulani',
            desc: 'Art Group Website',
            link: 'https://ulani-website.vercel.app'
        },
        {
            id: 3,
            img: '/alfield-website.png',
            title: 'Alfield Engineering',
            desc: 'Engineering Company Website',
            link: 'https://alfieldeng.com'
        },
        {
            id: 4,
            img: '/governor-website.png',
            title: 'Governor',
            desc: 'Portfolio Website',
            link: 'https://degovernor.com'
        },
        {
            id: 5,
            img: '/indigin-website.png',
            title: 'Indigin',
            desc: 'Real Estate Group Website',
            link: 'https://indigin.com.gh'
        }
    ]

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-12 px-6 lg:px-25">
                    <motion.div className="banner w-full py-[10em] lg:py-[15em]">
                        <div className="flex justify-center h-full">
                            <div className="h-full w-full flex justify-center items-center">
                                <BlurIn className=''>
                                    {/* <h1 className={`${sectionTitleClass}`}>about me</h1> */}
                                    <SectionTitle className={`${sectionTitleClass}`} content='works' />
                                    {/* <SectionParagraph className={`text-xl lg:text-2xl font-extrabold`} content='Welcome to my gallery' /> */}
                                    <SectionParagraph className={`text-xl lg:text-xl font-light`} content='Crafting solutions that resonate with you' />
                                </BlurIn>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-12 gap-0 lg:gap-12">
                        <div className="col-span-12 mb-2 lg:mb-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: 0.7, ease: 'easeInOut', type: 'spring', bounce: 0.25 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="my-card p-4 lg:p-16 bg-[#141414]"
                                >
                                {/* {
                                    isHoveredMain && <MagicCursor />
                                } */}
                                {/* <MagicCursor /> */}
                                <div className="flex flex-col gap-8">
                                    <Image
                                        className='rounded-lg object-cover object-center'
                                        src={'/diba-chocolate-website.png'}
                                        alt="Diba Chocolate Website"
                                        width={1920}
                                        height={1080}
                                        unoptimized={true}
                                    />
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <h3 className={`${projectTitle}`}>Diba Delight</h3>
                                            <p className={`${projectDesc}`}>Chocolate website &amp; e-commerce</p>
                                        </div>
                                        <div className='h-full flex flex-col items-end'>
                                            <div className='px-6 py-2 bg-[#2a2a2a] backdrop-blur-3xl rounded-full text-white flex items-center max-h-max'>
                                                <span className='text-xs lg:text-base'>Web Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {
                                projects.map((project, idx) => {
                                    if (idx === 0) return null;
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.9, opacity: 0 }}
                                            key={idx} className="col-span-12 lg:col-span-6 my-2 lg:my-0"
                                            >
                                            <div className="my-card p-4 lg:p-16 bg-[#141414]">
                                                {/* {
                                                    isHoveredMin && <MagicCursor />
                                                } */}
                                                <div className="flex flex-col gap-8">
                                                    <Image
                                                        className='rounded-lg object-cover object-center w-full h-auto'
                                                        src={project.img}
                                                        alt={project.title}
                                                        width={100}
                                                        height={100}
                                                        unoptimized={true}
                                                    />
                                                    <div className="flex flex-row justify-between">
                                                        <div>
                                                            <h3 className={`${projectTitle}`}>{project.title}</h3>
                                                            <p className={`${projectDesc}`}>{project.desc}</p>
                                                        </div>
                                                        <div className='h-full flex flex-col items-end'>
                                                            <div className='px-4 lg:px-6 py-2 bg-[#2a2a2a] backdrop-blur-3xl rounded-full text-white flex items-center'>
                                                                <span className='text-xs lg:text-base'>Web Design</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Page
