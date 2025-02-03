"use client";
import React, { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa6";
import CoinIcon from "@/assets/landin-page/blockcXCoin.png";
import Image from "next/image";
import { HiMiniXMark } from "react-icons/hi2";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleToggleNavbar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="flex justify-between items-center fixed w-full px-4 z-50 h-16 top-0 py-2 bg-black text-white lg:bg-[#060712f2] lg:w-[90%] lg:rounded-[20px]  lg:mx-auto lg:right-0 lg:left-0">
      {showSideBar ? (
        <HiMiniXMark
          onClick={handleToggleNavbar}
          className="text-lg font-bold lg:hidden"
        />
      ) : (
        <TbMenu3 className="lg:hidden" onClick={handleToggleNavbar} />
      )}
      <span className="hidden lg:inline-flex">BlockX</span>
      <section
        className={` lg:justify-evenly  bg-[#060712f2] lg:bg-transparent fixed lg:relative top-0 mt-16 lg:mt-0 lg:flex-row left-0 lg:flex flex-col px-4 gap-y-10 ${
          showSideBar
            ? "flex h-screen opacity-100 w-[80%]"
            : "hidden lg:flex h-0 opacity-0 lg:opacity-100 lg:w-[60%] w-0"
        } transition-opacity`}
      >
        <div className="flex items-center justify-between lg:justify-normal">
          <span>Game</span>
          <FaCaretDown className="" />
        </div>
        <div className="flex items-center justify-between lg:justify-normal">
          <span>Tools</span>
          <FaCaretDown className="" />
        </div>
        <div className="flex items-center justify-between lg:justify-normal">
          <span>Info</span>
          <FaCaretDown className="" />
        </div>
        <div className="flex items-center justify-between lg:justify-normal">
          <span>Community</span>
          <FaCaretDown className="" />
        </div>
      </section>
      <div className="flex items-center gap-x-1">
        <Image src={CoinIcon} alt="coin-icon" height={30} width={30} />
        <span className="text-sm">xion1...wugav</span>
      </div>
    </div>
  );
};

export default Navbar;
