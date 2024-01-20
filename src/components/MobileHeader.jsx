import React from 'react'
import logo from "../assets/logoMobile.svg";
import {
    HiMiniBars3,
    HiMiniUser,
    HiMiniMagnifyingGlass,
    HiMiniHeart,
    HiArrowRight,
    HiOutlineShoppingCart,
  } from "react-icons/hi2";

function MobileHeader() {
  return (
    <>
        <div className="bg-[#09A5F1] px-[16px] py-[21px] flex justify-between items-center md:hidden">
        <div className="flex gap-2 items-center">
          <div className=" text-2xl text-white">
            <HiMiniBars3 />
          </div>
          <div className="">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="flex items-center gap-2">
         <div className="flex relative">
         <div className="relative text-[28px] text-white">
            <HiOutlineShoppingCart />
          </div>
          <p className="absolute right-0 text-[#A6CC41E5] text-[0.6875rem] bg-white w-[15px] h-[15px] justify-center text-center items-center rounded-full">0</p>
         </div>
          <div className="flex bg-white rounded-full text-[#A6CC41] w-[30px] h-[30px] justify-center text-center items-center">
            <HiMiniUser />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileHeader