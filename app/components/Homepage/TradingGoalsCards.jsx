'use client'

import Image from "next/image"
import tradingGoalsBackground from "../../../public/background/tradingGoalsBackground.png"
import clockIcon from "../../../public/icons/24Hour.png"
import dailyPayouts from "../../../public/icons/dailyPayouts.png"
import fundedTraders from "../../../public/icons/fundedTraders.png"
import news from "../../../public/icons/news.png"
import firstTrade from "../../../public/icons/firstTrade.png"
import booked from "../../../public/icons/booked.png"
import profitSplit from "../../../public/icons/profitSplit.png"
import trailing from "../../../public/icons/trailing.png"
import challenge from "../../../public/icons/challenge.png"
import objectives from "../../../public/icons/objectives.png"
import capital from "../../../public/icons/capital.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import GradientText from "../ui/GradientText"

const pointsArray = [
    {
        icon: dailyPayouts,
        text: "Daily Payouts"
    },
    {
        icon: clockIcon,
        text: "24/7 Support"
    },
    {
        icon: profitSplit,
        text: "No Hidden Rules"
    },
    {
        icon: trailing,
        text: "No Trailing Drawdown"
    },
    {
        icon: fundedTraders,
        text: "Real Capital, Real Opportunities"
    },
    {
        icon: news,
        text: "News & weekend Holding"
    },
    {
        icon: firstTrade,
        text: "Payouts From Your First Trade"
    },
    {
        icon: booked,
        text: "A-Booked Funded Traders"
    },
]

const cardsArray = [
    {
        icon: challenge,
        color: "#E5CD7C",
        title: <>Choose Your<span className="text-[#E5CD7C] font-semibold text-[clamp(1.6rem,6.1vw,2.3rem)] md:text-[clamp(1.6rem,2.5vw,2.5rem)] md:ml-3">Challenge</span></>,
        points: [
            "Pick from 1-step, 2-step, or 3-step challenge accounts.",
            "Match the challenge to your risk tolerance and trading style.",
            "Select a capital size that aligns with your trading goals."
        ],
        delay: 0.4,
    },
    {
        icon: objectives,
        color: "#0EC0C8",
        title: <>Conquer Your <span className="text-[#0EC0C8] font-semibold text-[clamp(1.6rem,6.1vw,2.3rem)] md:text-[clamp(1.6rem,2.5vw,2.5rem)] md:ml-3">Objectives</span></>,
        points: [
            "Meet clear objectives within a set timeframe.",
            "Refine your trading strategies.",
            "Prove your skills and dominate the market."
        ],
        delay: 0.3,
    },
    {
        icon: capital,
        color: "#E5CD7C",
        title: <>Secure Funded <span className="text-[#E5CD7C] font-semibold text-[clamp(1.6rem,6.1vw,2.3rem)] md:text-[clamp(1.6rem,2.5vw,2.5rem)] md:ml-3">Capital</span></>,
        points: [
            "Gain access to a substantial pool of funded capital.",
            "Turn virtual successes into real-world profits.",
            "Experience the excitement of trading with real stakes."
        ],
        delay: 0.4,
    },
]

const Cards = ({ item, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });

    return (
        <motion.div 
            ref={ref}
            initial={{ transform: "translateY(40px)", opacity: 0 }}
            animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{
                delay: item.delay,
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className={`w-full h-full flex flex-col items-center justify-start gap-2 bg-yellow-blue-gradient p-[1px] rounded-2xl backdrop-blur-lg `}
        >
            <div className="w-full h-full flex flex-col p-6 items-center justify-start gap-2 bg-black bg-opacity-85 rounded-2xl backdrop-blur-lg">
                <Image
                    src={item.icon}
                    className="h-[4.5rem] w-[4.5rem]"
                    alt=""
                />
                <p className="text-[clamp(1.5rem,6vw,2.2rem)] md:text-[clamp(1.5rem,1.8vw,2.2rem)] text-nowrap font-neuehaas">
                    {item.title}
                </p>
                <div style={{ background: item.color }} className={`w-[90%] min-h-[1.5px] h-[1.5px] relative`}>
                    <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 left-0 -translate-y-1/2"></div>
                    <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 right-0 -translate-y-1/2"></div>
                </div>
                <ul className="list-disc w-full text-left pt-4 px-4 md:pl-10 md:pr-6">
                    {item.points.map((point, id) => (
                        <li
                            key={id}
                            className="text-[clamp(1rem,4.7vw,1.6rem)] md:text-[clamp(1rem,1.3vw,1.4rem)] text-[#c9c9c9] md:leading-[1.7rem] font-ttc font-normal pb-1 last:pb-0"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

const BottomBar = () => {
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
            className="mt-12 border-[1px] border-white border-opacity-70 rounded-2xl w-full py-8 px-10 md:px-20 flex flex-col md:flex-row items-center justify-center md:justify-between"
        >
            <div className="text-center md:text-left">
                <p className="text-[#0EC0C8] text-[2rem] md:text-[2.4rem] font-bold font-neuehaas">
                    Ready to Make Winning Trades?
                </p>
                <p className="text-[#8F8F8F] pt-4 md:pt-0 text-[1.25rem] md:text-[1.5rem] font-medium font-ttc">
                    Compare Challenges and Account Sizes to Amplify Your Strategy
                </p>
            </div>
            <button
                className="bg-yellow-blue-gradient mt-8 md:mt-0 font-ttc font-semibold w-[13rem] md:w-[16rem] h-12 md:h-14 rounded-full flex items-center justify-center text-black md:text-xl "
            >
                Click to Compare
            </button>
        </motion.div>
    )
}

const TradingGoalsCards = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });

  return (
    <div className="w-full md:mt-20">
        {/* top banner */}
        <motion.div 
            ref={ref}
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="relative w-full py-4 rounded-[2rem] flex flex-col-reverse md:flex-row items-end gap-10 justify-end bg-black md:bg-[#1D1E21]"
        >
            <Image
                src={tradingGoalsBackground}
                className="w-full scale-150 md:scale-100 md:w-[45%] h-fit md:absolute bottom-0 left-0"
                alt=""
            />

            <div className="w-full md:w-[55%] md:pr-16 py-4 pb-10 md:pb-4 md:py-8 flex flex-col items-end justify-start gap-6">
                <p className="text-[clamp(10px,8.5vw,50px)] md:text-[clamp(10px,3.9vw,100px)] text-left md:text-right font-bold font-neuehaas md:leading-[4.5vw]">
                    Achieve Your Trading Goals with the{" "}
                    <GradientText>Right Challenge</GradientText>
                </p>
                <p className="text-[#8F8F8F] text-[clamp(10px,5vw,50px)] md:text-[clamp(10px,1.7vw,100px)] font-neuehaas text-left md:text-right">
                    3 Challenge Types, Infinite Trading Possibilities
                </p>
                <div className="flex items-start justify-start flex-wrap gap-x-8 gap-y-4">
                    {pointsArray.map((item, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(50%-1rem)] flex items-center justify-start gap-3"
                        >
                            <Image
                                src={item.icon}
                                className="w-6 h-6 md:w-8 md:h-8"
                                alt=""
                            />
                            <p className="font-ttc text-white text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,100px)] tracking-[0.03156rem]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

        <div className="flex md:h-[26rem] flex-col md:flex-row items-center mt-10 justify-center gap-6 md:gap-24">
            {cardsArray.map((item, index) => (
                <div key={index} className="w-full md:w-[calc(33.33333%-4rem)] h-full">
                    <Cards item={item} index={index} />
                </div>
            ))}
        </div>

        <BottomBar />
    </div>
  )
}

export default TradingGoalsCards