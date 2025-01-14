import GradientText from "@/components/ui/GradientText";
import React from "react";
import payoutBanner from "../../public/background/payoutBanner.png";
import Image from "next/image";
import clockIcon from "../../public/icons/24Hour.png";
import trailing from "../../public/icons/trailing.png";
import news from "../../public/icons/news.png";
import { BsArrowRight } from "react-icons/bs";
import challenge from "../../public/icons/challenge.png";
import objectives from "../../public/icons/objectives.png";
import capital from "../../public/icons/capital.png";
import placeholder from "../../public/delete/placeholder.png";

const cards = [
  {
    title: (
      <>
        Up to 90% <span className="text-[#E5CD7C]">Profit Split</span>
      </>
    ),
    icon: challenge,
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
    icon: objectives,
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
    icon: capital,
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
        Fast <span className="text-[#04C5D2]">Bi-Weekly</span> Payouts
      </>
    ),
    icon: challenge,
    description: [
      "Receive Profits Every Two Weeks.",
      "Maintain A Smooth Cash Flow.",
      "Reinvest Earnings Or Access Your Rewards Faster.",
    ],
    color: "#04C5D2",
  },
];

const PayoutCards = () => {
  return (
    <div className="w-full mt-[9rem]">
      <div className="px-12 py-14 rounded-[2.2rem] overflow-hidden bg-[#1D1E21] relative">
        <Image
          src={payoutBanner}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />

        <div className="relative z-10 flex flex-col items-end justify-center">
          <h3 className="text-[4.5rem] font-bold leading-[5.2rem] mb-4 text-right">
            <GradientText>Why settle for promises</GradientText>
            <br />
            when you can have real capital?
          </h3>
          <p className="text-[#8F8F8F] text-[1.5rem] max-w-[60%] text-right">
            Funding Traders With Real Capital Isn't Just A Catchy Pitch - It's
            The Foundation Of A Partnership Built On Trust And Shared Success.
          </p>
        </div>

        <div className="flex items-end justify-between mt-14">
          {/* CTA Button */}
          <button className="mt-8 relative z-10 shadow-yellow-glow group transition-all border-[1.3px] border-[#E5CD7C] h-[4.3rem] px-16 flex items-center justify-center gap-5 rounded-full ">
            <span className="font-helvetica text-[#f4f4f4] text-[1.5rem] font-extrabold ">
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
              <Image src={clockIcon} className="h-10 w-10" alt="" />
            </div>
            <div className="flex items-center gap-10">
              <p className="font-ttc text-[1.7rem] tracking-[0.03444rem] text-right text-white ">
                Payouts You Can Always Count On
              </p>
              <Image src={trailing} className="h-10 w-10" alt="" />
            </div>
            <div className="flex items-center gap-10">
              <p className="font-ttc text-[1.7rem] tracking-[0.03444rem] text-right text-white ">
                Protected From Unpredictable Market Swings
              </p>
              <Image src={news} className="h-10 w-10" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-16 mt-14">
        {cards.map((item, id) => (
          <div
            key={id}
            style={{ border: `1px solid ${item.color}` }}
            className={`w-[calc(25%-3rem)] h-[24rem] flex flex-col p-6 items-center justify-start gap-4 bg-[#313131] bg-opacity-70 rounded-2xl backdrop-blur-lg shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] even:shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset]`}
          >
            <Image src={item.icon} className="h-[3.5rem] w-[3.5rem]" alt="" />
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
                  className="text-[1.3rem] text-[#ededed] leading-[1.9rem] font-neuehaas font-normal"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full px-40 h-fit py-[12rem]">
        <Image src={placeholder} className="w-full h-fit" alt="" />
      </div>

      <div className="w-full flex flex-col items-center justify-start">
        <p className="font-helvetica text-[#d9d9d9] text-[3.5rem] font-bold text-center">
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
      </div>
    </div>
  );
};

export default PayoutCards;
