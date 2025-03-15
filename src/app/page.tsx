'use client'

import Image from "next/image";
import localFont from 'next/font/local'
import LiveTime from "../components/LiveTime";
import { TextFade } from "../components/animations/TextFade";
import { BlurIn } from "../components/animations/BlurIn";
import { PopIn } from "../components/animations/PopIn";
import { TextGradient } from "../components/animations/TextGradient";
import { motion, useInView, AnimatePresence, animate, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Marquee from "@/components/animations/Marquee";
import BlockSectionText from "@/components/main/BlockSectionText";
import ProjectPreviewCard from "@/components/main/ProjectPreviewCard";
import useMeasure from "react-use-measure";


const recklessNeue = localFont({ src: './fonts/Reckless-Neue-normal-100-100.otf' })
const figtreeRegular = localFont({ src: './fonts/figtree/Figtree-Regular.ttf' })
const figtreeBoldItalic = localFont({ src: './fonts/figtree/Figtree-BoldItalic.ttf' })

export default function Home() {

  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const headerStyle = `${recklessNeue.className} text-5xl lg:text-7xl text-wrap`

  const experience = [
    {
      duration: '2024 - Present',
      role: 'Senior Software Engineer',
      company: 'Diba Marketing Partners - Remote',
    },
    {
      duration: '2023 - 2024',
      role: 'Senior Software Engineer',
      company: 'Horizon Info Labs - Remote',
    },
    {
      duration: '2023 - Present',
      role: 'Senior Software Engineer',
      company: 'Estate Masters - Hybrid',
    },
    {
      duration: '2022 - 2023',
      role: 'Chief Operating Officer',
      company: 'Gemini Management Services - Full time',
    },
    {
      duration: '2021 - 2022',
      role: 'Software Engineer',
      company: 'Dogara Micro-Credit Services - Full time',
    },
    {
      duration: '2018 - 2021',
      role: 'Web Developer',
      company: 'Bitsweaver Limited - Full time',
    }
  ]

  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { once: true });

  const projects = [
    {
      id: 1,
      img: './previews/diba_foods.png',
      title: 'Diba Foods Chocolate Website',
      bg: '#6E5039'
    },
    {
      id: 2,
      img: './previews/governor.png',
      title: 'Governor Elias Okorno Portfolio',
      bg: '#242A28'
    },
    {
      id: 3,
      img: './previews/ulani.png',
      title: 'Ulani Art Group Website',
      bg: '#262526'
    },
    {
      id: 4,
      img: './previews/indigin.png',
      title: 'Indigin Group Website',
      bg: '#113056'
    },
  ]

  const FAST_SPEED = 10;
  const SLOW_SPEED = 45;

  const [duration, setDuration] = useState(FAST_SPEED);

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    console.log(width)

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
      });

    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-12 lg:col-span-10">
          <div className="banner pt-5 pb-0 h-screen overflow-hidden">
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-12 lg:col-span-5 relative h-full text-center lg:text-left pt-[11vh] lg:pt-[35vh]">
                <TextFade
                  direction="up"
                  className="pt-0 pb-5 items-center space-y-0"
                >
                  {/* <h1 className="text-2xl lg:text-7xl text-wrap">
                    Web design &amp; custom site development
                  </h1> */}
                  <h1 className={headerStyle}>
                    Web design &amp;
                  </h1>
                  <h1 className={headerStyle}>
                    custom site
                  </h1>
                  <h1 className={headerStyle}>
                    development
                  </h1>
                  <div className="lg:text-left w-full uppercase mt-10 lg:mt-5">
                    <TextFade direction="down">
                      <p className="">Expert Software Engineer</p>
                      <p className="">Helping You Build Beautiful And</p>
                      <p className="">Scalable Website Experiences</p>
                    </TextFade>
                  </div>
                </TextFade>

                <div className="lg:absolute lg:bottom-5 py-5 text-center lg:text-left">
                  <p className="text-[#7C3DFD] text-2xl">
                    <TextGradient content="Hello, David Here!" className="" /></p>
                  <BlurIn>
                    <LiveTime />
                  </BlurIn>
                </div>
              </div>
              {/* <div className="col-span-1"></div> */}
              <div className="col-span-12 lg:col-span-7 relative h-full">
                <BlurIn>
                  <div className="group/headshot relative h-full w-full">
                    <Image
                      className="h-auto w-5/6 lg:w-[50vw] grayscale group-hover/headshot:grayscale-0 transition ease-in-out duration-1000 absolute bottom-0 left-[50%] transform translate-x-[-50%] z-20"
                      src="./DAVID-EDEM-NDANU.png"
                      alt="David Edem Ndanu"
                      width={100}
                      height={100}
                      unoptimized
                      priority
                    />
                    <div className="w-[20em] h-[20em] lg:w-[35em] lg:h-[35em] absolute bottom-[5vh] lg:bottom-[25vh] left-[8vw] bg-slate-100 rounded-full opacity-[2%] z-10"></div>
                    <BlurIn delay={1.5} className="flex flex-col text-xs uppercase absolute bottom-15 -right-2 justify-center text-center gap-3">
                      {
                        'scroll'.split('').map((text, index) => {
                          return (
                            <span key={index} className="-my-1 font-bold">{text}
                            </span>
                          )
                        })
                      }
                      <svg className="my-4" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_26_5)">
                          <path d="M22.3369 7.04976e-08H21.6631C19.9016 -0.00018053 18.1574 0.346637 16.5299 1.02065C14.9025 1.69465 13.4238 2.68265 12.1782 3.92821C10.9327 5.17377 9.94465 6.65249 9.27065 8.27993C8.59664 9.90737 8.24982 11.6516 8.25 13.4131V30.5869C8.24982 32.3484 8.59664 34.0926 9.27065 35.7201C9.94465 37.3475 10.9327 38.8262 12.1782 40.0718C13.4238 41.3173 14.9025 42.3053 16.5299 42.9794C18.1574 43.6534 19.9016 44.0002 21.6631 44H22.3369C24.0984 44.0002 25.8426 43.6534 27.4701 42.9794C29.0975 42.3053 30.5762 41.3173 31.8218 40.0718C33.0674 38.8262 34.0553 37.3475 34.7294 35.7201C35.4034 34.0926 35.7502 32.3484 35.75 30.5869V13.4131C35.7502 11.6516 35.4034 9.90737 34.7294 8.27993C34.0553 6.65249 33.0674 5.17377 31.8218 3.92821C30.5762 2.68265 29.0975 1.69465 27.4701 1.02065C25.8426 0.346637 24.0984 -0.00018053 22.3369 7.04976e-08ZM34.375 30.4246C34.375 37.1621 28.9135 42.625 22.1746 42.625H21.824C20.2219 42.625 18.6355 42.3094 17.1553 41.6963C15.6752 41.0831 14.3303 40.1844 13.1975 39.0515C12.0647 37.9186 11.1662 36.5736 10.5532 35.0934C9.94022 33.6132 9.62482 32.0267 9.625 30.4246V13.5754C9.62482 11.9731 9.94027 10.3866 10.5533 8.90628C11.1664 7.42598 12.0651 6.08095 13.198 4.948C14.331 3.81506 15.676 2.91639 17.1563 2.30333C18.6366 1.69027 20.2231 1.37482 21.8254 1.375H22.176C28.9135 1.375 34.375 6.8365 34.375 13.5754V30.4246Z" fill="white" />
                          <path d="M22.2558 8.25H21.7429C21.0816 8.25036 20.4475 8.51331 19.9801 8.98103C19.5126 9.44876 19.25 10.083 19.25 10.7443V19.5071C19.25 20.8835 20.3665 22 21.7443 22H22.2571C22.9184 21.9996 23.5525 21.7367 24.0199 21.269C24.4874 20.8012 24.75 20.167 24.75 19.5057V10.7443C24.75 10.0827 24.4872 9.44831 24.0195 8.98055C23.5517 8.51279 22.9173 8.25 22.2558 8.25ZM23.375 19.25C23.375 19.6147 23.2301 19.9644 22.9723 20.2223C22.7144 20.4801 22.3647 20.625 22 20.625C21.6353 20.625 21.2856 20.4801 21.0277 20.2223C20.7699 19.9644 20.625 19.6147 20.625 19.25V11C20.625 10.6353 20.7699 10.2856 21.0277 10.0277C21.2856 9.76987 21.6353 9.625 22 9.625C22.3647 9.625 22.7144 9.76987 22.9723 10.0277C23.2301 10.2856 23.375 10.6353 23.375 11V19.25Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_5">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg className="animate-bounce" width="44" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.305001 0.306005C0.109225 0.502117 -0.000732422 0.7679 -0.000732422 1.04501C-0.000732422 1.32211 0.109225 1.58789 0.305001 1.78401L6.209 7.69401C6.437 7.92201 6.745 8.02401 7.043 7.99601C7.313 7.99601 7.582 7.89501 7.787 7.69001L13.694 1.78301C13.791 1.68602 13.8679 1.57089 13.9204 1.44418C13.9729 1.31747 13.9999 1.18166 13.9999 1.04451C13.9999 0.907354 13.9729 0.771545 13.9204 0.644833C13.8679 0.518121 13.791 0.402987 13.694 0.306005C13.597 0.209024 13.4819 0.132095 13.3552 0.0796089C13.2285 0.0271231 13.0927 0.000108716 12.9555 0.000108719C12.8183 0.000108722 12.6825 0.0271231 12.5558 0.0796089C12.4291 0.132095 12.314 0.209024 12.217 0.306005L6.997 5.52601L1.781 0.306005C1.68413 0.209008 1.56909 0.132057 1.44246 0.0795555C1.31583 0.0270535 1.18009 3.05176e-05 1.043 3.05176e-05C0.905916 3.05176e-05 0.770176 0.0270535 0.643544 0.0795555C0.516911 0.132057 0.40187 0.209008 0.305001 0.306005Z" fill="white" />
                      </svg>
                    </BlurIn>
                  </div>
                </BlurIn>
              </div>
            </div>
          </div>
          <div className="pt-[4em] lg:pt-[8em] pb-[4em] px-[1em] lg:px-0">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-6 group/samples lg:grayscale hover:grayscale-0">
                <div className="py-3 grid grid-cols-12 gap-3">
                  <div className="col-span-12 lg:col-span-7">
                    <div className="grid grid-cols-12 gap-3">
                      <PopIn className="col-span-4 my-card p-4 w-full bg-[#222222] flex justify-center">
                        <Image
                          className="transition ease-in-out duration-700 h-[2em] lg:h-[5em] w-auto"
                          src="./ulani.png"
                          alt="Ulani Logo"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="col-span-4 my-card p-4 w-full bg-[#222222] flex justify-center">
                        <Image
                          className="transition ease-in-out duration-700 h-[2em] lg:h-[5em] w-auto"
                          src="./indigin.png"
                          alt="Indigin Group Logo"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="col-span-4 my-card p-4 w-full bg-[#222222] flex justify-center">
                        <Image
                          className="transition ease-in-out duration-700 h-[2em] lg:h-[5em] w-auto"
                          src="./dwellys.png"
                          alt="Dwellys Logo"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="col-span-12 relative my-card p-4 w-full bg-[#222222] flex justify-center group/diba">
                        <Image
                          className="transition relative ease-in-out duration-700 w-full h-auto group-hover/diba:hidden group-hover/diba:opacity-0"
                          src="./diba_foods.png"
                          alt="Diba Foods Website"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                        <div className="rounded-xl overflow-hidden transition relative ease-in-out duration-700 w-full h-auto opacity-0 group-hover/diba:block group-hover/diba:opacity-100">
                          <Image
                            className="transition absolute ease-in-out duration-700 w-full h-full top-1 left-0"
                            src="./cocoa-fall.gif"
                            alt="Diba Foods Website"
                            width={100}
                            height={100}
                            unoptimized
                            priority
                          />
                          <Image
                            className="w-full h-auto relative"
                            src="./cocoa-fall.png"
                            alt="Diba Foods Website"
                            width={100}
                            height={100}
                            unoptimized
                            priority
                          />
                        </div>
                      </PopIn>
                      <PopIn className="group/item col-span-12 lg:col-span-8 h-auto lg:h-[18em] overflow-hidden my-card px-10 w-full bg-[#222222] flex flex-col justify-center gap-1">
                        <Image
                          className="transition ease-in-out duration-300 w-full group-hover/item:-translate-y-5"
                          src="./indigin-website-snippet1.png"
                          alt="Indigin Website Snippet 1"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                        <Image
                          className="transition ease-in-out duration-300 w-full group-hover/item:scale-130"
                          src="./indigin-website-banner.png"
                          alt="Indigin Website Banner"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                        <Image
                          className="transition ease-in-out duration-300 w-full group-hover/item:translate-y-5"
                          src="./indigin-website-snippet2.png"
                          alt="Indigin Website Snippet 2"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="cursor-pointer col-span-12 lg:col-span-4 my-card p-6 w-full bg-[#222222] flex flex-col justify-center items-center">
                        <p className="uppercase text-sm text-[#FFFFFF8C] text-center">
                          <span>Full Projects Below</span>
                          <svg className="animate-bounce mt-3 mx-auto" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_353_2625" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="32">
                              <path d="M32.0684 0H0.0683594V32H32.0684V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_353_2625)">
                              <g opacity="0.228527">
                                <path d="M12.8662 10.9609L16.0859 13.3609L19.2709 10.9609" stroke="white" strokeWidth="1.2268" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                            </g>
                          </svg>
                        </p>
                      </PopIn>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-5">
                    <div className="grid gap-3">
                      <PopIn className="my-card w-full h-[14em] overflow-hidden bg-[#222222]">
                        <Image
                          className="transition ease-in-out duration-700 w-full h-auto rounded-tl-xl ml-auto transform translate-x-5 translate-y-5 hover:-translate-y-80"
                          src="./ulani_homepage.jpeg"
                          alt="Ulani Website"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="my-card w-full h-[10em] overflow-hidden bg-[#222222] group-hover/samples:bg-[#6E25DB]">
                        <Image
                          className="transition ease-in-out px-8 duration-500 w-full h-auto rounded-xl transform translate-y-2 hover:-translate-y-60"
                          src="./hoot.jpeg"
                          alt="Hoot Website Page"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="my-card w-full h-[18em] relative overflow-hidden bg-[#222222] group-hover/samples:bg-[#0261D4] group/splitScroll">
                        <div className="absolute left-5 top-2 overflow-hidden h-[9em] w-full">
                          <Image
                            className="transition ease-in-out px-8 duration-500 w-full h-auto rounded-xl transform translate-y-2 group-hover/splitScroll:-translate-y-60"
                            src="./dwellys-website-snippet.png"
                            alt="Dwellys Website Snippet"
                            width={100}
                            height={100}
                            unoptimized
                            priority
                          />
                        </div>
                        <div className="absolute right-5 bottom-2 overflow-hidden h-[9em] w-full">
                          <Image
                            className="transition ease-in-out px-8 duration-500 w-full h-auto rounded-xl transform -translate-y-90 group-hover/splitScroll:-translate-y-40"
                            src="./dwellys-website-snippet.png"
                            alt="Dwellys Website Snippet"
                            width={100}
                            height={100}
                            unoptimized
                            priority
                          />
                        </div>
                      </PopIn>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="hidden lg:flex h-full items-center py-5 pl-5">
                  <TextFade
                    direction="up"
                    className="pt-0 pb-5 items-center space-y-0"
                  >
                    <h2 className={headerStyle}>
                      I am a Ghanaian
                    </h2>
                    <h2 className={headerStyle}>
                      Software Engineer who
                    </h2>
                    <h2 className={headerStyle}>
                      crafts solutions to the
                    </h2>
                    <h2 className={headerStyle}>
                      very detailed end.
                    </h2>
                    <div className="lg:text-left w-full uppercase mt-10">
                      <TextFade direction="down">
                        <p className="">Helping you build beautiful and</p>
                        <p className="">Scalable website experiences</p>
                      </TextFade>
                    </div>
                  </TextFade>
                </div>
                <div className="flex lg:hidden h-full items-center py-5 pl-5">
                  <TextFade
                    direction="up"
                    className="pt-0 pb-5 items-center space-y-0"
                  >
                    <h2 className={headerStyle}>
                      I am a Ghanaian Software Engineer who crafts solutions to the very detailed end.
                    </h2>
                    <div className="lg:text-left w-full uppercase mt-10">
                      <TextFade direction="down">
                        <p className="">Helping you build beautiful and</p>
                        <p className="">Scalable website experiences</p>
                      </TextFade>
                    </div>
                  </TextFade>
                </div>
              </div>
            </div>
            <div className="pt-[8em] w-full"></div>
            <div className="bg-[#333030] py-2 px-6 rounded-full max-w-max mb-8">
              <p className="text-lg uppercase text-white font-extrabold">About me</p>
            </div>
            <div className="pt-[1em] w-full"></div>
            <div className="grid grid-cols-12 gap-5 text-xl mt-5">
              <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-5">
                <BlurIn className="col-span-12 lg:col-span-6 relative my-card p-5 px-6 bg-[#3f3f3f48]">
                  <p>I&apos;m a <TextGradient content={'selectively skilled'} className={''} /> software engineer with strong focus on crafting digital solutions and seamless user experiences</p>
                  <div className="py-3"></div>
                  <button className="my-card py-1 px-4 flex space-x-2 items-center rounded-full bg-[#3f3f3fb9] text-base">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.49996 12.6666L5.54163 8.70829L6.64996 7.56038L8.70829 9.61871V3.16663H10.2916V9.61871L12.35 7.56038L13.4583 8.70829L9.49996 12.6666ZM4.74996 15.8333C4.31454 15.8333 3.94193 15.6784 3.63213 15.3686C3.32232 15.0588 3.16715 14.6859 3.16663 14.25V11.875H4.74996V14.25H14.25V11.875H15.8333V14.25C15.8333 14.6854 15.6784 15.0582 15.3686 15.3686C15.0588 15.6789 14.6859 15.8338 14.25 15.8333H4.74996Z" fill="white" />
                    </svg>
                    <span>Resume</span>
                  </button>
                </BlurIn>
                <BlurIn className="col-span-12 lg:col-span-6 relative my-card p-5 px-6 bg-[#3f3f3f48]">
                  <p className="uppercase"><TextGradient content={'Education'} className={''} /></p>
                  <div className="py-3"></div>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4">
                      <p className="text-[#7C7C7C] text-base">2015 - 2018</p>
                    </div>
                    <div className="col-span-8">
                      <p className="text-white">Bsc. Information Technology</p>
                      <p className="text-[#7C7C7C] mb-4 text-base">Accra Institute of Technology</p>
                      <p className="text-sm">First Class Honours</p>
                    </div>
                  </div>
                </BlurIn>
                <BlurIn className="col-span-12 lg:col-span-6 relative my-card p-5 px-6 bg-[#3f3f3f48]">
                  <p className="uppercase"><TextGradient content={'My playlist'} className={''} /></p>
                  <div className="py-2"></div>
                  <BlurIn>
                    <iframe style={{ borderRadius: '12px', marginBottom: '8px' }} src="https://open.spotify.com/embed/track/2twcZTB1udOEzDCPpTiOju?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </BlurIn>
                  <BlurIn>
                    <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6dSUujR460zx2N7868TuBI?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </BlurIn>
                </BlurIn>
                <BlurIn className="col-span-12 lg:col-span-6 relative my-card p-5 px-6 bg-[#3f3f3f48] flex flex-col justify-between">
                  <p className="uppercase"><TextGradient content={'motivation'} className={''} /></p>
                  <div className="">
                    <p className="text-white mb-4 font-semibold">Don&apos;t wait for things to happen, make them happen!</p>
                    <div className="py-2"></div>
                    <div className="flex flex-row justify-between">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 30C23.1755 30 25.6627 29.1227 27.3927 27.3927C29.1227 25.6627 30 23.1755 30 20L30 1.09278e-06L17.5 0L17.5 20H25C25 21.8012 24.6155 23.0989 23.8573 23.8573C23.0989 24.6155 21.8012 25 20 25" fill="#2E2E2E" />
                        <path d="M2.5 30C5.67547 30 8.16273 29.1227 9.89273 27.3927C11.6227 25.6627 12.5 23.1755 12.5 20L12.5 1.09278e-06L1.74846e-06 0L0 20H7.5C7.5 21.8012 7.11547 23.0989 6.35726 23.8573C5.5989 24.6155 4.30125 25 2.5 25" fill="#2E2E2E" />
                      </svg>
                      <div className="flex flex-col">
                        <p className="text-right"><TextGradient content={'- Dr. Thomas A. Ndanu'} className="" /></p>
                        <p className="text-right mt-1">
                          <span className="bg-[#252525] rounded-full py-1 px-3 text-base">My Dad 😅</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </BlurIn>
              </div>
              <BlurIn className="col-span-12 lg:col-span-4 relative my-card bg-[#3f3f3f48] p-5 px-6">
                <p className="uppercase"><TextGradient content={'Experience'} className={''} /></p>
                <div className="py-1"></div>
                <div className="lg:h-[19em] overflow-auto">
                  {
                    experience.map((exp, index) => (
                      <BlurIn key={index}>
                        <div className={`border-b border-b-[#3c3c3c] grid grid-cols-12 gap-3 py-5`}>
                          <div className="col-span-4">
                            <p className="text-[#7C7C7C] text-base">{exp.duration}</p>
                          </div>
                          <div className="col-span-8">
                            <p className="text-white">{exp.role}</p>
                            <p className="text-[#7C7C7C] text-base">{exp.company}</p>
                          </div>
                        </div>
                      </BlurIn>
                    ))
                  }
                </div>
              </BlurIn>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-12"
          ref={marqueeRef}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: 'easeInOut', duration: .8 }}
              key={'marquee1'}>
              <div className="relative w-screen h-[10em] lg:h-[20em] overflow-hidden mt-8">
                <Marquee initialValue={0} directionValue={-2000} durationVal={30}>
                  <BlockSectionText className="">
                    <h2 style={{}} className={`${figtreeRegular.className} uppercase text-[12vw] flex flex-row gap-10 items-center`}>
                      Select
                      <span className={`${figtreeBoldItalic.className}`}>Work</span>
                      <svg width="141" height="176" viewBox="0 0 141 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.76 125.832L114.111 124.199L112.043 135.779L101.468 130.626L95.9224 141L87.4577 132.832L78.9777 140.984L73.4515 130.6L62.8673 135.733L60.8204 124.149L49.1681 125.76L50.801 114.111L39.2211 112.043L44.3739 101.468L34 95.9224L42.1683 87.4577L34.0158 78.9779L44.4001 73.4515L39.267 62.8674L50.8507 60.8204L49.2396 49.1683L60.8889 50.801L62.9575 39.2211L73.532 44.3739L79.0776 34L87.5423 42.1683L96.0223 34.0158L101.548 44.4001L112.133 39.2671L114.18 50.8508L125.832 49.2396L124.199 60.8889L135.779 62.9575L130.626 73.532L141 79.0776L132.832 87.5424L140.984 96.0223L130.6 101.548L135.733 112.133L124.149 114.18L125.76 125.832Z" fill="url(#paint0_linear_679_57)" />
                        <defs>
                          <linearGradient id="paint0_linear_679_57" x1="34" y1="87.5" x2="141" y2="87.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7C3DFD" />
                            <stop offset="1" stopColor="#9A06CB" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="text-[#282828]">
                        Select
                      </span>
                      <span className={`${figtreeBoldItalic} text-[#282828]`}>Work</span>
                      <svg width="141" height="176" viewBox="0 0 141 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.76 125.832L114.111 124.199L112.043 135.779L101.468 130.626L95.9224 141L87.4577 132.832L78.9777 140.984L73.4515 130.6L62.8673 135.733L60.8204 124.149L49.1681 125.76L50.801 114.111L39.2211 112.043L44.3739 101.468L34 95.9224L42.1683 87.4577L34.0158 78.9779L44.4001 73.4515L39.267 62.8674L50.8507 60.8204L49.2396 49.1683L60.8889 50.801L62.9575 39.2211L73.532 44.3739L79.0776 34L87.5423 42.1683L96.0223 34.0158L101.548 44.4001L112.133 39.2671L114.18 50.8508L125.832 49.2396L124.199 60.8889L135.779 62.9575L130.626 73.532L141 79.0776L132.832 87.5424L140.984 96.0223L130.6 101.548L135.733 112.133L124.149 114.18L125.76 125.832Z" fill="url(#paint0_linear_679_57)" />
                        <defs>
                          <linearGradient id="paint0_linear_679_57" x1="34" y1="87.5" x2="141" y2="87.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7C3DFD" />
                            <stop offset="1" stopColor="#9A06CB" />
                          </linearGradient>
                        </defs>
                      </svg>
                      Select
                      <span className={`${figtreeBoldItalic}`}>Work</span>
                      <svg width="141" height="176" viewBox="0 0 141 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.76 125.832L114.111 124.199L112.043 135.779L101.468 130.626L95.9224 141L87.4577 132.832L78.9777 140.984L73.4515 130.6L62.8673 135.733L60.8204 124.149L49.1681 125.76L50.801 114.111L39.2211 112.043L44.3739 101.468L34 95.9224L42.1683 87.4577L34.0158 78.9779L44.4001 73.4515L39.267 62.8674L50.8507 60.8204L49.2396 49.1683L60.8889 50.801L62.9575 39.2211L73.532 44.3739L79.0776 34L87.5423 42.1683L96.0223 34.0158L101.548 44.4001L112.133 39.2671L114.18 50.8508L125.832 49.2396L124.199 60.8889L135.779 62.9575L130.626 73.532L141 79.0776L132.832 87.5424L140.984 96.0223L130.6 101.548L135.733 112.133L124.149 114.18L125.76 125.832Z" fill="url(#paint0_linear_679_57)" />
                        <defs>
                          <linearGradient id="paint0_linear_679_57" x1="34" y1="87.5" x2="141" y2="87.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7C3DFD" />
                            <stop offset="1" stopColor="#9A06CB" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="text-[#282828]">
                        Select
                      </span>
                      <span className={`${figtreeBoldItalic} text-[#282828]`}>Work</span>
                      <svg width="141" height="176" viewBox="0 0 141 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.76 125.832L114.111 124.199L112.043 135.779L101.468 130.626L95.9224 141L87.4577 132.832L78.9777 140.984L73.4515 130.6L62.8673 135.733L60.8204 124.149L49.1681 125.76L50.801 114.111L39.2211 112.043L44.3739 101.468L34 95.9224L42.1683 87.4577L34.0158 78.9779L44.4001 73.4515L39.267 62.8674L50.8507 60.8204L49.2396 49.1683L60.8889 50.801L62.9575 39.2211L73.532 44.3739L79.0776 34L87.5423 42.1683L96.0223 34.0158L101.548 44.4001L112.133 39.2671L114.18 50.8508L125.832 49.2396L124.199 60.8889L135.779 62.9575L130.626 73.532L141 79.0776L132.832 87.5424L140.984 96.0223L130.6 101.548L135.733 112.133L124.149 114.18L125.76 125.832Z" fill="url(#paint0_linear_679_57)" />
                        <defs>
                          <linearGradient id="paint0_linear_679_57" x1="34" y1="87.5" x2="141" y2="87.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7C3DFD" />
                            <stop offset="1" stopColor="#9A06CB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </h2>
                  </BlockSectionText>
                </Marquee>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: 'easeInOut', duration: .8 }}
              key={'marquee2'}
            >
              <div className="relative w-screen h-[20em] overflow-x-hidden mt-8">
                <motion.div ref={ref}
                  onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_SPEED);
                  }}
                  onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_SPEED);
                  }}
                  style={{ x: xTranslation }} className="absolute gap-4 left-0 flex">
                  {
                    [...projects, ...projects].map((project, index) => (
                      <ProjectPreviewCard key={index} details={project} />
                    ))
                  }
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div >
      </div >
    </>
  );
}
