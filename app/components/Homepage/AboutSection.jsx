import React from 'react'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';
import GradientText from '../ui/GradientText';
import { IoChevronForward } from 'react-icons/io5';


const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{
          delay: 0.3,
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="w-full flex flex-col items-center justify-center md:px-60 md:py-20 mt-10"
    >
      <p className="font-neuehaas text-[3rem] md:text-[4rem] leading-[4.3rem] font-bold text-center">
        <GradientText>About</GradientText>{" "}
        Us
      </p>
      <p className="text-justify md:text-center text-[#B1B1B1] font-neuehaas text-[clamp(1rem,1.2vw,1.4rem)] tracking-wider pt-[1.5rem] md:text-nowrap">
        Imagine a world where skilled hunters stalk the financial markets, their knowledge and strategies honed
        <br className='hidden md:block'/>
        to razor sharpness. But unlike the traditional hunt, their prey isn't a physical creature - it's opportunity.
        <br className='hidden md:block'/>
        The opportunity to capitalize on market movements and turn calculated risks into rewards.
      </p>
      <p className="text-[#0EC0C8] text-justify md:text-center font-neuehaas text-[clamp(1rem,1.2vw,1.4rem)] tracking-wider pt-6 md:pt-[1.2rem] md:text-nowrap">
        However, even the most skilled hunters can be hindered by a lack of resources. In this financial jungle,
        <br className='hidden md:block'/>
        the biggest limitation can often be the starting capital.
      </p>
      <button
        className="flex items-center mt-[2.8rem] justify-center gap-1 w-full md:w-[20rem] bg-yellow-blue-gradient h-12 rounded-full text-black text-lg font-bold"
      >
        See More <IoChevronForward />
      </button>
    </motion.div>
  )
}

export default AboutSection