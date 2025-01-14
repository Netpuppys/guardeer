'use client'

import GradientText from '@/Components/ui/GradientText'
import React, { useState } from 'react'
import bigLogo from "../../public/logos/bigLogo.png"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";

const challenges = [
    {
        price: "10,000",
    },
    {
        price: "25,000",
    },
    {
        price: "50,000",
    },
    {
        price: "100,000",
    },
    {
        price: "200,000",
    },
]

const tableData = [
    {
      feature: "Challenge Period",
      phase1: "Unlimited",
      funded: "Indefinite",
    },
    {
      feature: "Profit Targets",
      phase1: "10%",
      funded: "X",
    },
    {
      feature: "Minimum Trading Days",
      phase1: "Minimum 3 Profitable Days",
      funded: "X",
    },
    {
      feature: "Inactivity",
      phase1: "30 Days",
      funded: "30 Days",
    },
    {
      feature: "Max Daily Loss",
      phase1: "4%",
      funded: "4%",
    },
    {
      feature: "Max Overall Loss",
      phase1: "6%",
      funded: "6%",
    },
    {
      feature: "Leverage",
      phase1: "1:50",
      funded: "1:50",
    },
    {
      feature: "Weekend Holding",
      phase1: "Yes",
      funded: "Yes",
    },
    {
      feature: "Refundable Fee",
      phase1: "100%",
      funded: "Refund",
    },
];
  

const ChooseYourChallenge = () => {
    const [ selectedChallenge, setSelectedChallenge ] = useState(2)

  return (
    <div className='w-full px-28 pt-[9rem]'>
        <p className='text-center leading-[4.5rem] font-neuehaas text-[4rem] font-bold  text-[#d9d9d9] '>
            Choose Your{" "}
            <GradientText>
                Challenge.
            </GradientText>
        </p>
        <p className='text-center leading-[1.5rem] pt-3 font-ttc font-medium text-[#8f8f8f] text-[1.5rem]'>
            We are establishing the new industry standard for transparent
        </p>

        <div className='w-full min-h-screen h-fit bg-yellow-blue-gradient rounded-[3rem] mt-24 p-[1.8px]'>
            <div className='w-full h-full bg-black rounded-[3rem] pt-[9rem] flex flex-col items-center justify-start'>
                <div className='w-full h-fit px-10'>
                    <div className='flex items-center justify-center gap-[1.8rem]'>
                        {challenges.map((item, id) => (
                            <button
                                key={id}
                                className={`w-[12.5rem] h-[3.7rem] rounded-full border border-[#E5CD7C] font-neuehaas font-semibold text-[1.4rem] flex items-center justify-center transition-all
                                    ${selectedChallenge===id? "bg-[#E5CD7C] text-[#222222]" : "bg-[#161616] text-[#E5CD7C]"}
                                `}
                                onClick={() => setSelectedChallenge(id)}
                            >
                                $ {item.price}
                            </button>
                        ))}
                    </div>

                    <div className="w-full mt-10 rounded-[3rem] overflow-hidden border-[1.8px] border-[#3D3D3D]">
                        <table className="w-full text-left ">
                            <thead>
                                <tr className="text-white h-[8.7rem] border-b-[1.8px] border-[#3d3d3d]">
                                    <th className="py-4 px-[3.8rem] w-1/3 bg-[#111111]">
                                        <Image
                                            src={bigLogo}
                                            className='h-[4.1rem] w-fit'
                                            alt='guardeer'
                                        />
                                    </th>
                                    <th className="text-center w-1/3 text-[#0EC0C8] text-[2rem] font-medium font-helvetica">
                                        Phase 1
                                    </th>
                                    <th className="text-center w-1/3 text-[#0EC0C8] text-[2rem] font-medium font-helvetica bg-[#111111]">
                                        Funded
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`text-gray-300 border-b-[1.8px] last:border-b-0 border-[#3d3d3d]`}
                                >
                                    <td className="h-[5.6rem] text-center w-1/3 bg-[#111111]">
                                        <div className='w-full h-full flex items-center justify-between pl-[3.8rem] pr-[1.7rem]'>
                                            <p className='text-[#D4D4D4] text-[1.5rem] font-helvetica font-medium '>
                                                {row.feature}
                                            </p>
                                            <button className='w-7 aspect-square flex items-center justify-center rounded-full text-[#383838] text-lg font-helvetica bg-[#0EC0C8]'>
                                                i
                                            </button>
                                        </div>
                                    </td>
                                    <td className="h-[5.6rem] text-center w-1/3 text-[#D4D4D4] text-[1.5rem] font-medium font-helvetica">
                                        {row.phase1}
                                    </td>
                                    <td className="h-[5.6rem] text-center w-1/3 bg-[#111111] text-[#D4D4D4] text-[1.5rem] font-medium font-helvetica">
                                        {row.funded}
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='w-full h-[7.8rem] bg-yellow-blue-gradient rounded-[3rem] mt-8 p-[1.8px]'>
                    <div className='w-full h-full rounded-[3rem] bg-black flex items-center justify-center'>
                        <button
                            className='h-[3.75rem] pl-8 bg-[#0EC0C8] flex items-center justify-between gap-10 rounded-full p-2'
                        >
                            <p className='text-[#222222] font-neuehaas font-semibold text-[1.4rem] '>
                                {"Purchase Now (Rs 22,040.90)"}
                            </p>
                            <div className='h-full aspect-square flex items-center justify-center bg-white rounded-full text-[#262626] font-bold font-neuehaas text-[1.4rem]'>
                                <GoArrowUpRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseYourChallenge