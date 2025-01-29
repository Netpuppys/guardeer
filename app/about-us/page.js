import React from 'react'
import Navbar from '../components/Navbar'
import DiscordSection from '../components/Homepage/DiscordSection'
import Footer from '../components/Footer'
import Banner from '../components/AboutUs/Banner'
import AboutCards from '../components/AboutUs/AboutCards'
import WrittenContent from '../components/AboutUs/WrittenContent'
import BottomCard from '../components/AboutUs/BottomCard'

const page = () => {
  return (
    <div className='max-w-full w-full pt-[8.5rem] h-full'>
        <Navbar />

        <div className='max-w-full w-full px-5 md:px-16'>
          <Banner />
          <AboutCards />
          <WrittenContent />
          <BottomCard />
            
          <div className='mt-16 md:mt-20'>
            <DiscordSection/>
            <Footer />
          </div>
        </div>
    </div>
  )
}

export default page