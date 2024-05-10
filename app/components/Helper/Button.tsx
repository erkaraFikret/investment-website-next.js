import React from 'react'

type Props = {
    text: string
}

const Button = ({text} : Props) => {
    return (
        <button
            className='rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r 
                    hover:from-yellow-500 hover:to-yellow-400 relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400
                    transition-all ease-out duration-300'>
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white
                        opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
            <span className='relative'>{text}</span>
        </button>
    )
}

export default Button