"use client";

import React, { useEffect, useRef, useState } from "react";
import guardeerLogo from "../../public/logos/guardeerLogo.png";
import Link from "next/link";
import Image from "next/image";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { motion } from "motion/react";
import guardeerMiniLogo from "../../public/logos/guardeerMiniLogo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import GradientText from "./ui/GradientText";

const navItems = [
  {
    name: "Home",
    linkTo: "/",
  },
  {
    name: "About Us",
    linkTo: "/",
  },
  {
    name: "Challenge",
    linkTo: "/",
  },
  {
    name: "FAQ's",
    linkTo: "/",
  },
  {
    name: "Contact us",
    linkTo: "/",
  },
];

const Navbar = () => {
  const searchBarRef = useRef(null);

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  useEffect(() => {
    if (searchBarRef.current && isSearchBarVisible) {
      searchBarRef.current.focus();
    }
  }, [isSearchBarVisible]);

  return (
    <motion.div
      initial={{ transform: "translateY(-60px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{
          type: "spring", // Spring effect for smooth animation
          stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
          damping: 10, // Controls how the spring settles (lower is more oscillatory)
      }}
      className="w-[calc(100vw)] md:w-[calc(100vw-4rem)] h-24 md:h-[4.5rem] z-50 fixed top-0 pt-6 md:pt-0 md:top-8 left-0 md:left-[2rem] right-8 backdrop-blur-lg md:bg-[#1D1E21] md:rounded-[1.3rem] py-[0.75rem] px-6 md:px-[1.25rem] flex items-center justify-between md:gap-20"
    >
      <Link href={"/"} className="h-full w-fit py-2 md:py-0">
        <Image src={guardeerLogo} className="h-full w-fit hiden md:blok" alt="Guardeer" />
        {/* <Image src={guardeerMiniLogo} className="h-full w-fit md:hidden" alt="Guardeer" /> */}
      </Link>

      <div className="w-fit items-center justify-center gap-8 hidden md:flex">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.linkTo}
            className="text-text-light-gray font-ttc from-blue-green-start to-blue-green-end font-medium hover:bg-gradient-to-r hover:text-xl text-lg transition-all inline-block hover:text-transparent bg-clip-text"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center justify-center gap-3">
        <div
          className={`rounded-full  h-12 relative overflow-hidden
                ${
                  isSearchBarVisible
                    ? "animate-show-search w-80"
                    : "animate-hide-search w-16"
                }
            `}
        >
          <input
            ref={searchBarRef}
            type="text"
            className={`w-full h-full rounded-full bg-[#3c3e43] focus:outline-none px-4 text-xl text-[#E5CD7C]`}
          />
          <button
            onClick={() => setIsSearchBarVisible((prev) => !prev)}
            className={`bg-[#2B2D32] h-full rounded-full w-16 absolute top-0 right-0 text-2xl flex items-center justify-center
              ${isSearchBarVisible ? "text-white" : "text-[#E5CD7C]"}
            `}
          >
            {!isSearchBarVisible ? <IoSearchOutline /> : <IoClose />}
          </button>
        </div>
        <button className="bg-blue-yellow-gradient hidden md:flex hover:bg-yellow-blue-gradient transition-all h-12 w-40 p-[2px] font-ttc text-white items-center justify-center text-lg font-semibold rounded-full">
          <div className="w-full h-full bg-[#2B2D32] rounded-full flex items-center justify-center">
            Login
          </div>
        </button>
        <button 
            className="overflow-hidden group h-12 w-40 font-ttc text-white hidden md:flex items-center justify-center text-lg font-semibold rounded-full relative"
        >
            <div className="w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-blue-gradient origin-center group-hover:rotate-180  transition-all duration-700 ease-in-out"></div>
            <p className="relative z-10">
                Signup
            </p>
        </button>
      </div>

      <div className="flex md:hidden items-center justify-center gap-4">
        <button className="bg-blue-yellow-gradient flex hover:bg-yellow-blue-gradient transition-all h-10 p-[2px] font-ttc text-white items-center justify-center text-lg font-semibold rounded-full">
            <div className="w-full h-full px-7 bg-[#2B2D32] rounded-full flex items-center justify-center text-sm">
              Login
            </div>
          </button>

        <button
          className="h-full aspect-square rounded-full md:hidden flex items-center justify-center text-[2rem] text-white bg-yellw-blue-gradient"
        >
          <CgMenuRightAlt /> 
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;