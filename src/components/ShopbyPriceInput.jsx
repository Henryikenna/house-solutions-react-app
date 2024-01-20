import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

function ShopbyPriceInput() {
  return (
    <>
      <div className="flex items-center relative">
        
        <input
          className="relative w-5/6 h-10 border border-[#A6CC41] focus:outline-none focus:border-[1.5px] pl-6 text-xs"
          type="text"
        />
        <span className=" text-sm text-[#939090] absolute left-2">
          <BsCurrencyDollar />
        </span>
      </div>
    </>
  );
}

export default ShopbyPriceInput;
