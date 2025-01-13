import Navbar from "./Components/Navbar";
import backgroundImage from "../public/background/backgroundImage.png"
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full pt-[8.5rem] px-[2rem] pb-[2rem]">
      <Navbar />
      <div className="w-full h-[calc(100vh-10.5rem)] min-h-[40rem] relative overflow-hidden rounded-xl border border-opacity-20 border-text-light-gray">
        <Image
          src={backgroundImage}
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute bottom-4 left-4 rounded-2xl backdrop-blur-xl bg-black bg-opacity-40 z-10 max-w-[32rem] p-6">
          <h3 className="text-[#D9D9D9] font-helvetica text-5xl font-bold text-wrap">
            Payouts from the first trade.
          </h3>
          <h3 className="text-[#E5CD7C] font-ttc text-4xl pt-2">
            No hidden rules.
          </h3>
          <div className="w-full flex items-center justify-between">
            <h4 className="max-w-80 font-ttc text-wrap text-xl ">
              The only prop firm that funds you with real capital.
            </h4>
            <button
              className="rounded-full border-[1.5px] border-[#757575] aspect-square w-16 p-2"
            >
              <div className="w-full h-full rounded-full bg-[#04C5D2] flex items-center justify-center text-black text-xl ">
                <BsArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}