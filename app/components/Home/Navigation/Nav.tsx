import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import Button from '../../Helper/Button'


// props type

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className='h-[12vh] bg-[#62269d] shadow-md'>
            <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
                {/* logo */}
                <h1 className='text-[16px] md:text-[25px] font-bold text-white'>
                    <span className='text-[27px] md:text-[40px] text-yellow-300'>In</span>
                    Vestor
                </h1>
                {/* nav links */}
                <ul className='hidden lg:flex items-center space-x-10'>
                    <li className='text-[17px] font-semibold text-white transition-all duration-200 hover:text-yellow-400 cursor-pointer'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='text-[17px] font-semibold text-white transition-all duration-200 hover:text-yellow-400 cursor-pointer'>
                        <Link href="/">About</Link>
                    </li>
                    <li className='text-[17px] font-semibold text-white transition-all duration-200 hover:text-yellow-400 cursor-pointer'>
                        <Link href="/">Investment</Link>
                    </li>
                    <li className='text-[17px] font-semibold text-white transition-all duration-200 hover:text-yellow-400 cursor-pointer'>
                        <Link href="/">Services</Link>
                    </li>
                    <li className='text-[17px] font-semibold text-white transition-all duration-200 hover:text-yellow-400 cursor-pointer'>
                        <Link href="/">Blog</Link>
                    </li>
                    <li className='text-[17px] font-semibold text-white transition-all duration-200 hover:text-yellow-400 cursor-pointer'>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
                {/* login button and burger menu */}
                <div className='flex items-center space-x-4'>
                    {/* login button */}
                    <Button text='Login'/>
                    {/* burger menu */}
                    <FaBars onClick={openNav} className='w-8 h-8 text-white cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Nav