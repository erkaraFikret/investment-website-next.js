"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Price from './Price/Price'
import Advantage from './Advantage/Advantage'
import Investor from './Investor/Investor'
import Review from './Review/Review'
import Blog from './Blog/Blog'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        const initAos = async () => {
            await import('aos')
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: "top-bottom"
            })
        }
        initAos()
    }, [])

    return (
        <div>
            <Hero />
            <About />
            <Feature />
            <Price />
            <Advantage />
            <Investor />
            <Review />
            <Blog />
        </div>
    )
}

export default Home