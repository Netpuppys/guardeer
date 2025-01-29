'use client'

import { motion } from "motion/react"
import GradientText from "../ui/GradientText"
import gradientLine from "../../../public/ui/gradientLine.png"
import phone from "../../../public/background/phone.png"
import Image from "next/image"

const AnimatedHeading = () => {
    return (
        <motion.h2
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{
                delay: 0,
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="text-[#D9D9D9] text-[3.1rem] md:text-[4.7rem] font-neuehaas font-bold leading-none"
        >
            Meet{" "}
            <GradientText>
                Guardeer.
            </GradientText>
        </motion.h2>
    )
}

const AnimatedDescription = () => {
    return (
        <motion.h2
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{
                delay: 0.1,
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="text-[#A3A3A3] text-justify md:text-left md:text-[1.5rem] font-neuehaas leading-tight mt-4"
        >
            Imagine a world where skilled hunters stalk the financial markets, their knowledge and strategies honed to razor sharpness. But unlike the traditional hunt, their prey isn’t a physical creature – it’s opportunity. The opportunity to capitalize on market movements and turn calculated risks into rewards.
        </motion.h2>
    )
}

const AnimatedLine = () => {
    return (
        <motion.h2
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{
                delay: 0.2,
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="w-full h-fit mt-4 mb-4 md:mb-8"
        >
            <Image
                src={gradientLine}
                className="w-full h-fit"
                alt=""
            />
        </motion.h2>
    )
}

const AnimatedSubDescription = () => {
    return (
        <motion.h2
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{
                delay: 0.3,
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="text-[#0EC0C8] md:text-[#DEDEDE] text-justify md:text-left md:text-[1.25rem] font-neuehaas leading-tight"
        >
            However, even the most skilled hunters can be hindered by a lack of resources. In this financial jungle, the biggest limitation can often be the starting capital.
        </motion.h2>
    )
}

const AnimatedPhone = () => {
    return (
        <motion.h2
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{
                delay: 0.5,
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="w-full"
        >
            <Image
                src={phone}
                className="w-full h-fit"
                alt=""
            />
        </motion.h2>
    )
}

const Banner = () => {
  return (
    <div className="w-full md:pl-10 flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-[40%] px-[5%] md:px-0">
            <AnimatedHeading />
            <AnimatedDescription />
            <AnimatedLine />
            <AnimatedSubDescription />
        </div>
        <div className="w-full md:w-[calc(60%-3rem)] h-fit">
            <AnimatedPhone />
        </div>
    </div>
  )
}

export default Banner