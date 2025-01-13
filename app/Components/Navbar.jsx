import React from 'react'
import guardeerLogo from "../../public/logos/guardeerLogo.png"
import Link from 'next/link'
import Image from 'next/image'

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
  return (
    <div className='w-[calc(100%-4rem)] h-[4.5rem] fixed top-8 left-8 right-8 bg-[#1D1E21] rounded-lg py-[0.75rem] px-[1.25rem] flex items-center justify-between'>
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

        <button
            className='bg-[#0EC0C8] h-12 px-10 flex items-center justify-center text-xl font-neuehaas font-semibold rounded-lg'
        >
            Login
        </button>
    </div>
  )
}

export default Navbar