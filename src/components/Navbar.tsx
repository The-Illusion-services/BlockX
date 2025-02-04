"use client";
import CoinIcon from "@/assets/landin-page/blockcXCoin.png";
import Image from "next/image";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
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
        className={` lg:justify-evenly  bg-[#060712f2] lg:bg-transparent fixed lg:relative top-0 mt-16 lg:mt-0 lg:flex-row left-0 lg:flex flex-col px-4  gap-y-4 ${
          showSideBar
            ? "flex h-screen opacity-100 w-[80%]"
            : "hidden lg:flex h-0 opacity-0 lg:opacity-100 lg:w-[60%] w-0"
        } transition-opacity`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-normal">
          <div className="flex items-center justify-between lg:gap-x-1">
            <span>Game</span>
            <FaCaretDown
              className="cursor-pointer"
              onClick={() => handleChangeActiveNavbarItem("game")}
            />
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.game ? "flex" : "hidden"
            } bg-[#060712] lg:justify-evenly w-28 h:36 lg:h-48 lg:mt-52 px-2  flex-col shadow-md text-xs py-1`}
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
          <div className="flex items-center justify-between lg:gap-x-1">
            <span>Tools</span>
            <FaCaretDown
              className="cursor-pointer"
              onClick={() => handleChangeActiveNavbarItem("tools")}
            />
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.tools ? "flex" : "hidden"
            } bg-[#060712] lg:justify-evenly w-28 h:36 lg:h-48 lg:mt-52 px-2  flex-col shadow-md text-xs py-1`}
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
          <div className="flex items-center justify-between lg:gap-x-1">
            <span>Info</span>
            <FaCaretDown
              className="cursor-pointer"
              onClick={() => handleChangeActiveNavbarItem("info")}
            />
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.info ? "flex" : "hidden"
            } bg-[#060712] lg:justify-evenly w-28 h:36 lg:h-48 lg:mt-52 px-2  flex-col shadow-md text-xs py-1`}
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
          <div className="flex items-center justify-between lg:gap-x-1">
            <span>Community</span>
            <FaCaretDown
              className="cursor-pointer"
              onClick={() => handleChangeActiveNavbarItem("community")}
            />
          </div>
          <div
            className={`lg:absolute ${
              activeNavbarItem.community ? "flex" : "hidden"
            } bg-[#060712] lg:justify-evenly w-28 h:36 lg:h-48 lg:mt-52 px-2  flex-col shadow-md text-xs py-1`}
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
