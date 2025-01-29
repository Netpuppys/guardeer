
import AnimatedContainer from "../ui/AnimatedContainer";
import bottomCardBg from "../../../public/background/bottomCardBg.png"
import Image from "next/image";
import GradientText from "../ui/GradientText";


const BottomCard = () => {

    return (
        <div className="mt-20 w-full">
            <AnimatedContainer>
                <div className="w-full h-[36rem] relative z-10 flex flex-col items-center justify-center gap-10 px-24">
                    <Image
                        src={bottomCardBg}
                        className="w-full h-full absolute top-0 left-0 object-cover"
                        alt=""
                    />

                    <p className="relative z-10 font-neuehaas text-[4.1rem] font-bold text-center leading-[4.7rem]">
                        <GradientText>Guardeer Funding</GradientText> is more than
                        <br />
                        just a platform.
                    </p>
                    <p className="relative z-10 text-center text-[#DCDCDC] text-[1.6rem] font-neuehaas">
                        We understand the challenges faced by many prop firms. We've seen it firsthand - the quick rise and the sudden fall. That's why we've built a different kind of company. Our team is comprised of seasoned traders and financial experts, but more importantly, they're people who've been in the trenches with you. They understand the thrill of the hunt and the sting of setbacks. They're here not just to provide capital, but to guide, support, and celebrate your victories.
                        <br />
                        <br />
                        We're building a sustainable future, together. A future where skilled hunters can unleash their potential and thrive in the financial markets.
                    </p>

                </div>
            </AnimatedContainer>
        </div>
    )
}

export default BottomCard