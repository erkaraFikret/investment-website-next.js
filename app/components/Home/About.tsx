import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { BsCheck2Square } from 'react-icons/bs'
import { BiMoney } from 'react-icons/bi'
import { GiSecurityGate } from 'react-icons/gi'
import AboutImg from '@/public/images/about.png'
import Image from 'next/image'
const About = () => {
    return (
        <div className='pt-20 pb-16 bg-[#001231]'>
            <SectionHeading heading='About Us' />
            {/* define grid system */}
            <div className='w-4/5 mt-14 md:mt-20 items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* text content */}
                <div>
                    <h1 className='text-[19px] md:text-[25px] text-white font-semibold'>A faster way to do just about anything</h1>
                    <p className='text-white text-opacity-60 mt-4'>Clarinet accustomed. Would legs of framework officers. We have to
                        morning like a contracting him, the the to said in need gradually wellfeigned.
                    </p>
                    {/* icon list */}
                    <div className='flex mt-8 items-center space-x-4'>
                        <div className='w-12 h-12 rounded-full bg-pink-700 flex items-center flex-col justify-center'>
                            <BsCheck2Square className='w-[1.3rem] h-[1.3rem] text-white' />
                        </div>
                        <div>
                            <h1 className='text-[16px] md:text-[22px] font-semibold text-white'>Licensed & Certified</h1>
                            <p className='mt-1 text-[15px] text-white text-opacity-70'>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div className='flex mt-8 items-center space-x-4'>
                        <div className='w-12 h-12 rounded-full bg-blue-700 flex items-center flex-col justify-center'>
                            <BiMoney className='w-[1.3rem] h-[1.3rem] text-white' />
                        </div>
                        <div>
                            <h1 className='text-[16px] md:text-[22px] font-semibold text-white'>Savings & Investment</h1>
                            <p className='mt-1 text-[15px] text-white text-opacity-70'>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div className='flex mt-8 items-center space-x-4'>
                        <div className='w-12 h-12 rounded-full bg-orange-500 flex items-center flex-col justify-center'>
                            <GiSecurityGate className='w-[1.3rem] h-[1.3rem] text-white' />
                        </div>
                        <div>
                            <h1 className='text-[16px] md:text-[22px] font-semibold text-white'>100% Secure Investment</h1>
                            <p className='mt-1 text-[15px] text-white text-opacity-70'>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                        </div>
                    </div>

                </div>
                {/* image content */}
                <div>
                    <Image src={AboutImg} alt='about-img'/>
                </div>
            </div>
        </div>
    )
}

export default About