import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import AdvantageImg from '@/public/images/advantage.png'
import Image from 'next/image'

const Advantage = () => {
    return (
        <div className='pt-20 pb-16 bg-[#001232]'>
            <SectionHeading heading='Our Advantage' />
            {/* define grid system */}
            <div className='w-4/5 mx-auto mt-14 md:mt-20 items-center grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* text content */}
                <div>
                    <h1 className='text-lg md:text-2xl font-semibold text-white'>
                        We are Offering 100% Guarantee.
                    </h1>
                    <p className='text-white text-opacity-60 mt-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati doloremque 
                        fugit rem, pariatur cum dolorem accusamus laboriosam fugiat sint nihil minima 
                        possimus asperiores fuga iste dicta ipsa velit repudiandae quo.
                    </p>
                    <p className='text-white text-opacity-60 mt-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati doloremque 
                        fugit rem, pariatur cum dolorem accusamus laboriosam fugiat sint nihi
                    </p>
                </div>
                {/* img content */}
                <div>
                    <Image data-aos="zoom-out" data-aos-anchor-placement="top-center" src={AdvantageImg} alt="advantage img"/>
                </div>
            </div>
        </div>
    )
}

export default Advantage