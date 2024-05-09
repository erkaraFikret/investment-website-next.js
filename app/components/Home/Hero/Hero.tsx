import React from 'react'
import HeroImage from '@/public/images/hero.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='lg:h-[88vh] md:h-[80vh] sm:h-[75vh] h-[70vh] bg-[#62269d] flex flex-col items-center justify-center'>
            {/* define grid system */}
            <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto'>
                {/* text content */}
                <div className="col-span-2">
                    <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-4 font-bold text-white leading-[2.4rem] md:leading-[4rem]'>
                        100% Secure <span className='text-yellow-400'>Investment</span> Plan
                    </h1>
                    <p className='text-[15px] md:text-[17px] text-white mb-8 opacity-90 font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur in blanditiis odit amet
                        voluptas voluptate deserunt, qui molestiae harum.
                    </p>
                    {/* input box */}
                    <div className='w-ful h-14 relative rounded-full bg-blue-950'>
                        <input type="text" placeholder='Enter your email' className='bg-transparent h-full w-[90%] ml-8 text-white outline-none' />
                    </div>
                    {/* submit btn */}
                    <button className='px-4 py-2 w-[40%] bg-blue-500 hover:bg-blue-700 transition-all duration-500 rounded-full mt-4 text-white'>
                        Submit
                    </button>
                </div>
                {/* image content */}
                <div className="col-span-3 hidden sm:block mx-auto">
                    <Image src={HeroImage} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Hero