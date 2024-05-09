import Link from 'next/link'
import React from 'react'
import { FaXmark } from 'react-icons/fa6'

// props type
type Props = {
    closeNav: () => void;
    nav: boolean
}

const MobileNav = ({ nav, closeNav }: Props) => {

    const navOpenStyle = nav?"translete-x-0":"translate-x-[-100%]"


    return (
        <div className={`transform ${navOpenStyle} transition-all duration-500 fixed top-0 left-0 z-[200] right-0 bottom-0 h-screen bg-[#292078]`}>
            {/* close icon */}
            <FaXmark onClick={closeNav} className='w-8- h-8 top-8 right-8 absolute text-white z-[202] cursor-pointer' />
            {/* nav links */}
            <ul className='relative z-[201] space-y-10 flex flex-col items-center justify-center h-full'>
                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href="/">Home</Link>
                </li>
                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href="/">About</Link>
                </li>
                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href="/">Investmen</Link>
                </li>
                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href="/">Services</Link>
                </li>
                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href="/">Blog</Link>
                </li>
                <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav