import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className='pt-20 pb-16 bg-[#001232]'>
            <SectionHeading heading='Latest Blog' />
            {/* define grid system */}
            <div className='w-4/5 mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <BlogCard image="/images/b1.jpg" title="10 Reason to Invest for your future"/>
                </div>
                <div>
                    <BlogCard image="/images/b2.jpg" title="5 Reason to Invest for your future"/>
                </div>
                <div>
                    <BlogCard image="/images/b3.jpg" title="7 Reason to Invest for your future"/>
                </div>
                
            </div>
        </div>
    )
}

export default Blog