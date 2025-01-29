import React from 'react'
import Navbar from '../components/Navbar'
import gridBackground from "../../public/background/gridBackground.png"
import Image from 'next/image'
import smallLogoGradient from "../../public/logos/smallLogoGradient.png"
import GradientText from '../components/ui/GradientText'
import messagesIcon from "../../public/icons/messages.png"
import Link from 'next/link'
import DiscordSectionContactUs from '../components/Contact-Us/DiscordSectionContactUs'
import Footer from '../components/Footer'

const contactCards = [
    {
        icon: messagesIcon,
        title: "Email Us",
        subTitle: "we're here to help",
        value: "contact@guardeerfunding.com",
        linkTo: "contact@guardeerfunding.com"
    },
    {
        icon: messagesIcon,
        title: "Visit Us",
        subTitle: "Visit our office HQ",
        value: "View on Google maps",
        linkTo: ""
    },
    {
        icon: messagesIcon,
        title: "Call Us",
        subTitle: "Mon-fri from 8 am to 5 pm",
        value: "+91 7678543711",
        linkTo: "+91 7678543711"
    }
]

const page = () => {
  return (
    <div className='w-full bg-black relative overflow-x-hidden'>
        <Image
            src={gridBackground}
            className='h-screen w-fit object-cover md:w-full md:h-fit absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none'
            alt=''
        />

        <Navbar />

        <div className='pt-[30vh] pb-20 overflow-hidden relative Z-10 w-full flex flex-col items-center justify-end'>
            <Image
                src={smallLogoGradient}
                className='w-[4.4rem] h-fit'
                alt=''
            />
            <p className='text-[#b9b9b9] mt-4 text-[3.2rem] leading-[3.7rem] md:leading-normal md:text-[4.75rem] text-center font-bold font-neuehaas'>
                Contact Our{" "}
                <br className='md:hidden' />
                <GradientText>
                    Guardeer Team
                </GradientText>
            </p>
            <p className='max-w-full md:max-w-[50rem] text-[#A3A3A3] text-[1.25rem] px-8 md:px-0 mt-7 md:mt-0 md:text-[1.5rem] font-neuehaas text-center'>
                At{" "}
                <GradientText>
                    Guardeer Funding,
                </GradientText>{" "}
                we are dedicated to supporting your journey as a trading predator. Whether you have questions, need assistance, or want to learn more about our challenges, our team is ready to help you hunt down success.
            </p>

            <p className='text-[#B9B9B9] font-neuehaas text-[2.2rem] font-bold mt-28'>
                Connect With Us
            </p>

            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-[3.3rem] mt-7'>
                {contactCards.map((card, index) => (
                    <div 
                        key={index}
                        className='w-full max-w-[23rem] h-[20rem] rounded-[1.161rem] bg-yellow-blue-gradient p-[1px]'
                    >
                        <div className='w-full h-full rounded-[1.161rem] bg-black p-8 flex flex-col justify-between'>
                            <div className='w-[4.6rem] aspect-square bg-yellow-blue-gradient p-[1px] rounded-[1.161rem]'>
                                <div className='w-full h-full bg-black rounded-[1.161rem] flex items-center justify-center'>
                                    <Image
                                        src={card.icon}
                                        className='w-[2.25rem] aspect-square object-contain'
                                        alt=''
                                    />
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-[#B9B9B9] text-[1.75rem] font-medium font-neuehaas leading-none'>
                                    {card.title}
                                </p>
                                <p className='text-[#A3A3A3] font-neuehaas text-[1.237rem] capitalize leading-none mt-4 mb-7'>
                                    {card.subTitle}
                                </p>
                                <Link href={card.linkTo} className='font-semibold w-fit hover:underline font-neuehaas text-[1.237rem] capitalize leading-none'>
                                    <GradientText>
                                        {card.value}
                                    </GradientText>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='px-24 mt-16 md:mt-28'>
                <DiscordSectionContactUs />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default page