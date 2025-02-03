import React from "react";


const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]

const blueBgNumbers = [
  3, 9, 12, 18, 21, 27, 30, 36, 5, 14, 17, 23, 32, 1, 7, 16, 19, 25, 34,
];
const getNumBgColor = (originalNumber: number) => {
 return blueBgNumbers.find((number) => {
      return originalNumber === number
  });
};
export const NumberBoard = () => {
  return numbers.map((number, index) => {
    return (
      <div
        key={index}
          className={`h-12  z-40 text-white flex items-center justify-center cursor-pointer lg:w-12 min-w-12  ${getNumBgColor(number)? "bg-[#5856D61A]" : "bg-[#060712]"} bg-[#FFFFFF0A] rounded-lg`}
        title={number.toString()}
      >
        <span>{number}</span>
      </div>
    );
  });
};
const NumberBoardGroup = () => {
  return (
    <>
      <div className="flex text-white justify-center lg:justify-between gap-x-1 w-full h-12 mt-4  lg:px-0 px-4">
        <div className="bg-[#FFFFFF0A] w-[33%] cursor-pointer   flex items-center justify-center rounded-lg">
          <span>1 TO 12</span>
        </div>
        <div className="bg-[#FFFFFF0A] w-[33%]  cursor-pointer flex items-center justify-center rounded-lg">
          <span>13 TO 24</span>
        </div>
        <div className="bg-[#FFFFFF0A] w-[33%] cursor-pointer  flex items-center justify-center rounded-lg">
          <span>25 TO 36</span>
        </div>
      </div>
      <div className="flex gap-x-2 mt-2 text-xs  w-full  lg:justify-between lg:px-0 px-4">
        <div className="h-12 min-w-[50px] lg:min-w-[100px]  z-40 text-white flex items-center justify-center cursor-pointer  bg-[#FFFFFF0A] rounded-lg">
          <span>1 TO 18</span>
        </div>
        <div className="h-12 min-w-[50px] lg:min-w-[100px] z-40 text-white flex items-center justify-center cursor-pointer  bg-[#5856D626] rounded-lg">
          <span>EVEN</span>
        </div>
        <div className="h-12 min-w-[50px] lg:min-w-[100px] z-40 text-white flex items-center justify-center cursor-pointer  bg-[#06071233] rounded-lg">
          <span>BLUE</span>
        </div>
        <div className="h-12 min-w-[50px] lg:min-w-[100px] z-40 text-white flex items-center justify-center cursor-pointer  bg-[#5856D626] rounded-lg">
          <span>BLACK</span>
        </div>
        <div className="h-12 min-w-[50px] lg:min-w-[100px] z-40 text-white flex items-center justify-center cursor-pointer  bg-[#5856D626] rounded-lg">
          <span>ODD</span>
        </div>
        <div className="h-12 min-w-[50px] lg:min-w-[100px] z-40 text-white flex items-center justify-center cursor-pointer  bg-[#06071233] rounded-lg">
          <span>19 TO 36</span>
        </div>
      </div>
    </>
  );
};

export default NumberBoardGroup;
