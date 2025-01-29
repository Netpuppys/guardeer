'use client'

import React from 'react'
import footerImage from "../../public/delete/footer.png"
import guardeerGradientLogo from "../../public/logos/guardeerGradientLogo.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import Link from 'next/link';
import GradientText from './ui/GradientText';

const footerLinks = [
    {
      title: "Main Menu",
      items: [
        { linkName: "Home", link: "/home" },
        { linkName: "Knight Challenge", link: "/knight-challenge" },
        { linkName: "Royal Challenge", link: "/royal-challenge" },
        { linkName: "Emperor Challenge", link: "/emperor-challenge" },
        { linkName: "FAQ", link: "/faq" },
        { linkName: "Contact", link: "/contact" },
      ],
    },
    {
      title: "Important Links",
      items: [
        { linkName: "Terms & Conditions", link: "/terms-and-conditions" },
        { linkName: "Refund Policy", link: "/refund-policy" },
        { linkName: "Privacy Policy", link: "/privacy-policy" },
        { linkName: "AML Policy", link: "/aml-policy" },
      ],
    },
    {
      title: "Partnership",
      items: [
        { linkName: "Affiliate Program", link: "/affiliate-program" },
      ],
    },
];

const BottomText = () => {
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
            className='text-[#8F8F8F] font-neuehaas w-full text-justify md:text-left mt-10 md:mt-6 px-6'
        >
            We offer virtual demo accounts simulating live market conditions. Any reference to 'funded' refers to virtual funding only. Our services are not investment services or advice, and our staff is not authorized to provide investment recommendations. All content on our website is for educational purposes only and does not constitute investment advice or recommendations.
        </motion.p>
    )
}

const Footer = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });
    
  return (
    <div className='w-full mt-10'>
        <motion.div 
            ref={ref}
            initial={{ transform: "translateY(60px)", opacity: 0 }}
            animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
            transition={{
                type: "spring", // Spring effect for smooth animation
                stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
                damping: 10, // Controls how the spring settles (lower is more oscillatory)
            }}
            className='w-full bg-yellow-blue-gradient md:h-[22rem] rounded-3xl p-[2px]'
        >
            <div className='w-full h-full rounded-3xl bg-black px-7 md:px-[2.75rem] py-6 flex flex-col md:flex-row items-center justify-center gap-y-12'>
                <div className='w-full md:w-1/2 h-full flex flex-col items-center md:items-start justify-start'>
                    <Link
                        href={"/"}
                        className='h-20'
                    >
                        <Image
                            src={guardeerGradientLogo}
                            className='h-full w-fit'
                            alt=''
                        />
                    </Link>
                    <div className='flex items-center justify-start gap-3 h-8 mt-6'>
                        {[1,1,1,1,1,1].map((_, id) => (
                            <div 
                                key={id}
                                className='h-full aspect-square rounded-full p-[1px] bg-yellow-blue-gradient'
                            >
                                <div className='w-full h-full rounded-full bg-black'>

                                </div>
                            </div>
                        ))}
                    </div>
                    <p className='text-[#D9D9D9] font-neuehaas text-[2.2rem] text-center md:text-left font-medium md:font-light mt-4 md:mt-8'>
                        Trade, Earn, Repeat
                    </p>
                    <p className='text-[#8F8F8F] font-neuehaas pt-2 md:pt-4 text-center md:text-left '>
                        How does Guardeer Funding work?
                        <br className='hidden md:block'/>
                        How does Guardeer Funding work?
                    </p>
                </div>
                <div className='w-full md:w-1/2 h-full pt-3 hidden md:flex items-start justify-center md:gap-20'>
                    {footerLinks.map((item, index) => (
                        <div key={index} className='flex flex-col items-center justify-start'>
                            <p className='text-[#D9D9D9] font-neuehaas text-[1.2rem]'>
                                {item.title}
                            </p>
                            <div className='flex flex-col items-center justify-start gap-2 mt-4'>
                                {item.items.map((link, id) => (
                                    <Link
                                        key={id}
                                        href={link.link}
                                        className='text-[#8F8F8F] font-neuehaas  hover:underline hover:underline-offset-4'
                                    >
                                        {link.linkName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* mobile */}
                <div className='w-full md:hidden flex items-start justify-between'>
                    <div className='flex flex-col items-start justify-start'>
                        <GradientText className='text-[#D9D9D9] font-neuehaas text-[1.2rem]'>
                            {footerLinks[0].title}
                        </GradientText>
                        <div className='flex flex-col items-start justify-start gap-1 mt-3'>
                            {footerLinks[0].items.map((link, id) => (
                                <Link
                                    key={id}
                                    href={link.link}
                                    className='text-[#8F8F8F] font-neuehaas  hover:underline hover:underline-offset-4'
                                >
                                    {link.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-start'>
                        <GradientText className='text-[#D9D9D9] font-neuehaas text-[1.2rem]'>
                            {footerLinks[1].title}
                        </GradientText>
                        <div className='flex flex-col items-end justify-start gap-1 mt-3'>
                            {footerLinks[1].items.map((link, id) => (
                                <Link
                                    key={id}
                                    href={link.link}
                                    className='text-[#8F8F8F] font-neuehaas  hover:underline hover:underline-offset-4'
                                >
                                    {link.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full md:hidden flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <GradientText className='text-[#D9D9D9] font-neuehaas text-[1.2rem]'>
                            {footerLinks[2].title}
                        </GradientText>
                        <div className='flex flex-col items-center justify-center gap-1 mt-3'>
                            {footerLinks[2].items.map((link, id) => (
                                <Link
                                    key={id}
                                    href={link.link}
                                    className='text-[#8F8F8F] font-neuehaas  hover:underline hover:underline-offset-4'
                                >
                                    {link.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        
        <BottomText />
    </div>
  )
}

export default Footer