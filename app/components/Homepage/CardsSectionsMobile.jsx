// import React, { useEffect, useRef } from 'react'
// import dailyPayouts from "../../../public/icons/dailyPayouts.png";
// import profitSplit from "../../../public/icons/profitSplit.png";
// import fundedTraders from "../../../public/icons/fundedTraders.png";
// import Image from "next/image";
// import payoutCardBackground from "../../../public/background/payoutCardBackground.jpeg";
// import Swiper from 'swiper';
import deer from "../../../public/ui/deer.png";
import backgroundImage from "../../../public/background/backgroundImage.png";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import dailyPayouts from "../../../public/icons/dailyPayouts.png";
import profitSplit from "../../../public/icons/profitSplit.png";
import fundedTraders from "../../../public/icons/fundedTraders.png";
import payoutCardBackground from "../../../public/background/payoutCardBackground.jpeg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules"; // Updated import for modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Marquee from "../ui/Marquee";
// import { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

const CardsSectionsMobile = () => {
  const card = [
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
  ];
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiperInstance = swiperRef.current.swiper;

//     const handleMouseEnter = () => {
//       swiperInstance.autoplay.stop(); // Stop autoplay on hover
//     };

//     const handleMouseLeave = () => {
//       swiperInstance.autoplay.start(); // Start autoplay when hover is removed
//     };

//     const swiperElement = swiperRef.current;
//     swiperElement.addEventListener("mouseenter", handleMouseEnter);
//     swiperElement.addEventListener("mouseleave", handleMouseLeave);

//     // Clean up the event listeners when the component is unmounted
//     return () => {
//       swiperElement.removeEventListener("mouseenter", handleMouseEnter);
//       swiperElement.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

  return (
    <div className="w-full md:hidden ">
      <div className="w-full px-[1.25rem]">
        <div className="w-full mt-6 shadow-[0px_4px_17.4px_0px_rgba(229,_205,_124,_0.20)] relative p-6 bg-black bg-opacity-50 rounded-2xl backdrop-blur-lg flex flex-col items-start gap-4">
          <Image
            src={deer}
            className="absolute top-0 right-0 h-24 object-contain w-fit"
            alt=""
          />

          <div className="flex items-center justify-start gap-3">
            <Image src={dailyPayouts} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              Up to 90% profit split
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={profitSplit} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              Up to $200k funded trading capital
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={fundedTraders} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              Flexible scaling for increased capital
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={fundedTraders} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              No time limits on challenges
            </p>
          </div>
        </div>
      </div>

      <div className="z-10 animate-slide-left w-full overflow-hidden bg-black-right-gradient flex items-center mt-10">
        <Marquee>
          {card.map((card, index) => (
            <div
              key={index}
              className="min-w-[80vw] max-w-[80vw] w-[80vw] px-6 h-fit"
            >
              <div
                className={`rounded-xl transition-all duration-300 ease-in ${
                  index % 2 === 0
                    ? "shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset]"
                    : "shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset]"
                } h-28 w-full px-7 py-3 flex items-center justify-between bg-[#313131] bg-opacity-70 backdrop-blur-xl`}
              >
                <div className="w-fit">
                  <p className="text-[2rem] text-white font-neuehaas font-bold">
                    {card.price}
                  </p>
                  <p className="text-[#B0B0B0] text-[1.14rem] font-ttc">
                    {card.name}
                  </p>
                  <p className="text-[#949494] text-sm font-ttc">{card.desc}</p>
                </div>
                <div className="h-full rounded-2xl aspect-square border-2 border-[#E5CD7C] even:border-[#0EC0C8] flex items-center justify-center overflow-hidden">
                  <Image
                    src={card.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      {/* <div className="z-10 animate-slide-left w-full overflow-hidden bg-black-right-gradient flex items-center mt-10">
        <Swiper
          ref={swiperRef}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          speed={5000}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          modules={[Autoplay]}
        >
          {card.map((card, index) => (
            <SwiperSlide
              key={index}
              className="min-w-[75vw] max-w-[75vw] w-[75vw] px-6 h-fit"
            >
              <div
                className={`rounded-xl transition-all duration-300 ease-in ${
                  index % 2 === 0
                    ? "shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset]"
                    : "shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset]"
                } h-28 w-full px-7 py-3 flex items-center justify-between bg-[#313131] bg-opacity-70 backdrop-blur-xl`}
              >
                <div className="w-fit">
                  <p className="text-[2rem] text-white font-neuehaas font-bold">
                    {card.price}
                  </p>
                  <p className="text-[#B0B0B0] text-[1.14rem] font-ttc">
                    {card.name}
                  </p>
                  <p className="text-[#949494] text-sm font-ttc">{card.desc}</p>
                </div>
                <div className="h-full rounded-2xl aspect-square border-2 border-[#E5CD7C] even:border-[#0EC0C8] flex items-center justify-center overflow-hidden">
                  <Image
                    src={card.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default CardsSectionsMobile;
