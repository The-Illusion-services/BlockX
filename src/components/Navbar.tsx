import React from "react";
import { TbMenu3 } from "react-icons/tb";
import CoinIcon from "@/assets/landin-page/blockcXCoin.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed w-full px-4 z-30 h-16 top-0 py-2 bg-black text-white lg:bg-[#1a1a1a]">
      <TbMenu3 className="lg:hidden"/>
      <span className="hidden lg:inline-flex">BlockX</span>
      <section className=" justify-evenly w-[60%] hidden lg:flex">
        <span>Game</span>
        <span>Tools</span>
        <span>Info</span>
        <span>Community</span>
      </section>
      <div className="flex items-center gap-x-1">
        <Image src={CoinIcon} alt="coin-icon" height={30} width={30} />
        <span className="text-sm">xion1...wugav</span>
      </div>
    </div>
  );
};

export default Navbar;
