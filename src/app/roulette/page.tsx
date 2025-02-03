"use client";
import React from "react";
import { motion } from "framer-motion";
import fullWheel from "@/assets/Roulette/fullWheel.png";
import Image from "next/image";
import pointer from "@/assets/Roulette/pointer.png";
import heroGradient from "@/assets/Roulette/hero-gradient.png";
import Navbar from "@/components/Navbar";
import blockXRoom from "@/assets/Roulette/BlockXRoom.png";
import { FaCaretDown } from "react-icons/fa6";
import TableComp from "@/components/Table";
import { NumberBoard } from "@/components/Roulette";
import NumberBoardGroup from "@/components/Roulette";

const Roulette = () => {
  return (
    <main className="min-h-screen flex flex-col  gap-y-10">
      <Navbar />
      <section className="lg:flex-row flex flex-col lg:px-2">
        <Image
          src={heroGradient}
          alt="heroGradient"
          className="absolute -z-10 lg:opacity-100 lg:w-full lg:h-full"
        />
        <section className="lg:order-2 lg:w-[60%] lg:overflow-y-hidden overflow-hidden">
          <div className="pt-28 w-full flex flex-col justify-center items-center text-[#EEEEEE] overflow-hidden">
            <span className=" text-[30px]">01:00</span>
            <span className="text-[10px] font-light">Wheel Spinning In</span>
          </div>

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <Image
              src={fullWheel}
              alt="full wheel"
              className="relative z-10 lg:w-[695px] lg:h-[682px] lg:mx-auto"
            />
          </motion.div>
          <Image
            src={pointer}
            alt="roulette pointer"
            className="absolute lg:h-48 h-[100px] w-10 lg:w-[76px] mt-[-360px] lg:mt-[-668px] ml-[170px] lg:ml-[340px] mx-auto flex justify-center items-center  "
          />

          {/* Mobile View */}
          <article className="mt-[-220px] relative z-20 h-52 bg-[#060712] to  lg:hidden  flex flex-col justify-center  ">
            <Image
              src={heroGradient}
              alt="heroGradient"
              className="absolute -z-10 opacity-60 lg:opacity-0"
            />

            <div className="flex flex-nowrap  gap-x-2 overflow-x-auto  px-4 scroll-smooth gap-y-2  lg:items-center">
              <NumberBoard />
            </div>
            <NumberBoardGroup />
          </article>

          {/* Desktop View */}

          <article className="flex-row hidden lg:flex mt-[-400px] relative z-20 bg-[#060712] lg:justify-evenly ">
            <div className="w-full gap-y-1 flex flex-col h-full ">
              <div className=" w-full h-[74px] z-40 text-white flex items-center justify-center cursor-pointer  bg-[#FFFFFF0A] rounded-lg">
                <span>0</span>
              </div>
              <div className="h-[74px] w-full  z-40 flex items-center justify-center cursor-pointer  bg-[#FFFFFF0A] rounded-lg">
                <span className="text-white ">00</span>
              </div>
            </div>

            <article className=" w-[85%] mx-auto  ml-1">
              <div className="grid grid-cols-12  gap-y-1 justify-center items-center ">
                <NumberBoard />
              </div>
              <NumberBoardGroup />
            </article>
            <div className=" w-full gap-y-1 flex flex-col">
              <div className="h-12 w-full z-40 text-white flex items-center justify-center cursor-pointer  bg-[#FFFFFF0A] rounded-lg">
                <span className="rotate-90">2To1</span>
              </div>
              <div className="h-12 w-full  z-40 text-white flex items-center justify-center cursor-pointer  bg-[#FFFFFF0A] rounded-lg">
                <span className="rotate-90">2To1</span>
              </div>
              <div className="h-12 w-full  z-40 text-white flex items-center justify-center cursor-pointer  bg-[#FFFFFF0A] rounded-lg">
                <span className="rotate-90">2To1</span>
              </div>
            </div>
          </article>
        </section>
        <section className="bg-[#FFFFFF08] px-4 rounded-xl  w-[94%]  mx-auto  gap-y-2 flex flex-col py-2 lg:order-3 lg:w-[20%] lg:mt-20 mt-10">
          <div className="text-white flex flex-col gap-y-2">
            <span>Place your bet</span>
            <div className="bg-[#FFFFFF0A] p-1 rounded-lg h-16 flex flex-col px-4 justify-center">
              <span className="text-lg">65.90</span>
              <span className="text-xs text-[#AAAAAA]">Your balance (USD)</span>
            </div>
          </div>
          <div className="text-white flex flex-col gap-y-2">
            <span>Default bet value</span>
            <input
              className="bg-[#FFFFFF0A] px-4 rounded-lg h-16 placeholder:text-[#AAAAAA]"
              placeholder="Enter value"
            />
          </div>
          <div className="flex gap-x-1 justify-between text-[#A5A5A5]">
            <span className="w-12 bg-[#FFFFFF0A] text-center rounded-lg">
              5%
            </span>
            <span className="w-12 bg-[#FFFFFF0A] text-center rounded-lg ">
              10%
            </span>
            <span className="w-12 bg-[#FFFFFF0A] text-center rounded-lg">
              25%
            </span>
            <span className="w-12 bg-[#FFFFFF0A] text-center rounded-lg">
              MAX
            </span>
          </div>

          <button className="bg-[#5856D6] text-white w-full h-12 rounded-lg">
            Place a bet
          </button>
        </section>
        <section className="bg-[#FFFFFF08] lg:bg-transpt px-4 rounded-xl  w-[94%]  mx-auto py-2  flex flex-col gap-y-3 lg:w-[20%] lg:mt-20 mt-10">
          <span className="text-white">Game Overview</span>
          <article>
            <span className="text-white">Tables</span>
            <div className="flex justify-between items-center w-full  text-white  h-16 rounded-lg px-4 shadow-lg border border-[#ffffff0b]">
              <div className="flex items-center gap-x-1">
                <Image
                  src={blockXRoom}
                  alt="Block X room logo"
                  className="w-8 h-8"
                />
                <span>BLOCX-ROOM</span>
              </div>
              <FaCaretDown className="text-[#AAAAAA] text-lg" />
            </div>
          </article>

          <article className="border-t border-b h-[88px] flex flex-col justify-center">
            <span className="text-[#AAAAAA]">Room Liquidity (USD)</span>
            <span className="text-white text-lg">509.15K</span>
          </article>

          <article className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#AAAAAA]">Max. Place</span>
              <span className="text-white">50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#AAAAAA]">Min. Place</span>
              <span className="text-white">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#AAAAAA]">Table Owner</span>
              <span className="text-white">xion1...wugav</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#AAAAAA]">Table Fee</span>
              <span className="text-white">3%</span>
            </div>
          </article>
        </section>
      </section>

      <section className="px-4  text-white">
        <TableComp />
      </section>
    </main>
  );
};

export default Roulette;
