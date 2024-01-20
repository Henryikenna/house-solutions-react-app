import React from 'react'
import {
    HiMiniBars3,
    HiMiniUser,
    HiMiniMagnifyingGlass,
    HiMiniHeart,
    HiArrowRight,
    HiOutlineShoppingCart,
  } from "react-icons/hi2";

function MobileSearchbar() {
  return (
    <>
        <div className="searchCont flex items-center mx-[0.875rem] mt-[1.625rem] mb-6 md:hidden">
        <input
          className="bg-white text-xs px-2 w-[85%] h-12 rounded-l-[10px] placeholder:text-black placeholder:opacity-50 placeholder:text-[0.5875rem] placeholder:font-medium focus:outline-none"
          type="text"
          placeholder="Search for products, brands and categories ..."
        />
        <button className="text-white text-[0.875rem] rounded-r-[10px] h-12 w-[15%] text-center flex justify-center items-center bg-[#A6CC41]">
          <HiMiniMagnifyingGlass />
        </button>
      </div>
    </>
  )
}

export default MobileSearchbar