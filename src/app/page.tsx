import Image from "next/image";
import localFont from 'next/font/local'
import LiveTime from "../components/LiveTime";
import { TextFade } from "../components/animations/TextFade";
import { TypingEffect } from "../components/animations/TypingEffect";
import { BlurIn } from "../components/animations/BlurIn";
import { PopIn } from "../components/animations/PopIn";

const recklessNeue = localFont({ src: './fonts/Reckless-Neue-normal-100-100.otf' })

export default function Home() {

  const headerStyle = `${recklessNeue.className} text-5xl lg:text-7xl text-wrap`
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
                  <TypingEffect text="Hello, David Here!" className="text-[#7C3DFD] text-2xl" />
                  <BlurIn>
                    <LiveTime />
                  </BlurIn>
                </div>
              </div>
              {/* <div className="col-span-1"></div> */}
              <div className="col-span-12 lg:col-span-7 relative h-full">
                <BlurIn>
                  <div className="relative h-full w-full">
                    <Image
                      className="h-auto w-5/6 lg:w-[50vw] grayscale hover:grayscale-0 transition ease-in-out duration-1000 absolute bottom-0 left-[50%] transform translate-x-[-50%] z-20"
                      src="./DAVID-EDEM-NDANU.png"
                      alt="David Edem Ndanu"
                      width={100}
                      height={100}
                      unoptimized
                      priority
                    />
                    <div className="w-[20em] h-[20em] lg:w-[35em] lg:h-[35em] absolute bottom-[5vh] lg:bottom-[25vh] left-[8vw] bg-slate-100 rounded-full opacity-[2%] z-10"></div>
                  </div>
                </BlurIn>
              </div>
            </div>
          </div>
          <div className="py-[6em]">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-6 group/samples grayscale hover:grayscale-0">
                <div className="py-3 grid grid-cols-12 gap-3">
                  <div className="col-span-7">
                    <div className="grid grid-cols-12 gap-3">
                      <PopIn className="col-span-4 my-card p-4 w-full bg-[#222222] flex justify-center">
                        <Image
                          className="transition ease-in-out duration-700 h-[5em] w-auto"
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
                          className="transition ease-in-out duration-700 h-[5em] w-auto"
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
                          className="transition ease-in-out duration-700 h-[5em] w-auto"
                          src="./dwellys.png"
                          alt="Dwellys Logo"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="col-span-12 my-card p-4 w-full bg-[#222222] flex justify-center">
                        <Image
                          className="transition ease-in-out duration-700 w-full h-auto"
                          src="./diba_foods.png"
                          alt="Diba Foods Website"
                          width={100}
                          height={100}
                          unoptimized
                          priority
                        />
                      </PopIn>
                      <PopIn className="group/item col-span-8 h-[18em] overflow-hidden my-card px-10 w-full bg-[#222222] flex flex-col justify-center gap-1">
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
                      <PopIn className="cursor-pointer col-span-4 my-card p-6 w-full bg-[#222222] flex flex-col justify-center items-center">
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
                  <div className="col-span-5">
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
              <div className="col-span-12 lg:col-span-6 h-full flex items-center py-5 pl-5">
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
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
