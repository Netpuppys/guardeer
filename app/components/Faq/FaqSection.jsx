'use client'

import React, { useState } from 'react'
import GradientText from '../ui/GradientText'
import { GoChevronDown } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react"

const sectionsArray = [
    "General Information",
    "Challenge",
    "Trading Rules"
]

const sectionsArrayMobile = [
    "Trading",
    "General",
    "Challenge",
]

const data = [
  {
    question: "What is Guardeer Funding?",
    answer:
      "Guardeer Funding is a proprietary trading firm based in Hong Kong, offering simplified evaluation challenges for traders of all levels to help them succeed.",
  },
  {
    question: "How does Guardeer Funding work?",
    answer:
      "Guardeer Funding is a proprietary trading firm based in Hong Kong, offering simplified evaluation challenges for traders of all levels to help them succeed.",
  },
  {
    question: "Why should I join Guardeer Funding?",
    answer:
      "Guardeer Funding is a proprietary trading firm based in Hong Kong, offering simplified evaluation challenges for traders of all levels to help them succeed.",
  },
  {
    question: "Is there a free retry?",
    answer:
      "Guardeer Funding is a proprietary trading firm based in Hong Kong, offering simplified evaluation challenges for traders of all levels to help them succeed.",
  },
  {
    question: "What is the profit split for funded traders?",
    answer:
      "Guardeer Funding is a proprietary trading firm based in Hong Kong, offering simplified evaluation challenges for traders of all levels to help them succeed.",
  },
  {
    question: "Are swap-free accounts available?",
    answer:
      "Guardeer Funding is a proprietary trading firm based in Hong Kong, offering simplified evaluation challenges for traders of all levels to help them succeed.",
  },
];

const FaqSection = () => {
    const [ activeSection, setActiveSection ] = useState(sectionsArray[0])
    const [ activeSectionMobile, setActiveSectionMobile ] = useState(sectionsArrayMobile[1])
    const [ openSectionIndex, setOpenSectionIndex] = useState(0);

    const handleButtonClick = (index) => {
        if (openSectionIndex === index) {
            setOpenSectionIndex(null);
            return;
        }

        setOpenSectionIndex(index);
    };

  return (
    <div className='w-full flex flex-col md:flex-row items-start justify-center md:px-[10%] mt-10 md:mt-28 gap-10 md:gap-40'>
        <div className='w-fit h-fit hidden md:flex flex-row md:flex-col items-start justify-start gap-5'>
            {sectionsArray.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setActiveSection(item)}
                    className='text-left min-w-60 transition-all'
                >
                    <p className='leading-none font-semibold transition-all font-neuehaas text-[1.5rem]'>
                        {activeSection===item? 
                        <GradientText>
                            {item}
                        </GradientText> : <span className='font-normal transition-all'>{item}</span> }
                    </p>
                </button>
            ))}
        </div>
        <div className='w-full h-[3.75rem] border border-[#5E5E5E] rounded-xl md:hidden flex flex-row md:flex-col items-center justify-evenly gap-5'>
            {sectionsArrayMobile.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setActiveSectionMobile(item)}
                    className='text-left transition-all'
                >
                    <p className='leading-none font-medium transition-all font-neuehaas text-[1.4rem]'>
                        {activeSectionMobile===item? 
                        <GradientText>
                            {item}
                        </GradientText> : <span className='font-medium transition-all'>{item}</span> }
                    </p>
                </button>
            ))}
        </div>
        <div className='w-full md:w-fit h-fit'>
            <p className='text-[#8F8F8F] w-full px-8 text-center md:text-left font-medium text-[1.25rem] md:text-[1.5rem] font-ttc leading-snug md:leading-none'>
                Our Support Team is available{" "}
                <br className='md:hidden' />
                24/7 via live chat.
            </p>

            <div className="w-full md:max-w-[47rem] h-fit transition-all flex flex-col items-center gap-8 mt-6 md:mt-12">
                {data.map((item, id) => {
                const { ref, inView } = useInView({
                    threshold: 0.1,
                    triggerOnce: false, // Animation triggers only once
                });

                return (
                <motion.div
                    ref={ref}
                    initial={{ transform: "translateY(60px)", opacity: 0 }}
                    animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                    transition={{
                        delay: 0.2,
                        type: "spring", // Spring effect for smooth animation
                        stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                        damping: 10, // Controls how the spring settles (lower is more oscillatory)
                    }}
                    key={id}
                    className={`transition-all w-full`}
                >
                    <button
                        onClick={() => handleButtonClick(id)}
                        className={`w-full h-fit md:h-[4.2rem] rounded-full transition-all group hover:p-[3px]
                            ${openSectionIndex === id? "shadow-yellow-glow-sm bg-yellow-blue-gradient p-[3px]" : "bg-[#CFCFCF] p-[1.6px]"}`}
                    >
                        <div className="w-full py-3 md:py-0 h-full rounded-full flex items-center justify-between px-6 md:px-10 bg-black">
                            <p className="font-ttc text-[1.2rem] md:text-[1.4rem] font-medium leading-[1.5rem] md:leading-[1.6rem] text-[#8F8F8F] group-hover:text-white transition-all text-left md:text-left">
                                {openSectionIndex === id ? <GradientText>{item.question}</GradientText> : <span className="">{item.question}</span>}
                            </p>
                            <p className={`transition-all duration-500 text-[2rem] text-[#8F8F8F] group-hover:text-white ${openSectionIndex === id ? "rotate-180" : ""} `}>
                                <GoChevronDown />
                            </p>
                        </div>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${openSectionIndex === id ? "h-fit" : "h-0"}`}
                    >
                        <p className={`transition-all px-6 md:px-10 pt-4 md:pt-8 font-ttc text-[1rem] md:text-[1.4rem] font-medium text-[#C5C5C5]`}>
                            {item.answer}
                        </p>
                    </div>
                </motion.div>)
                })}
            </div>
        </div>
    </div>
  )
}

export default FaqSection