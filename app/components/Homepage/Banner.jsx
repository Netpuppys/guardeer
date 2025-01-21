"use client";

import backgroundImage from "../../../public/background/backgroundImage.jpg";
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
import { motion } from "motion/react";
import GradientText from "../ui/GradientText";
import deer from "../../../public/ui/deer.png";

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
      className="px-6 md:px-0 md:pl-10 pb-4 md:pb-10 w-fit flex items-end gap-4"
    >
        {/* big card */}
        <div className="rounded-[1.6rem] backdrop-blur-lg bg-black bg-opacity-30 z-10 max-w-[40rem] w-fit pt-14 pb-10 px-7 md:pl-10 md:pr-12 shadow-[0px_4px_17.4px_0px_rgba(229,_205,_124,_0.20)]">
          <h3 className="text-[#D9D9D9] font-neuehaas text-[3rem] md:text-[3.3rem] leading-none md:leading-normal font-bold text-wrap md:pb-0">
            Trade. Earn. Repeat.
          </h3>
          <h3 className="text-[#E5CD7C] font-neuehaas text-[2.5rem] leading-none pt-6 md:pt-1 font-semibold ">
            <GradientText>
              No Hidden Rules.
            </GradientText>
          </h3>
          <div className="w-full md:w-[31rem] min-w-full flex flex-col md:flex-row items-end md:items-center justify-between mt-2 md:mt-3">
            <h4 className="md:max-w-80 w-full text-left font-neuehaas capitalize tracking-wider font-light pr-10 md:pr-0 text-wrap text-xl text-[#B7B7B7]">
              The only prop firm that funds you with real capital.
            </h4>
            <button className="rounded-full border-[1.5px] border-[#757575] border-l-[#04C5D2] hover:border-l-[#757575] hover:border-[#04C5D2] transition-all overflow-hidden duration-500 aspect-square min-w-16 w-16 h-16 p-1 md:p-2 md:hover:rotateBorderL">
              <div className="w-full h-full rounded-full bg-[#04C5D2] flex items-center justify-center text-black text-xl ">
                <BsArrowRight />
              </div>
            </button>
          </div>
        </div>
      {/* small card */}
        <div className="w-full min-w-[26rem]  mt-6 shadow-[0px_4px_17.4px_0px_rgba(229,_205,_124,_0.20)] relative p-6 bg-black bg-opacity-50 rounded-[1.6rem] overflow-hidden backdrop-blur-lg hidden md:flex flex-col items-start gap-4">
          <Image
            src={deer}
            className="absolute top-0 right-0 h-24 object-contain w-fit"
            alt=""
          />

          <div className="flex items-center justify-start gap-3">
            <Image src={dailyPayouts} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas capitalize text-[#dedede] tracking-[0.02125rem]">
              Up to 90% profit split
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={profitSplit} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas capitalize text-[#dedede] tracking-[0.02125rem]">
              Up to $200k funded trading capital
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={fundedTraders} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas capitalize text-[#dedede] tracking-[0.02125rem]">
              Flexible scaling for increased capital
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={fundedTraders} className="h-[1.5rem] w-fit" alt="" />
            <p className="font-neuehaas capitalize text-[#dedede] tracking-[0.02125rem]">
              No time limits on challenges
            </p>
          </div>
        </div>
      </motion.div>
  )
}

const Banner = () => {
  const card = [
    {
      price: "$ 1,200",
      name: "Raphael K.",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 108,200",
      name: "Michaengelo",
      desc: "India",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Donatello",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 58,900",
      name: "Leonardo",
      desc: "Mexico",
      image: payoutCardBackground,
    },
    {
      price: "$ 18,200",
      name: "Raphael",
      desc: "USA",
      image: payoutCardBackground,
    },
    {
      price: "$ 69,200",
      name: "Sensei",
      desc: "Chile",
      image: payoutCardBackground,
    },
    {
      price: "$ 4,200",
      name: "Shredder",
      desc: "Isle of Man",
      image: payoutCardBackground,
    },
    {
      price: "$ 222,200",
      name: "Thanos",
      desc: "Dubai",
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
    <div className="w-full flex items-end justify-between h-screen md:h-[calc(100vh-10.5rem)] min-h-[40rem] relative md:rounded-[1.3rem] overflow-hidden">
      
      <div className="absolute w-full h-full top-0 md:left-0 object-cover md:rounded-[1.3rem] p-[1px] overflow-hidden flex items-center justify-start md:justify-center">
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
                  className={`rounded-xl hover:-translate-x-8 transition-all duration-300 ease-in border-[0.5px] ${
                    index % 2 === 0
                      ? "shadw-[0px_1.491px_10.597px_0px_#0EC0C8_inset] border-[#0EC0C8] hover:shadow-[0px_1.491px_10.597px_0px_#0EC0C8]"
                      : "shaow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] border-[#e5cd7c] hover:shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)]"
                  } h-28 w-full px-7 py-3 flex items-center justify-between bg-[#313131] bg-opacity-20 backdrop-blur-xl`}
                >
                  <div className="w-fit">
                    <p className="text-[2rem] text-[#d6d6d6] font-neuehaas font-bold">
                      {card.price}
                    </p>
                    <p className="text-[#B0B0B0] text-[1.14rem] font-ttc">
                      {card.name}
                    </p>
                    <p className="text-[#949494] text-sm font-ttc">
                      {card.desc}
                    </p>
                  </div>
                  <div className={`h-full rounded-2xl aspect-square border
                  ${index % 2 === 0? "border-[#0EC0C8]" : "border-[#e5cd7c]"}
                   flex items-center justify-center overflow-hidden`}>
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
