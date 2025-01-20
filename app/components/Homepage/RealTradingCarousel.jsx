"use client";
import GradientText from "../ui/GradientText";
import React, { useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Updated import for modules
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react"

const Heading = () => {
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
    className="w-full px-12 md:px-0"
  >
    <p className="text-[3rem] md:text-[4rem] pb-2 leading-[4.5rem] text-left md:text-center text-[#d9d9d9] font-neuehaas font-bold">
      Real Trading.{" "}
      <br className="block md:hidden"/>
      <GradientText>Real Talent.</GradientText>{" "}
      <br className="block md:hidden"/>
      Real Results.
    </p>
    <p className="text-left md:text-center leading-[1.5rem] text-[#8F8F8F] text-[1.5rem] font-ttc font-medium ">
      The Proof Is in the Profits
    </p>
  </motion.div>
  )
}

const RealTradingCarousel = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // Animation triggers only once
  });

  const card = [
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
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
    <div className="w-full mt-20 md:mt-36">
      <Heading />
      
      <div className="hidden md:flex items-center justify-end gap-8 px-8">
        <button className="text-[2.5rem] text-[#6B6B6B] hover:text-white">
          <BsChevronLeft />
        </button>
        <button className="text-[2.5rem] text-[#B4B4B4] hover:text-white">
          <BsChevronRight />
        </button>
      </div>

      <motion.div
        ref={ref}
        initial={{ transform: "translateY(60px)", opacity: 0 }}
        animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
        transition={{
            type: "spring", // Spring effect for smooth animation
            stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
            damping: 10, // Controls how the spring settles (lower is more oscillatory)
        }} 
        className="w-full mt-10 flex items-center justify-center gap-[1.8rem] h-full"
      >
        <Swiper
          ref={swiperRef}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          speed={1000}
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
        >
          {card.map((_, id) => (
            <SwiperSlide
              key={id}
              className={`min-w-80 md:w-full py-10 group h-80 md:h-full cursor-pointer `}
            >
              <div
                className={`w-full h-full ${
                  id % 2 === 0
                    ? "hover:shadow-[2px_4.491px_10.597px_2px_#0EC0C8]"
                    : "hover:shadow-[2px_4.491px_10.597px_2px_rgba(255,252,0,0.80)]"
                } ${
                inView ? "animation-appear" : ""
              } aspect-square bg-[#171717] rounded-[1.3rem]`}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="flex md:hidden items-center justify-end gap-8 px-8">
        <button className="text-[2.5rem] text-[#6B6B6B] hover:text-white">
          <BsChevronLeft />
        </button>
        <button className="text-[2.5rem] text-[#B4B4B4] hover:text-white">
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RealTradingCarousel;
