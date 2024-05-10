import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { FaMoneyBill, FaMoneyBillTransfer, FaPiggyBank } from 'react-icons/fa6'
import { BiSupport } from 'react-icons/bi'

const Feature = () => {
    return (
        <div className='pt-20 pb-10 bg-[#032055]'>
            {/* section heading */}
            <SectionHeading heading="Why Choose Us" />
            {/* define grid system */}
            <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center'>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-600 rounded-md shadow-md'>
                        <FaMoneyBill className='mx-auto h-16 w-16 mt-8 text-white' />
                        <h1 className='text-base text-[16px] text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                            Fast Profit
                        </h1>
                        <p className='text-center text-white text-opacity-70'> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-red-600  rounded-md shadow-md'>
                        <FaPiggyBank className='mx-auto h-16 w-16 mt-8 text-white' />
                        <h1 className='text-base text-[16px] text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                        Instant Withdraw
                        </h1>
                        <p className='text-center text-white text-opacity-70'> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-green-600 rounded-md shadow-md'>
                        <FaMoneyBillTransfer className='mx-auto h-16 w-16 mt-8 text-white' />
                        <h1 className='text-base text-[16px] text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                        Multi-Currency
                        </h1>
                        <p className='text-center text-white text-opacity-70'> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-indigo-900  rounded-md shadow-md'>
                        <BiSupport className='mx-auto h-16 w-16 mt-8 text-white' />
                        <h1 className='text-base text-[16px] text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                        Customer Support
                        </h1>
                        <p className='text-center text-white text-opacity-70'> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature