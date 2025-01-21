import GradientText from "../ui/GradientText";
import React from "react";
import payoutBanner from "../../../public/background/payoutBanner2.png";
import payoutBannerMobile from "../../../public/background/payoutBannerMobile.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import profitSplit2 from "../../../public/icons/profitSplit2.png";
import profitSplit from "../../../public/icons/profitSplit.png";
import objectives from "../../../public/icons/objectives2.png";
import scaling from "../../../public/icons/scaling.png";
import fundedTraders from "../../../public/icons/fundedTraders.png";
import biWeekly from "../../../public/icons/biWeekly.png";
import dailyPayouts from "../../../public/icons/dailyPayouts.png";
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
        Up to 90% <span className="text-[#E5CD7C] font-medium ">Profit Split</span>
      </>
    ),
    icon: profitSplit2,
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
        Fast <span className="text-[#04C5D2] font-medium">Bi-Weekly</span> Payouts
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
        Realistic Profit <span className="text-[#e5cd7c] font-medium">Objectives</span>
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
        Streamlined <span className="text-[#04C5D2] font-medium">Scaling</span> Plan
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
      title: <>Advanced <span className="text-[#E5CD7C] font-semibold">Trading Platforms</span></>,
      points: [
          "Pro platforms with advanced charting and fast execution.",
          "Customizable tools for your strategy."
      ]
  },
  {
      icon: marketAccess,
      color: "#0EC0C8",
      title: <>Expansive <span className="text-[#0EC0C8] font-semibold">Market Access</span></>,
      points: [
          "Trade forex, commodities, indices, and crypto.",
          "Diversify across multiple assets."
      ]
  },
  {
      icon: bestExecution,
      color: "#E5CD7C",
      title: <>Tight Spreads <span className="text-[#E5CD7C] font-semibold">& Best Execution</span></>,
      points: [
          "Ultra-low spreads and fast execution.",
          "Precision with reduced slippage."
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
      className="w-full px-6 md:px-12 py-14 rounded-[2.2rem] overflow-hidden bg-[#1D1E21] relative"
    >
        <Image
          src={payoutBanner}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
          alt=""
        />

        <Image
          src={payoutBannerMobile}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 md:hidden"
          alt=""
        />

        <div className="relative z-10 flex flex-col items-end justify-center">
          <h3 className="text-[clamp(10px,8.5vw,50px)] md:text-[clamp(10px,3.9vw,100px)] text-left md:text-right font-bold font-neuehaas md:leading-[4.5vw]">
            <GradientText>Why settle for promises</GradientText>
            <br />
            when you can have real capital?
          </h3>
          <p className="text-[#8F8F8F] pt-4 text-[clamp(10px,5vw,50px)] md:text-[clamp(10px,1.7vw,100px)] font-neuehaas text-left md:text-right md:max-w-[60%]">
            Funding Traders With Real Capital Isn't Just A Catchy Pitch - It's
            The Foundation Of A Partnership Built On Trust And Shared Success.
          </p>
        </div>

        <div className="flex items-end flex-col-reverse md:flex-row justify-between mt-14">
          {/* CTA Button */}
          <button className="mt-8 relative z-10 hover:shadow-yellow-glow group transition-all border-[1.3px] border-[#E5CD7C] h-[6rem] md:h-[4.3rem] w-full md:w-fit px-10 md:px-16 flex items-center justify-between md:justify-center gap-5 rounded-[2rem] md:rounded-full ">
            <span className="font-helvetica text-[#f4f4f4] text-[clamp(1.1rem,5vw,1.8rem)] md:text-[clamp(1.1rem,1.4vw,1.8rem)] font-extrabold text-nowrap text-left md:text-center">
              Discover more{" "}
              <br className="md:hidden" />
              about daily payouts
            </span>
            <span className="text-[2rem]">
              <BsArrowRight />
            </span>
          </button>

          {/* desktop */}
          <div className="w-full hidden md:flex flex-col items-start md:items-end gap-6 text-sm md:text-base relative z-10">
            <div className="flex flex-row-reverse md:flex-row items-center gap-2 md:gap-8">
              <p className="font-ttc text-white text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,100px)] tracking-[0.03156rem]">
                Instant Payouts At Your Convenience
              </p>
              <Image src={instantPayouts} className="w-6 h-6 md:w-8 md:h-8" alt="" />
            </div>
            <div className="flex flex-row-reverse md:flex-row items-center gap-2 md:gap-8">
              <p className="font-ttc text-white text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,100px)] tracking-[0.03156rem] ">
                Payouts You Can Always Count On
              </p>
              <Image src={countPayouts} className="w-6 h-6 md:w-8 md:h-8" alt="" />
            </div>
            <div className="flex flex-row-reverse md:flex-row items-center gap-2 md:gap-8">
              <p className="font-ttc text-white text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,100px)] tracking-[0.03156rem] ">
                Protected From Unpredictable Market Swings
              </p>
              <Image src={marketSwings} className="w-6 h-6 md:w-8 md:h-8" alt="" />
            </div>
          </div>

          {/* mobile */}
          <div className="w-full flex md:hidden flex-col items-start md:items-end gap-6 text-sm md:text-base relative z-10">
            <div className="flex flex-row-reverse md:flex-row items-center gap-2 md:gap-10">
              <p className="font-ttc text-[1rem] md:text-[1.7rem] tracking-[0.03444rem] text-left md:text-right text-white text-nowrap">
                Daily Payouts
              </p>
              <Image src={dailyPayouts} className="h-6 w-6 object-contain md:h-10 md:w-10" alt="" />
            </div>
            <div className="flex flex-row-reverse md:flex-row items-center gap-2 md:gap-10">
              <p className="font-ttc text-[1rem] md:text-[1.7rem] tracking-[0.03444rem] text-left md:text-right text-white text-nowrap ">
                No Hidden Rules
              </p>
              <Image src={profitSplit} className="h-6 w-6 object-contain md:h-10 md:w-10" alt="" />
            </div>
            <div className="flex flex-row-reverse md:flex-row items-center gap-2 md:gap-10">
              <p className="font-ttc text-[1rem] md:text-[1.7rem] tracking-[0.03444rem] text-left md:text-right text-white text-nowrap ">
                Real Capital, Real Opportunities
              </p>
              <Image src={fundedTraders} className="h-6 w-6 object-contain md:h-10 md:w-10" alt="" />
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
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mt-14"
    >
        {cards.map((item, id) => (
          <div
            key={id}
            className={`w-full md:w-[calc(25%-3rem)] md:h-[28rem] bg-yellow-blue-gradient p-[1px] rounded-2xl backdrop-blur-lg overflow-hidden`}
          >
            <div className="w-full h-full  flex flex-col p-6 items-center justify-start gap-4 bg-black bg-opacity-85 rounded-2xl backdrop-blur-lg ">
              <Image src={item.icon} className="h-[3.5rem] w-[3.5rem]" alt="" />
              <p className="text-[clamp(1.5rem,6vw,2.2rem)] md:text-[clamp(1.5rem,1.8vw,2.2rem)] text-nowrap font-neuehaas">
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
              <ul className="list-disc w-full text-left pt-4 px-4 md:px-6">
                {item.description.map((point, id) => (
                  <li
                    key={id}
                    className="text-[clamp(1rem,4.7vw,1.6rem)] md:text-[clamp(1rem,1.3vw,1.4rem)] text-[#c9c9c9] md:leading-[1.7rem] font-ttc font-normal pb-1 last:pb-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
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
      className="w-full md:px-40 h-fit py-28 md:py-[5rem] flex items-center justify-center overflow-hidden"
    >
        <Image src={placeholder} className="md:w-full w-fit object-cover h-[18rem] min-h-[18rem] md:h-fit" alt="" />
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
      className="w-full flex flex-col items-center justify-start px-7"
    >
      <p className="font-helvetica text-[#d9d9d9] text-[clamp(1.5rem,7.3vw,2.5rem)] md:text-[clamp(3rem,3.3vw,4rem)] font-bold text-center text-nowrap">
          Trade with Confidence,{" "}
          <br className="md:hidden" />
          <GradientText>Succeed with Precision</GradientText>
        </p>
        <p className="max-w-[66rem] md:text-center text-[#8F8F8F] font-neuehaas text-[1.36rem] pt-6 md:pt-0 text-justify">
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
      className="flex w-full flex-col md:flex-row items-center mt-10 justify-center gap-10 md:gap-24"
    >
      {cardsArray.map((item, index) => (
      <div 
          key={index}
          className="w-full md:w-[calc(33%-4rem)] h-[20rem] flex flex-col items-center justify-start gap-2 bg-yellow-blue-gradient p-[1px] rounded-2xl backdrop-blur-lg "
      >
        <div className="w-full h-full flex flex-col p-6 items-center justify-start gap-2 bg-black bg-opacity-85 rounded-2xl backdrop-blur-lg">
          <Image
              src={item.icon}
              className="h-[3rem] object-contain md:h-[4.5rem] w-[4.5rem]"
              alt=""
          />
          <p className="text-[clamp(1.5rem,6vw,2.2rem)] md:text-[clamp(1.5rem,1.8vw,2.2rem)] text-nowrap font-neuehaas">
            {item.title}
          </p>
          <div style={{ background: item.color }} className={`w-full h-[1.5px] relative`}>
              <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 left-0 -translate-y-1/2"></div>
              <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 right-0 -translate-y-1/2"></div>
          </div>
          <ul className="list-disc w-full text-left pt-4 px-4 md:px-6">
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
      </div>))}
    </motion.div>
  )
}

const PayoutCards = () => {

  return (
    <div className="w-full mt-10 md:mt-[9rem]">
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
