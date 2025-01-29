'use client'

import { motion } from "motion/react"
import GradientText from "../ui/GradientText"
import gradientLine from "../../../public/ui/gradientLine.png"
import aboutUsbanner from "../../../public/background/aboutUsbanner.png"
import Image from "next/image"
import AnimatedContainer from "../ui/AnimatedContainer"
import { HiArrowLongRight } from "react-icons/hi2";
import doubleChevron from "../../../public/ui/doubleChevron.png"
import { useInView } from "react-intersection-observer"

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
            className="text-[#D9D9D9] text-[4.7rem] font-neuehaas font-bold leading-none"
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
            className="text-[#A3A3A3] text-[1.5rem] font-neuehaas leading-tight mt-4"
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
            className="w-full h-fit mt-4 mb-8"
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
            className="text-[#DEDEDE] text-[1.25rem] font-neuehaas leading-tight"
        >
            However, even the most skilled hunters can be hindered by a lack of resources. In this financial jungle, the biggest limitation can often be the starting capital.
        </motion.h2>
    )
}

const cardData = [
    {
        id: 1,
        text: "Create an account with Guardeer",
        color: "#0EC0C8",
        delay: 0,
    },
    {
        id: 2,
        text: "Buy a Fast Track, Regular or Swing Challenge",
        color: "#E5CD7C",
        delay: 0.2,
    },
    {
        id: 3,
        text: "Pass your Challenge & get funded!",
        color: "#0EC0C8",
        delay: 0.4,
    },
    {
        id: 4,
        text: "Manage real capital & get paid daily.",
        color: "#E5CD7C",
        delay: 0.6,
    },
]

const GlowingNumber = ({ number, color }) => {
    return (
        <p 
            style={{ 
                textShadow: `4.604px 8.288px 26.704px ${color}, 4.604px 8.288px 26.704px ${color}, 4.604px 8.288px 26.704px ${color}, 4.604px 8.288px 26.704px ${color}`,
                WebkitTextStrokeWidth: "1.7px",
                WebkitTextStrokeColor: color
            }}
            className="text-[6.9rem] leading-none text-black"
        >
            {number}
        </p>
    )
}

const DoubleChevron = ({ inView, delay }) => {
    return (
    <motion.div 
        initial={{ transform: "translateY(60px)", opacity: 0 }}
        animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
        transition={{
            delay: delay,
            type: "spring", // Spring effect for smooth animation
            stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
            damping: 10, // Controls how the spring settles (lower is more oscillatory)
        }}
        className={`w-fit h-fit`}
    >
        <Image
            src={doubleChevron}
            className="w-[3rem] h-fit"
            alt=""
        />
    </motion.div>
    )
}

const AnimatedCards = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });

    return (
        <div ref={ref} className="w-full hidden md:flex items-center justify-between gap-6 mt-20">
            {/* card 1 */}
            <motion.div 
                initial={{ transform: "translateY(60px)", opacity: 0 }}
                animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{
                    delay: 0,
                    type: "spring", // Spring effect for smooth animation
                    stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                    damping: 10, // Controls how the spring settles (lower is more oscillatory)
                }}
                className={`aspect-[6/5] w-[calc(25%-4.5rem)] border border-[#0EC0C8] rounded-[1.25rem] px-8 flex flex-col items-start justify-between py-6`}
            >
                <GlowingNumber
                    number={1}
                    color={"#0EC0C8"}
                />

                <p className="text-[1.4rem] text-[#DCDCDC] font-ttc font-semibold capitalize text-wrap">
                    Create an account with Guardeer
                </p>
            </motion.div>

            <DoubleChevron 
                delay={0.1}
                inView={inView}
            />

            {/* card 2 */}
            <motion.div 
                initial={{ transform: "translateY(60px)", opacity: 0 }}
                animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{
                    delay: 0.3,
                    type: "spring", // Spring effect for smooth animation
                    stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                    damping: 10, // Controls how the spring settles (lower is more oscillatory)
                }}
                className={`aspect-[6/5] w-[calc(25%-4.5rem)] border border-[#E5CD7C] rounded-[1.25rem] px-8 flex flex-col items-start justify-between py-6`}
            >
                <GlowingNumber
                    number={2}
                    color={"#E5CD7C"}
                />

                <p className="text-[1.4rem] text-[#DCDCDC] font-ttc font-semibold capitalize text-wrap">
                    Buy a Fast Track, Regular or Swing Challenge
                </p>
            </motion.div>

            <DoubleChevron 
                delay={0.4}
                inView={inView}
            />

            {/* card 3 */}
            <motion.div 
                initial={{ transform: "translateY(60px)", opacity: 0 }}
                animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{
                    delay: 0.6,
                    type: "spring", // Spring effect for smooth animation
                    stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                    damping: 10, // Controls how the spring settles (lower is more oscillatory)
                }}
                className={`aspect-[6/5] w-[calc(25%-4.5rem)] border border-[#0EC0C8] rounded-[1.25rem] px-8 flex flex-col items-start justify-between py-6`}
            >
                <GlowingNumber
                    number={3}
                    color={"#0EC0C8"}
                />

                <p className="text-[1.4rem] text-[#DCDCDC] font-ttc font-semibold capitalize text-wrap">
                    Pass your Challenge & get funded!
                </p>
            </motion.div>

            <DoubleChevron 
                delay={0.7}
                inView={inView}
            />

            {/* card 4 */}
            <motion.div 
                initial={{ transform: "translateY(60px)", opacity: 0 }}
                animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
                transition={{
                    delay: 0.8,
                    type: "spring", // Spring effect for smooth animation
                    stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                    damping: 10, // Controls how the spring settles (lower is more oscillatory)
                }}
                className={`aspect-[6/5] w-[calc(25%-4.5rem)] border border-[#E5CD7C] rounded-[1.25rem] px-8 flex flex-col items-start justify-between py-6`}
            >
                <GlowingNumber
                    number={4}
                    color={"#E5CD7C"}
                />

                <p className="text-[1.4rem] text-[#DCDCDC] font-ttc font-semibold capitalize text-wrap">
                    Manage real capital & get paid daily.
                </p>
            </motion.div>
        </div>
    )
}

const AboutCards = () => {
  return (
    <div className="w-full mt-28 md:mt-0">
        <AnimatedContainer>
            <div className="w-full h-fit md:pl-[3.8rem] md:pr-24 min-h-[36rem] relative flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20">
                <Image
                    src={aboutUsbanner}
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    alt=""
                />

                <div className="w-full md:w-1/2 relative z-10 px-8 pb-20 md:pb-0 md:px-0">
                    <p className="text-[#DCDCDC] font-neuehaas font-bold text-[1.25rem] md:text-[1.5rem]">
                        “ Our goal is to find talented traders and fund them with large trading capital. As a Guardeer   Funded Trader, you can earn more than you would by trading your own money. ”
                    </p>
                    <button
                        className="flex items-center mt-12 justify-between md:justify-center gap-4 border border-[#E5CD7C] rounded-full h-[4rem] md:h-[4.3rem] w-full md:w-fit px-6 md:px-24 leading-none text-[#F4F4F4] text-[1.5rem] font-neuehaas font-bold shadow-yellow-glow-sm md:shadow-none hover:shadow-yellow-glow-sm transition-all"
                    >
                        Buy Challenge
                        <span className="text-[2.5rem]">
                            <HiArrowLongRight />
                        </span>
                    </button>
                </div>

                <div className="w-full md:w-1/2 relative z-10 pt-40 md:pt-0 px-8 md:px-0">
                    <p className="text-[#DCDCDC] text-right text-nowrap font-neuehaas font-bold text-[2.6rem] md:text-[4.7rem] leading-none">
                        Why is{" "}
                        <GradientText>
                            Guardeer?
                        </GradientText>
                    </p>
                    <Image
                        src={gradientLine}
                        className="w-full mt-4 h-fit"
                        alt=""
                    />
                    <p className=" md:text-right text-[#DCDCDC] text-[1.25rem] md:text-[1.5rem] font-neuehaas md:pl-10 mt-[1.8rem] leading-tight">
                        Guardeer is a proprietary trading firm. Our goal is to find talented traders and fund them with large trading capital, which they would not normally have access to.{" "}
                        <br className="hidden md:block"/>
                        <br className="hidden md:block"/>
                        The profits you generate are split between you and us to create a win-win situation. As a Guardeer Funded Trader, you can earn more than you would by trading your own money, and we generate revenue by entrusting our capital to seasoned experts like you.
                    </p>
                </div>
            </div>
        </AnimatedContainer>

        <AnimatedCards />
    </div>
  )
}

export default AboutCards