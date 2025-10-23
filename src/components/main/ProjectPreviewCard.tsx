"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type projectObj = {
  id: number;
  img: string;
  title: string;
  bg: string;
  link: string;
};

const ProjectPreviewCard = ({
  details,
  className,
}: {
  details: projectObj;
  className?: string;
}) => {
  const ref = React.useRef(null);
  // const isInView = useInView(ref, { once: true });
  // console.log(isInView)
  return (
    <motion.div
      ref={ref}
      className={`${className} w-[35em] p-6 rounded-2xl overflow-hidden group/project-card transition ease-in-out duration-700 hover:translate-y-10`}
      style={{ backgroundColor: details.bg }}
    >
      <div className="w-full h-auto relative z-10 m-auto">
        <Image
          className="object-contain relative transition ease-in-out duration-700 h-auto w-full group-hover/project-card:blur-xl rounded-2xl m-auto"
          src={details.img}
          alt={details.title}
          width={100}
          height={100}
          unoptimized
          priority
        />
        <div className="absolute top-0 left-0 opacity-0 h-full w-full group-hover/project-card:opacity-100 flex flex-col justify-center items-center text-center transition ease-in-out duration-700 z-30">
          {/* <p className='font-bold text-xl'>Work #{details.id}</p> */}
          <p className="text-lg font-bold text-white">{details.title}</p>
          <a
            href={details.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            View Project
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreviewCard;
