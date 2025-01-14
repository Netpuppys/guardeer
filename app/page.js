import Navbar from "./components/Navbar";
import Banner from "./components/Homepage/Banner";
import TradingGoalsCards from "./components/Homepage/TradingGoalsCards";
import RealTradingCarousel from "./components/Homepage/RealTradingCarousel";
import ChooseYourChallenge from "./components/Homepage/ChooseYourChallenge";
import PayoutCards from "./components/Homepage/PayoutCards";
import FinancialMilestoneCarousel from "./components/Homepage/FinancialMilestoneCarousel";
import FaqSection from "./components/Homepage/FaqSection";
import DiscordSection from "./components/Homepage/DiscordSection";
import footerImage from "../public/delete/footer.png"
import aboutImage from "../public/delete/about.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative pt-[8.5rem] pb-[8rem] h-full min-h-[300vh]">
      <Navbar />

      <div className="w-full px-[2rem]">
        <Banner />
        <div className="w-full flex items-center justify-center px-60 py-20">
          <Image
            src={aboutImage}
            className="w-full h-fit mt-10"
            alt=""
          />
        </div>
        <TradingGoalsCards />
      </div>

      <RealTradingCarousel />

      <div className="w-full px-[2rem]">
        <ChooseYourChallenge />
        <PayoutCards />
      </div>

      <FinancialMilestoneCarousel />
      <FaqSection />
      <div className="w-full px-[5.5rem] mt-60">
        <DiscordSection />
        <Image
          src={footerImage}
          className="w-full h-fit mt-10"
          alt=""
        />
      </div>
    </div>
  );
}
