import React from "react";
import {
    HiMiniHeart,
  } from "react-icons/hi2";

function ItemBox() {
  return (
    <>
      <div className="flex flex-col gap-[5.9px]">
        <img
          className=" w-[107px] h-[107px] object-cover rounded-[10px]"
          src="https://images.unsplash.com/photo-1594213114663-d94db9b17125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlfGVufDB8fDB8fHww"
          alt=""
        />
        <div className="bg-white p-[2px] w-[107px] rounded-b">
          <h3 className="text-[0.33125rem] text-[#000000B2] font-bold tracking-wide">
            Electronics gadgets
          </h3>
          <h4 className="text-[0.3125rem] text-[#1D1D2BB2]">Lorem ipsum</h4>
          <section className=" flex items-center justify-between">
            <h5 className="text-[0.2625rem] text-[#1D1D2BB2]">Lorem ipsum</h5>
            <div className="text-[0.53125rem] text-[#D50707] opacity-70">
              <HiMiniHeart />
            </div>
          </section>

          <button className="text-[#FFFFFFB2] bg-[#A6CC41] text-[0.36875rem] uppercase w-full h-4">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemBox;
