'use client'

import Navbar from "./components/Navbar";
import Banner from "./components/Homepage/Banner";
import TradingGoalsCards from "./components/Homepage/TradingGoalsCards";
import RealTradingCarousel from "./components/Homepage/RealTradingCarousel";
import ChooseYourChallenge from "./components/Homepage/ChooseYourChallenge";
import PayoutCards from "./components/Homepage/PayoutCards";
import FinancialMilestoneCarousel from "./components/Homepage/FinancialMilestoneCarousel";
import FaqSection from "./components/Homepage/FaqSection";
import DiscordSection from "./components/Homepage/DiscordSection";
import AboutSection from "./components/Homepage/AboutSection";
import Footer from "./components/Footer";
import CardsSectionsMobile from "./components/Homepage/CardsSectionsMobile";

export default function Home() {
  return (
    <div className="w-full relative md:pt-[8.5rem] max-w-[100vw] overflow-hidden pb-10 md:pb-6 h-full min-h-[300vh]">
      <Navbar />

      <div className="w-full px-[1.25rm] md:px-[2rem]">
        <Banner />
      </div>

      <CardsSectionsMobile />

      <div className="w-full px-[2.25rem] md:px-[2rem]">
        <AboutSection />
        <TradingGoalsCards />
      </div>

      <RealTradingCarousel />

      <div className="w-full px-[1.25rem] md:px-[2rem]">
        <ChooseYourChallenge />
        <PayoutCards />
      </div>

      <FinancialMilestoneCarousel />
      <FaqSection />
      <div className="w-full px-[1.25rem] md:px-[5.5rem] mt-14 md:mt-20">
        <DiscordSection />
        <Footer />
      </div>
    </div>
  );
}
