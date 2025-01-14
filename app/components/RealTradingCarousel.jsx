import GradientText from "@/components/ui/GradientText";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const RealTradingCarousel = () => {
  return (
    <div className="w-full mt-36">
      <p className="text-[4rem] pb-2 leading-[4.5rem] text-center text-[#d9d9d9] font-neuehaas font-bold">
        Real Trading. <GradientText>Real Talent.</GradientText> Real Results.
      </p>
      <p className="text-center leading-[1.5rem] text-[#8F8F8F] text-[1.5rem] font-ttc font-medium ">
        The Proof Is in the Profits
      </p>
      <div className="flex items-center justify-end gap-8 px-8">
        <button className="text-[2.5rem] text-[#6B6B6B] hover:text-white">
          <BsChevronLeft />
        </button>
        <button className="text-[2.5rem] text-[#B4B4B4] hover:text-white">
          <BsChevronRight />
        </button>
      </div>
      <div className="w-full mt-10 overflow-hidden flex items-center justify-center gap-[1.8rem] h-80">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, id) => (
          <div
            key={id}
            className="h-full aspect-square bg-[#171717] rounded-[1.3rem]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RealTradingCarousel;
