import React from "react";
import {
    HiMiniHeart,
  } from "react-icons/hi2";


function DesktopItemBox({item}) {
  return (
    <>
      <div className=" p-2 bg-white rounded-t-3xl">
        <img
          className=" w-60 h-60 object-cover rounded-2xl"
          src={item == "Kitchen Appliances" ? "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D" : "https://images.unsplash.com/photo-1649628497963-a6906b7ff17e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdXNlJTIwZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"}
          alt=""
        />

        <h4 className=" text-base font-semibold pt-3">{item}</h4>
        <h4 className=" text-xs font-medium pt-2 text-[#1D1D2BB2]">
          Lorem ipsum
        </h4>
        <section className="flex items-center justify-between pb-2">
          <h4 className=" text-xs font-normal pt-2 text-[#1D1D2BB2]">
            Lorem ipsum
          </h4>
          <div className=" text-xl text-[#D50707] opacity-70">
            <HiMiniHeart />
          </div>
        </section>
        <button className="text-[#FFFFFFB2] bg-[#A6CC41] text-xs font-semibold uppercase w-full h-8">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default DesktopItemBox;
