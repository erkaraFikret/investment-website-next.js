import React from 'react'
import Hero from './Hero/Hero'
import About from './About'
import Feature from './Feature/Feature'
import Price from './Price/Price'
import Advantage from './Advantage/Advantage'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Feature/>
            <Price/>
            <Advantage/>
        </div>
    )
}

export default Home