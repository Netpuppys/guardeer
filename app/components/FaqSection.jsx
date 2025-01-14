"use client";

import GradientText from "../../components/ui/GradientText";
import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

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

  return (
    <div className="w-full flex flex-col items-center justify-start mt-28">
      <p className="text-[4rem] text-[#d9d9d9] font-neuehaas font-bold text-center">
        Frequently Asked <GradientText>Questions</GradientText>
      </p>
      <p className="text-center leading-[1.5rem] text-[#8F8F8F] text-[1.5rem] font-ttc font-medium ">
        Our Support Team is available 24/7 via live chat.
      </p>

      <div className="w-[50rem] h-fit transition-all flex flex-col items-center gap-8 mt-12">
        {data.map((item, id) => (
          <div key={id} className={`transition-all w-full`}>
            <button
              onClick={() => handleButtonClick(id)}
              className={`w-full h-[4.2rem] rounded-full transition-all group hover:p-[3px]
                            ${
                              openSectionIndex === id
                                ? "shadow-yellow-glow-sm bg-yellow-blue-gradient p-[3px]"
                                : "bg-[#CFCFCF] p-[1.6px]"
                            }
                        `}
            >
              <div className="w-full h-full rounded-full flex items-center justify-between px-10 bg-black">
                <p className="font-ttc text-[1.4rem] font-medium text-[#8F8F8F] group-hover:text-white transition-all ">
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
                className={`transition-all px-10 pt-8 font-ttc text-[1.4rem] font-medium text-[#C5C5C5]`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[46rem] pt-4 flex items-center justify-end">
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
