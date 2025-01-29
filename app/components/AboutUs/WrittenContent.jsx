'use client'

import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import GradientText from "../ui/GradientText";

const para = "Once you've successfully completed the challenge, you'll gain access to a substantial pool of funded capital to trade with. Turn your virtual triumphs into real-world gains, and experience the thrill of the hunt with real stakes."

const heading1 = "We've Walked the Path You're On";
const para1 = "The financial markets can be a relentless wilderness. We at Guardeer Funding understand this firsthand. Many of us on the team are seasoned hunters ourselves – traders who have honed their skills and strategies through years of experience. We've also witnessed countless other skilled individuals, brimming with potential, held back by the lack of significant capital.";

const para2 = "This shared frustration fueled our vision. We saw a gap in the market, a place where these skilled hunters could be empowered to unleash their full potential.";

const heading2 = "Transparent Challenges, Rewarding Victories";
const para3 = "Our tiered challenge accounts allow you to test your mettle and qualify for funded capital without risking significant personal funds. The clear objectives within our challenges are your roadmap to success. Conquer them and claim your trophy – access to substantial funded capital.";

const heading3 = "Shared Success in the Financial Jungle";
const para4 = "At Guardeer Funding, we believe in a win-win partnership. Our tiered profit split system rewards your consistent achievement, with the potential to earn up to 100% of the profits. Bi-weekly payouts ensure you receive your hard-earned rewards faster, giving you the freedom to reinvest or manage your finances efficiently.";

const heading4 = "Unleash Your Inner Market Hunter";
const para5 = "With Guardeer Funding by your side, you get access to top-tier tools and a solid trading environment through our offerings of Match-Trader and MetaTrader 5. Choose from these powerful platforms for a range of tradable instruments, tight spreads, and fast execution.";

const AnimatedPara = ({ para }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });

    return (
        <motion.p
            ref={ref}
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className="font-ttc text-[1.3rem] md:text-[1.6rem] leading-tight"
        >
            {para}
        </motion.p>
    )
}

const AnimatedHeading = ({ heading }) => {
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
            className="font-ttc text-[1.5rem] md:text-[2.1rem] font-bold leading-tight flex py-6 items-center justify-start pl-4 gap-4"
        >
            <div className="w-1 h-1 md:w-2 md:h-2 aspect-square rounded-full bg-[#E5CD7C]"></div>
            <GradientText>
                {heading}
            </GradientText>
        </motion.div>
    )
}

const WrittenContent = () => {
  return (
    <div className="w-full mt-[11rem] px-[5%] md:px-[10%]">
        <AnimatedPara
            para={para}
        />
        <AnimatedHeading
            heading={heading1}
        />
        <AnimatedPara
            para={para1}
        />
        <div className="w-full h-fit mt-6">
            <AnimatedPara
                para={para2}
            />
        </div>
        <AnimatedHeading
            heading={heading2}
        />
        <AnimatedPara
            para={para3}
        />
        <AnimatedHeading
            heading={heading3}
        />
        <AnimatedPara
            para={para4}
        />
        <AnimatedHeading
            heading={heading4}
        />
        <AnimatedPara
            para={para5}
        />
    </div>
  )
}

export default WrittenContent