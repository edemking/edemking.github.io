'use client'

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

type projectObj = {
    id: number,
    img: string,
    title: string,
    bg: string,
}

const ProjectPreviewCard = ({ details, className }: { details: projectObj, className?: string }) => {
    const ref = React.useRef(null);
    // const isInView = useInView(ref, { once: true });
    // console.log(isInView)
    return (
        <motion.div
            ref={ref}
            className={`${className} w-[25em] p-6 rounded-2xl overflow-hidden group/project-card transition ease-in-out duration-700 hover:translate-y-10`}
            style={{ backgroundColor: details.bg }}
        >
            <div className="w-auto h-[14em] relative z-10">
                <Image
                    className="object-contain relative transition ease-in-out duration-700 h-[14em] w-auto group-hover/project-card:blur-xl rounded-2xl"
                    src={details.img}
                    alt={details.title}
                    width={100}
                    height={100}
                    unoptimized
                    priority
                />
                <div className="absolute top-0 left-0 opacity-0 h-full w-full group-hover/project-card:opacity-100 flex flex-col justify-center items-center text-center transition ease-in-out duration-700 z-30">
                    {/* <p className='font-bold text-xl'>Work #{details.id}</p> */}
                    <p className='text-base font-bold text-white'>{details.title}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectPreviewCard;