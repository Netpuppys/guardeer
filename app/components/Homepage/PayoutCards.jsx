import GradientText from "../ui/GradientText";
import React from "react";
import payoutBanner from "../../../public/background/payoutBanner2.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import profitSplit from "../../../public/icons/profitSplit2.png";
import objectives from "../../../public/icons/objectives2.png";
import scaling from "../../../public/icons/scaling.png";
import challenge from "../../../public/icons/challenge.png";
import biWeekly from "../../../public/icons/biWeekly.png";
import capital from "../../../public/icons/capital.png";
import placeholder from "../../../public/delete/placeholder.png";
import countPayouts from "../../../public/icons/countPayouts.png"
import instantPayouts from "../../../public/icons/instantPayouts.png"
import marketSwings from "../../../public/icons/marketSwings.png"
import tradingPlatform from "../../../public/icons/tradingPlatform.png"
import marketAccess from "../../../public/icons/marketAccess.png"
import bestExecution from "../../../public/icons/bestExecution.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: (
      <>
        Up to 90% <span className="text-[#E5CD7C]">Profit Split</span>
      </>
    ),
    icon: profitSplit,
    description: [
      "Earn Up To 90% Of Your Profits With Our Flexible Structure.",
      "Utilize Add-Ons To Maximize Your Earnings Potential.",
      "Get Rewarded For Your Trading Expertise.",
    ],
    color: "#E5CD7C",
  },
  {
    title: (
      <>
        Fast <span className="text-[#04C5D2]">Bi-Weekly</span> Payouts
      </>
    ),
    icon: biWeekly,
    description: [
      "Receive Profits Every Two Weeks.",
      "Maintain A Smooth Cash Flow.",
      "Reinvest Earnings Or Access Your Rewards Faster.",
    ],
    color: "#04C5D2",
  },
  {
    title: (
      <>
        Realistic Profit <span className="text-[#e5cd7c]">Objectives</span>
      </>
    ),
    icon: objectives,
    description: [
      "Achieve Profit Targets That Are Fair And Attainable.",
      "Focus On Consistent, Sustainable Growth.",
      "Provide A Level Playing Field For Traders Of All Levels.",
    ],
    color: "#E5CD7C",
  },
  {
    title: (
      <>
        Streamlined <span className="text-[#04C5D2]">Scaling</span> Plan
      </>
    ),
    icon: scaling,
    description: [
      "Unlock increased trading capital after a 10% profit.",
      "Benefit from a clear and achievable scaling system.",
      "Reward consistent performance with greater financial opportunities.",
    ],
    color: "#04C5D2",
  },
];

const cardsArray = [
  {
      icon: tradingPlatform,
      color: "#E5CD7C",
      title: <>Choose Your <span className="text-[#E5CD7C] font-semibold">Challenge</span></>,
      points: [
          "Pick from 1-step, 2-step, or 3-step challenge accounts.",
          "Match the challenge to your risk tolerance and trading style.",
          "Select a capital size that aligns with your trading goals."
      ]
  },
  {
      icon: marketAccess,
      color: "#0EC0C8",
      title: <>Conquer Your <span className="text-[#0EC0C8] font-semibold">Objectives</span></>,
      points: [
          "Meet clear objectives within a set timeframe.",
          "Refine your trading strategies.",
          "Prove your skills and dominate the market."
      ]
  },
  {
      icon: bestExecution,
      color: "#E5CD7C",
      title: <>Secure Funded <span className="text-[#E5CD7C] font-semibold">Capital</span></>,
      points: [
          "Gain access to a substantial pool of funded capital.",
          "Turn virtual successes into real-world profits.",
          "Experience the excitement of trading with real stakes."
      ]
  },
]

const TopBanner = () => {
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
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="px-12 py-14 rounded-[2.2rem] overflow-hidden bg-[#1D1E21] relative"
    >
        <Image
          src={payoutBanner}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />

        <div className="relative z-10 flex flex-col items-end justify-center">
          <h3 className="text-[clamp(3.5rem,4.3vw,5rem)] font-bold leading-[5.2rem] mb-4 text-right text-nowrap">
            <GradientText>Why settle for promises</GradientText>
            <br />
            when you can have real capital?
          </h3>
          <p className="text-[#8F8F8F] text-[clamp(1.1rem,1.4vw,1.8rem)] max-w-[60%] text-right">
            Funding Traders With Real Capital Isn't Just A Catchy Pitch - It's
            The Foundation Of A Partnership Built On Trust And Shared Success.
          </p>
        </div>

        <div className="flex items-end justify-between mt-14">
          {/* CTA Button */}
          <button className="mt-8 relative z-10 hover:shadow-yellow-glow group transition-all border-[1.3px] border-[#E5CD7C] h-[4.3rem] px-16 flex items-center justify-center gap-5 rounded-full ">
            <span className="font-helvetica text-[#f4f4f4] text-[clamp(1.1rem,1.4vw,1.8rem)] font-extrabold text-nowrap">
              Discover more about daily payouts
            </span>
            <span className="text-[2rem]">
              <BsArrowRight />
            </span>
          </button>

          <div className="flex flex-col items-end gap-6 text-sm md:text-base relative z-10">
            <div className="flex items-center gap-10">
              <p className="font-ttc text-[1.7rem] tracking-[0.03444rem] text-right text-white ">
                Instant Payouts At Your Convenience
              </p>
              <Image src={instantPayouts} className="h-10 w-10" alt="" />
            </div>
            <div className="flex items-center gap-10">
              <p className="font-ttc text-[1.7rem] tracking-[0.03444rem] text-right text-white ">
                Payouts You Can Always Count On
              </p>
              <Image src={countPayouts} className="h-10 w-10" alt="" />
            </div>
            <div className="flex items-center gap-10">
              <p className="font-ttc text-[1.7rem] tracking-[0.03444rem] text-right text-white ">
                Protected From Unpredictable Market Swings
              </p>
              <Image src={marketSwings} className="h-10 w-10" alt="" />
            </div>
          </div>
        </div>
    </motion.div>
  )
}

const AnimatedCards = () => {
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
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="w-full flex items-center justify-center gap-16 mt-14"
    >
        {cards.map((item, id) => (
          <div
            key={id}
            style={{ border: `1px solid ${item.color}` }}
            className={`w-[calc(25%-3rem)] h-[26rem] flex flex-col p-6 items-center justify-start gap-4 bg-[#313131] bg-opacity-70 rounded-2xl backdrop-blur-lg shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] even:shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset]`}
          >
            <Image src={item.icon} className="h-[3.5rem] w-[3.5rem]" alt="" />
            <p className=" text-[clamp(1.1rem,1.4vw,1.8rem)] font-neuehaas">
              {item.title}
            </p>
            <div
              style={{ background: item.color }}
              className={`w-full h-[1.5px] min-h-[1.5px] relative`}
            >
              <div
                style={{ background: item.color }}
                className="absolute w-3 aspect-square rounded-full top-0 left-0 -translate-y-1/2"
              ></div>
              <div
                style={{ background: item.color }}
                className="absolute w-3 aspect-square rounded-full top-0 right-0 -translate-y-1/2"
              ></div>
            </div>
            <ul className="list-disc w-full text-left pt-4 px-4">
              {item.description.map((point, id) => (
                <li
                  key={id}
                  className="text-[clamp(10px,1vw,20px)] text-[#ededed] leading-[1.9rem] font-neuehaas font-normal"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </motion.div>
  )
}

const AnimatedImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="w-full px-40 h-fit py-[12rem]"
    >
        <Image src={placeholder} className="w-full h-fit" alt="" />
    </motion.div>
  )
}

const AnimatedHeading = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="w-full flex flex-col items-center justify-start"
    >
      <p className="font-helvetica text-[#d9d9d9] text-[clamp(3rem,3.3vw,4rem)] font-bold text-center">
          Trade with Confidence,{" "}
          <GradientText>Succeed with Precision</GradientText>
        </p>
        <p className="max-w-[66rem] text-center text-[#8F8F8F] font-neuehaas text-[1.36rem] ">
          <span className="text-[#0EC0C8]">Guardeer</span> Funding knows a solid
          trading environment is key to success. That's why we offer two
          powerful platforms for traders who mean business.
        </p>
        <p className="pt-3 font-neuehaas text-[#d2d2d2] text-[1.36rem]">
          Our selected trading platforms give you a high-performance trading
          experience with:
        </p>
    </motion.div>
  )
}

const AnimatedBottomCards = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
      transition={{
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="flex h-[28rem] items-center mt-10 justify-center gap-24"
    >
      {cardsArray.map((item, index) => (
      <div 
          key={index}
          className="w-[calc(33%-4rem)] shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] even:shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset] h-full flex flex-col p-8 items-center justify-start gap-4 bg-[#313131] bg-opacity-70 rounded-2xl backdrop-blur-lg"
      >
          <Image
              src={item.icon}
              className="h-[4.5rem] w-[4.5rem]"
              alt=""
          />
          <p className=" text-[clamp(1.5rem,1.9vw,2.3rem)] font-neuehaas">
            {item.title}
          </p>
          <div style={{ background: item.color }} className={`w-full h-[1.5px] relative`}>
              <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 left-0 -translate-y-1/2"></div>
              <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 right-0 -translate-y-1/2"></div>
          </div>
          <ul className="list-disc w-full text-left pt-4 px-6">
              {item.points.map((point, id) => (
                  <li
                      key={id}
                      className="text-[clamp(1.1rem,1.3vw,1.7rem)] text-[#ededed] leading-[1.9rem] font-neuehaas font-normal"
                  >
                      {point}
                  </li>
              ))}
          </ul>
      </div>))}
    </motion.div>
  )
}

const PayoutCards = () => {

  return (
    <div className="w-full mt-[9rem]">
      <TopBanner />
      <AnimatedCards />
      <AnimatedImage />

      <div className="w-full flex flex-col items-center justify-start">
        <AnimatedHeading />
        <AnimatedBottomCards />
      </div>
    </div>
  );
};

export default PayoutCards;
