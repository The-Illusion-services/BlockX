"use client";
import CoinIcon from "@/assets/landin-page/blockcXCoin.png";
import Image from "next/image";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { TbMenu3 } from "react-icons/tb";

type NavbarItem = "game" | "tools" | "info" | "community";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleToggleNavbar = () => {
    setShowSideBar(!showSideBar);
  };

  const initialNavbarItemState = {
    game: false,
    tools: false,
    info: false,
    community: false,
  };

  const [activeNavbarItem, setActiveNavbarItem] = useState(
    initialNavbarItemState
  );

  const handleChangeActiveNavbarItem = (item: NavbarItem) => {
    setActiveNavbarItem((prevState) =>
      prevState[item] === true
        ? initialNavbarItemState
        : {
            game: false,
            tools: false,
            community: false,
            info: false,
            [item]: true,
          }
    );
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
        className={` lg:justify-evenly  bg-[#060712f2] lg:bg-transparent fixed lg:relative top-0 mt-16 lg:mt-0 lg:flex-row left-0 lg:flex flex-col px-4  gap-y-6 ${
          showSideBar
            ? " h-screen opacity-100 w-[80%]"
            : " h-0 opacity-0 lg:opacity-100 lg:w-[60%] w-0"
        } transition-all flex`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-normal">
          <div
            className="flex items-center justify-between lg:gap-x-1 cursor-pointer"
            onClick={() => handleChangeActiveNavbarItem("game")}
          >
            <span>Game</span>
            {activeNavbarItem.game ? (
              <FaCaretUp />
            ) : (
              <FaCaretDown className="" />
            )}
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.game
              ? " opacity-100 scale-100 h-48"
              : " h-0 opacity-0 scale-0"
          } bg-[#060712] flex lg:justify-evenly w-28 lg:mt-52 px-2 flex-col shadow-md text-sm lg:text-xs py-1 transition-all ease-in-out `}
          >
            <span>Roulette</span>
            <span>Price prediction</span>
            <span>Tetris</span>
            <span>Racing</span>
            <span>2048</span>
            <span>Fortune Wheel</span>
            <span>Lottery</span>
            <span>Sports</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-normal">
          <div
            className="flex items-center justify-between lg:gap-x-1 cursor-pointer"
            onClick={() => handleChangeActiveNavbarItem("tools")}
          >
            <span>Tools</span>
            {activeNavbarItem.tools ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.tools
              ? " opacity-100 scale-100 h-48"
              : " h-0 opacity-0 scale-0"
          } bg-[#060712] flex lg:justify-evenly w-28 lg:mt-52 px-2 flex-col shadow-md text-sm lg:text-xs py-1 transition-all ease-in-out `}
          >
            <span>Roulette</span>
            <span>Price prediction</span>
            <span>Tetris</span>
            <span>Racing</span>
            <span>2048</span>
            <span>Fortune Wheel</span>
            <span>Lottery</span>
            <span>Sports</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-normal">
          <div
            className="flex items-center justify-between lg:gap-x-1 cursor-pointer"
            onClick={() => handleChangeActiveNavbarItem("info")}
          >
            <span>Info</span>
            {activeNavbarItem.info ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.info
              ? " opacity-100 scale-100 h-48"
              : " h-0 opacity-0 scale-0"
          } bg-[#060712] flex lg:justify-evenly w-28 lg:mt-52 px-2 flex-col shadow-md text-sm lg:text-xs py-1 transition-all ease-in-out `}
          >
            <span>Roulette</span>
            <span>Price prediction</span>
            <span>Tetris</span>
            <span>Racing</span>
            <span>2048</span>
            <span>Fortune Wheel</span>
            <span>Lottery</span>
            <span>Sports</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-normal">
          <div
            className="flex items-center justify-between lg:gap-x-1 cursor-pointer"
            onClick={() => handleChangeActiveNavbarItem("community")}
          >
            <span>Community</span>
            {activeNavbarItem.community ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.community
                ? " opacity-100 scale-100 h-48"
                : " h-0 opacity-0 scale-0"
            } bg-[#060712] flex lg:justify-evenly w-28 lg:mt-52 px-2 flex-col shadow-md text-sm lg:text-xs py-1 transition-all ease-in-out `}
          >
            <span>Roulette</span>
            <span>Price prediction</span>
            <span>Tetris</span>
            <span>Racing</span>
            <span>2048</span>
            <span>Fortune Wheel</span>
            <span>Lottery</span>
            <span>Sports</span>
          </div>
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
