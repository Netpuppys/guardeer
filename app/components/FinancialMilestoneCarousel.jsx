import GradientText from '@/Components/ui/GradientText';
import React from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import payout from "../../public/delete/payout.png"
import Image from 'next/image';

const FinancialMilestoneCarousel = () => {
  return (
    <div className='w-full mt-36'>
        <p className='text-[4rem] pb-2 leading-[4.5rem] text-center text-[#d9d9d9] font-neuehaas font-bold'>
            Achieve Your{" "}
            <GradientText>
                Financial Milestones
            </GradientText>
        </p>
        <p className='text-center leading-[1.5rem] text-[#8F8F8F] text-[1.5rem] font-ttc font-medium '>
            Take the first step with Guardeer Funding. Your journey toward financial
            <br/>
            success begins here!
        </p>
        <div className='flex items-center justify-end gap-8 px-8'>
            <button className='text-[2.5rem] text-[#6B6B6B] hover:text-white'>
                <BsChevronLeft />
            </button>
            <button className='text-[2.5rem] text-[#B4B4B4] hover:text-white'>
                <BsChevronRight />
            </button>
        </div>
        <div className='w-full mt-10 overflow-hidden flex items-center justify-center gap-[1.8rem] h-[18rem]'>
            {[1,1,1,1,1,1].map((_, id) => (
                <div key={id} className='h-full w-[28rem] min-w-[28rem] bg-[#171717] rounded-[1.3rem] overflow-hidden border-[1.3px] border-[#E5CD7C]'>
                    <Image
                        src={payout}
                        className='w-full h-full object-cover'
                        alt=''
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default FinancialMilestoneCarousel;