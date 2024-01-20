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

function DesktopHeader() {
  return (
    <>
     <div className="bg-[#09A5F1] py-[21px] justify-center items-center hidden md:flex">
        <div className=" w-[80%] flex justify-between items-center">
          <img className="w-[180px]" src={logo} alt="" />

          <div className="searchCont flex items-center w-[50%]">
            <input
              className="bg-white text-xs px-4 w-[85%] h-12 rounded-l-[5px] placeholder:text-black placeholder:opacity-50 placeholder:text-[0.8rem] placeholder:font-medium focus:outline-none"
              type="text"
              placeholder="Search for products, brands and categories ..."
            />
            <button className="text-white text-[1.4rem] rounded-r-[5px] h-12 w-[15%] text-center flex justify-center items-center bg-[#A6CC41]">
              <HiMiniMagnifyingGlass />
            </button>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex relative">
              <div className="relative text-[28px] text-white">
                <HiOutlineShoppingCart />
              </div>
              <p className="absolute right-0 text-[#A6CC41E5] text-[0.6875rem] bg-white w-[15px] h-[15px] justify-center text-center items-center rounded-full">
                0
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-white rounded-full text-[#A6CC41] w-[30px] h-[30px] justify-center text-center items-center">
                <HiMiniUser />
              </div>
              <p className=" font-semibold text-sm text-white">Accounts</p>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default DesktopHeader