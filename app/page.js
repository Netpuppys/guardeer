
import Navbar from "@/Components/Navbar";
import Banner from "./components/Banner";
import TradingGoalsCards from "./components/TradingGoalsCards";
import RealTradingCarousel from "./components/RealTradingCarousel";

export default function Home() {
  return (
    <div className="w-full pt-[8.5rem] pb-[2rem] h-full min-h-[300vh]">
      <div className="w-full px-[2rem]">
        <Navbar />
        <Banner />
        <TradingGoalsCards />
      </div>
      <RealTradingCarousel />
    </div>
  );
}