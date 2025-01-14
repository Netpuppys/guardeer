'use client'

import React, { useEffect, useRef, useState } from 'react'
import guardeerLogo from "../public/logos/guardeerLogo.png"
import Link from 'next/link'
import Image from 'next/image'
import { IoClose, IoSearchOutline } from "react-icons/io5";

const navItems = [
    {
        name: "Home",
        linkTo: "/"
    },
    {
        name: "About Us",
        linkTo: "/"
    },
    {
        name: "Challenge",
        linkTo: "/"
    },
    {
        name: "FAQ's",
        linkTo: "/"
    },
    {
        name: "Contact us",
        linkTo: "/"
    },
]

const Navbar = () => {
    const searchBarRef = useRef(null)

    const [ isSearchBarVisible, setIsSearchBarVisible ] = useState(false)

    useEffect(() => {
        if (searchBarRef.current && isSearchBarVisible) {
            searchBarRef.current.focus()
        }
    }, [isSearchBarVisible])
    
  return (
    <div className='w-[calc(100vw-4rem)] h-[4.5rem] z-50 fixed top-8 left-8 right-8 bg-[#1D1E21] rounded-[1.3rem] py-[0.75rem] px-[1.25rem] flex items-center justify-between gap-20'>
        <Link href={"/"} className='h-full w-fit'>
            <Image
                src={guardeerLogo}
                className='h-full w-fit'
                alt="Guardeer"
            />
        </Link>
            
        <div className='w-fit flex items-center justify-center gap-8'>
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.linkTo}
                    className='text-text-light-gray font-ttc from-blue-green-start to-blue-green-end font-medium hover:bg-gradient-to-r hover:text-xl text-lg transition-all inline-block hover:text-transparent bg-clip-text'
                >
                    {item.name}
                </Link>
            ))}
        </div>

        <div className='flex items-center justify-center gap-3'>
            <div className={`rounded-full h-12 relative overflow-hidden
                ${isSearchBarVisible? "animate-show-search w-80" : "animate-hide-search w-16"}
            `}>
                <input
                    ref={searchBarRef}
                    type='text'
                    className={`w-full h-full rounded-full bg-[#3c3e43] focus:outline-none px-4 text-white text-xl`}
                />
                <button 
                    onClick={() => setIsSearchBarVisible(prev => !prev)}
                    className='bg-[#2B2D32] h-full rounded-full w-16 absolute top-0 right-0 text-2xl flex items-center justify-center'
                >
                    {!isSearchBarVisible? <IoSearchOutline /> : <IoClose />}
                </button>
            </div>
            <button
                className='bg-blue-yellow-gradient hover:bg-yellow-blue-gradient h-12 w-40 p-[2px] font-ttc text-white flex items-center justify-center text-lg font-semibold rounded-full'
            >
                <div className='w-full h-full bg-[#2B2D32] rounded-full flex items-center justify-center'>
                    Login
                </div>
            </button>
            <button
                className='bg-yellow-blue-gradient hover:animate-gradient-flip overflow-hidden h-12 w-40 font-ttc text-white flex items-center justify-center text-lg font-semibold rounded-full'
            >
                Signup
            </button>
        </div>

    </div>
  )
}

export default Navbar