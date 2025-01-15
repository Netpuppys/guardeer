'use client'

import backgroundImage from "../../../public/background/backgroundImage.png";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import dailyPayouts from "../../../public/icons/dailyPayouts.png";
import profitSplit from "../../../public/icons/profitSplit.png";
import fundedTraders from "../../../public/icons/fundedTraders.png"
import payoutCardBackground from "../../../public/background/payoutCardBackground.jpeg"

const Card = ({  }) => {

    return (
      <div className="rounded-xl shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] even:shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset] h-28 w-full px-7 py-3 flex items-center justify-between bg-[#313131] bg-opacity-70 backdrop-blur-xl">
        <div className="w-fit">
          <p className="text-[2rem] text-white font-neuehaas font-bold">
            $ 18,200
          </p>
          <p className="text-[#B0B0B0] text-[1.14rem] font-ttc">
            Raphael K.
          </p>
          <p className="text-[#949494] text-sm font-ttc">
            Chile
          </p>
        </div>
        <div className="h-full rounded-2xl aspect-square border-2 border-[#E5CD7C] even:border-[#0EC0C8] flex items-center justify-center overflow-hidden">
          <Image
            src={payoutCardBackground}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    )
}

const Banner = () => {
  return (
    <div
      className="w-full flex items-end justify-between h-[calc(100vh-10.5rem)] min-h-[40rem] relative overflow-hidden rounded-[1.3rem]  border-opacity-20 border-text-light-gray"
    >
        <Image
          src={backgroundImage}
          className="absolute w-full h-full object-cover"
          alt="background"
        />
        <div className="pl-10 pb-4 w-fit flex items-end gap-5">
            <div className="rounded-2xl backdrop-blur-xl bg-black bg-opacity-40 z-10 max-w-[32rem] p-6">
                <h3 className="text-[#D9D9D9] font-neuehaas text-5xl font-bold text-wrap">
                    Payouts from the first trade.
                </h3>
                <h3 className="text-[#E5CD7C] font-neuehaas text-4xl pt-2 font-semibold">
                    No hidden rules.
                </h3>
                <div className="w-full flex items-center justify-between">
                    <h4 className="max-w-80 font-neuehaas text-wrap text-xl">
                        The only prop firm that funds you with real capital.
                    </h4>
                    <button className="rounded-full border-[1.5px] border-[#757575] border-l-[#04C5D2] hover:border-l-[#757575] hover:border-[#04C5D2] transition-all duration-500 aspect-square w-16 p-2 hover:rotateBorderL">
                        <div className="w-full h-full rounded-full bg-[#04C5D2] flex items-center justify-center text-black text-xl ">
                            <BsArrowRight />
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-80 p-6 bg-black bg-opacity-50 rounded-2xl backdrop-blur-lg flex flex-col items-start gap-4">
                <div className="flex items-center justify-start gap-3">
                    <Image src={dailyPayouts} className="h-[1.5rem] w-fit" alt="" />
                    <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
                        Daily Payouts
                    </p>
                </div>
                <div className="flex items-center justify-start gap-3">
                    <Image src={profitSplit} className="h-[1.5rem] w-fit" alt="" />
                    <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
                        80% Profit Split
                    </p>
                </div>
                <div className="flex items-center justify-start gap-3">
                    <Image src={fundedTraders} className="h-[1.5rem] w-fit" alt="" />
                    <p className="font-neuehaas text-[#dedede] tracking-[0.02125rem]">
                        Funded Traders A-Booked
                    </p>
                </div>
            </div>
        </div>
        <div className="z-10 animate-slide-left w-fit pr-6 h-full top-0 right-0 overflow-hidden bg-black-right-gradient flex items-center">
            <div className="py-8 w-[22rem] relative h-[36rem] flex flex-col items-start justify-start gap-6 overflow-y-scroll no-scrollbar">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Banner