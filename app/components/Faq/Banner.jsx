'use client'

import Image from 'next/image'
import React from 'react'
import faqBanner from "../../../public/background/faqBanner.png"
import GradientText from '../ui/GradientText'
import AnimatedContainer from '../ui/AnimatedContainer'

const Banner = () => {

  return (
    <div className='w-full h-[22rem]'>
        <AnimatedContainer>
            <div className='w-full h-full flex items-center justify-center flex-col px-8'>
                <Image
                    src={faqBanner}
                    className='w-full h-full absolute top-0 left-0 object-cover'
                    alt=''
                />

                <p className='text-[3.5rem] md:text-[4.7rem] font-semibold font-neuehaas z-10 relative leading-none'>
                    <GradientText>
                        FAQ
                    </GradientText>
                </p>
                <p className='text-[1.1rem] md:text-[1.5rem] text-center font-neuehaas z-10 relative'>
                    Find answers to your trading questions and get the
                    <br className='hidden md:block'/>
                    support you need to navigate the market with confidence.
                </p>
            </div>
        </AnimatedContainer>
    </div>
  )
}

export default Banner;