import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Faq/Banner'
import FaqSection from '../components/Faq/FaqSection'
import DiscordSection from '../components/Homepage/DiscordSection'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='w-full pt-[8.5rem]'>
        <Navbar />

        <div className='w-full px-5 md:px-16'>
            <Banner />

            <FaqSection />
            
            <div className='mt-16 md:mt-28'>
                <DiscordSection/>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default page