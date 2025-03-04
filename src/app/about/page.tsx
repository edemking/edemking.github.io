import React from 'react'
import { BlurIn } from "@/components/animations/BlurIn";

const Page = () => {
    return (
        <>
            <div className="h-screen w-screen justify-center items-center flex">

                <BlurIn>
                    <p className='text-3xl'>Coming Soon...</p>
                </BlurIn>
            </div>
        </>
    )
}

export default Page
