import Image from "next/image"
import tradingGoalsBackground from "../../public/background/tradingGoalsBackground.png"
import clockIcon from "../../public/icons/24Hour.png"
import dailyPayouts from "../../public/icons/dailyPayouts.png"
import fundedTraders from "../../public/icons/fundedTraders.png"
import news from "../../public/icons/news.png"
import profitSplit from "../../public/icons/profitSplit.png"
import trailing from "../../public/icons/trailing.png"
import challenge from "../../public/icons/challenge.png"
import objectives from "../../public/icons/objectives.png"
import capital from "../../public/icons/capital.png"

const pointsArray = [
    {
        icon: dailyPayouts,
        text: "Daily Payouts"
    },
    {
        icon: clockIcon,
        text: "24/7 Support"
    },
    {
        icon: profitSplit,
        text: "No Hidden Rules"
    },
    {
        icon: trailing,
        text: "No Trailing Drawdown"
    },
    {
        icon: fundedTraders,
        text: "Real Capital, Real Opportunities"
    },
    {
        icon: news,
        text: "News & weekend Holding"
    },
    {
        icon: fundedTraders,
        text: "Payouts From Your First Trade"
    },
    {
        icon: news,
        text: "A-Booked Funded Traders"
    },
]

const cardsArray = [
    {
        icon: challenge,
        color: "#E5CD7C",
        title: <>Choose Your <span className="text-[#E5CD7C] font-semibold text-[2rem]">Challenge</span></>,
        points: [
            "Pick from 1-step, 2-step, or 3-step challenge accounts.",
            "Match the challenge to your risk tolerance and trading style.",
            "Select a capital size that aligns with your trading goals."
        ]
    },
    {
        icon: objectives,
        color: "#0EC0C8",
        title: <>Conquer Your <span className="text-[#E5CD7C] font-semibold text-[2rem]">Objectives</span></>,
        points: [
            "Meet clear objectives within a set timeframe.",
            "Refine your trading strategies.",
            "Prove your skills and dominate the market."
        ]
    },
    {
        icon: challenge,
        color: "#E5CD7C",
        title: <>Secure Funded <span className="text-[#E5CD7C] font-semibold text-[2rem]">Capital</span></>,
        points: [
            "Gain access to a substantial pool of funded capital.",
            "Turn virtual successes into real-world profits.",
            "Experience the excitement of trading with real stakes."
        ]
    },
]

const TradingGoalsCards = () => {
  return (
    <div className="w-full mt-40">
        <div className="relative w-full rounded-[2rem] flex items-end justify-end bg-[#1D1E21]">
            <Image
                src={tradingGoalsBackground}
                className="w-[45%] h-fit absolute bottom-0 left-0"
                alt=""
            />
            <div className="w-[55%] px-16 py-8 flex flex-col items-end justify-start gap-6">
                <p className="text-[clamp(10px,7.5vw,50px)] md:text-[clamp(10px,3.5vw,100px)] text-right font-bold font-neuehaas leading-[4vw]">
                    Achieve Your Trading Goals with the{" "}
                    <span className="text-text-light-gray font-ttc from-blue-green-start to-blue-green-end bg-gradient-to-r transition-all inline-block text-transparent bg-clip-text">Right Challenge</span>
                </p>
                <p className="text-[#8F8F8F] text-[clamp(10px,5vw,50px)] md:text-[clamp(10px,2vw,100px)] font-neuehaas text-right">
                    3 Challenge Types, Infinite Trading Possibilities
                </p>
                <div className="flex items-start justify-start flex-wrap gap-x-8 gap-y-4">
                    {pointsArray.map((item, index) => (
                        <div
                            key={index}
                            className="w-[calc(50%-1rem)] flex items-center justify-start gap-3"
                        >
                            <Image
                                src={item.icon}
                                className="w-8 h-8"
                                alt=""
                            />
                            <p className="font-ttc text-white text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.3vw,100px)] tracking-[0.03156rem]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex h-[26rem] items-center mt-10 justify-center gap-24">
            {cardsArray.map((item, index) => (
                <div 
                    key={index}
                    className="w-[calc(33%-4rem)] shadow-[0px_1.491px_10.597px_0px_rgba(255,252,0,0.80)_inset] even:shadow-[0px_1.491px_10.597px_0px_#0EC0C8_inset] h-full flex flex-col p-8 items-center justify-start gap-4 bg-[#313131] bg-opacity-70 rounded-2xl backdrop-blur-lg"
                >
                    <Image
                        src={item.icon}
                        className="h-[4.5rem] w-[4.5rem]"
                        alt=""
                    />
                    <div style={{ background: item.color }} className={`w-full h-[1.5px] relative`}>
                        <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 left-0 -translate-y-1/2"></div>
                        <div style={{ background: item.color }} className="absolute w-3 aspect-square rounded-full top-0 right-0 -translate-y-1/2"></div>
                    </div>
                    <ul className="list-disc w-full text-left pt-4 px-6">
                        {item.points.map((point, id) => (
                            <li
                                key={id}
                                className="text-[1.4rem] text-[#ededed] leading-[1.9rem] font-neuehaas font-normal"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className="mt-12 border border-white rounded-2xl w-full py-8 px-20 flex items-center justify-between">
            <div className="">
                <p className="text-[#0EC0C8] text-[2.4rem] font-bold font-helvetica">
                    Ready to Make Winning Trades?
                </p>
                <p className="text-[#8F8F8F] text-[1.5rem] font-medium font-ttc">
                    Compare Challenges and Account Sizes to Amplify Your Strategy
                </p>
            </div>
            <button
                className="bg-yellow-blue-gradient font-ttc font-semibold w-[16rem] h-14 rounded-full flex items-center justify-center text-black text-xl "
            >
                Click to Compare
            </button>
        </div>
    </div>
  )
}

export default TradingGoalsCards