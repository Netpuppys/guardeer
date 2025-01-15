import React from 'react'
import GradientText from '../ui/GradientText'
import Image from 'next/image'
import discordMiniLogo from "../../../public/logos/discordMiniLogo.png"
import discordLogo from "../../../public/logos/discordLogo.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";

const DiscordSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });

  return (
    <motion.div 
        ref={ref}
        initial={{ transform: "translateY(60px)", opacity: 0 }}
        animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
        transition={{
            type: "spring", // Spring effect for smooth animation
            stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
            damping: 10, // Controls how the spring settles (lower is more oscillatory)
        }}
        className='w-full flex items-center justify-center h-[25rem] gap-6'
    >
        <div className='overflow-hidden w-[70%] h-full rounded-3xl bg-yellow-blue-gradient p-[2px]'>
            <div className='w-full h-full rounded-3xl bg-black flex items-center justify-center'>
                <div className='h-full w-fit flex flex-col items-start justify-center pl-10 py-10'>
                    <p className='text-[2.3rem] font-neuehaas text-[#ebebeb] text-nowrap'>
                        Our{" "}<GradientText>close-knit community</GradientText>{" "}is always
                        <br/>
                        ready to support, and we organize
                        <br/>
                        regular events to keep things lively.
                    </p>
                    <Image
                        src={discordMiniLogo}
                        className='h-28 w-fit'
                        alt=''
                    />
                    <button
                        className='bg-[#0EC0C8] rounded-full px-12 flex items-center justify-center h-12 text-black text-[1.2rem] font-ttc font-bold '
                    >
                        Join Our Discord
                    </button>
                </div>
                <div className='h-full w-2/3'>
                    <Image
                        src={discordLogo}
                        className='h-full w-full object-cover'
                        alt=''
                    />
                </div>
            </div>
        </div>
        <div className='overflow-hidden w-[30%] h-full rounded-3xl bg-yellow-blue-gradient p-[2px]'>
            <div className='w-full h-full rounded-3xl bg-black flex flex-col items-center justify-center'>
                <p className='text-center text-nowrap text-[#ebebeb] text-[2.1rem] leading-[2.6rem] font-neuehaas '>
                    Join the Next Generation of
                    <br/>
                    Funded Traders
                </p>
                <p className='text-[#797979] font-ttc text-[1.4rem] font-medium pt-4'>
                    Let's Connect
                </p>
                <div className='flex items-center justify-center w-full gap-3 mt-12'>
                    {[1,1,1,1,1].map((_, id) => (
                        <div
                            key={id}
                            className='w-[2.7rem] aspect-square rounded-full bg-yellow-blue-gradient'
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default DiscordSection