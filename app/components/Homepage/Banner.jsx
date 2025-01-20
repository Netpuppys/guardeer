"use client";

import backgroundImage from "../../../public/background/backgroundImage.png";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import dailyPayouts from "../../../public/icons/dailyPayouts.png";
import profitSplit from "../../../public/icons/profitSplit.png";
import fundedTraders from "../../../public/icons/fundedTraders.png";
import payoutCardBackground from "../../../public/background/payoutCardBackground.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Updated import for modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react"

const Card = ({}) => {
  return (
    <div className="rounded-xl hover:-translate-x-10 transition-all duration-300 ease-in shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] even:shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset] h-28 w-full px-7 py-3 flex items-center justify-between bg-[#313131] bg-opacity-70 backdrop-blur-xl">
      <div className="w-fit">
        <p className="text-[2rem] text-white font-neuehaas font-bold">
          $ 18,200
        </p>
        <p className="text-[#B0B0B0] text-[1.14rem] font-ttc">Raphael K.</p>
        <p className="text-[#949494] text-sm font-ttc">Chile</p>
      </div>
      <div className="h-full rounded-2xl aspect-square border-2 border-[#E5CD7C] even:border-[#0EC0C8] flex items-center justify-center overflow-hidden">
        <Image
          src={payoutCardBackground}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

const AnimatedCards = () => {
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
      className="px-2 md:px-0 md:pl-10 pb-4 w-fit flex items-end gap-5"
    >
        {/* big card */}
        <div className="rounded-2xl backdrop-blur-xl bg-black bg-opacity-40 z-10 max-w-[32rem] p-6">
          <h3 className="text-[#D9D9D9] font-neuehaas text-5xl font-bold text-wrap">
            Payouts from the first trade.
          </h3>
          <h3 className="text-[#E5CD7C] font-neuehaas text-4xl pt-2 font-semibold">
            No hidden rules.
          </h3>
          <div className="w-full flex items-center justify-between">
            <h4 className="max-w-80 font-neuehaas text-wrap text-xl">
              The only prop firm that funds you with real capital.
            </h4>
            <button className="rounded-full border-[1.5px] border-[#757575] border-l-[#04C5D2] hover:border-l-[#757575] hover:border-[#04C5D2] transition-all duration-500 aspect-square w-16 p-2 hover:rotateBorderL">
              <div className="w-full h-full rounded-full bg-[#04C5D2] flex items-center justify-center text-black text-xl ">
                <BsArrowRight />
              </div>
            </button>
          </div>
        </div>
      {/* small card */}
        <div className="w-80 p-6 bg-black bg-opacity-50 rounded-2xl backdrop-blur-lg hidden md:flex flex-col items-start gap-4">
          <div className="flex items-center justify-start gap-3">
            <Image src={dailyPayouts} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              Daily Payouts
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={profitSplit} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              80% Profit Split
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={fundedTraders} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
              Funded Traders A-Booked
            </p>
          </div>
        </div>
      </motion.div>
  )
}

const Banner = () => {
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
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleMouseEnter = () => {
      swiperInstance.autoplay.stop(); // Stop autoplay on hover
    };

    const handleMouseLeave = () => {
      swiperInstance.autoplay.start(); // Start autoplay when hover is removed
    };

    const swiperElement = swiperRef.current;
    swiperElement.addEventListener("mouseenter", handleMouseEnter);
    swiperElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up the event listeners when the component is unmounted
    return () => {
      swiperElement.removeEventListener("mouseenter", handleMouseEnter);
      swiperElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="w-full flex items-end justify-between h-screen md:h-[calc(100vh-10.5rem)] min-h-[40rem] relative md:rounded-[1.3rem] md:bg-yellow-blue-gradient md:p-[0.5px] overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 object-cover md:rounded-[1.3rem] p-[1px] overflow-hidden">
        <Image
          src={backgroundImage}
          className="w-full h-full opacity-50 md:opacity-100 object-cover md:rounded-[1.3rem]"
          alt="background"
        />
      </div>

      <AnimatedCards />
      
      <div className="z-10 animate-slide-left w-fit h-full overflow-hidden bg-black-right-gradient rounded-r-[1.3rem] hidden md:flex items-center">
        <div className="py-8 w-[24.5rem] relative h-[43rem] flex flex-col items-end justify-start gap-6 overflow-y-scroll no-scrollbar">
          <Swiper
            ref={swiperRef}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            speed={1000}
            slidesPerView={5}
            freeMode={true}
            direction="vertical"
            loop={true}
            modules={[Autoplay]}
            className="mySwiper w-[24.5rem]"
          >
            {card.map((card, index) => (
              <SwiperSlide key={index} className="w-full pl-10 px-3 h-fit">
                <div
                  className={`rounded-xl hover:-translate-x-8 transition-all duration-300 ease-in ${
                    index % 2 === 0
                      ? "shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset] hover:shadow-[0px_1.491px_10.597px_0px_#0EC0C8]"
                      : "shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] hover:shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)]"
                  } h-28 w-full px-7 py-3 flex items-center justify-between bg-[#313131] bg-opacity-70 backdrop-blur-xl`}
                >
                  <div className="w-fit">
                    <p className="text-[2rem] text-white font-neuehaas font-bold">
                      {card.price}
                    </p>
                    <p className="text-[#B0B0B0] text-[1.14rem] font-ttc">
                      {card.name}
                    </p>
                    <p className="text-[#949494] text-sm font-ttc">
                      {card.desc}
                    </p>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
