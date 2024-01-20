import React from "react";
import { FaTag } from "react-icons/fa";

function DesktopCategoryItem({item}) {
  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <p className=" text-xs">
          <FaTag />
        </p>
        <p className="text-[0.625rem] text-[#4B4B4B] font-medium">{item}</p>
      </div>
    </>
  );
}

export default DesktopCategoryItem;
