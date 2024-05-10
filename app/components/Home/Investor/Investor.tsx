import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import InvestorCard from './InvestorCard'

const Investor = () => {
    return (
        <div className='pt-20 pb-16 bg-[#032055]'>
            <SectionHeading heading='Our Top Investors' />
            {/* define grid system */}
            <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12'>
                {/* Investor profile card  */}
                <div>
                    <InvestorCard images="/images/i1.jpg" invest="29024395" name="John"/>
                </div>
                {/* Investor profile card  */}
                <div>
                    <InvestorCard images="/images/i2.jpg" invest="19034893" name="Mikasa"/>
                </div>
                {/* Investor profile card  */}
                <div>
                    <InvestorCard images="/images/i3.jpg" invest="49034893" name="Webdev"/>
                </div>
                {/* Investor profile card  */}
                <div>
                    <InvestorCard images="/images/i4.jpg" invest="39034893" name="JoWarriorshn"/>
                </div>
                
            </div>
        </div>
    )
}

export default Investor