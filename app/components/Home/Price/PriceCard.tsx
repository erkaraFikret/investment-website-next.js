import React from 'react'
import Button from '../../Helper/Button';

type Props = {
    bg: string;
    days: string;
    percentage: string;
    minInvest: string;
    maxInvest: string;
}

const PriceCard = ({ bg, days, percentage, minInvest, maxInvest }: Props) => {
    return (
        <div className={`${bg} p-6 text-center rounded-lg`}>
            <h1 className='text-[17px] font-bold md:text-[20p] text-white mt-8'>
                After {days} days
            </h1>
            <h1 className='w-4/5 mx-auto bg-orange-600 text-white text-[23px] font-bold p-4 rounded-lg mt-6'>
                {percentage}%
            </h1>
            <h1 className='mt-4 text-[20px] text-white mb-4'>Minimum Invest:${minInvest}</h1>
            <h1 className='mt-4 text-[20px] text-white mb-4'>Maximum Invest:${maxInvest}</h1>
            <div className="text-center mt-8">
                <Button text='Deposite $'/>
            </div>
        </div>
    )
}

export default PriceCard