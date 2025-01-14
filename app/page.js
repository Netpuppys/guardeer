import Navbar from "../components/Navbar";
import Banner from "./components/Banner";
import TradingGoalsCards from "./components/TradingGoalsCards";
import RealTradingCarousel from "./components/RealTradingCarousel";
import ChooseYourChallenge from "./components/ChooseYourChallenge";
import PayoutCards from "./components/PayoutCards";
import FinancialMilestoneCarousel from "./components/FinancialMilestoneCarousel";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <div className="w-full relative pt-[8.5rem] pb-[8rem] h-full min-h-[300vh]">
      <Navbar />

      <div className="w-full px-[2rem]">
        <Banner />
        <TradingGoalsCards />
      </div>

      <RealTradingCarousel />

      <div className="w-full px-[2rem]">
        <ChooseYourChallenge />
        <PayoutCards />
      </div>

      <FinancialMilestoneCarousel />
      <FaqSection />
    </div>
  );
}
