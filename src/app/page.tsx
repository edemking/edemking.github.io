import Image from "next/image";
import localFont from 'next/font/local'
import LiveTime from "../components/LiveTime";
import { TextFade } from "../components/animations/TextFade";
import { TypingEffect } from "../components/animations/TypingEffect";
import { BlurIn } from "../components/animations/BlurIn";

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
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-6">
                    
              </div>
              <div className="col-span-12 lg:col-span-6 h-full flex items-center py-5">
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
