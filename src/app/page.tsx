"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IoGameControllerOutline } from "react-icons/io5";
import gradient from "@/assets/landin-page/hero-gradient.png";
import latestPlayers from "@/assets/landin-page/latest-players.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { BiSolidCoinStack } from "react-icons/bi";
import { SiNintendogamecube } from "react-icons/si";
import Navbar from "@/components/Navbar";
import latestPlayersWeb from "@/assets/landin-page/latest-players-lg.png";
import bgGradient from "@/assets/landin-page/bg-gradient.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="overflow-x-auto">
      <Navbar />
      <main className="mt-16  bg-black text-white">
        <Image
          src={bgGradient}
          alt=""
          className="absolute z-10 w-30 w-[300px] h-[400px] lg:hidden"
        />
        <Image
          src={bgGradient}
          alt=""
          className="absolute z-10 w-30 hidden lg:w-[1200px] lg:flex lg:justify-center "
        />
        <main className="px-8">
          <section
            className="flex flex-col gap-y-8 items-center justify-center pt-20"
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <div className="flex flex-col text-2xl lg:text-5xl font-bold text-center w-[80%]">
              <span>First Crypto Mobile</span>
              <Image
                src={gradient}
                alt="hero"
                className="w-[80%] ml-auto lg:mx-auto lg:w-[30%] relative z-10"
                data-aos="slide-left"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
                data-aos-once="true"
              />
              <span>Gaming Marketplace</span>
            </div>
            <p className="text-center font-extralight text-sm lg:px-56">
              Welcome to the world's first decentralized mobile gaming
              marketplace. Leveraging cutting-edge blockchain technology on
              XION, we're bringing a new level of gaming accessibility to
              everyone.Prepare yourself for an unparalleled mobile gaming
              experience that combines the power of blockchain with innovative,
              diverse gameplay.
            </p>
            <article className="flex gap-x-4 relative z-20">
              <button
                className="bg-[#5856D6] w-[140px] flex justify-center items-center gap-x-2 rounded-lg  "
                data-aos="fade-right"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <IoGameControllerOutline />
                Play Now
              </button>
              <button
                className="border-[#5856D6] w-[140px] h-[48px] border flex  items-center  rounded-lg text-center justify-center"
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Faucet
              </button>
            </article>
          </section>

          <section
            className="mx-auto flex justify-center mt-10 relative z-20"
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <Image
              src={latestPlayers}
              alt="latest-players"
              className="mt-10 w-[330px] lg:hidden"
            />
            <Image
              src={latestPlayersWeb}
              alt=""
              className="mt-10 latest-players-lg hidden  lg:block"
              width={600}
            />
          </section>

          <div className="flex flex-col items-center justify-center text-center gap-y-4 mt-10">
            <span className="text-3xl font-medium text-[36px]">
              Empowering Gamers Worldwide
            </span>
            <span className="px-4 text-sm font-light">
              Explore the marketplace today and immerse yourself in a new era of
              mobile gaming
            </span>
          </div>
          <section className="mt-10 flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-10">
            <article
              className="flex flex-col gap-y-3 border bg-[#0B0D2775] border-[#061C3D] rounded-lg p-4 w-[327px] h-[143px]"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <IoIosInformationCircleOutline className="text-3xl  text-[#5856D6]  rounded-sm p-1 bg-[#060712]" />
              <div className="flex flex-col lg:gap-y-2">
                <span>Immense Blockchain Benefits</span>
                <span className="text-xs font-light">
                  Experience the power of blockchain in gaming
                </span>
              </div>
            </article>
            <article
              className="flex flex-col gap-y-3 border bg-[#0B0D2775] border-[#061C3D] rounded-lg p-4 w-[327px] h-[143px]"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <PiLightbulbFilamentLight className="text-3xl text-[#5856D6]" />
              <div className="flex flex-col lg:gap-y-2">
                <span>Faster, Safer Gaming Modes</span>
                <span className="text-xs font-light">
                  Blockchain-backed security and instant transactions
                </span>
              </div>
            </article>
            <article
              className="flex flex-col gap-y-3 border bg-[#0B0D2775] border-[#061C3D] rounded-lg p-4 w-[327px] h-[143px]"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <IoIosInformationCircleOutline className="text-3xl text-[#5856D6]" />
              <div className="flex flex-col lg:gap-y-2">
                <span>Fair Gaming for All</span>
                <span className="text-xs font-light">
                  Transparent and decentralized, ensuring fair play
                </span>
              </div>
            </article>
            <article
              className="flex flex-col gap-y-3 border bg-[#0B0D2775] border-[#061C3D] rounded-lg p-4 w-[327px] h-[143px]"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <BiSolidCoinStack className="text-3xl text-[#5856D6]" />
              <div className="flex flex-col lg:gap-y-2">
                <span>Endless Entertainment</span>
                <span className="text-xs font-light">
                  Discover a diverse collection of games from indie developers
                </span>
              </div>
            </article>
            <article
              className="flex flex-col gap-y-3 border bg-[#0B0D2775] border-[#061C3D] rounded-lg p-4 w-[327px] h-[143px]"
              data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <SiNintendogamecube className="text-3xl text-[#5856D6]" />
              <div className="flex flex-col lg:gap-y-2">
                <span>Earn and Trade Unique Digital Assets</span>
                <span className="text-xs font-light">
                  Earn rewards and trade NFTs through our innovative protocol
                </span>
              </div>
            </article>
          </section>
        </main>
      </main>
    </section>
  );
}
