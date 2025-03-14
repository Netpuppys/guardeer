"use client";

import GradientText from "../ui/GradientText";
import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react"

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
  const [openSectionIndex, setOpenSectionIndex] = useState(0);

  const handleButtonClick = (index) => {
    if (openSectionIndex === index) {
      setOpenSectionIndex(null);
      return;
    }

    setOpenSectionIndex(index);
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <div ref={ref} className="w-full flex flex-col items-center justify-start mt-14 md:mt-20 px-7">
      <motion.p 
        initial={{ transform: "translateY(60px)", opacity: 0 }}
        animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
        transition={{
            type: "spring", // Spring effect for smooth animation
            stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
            damping: 10, // Controls how the spring settles (lower is more oscillatory)
        }}
        className="text-[2.7rem] md:text-[4rem] text-[#d9d9d9] font-neuehaas font-bold text-center"
      >
        Frequently Asked <GradientText>Questions</GradientText>
      </motion.p>
      <motion.p 
        initial={{ transform: "translateY(60px)", opacity: 0 }}
        animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
        transition={{
            delay: 0.2,
            type: "spring", // Spring effect for smooth animation
            stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
            damping: 10, // Controls how the spring settles (lower is more oscillatory)
        }}
        className="text-center leading-[1.5rem] text-[#8F8F8F] text-[1.5rem] font-ttc font-medium "
      >
        Our Support Team is available 24/7 via live chat.
      </motion.p>

      <div className="w-full md:w-[50rem] h-fit transition-all flex flex-col items-center gap-8 mt-12">
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
                            ${
                              openSectionIndex === id
                                ? "shadow-yellow-glow-sm bg-yellow-blue-gradient p-[3px]"
                                : "bg-[#CFCFCF] p-[1.6px]"
                            }
                        `}
            >
              <div className="w-full py-3 md:py-0 h-full rounded-full flex items-center justify-between px-6 md:px-10 bg-black">
                <p className="font-ttc text-[1.2rem] md:text-[1.4rem] font-medium leading-[1.5rem] md:leading-[1.6rem] text-[#8F8F8F] group-hover:text-white transition-all text-left md:text-left">
                  {openSectionIndex === id ? (
                    <GradientText>{item.question}</GradientText>
                  ) : (
                    <span className="">{item.question}</span>
                  )}
                </p>
                <p
                  className={`transition-all duration-500 text-[2rem] text-[#8F8F8F] group-hover:text-white
                                ${openSectionIndex === id ? "rotate-180" : ""}
                            `}
                >
                  <GoChevronDown />
                </p>
              </div>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden
                        ${openSectionIndex === id ? "h-fit" : "h-0"}
                    `}
            >
              <p
                className={`transition-all px-6 md:px-10 pt-4 md:pt-8 font-ttc text-[1rem] md:text-[1.4rem] font-medium text-[#C5C5C5]`}
              >
                {item.answer}
              </p>
            </div>
          </motion.div>
          )
        })}
      </div>
      <div className="w-full max-w-[46rem] pt-6 flex items-center justify-end">
        <button className="flex items-center justify-center gap-1 text-[#EAEAEA] text-[1.4rem] font-medium">
          <span>Read All FAQs</span>
          <span className="text-[2rem]">
            <GoChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FaqSection;
