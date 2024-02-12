import React from 'react'
import ItemBox from './ItemBox'

function MobileMidSection({numbersList}) {
  return (
    <>
     <div className="mx-[0.875rem] mb-6 md:hidden">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-y-3 gap-1">
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>
      </div>

      <div className="mx-[0.875rem] mb-6 md:hidden">
        <div className="mb-[11px]">
          <h3 className="text-[0.478125rem] font-semibold text-[#000000B2] mb-[2px]">
            Today’s deal
          </h3>
          <h4 className="text-[#000000B2] text-[0.2625rem] w-[42%]">
            Explore, shop, and experience the magic right at your fingertips
          </h4>
        </div>

        <div className="mx-auto flex flex-wrap items-center justify-between gap-y-3 gap-1 md:hidden">
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>
      </div>

      <div className="mx-[0.875rem] md:hidden">
        <div className="mb-[11px]">
          <h3 className="text-[0.478125rem] font-semibold text-[#000000B2] mb-[2px]">
            Featured deals
          </h3>
          <h4 className="text-[#000000B2] text-[0.2625rem] w-[42%]">
            We're proud to partner with tons of local farms and artisans who
            bring us an array of incredible food all year round!
          </h4>
        </div>

        <div className="mx-auto flex flex-wrap items-center justify-between gap-y-3 gap-1">
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>
      </div>

      <div className=" mx-11 my-8 flex items-center justify-between md:hidden">
        <h3 className="text-[0.46875rem] font-medium md:text-xs">Previous</h3>

        <div className="flex gap-3 items-center ">
          {numbersList.map((item) => (
            <h4
              className={`${
                item == 12 && "selectedNumber"
              } text-[0.46875rem] text-[#999CA0] md:text-xs`}
            >
              {item}
            </h4>
          ))}
        </div>

        <h3 className="text-[0.46875rem] font-medium md:text-xs">Next</h3>
      </div>   
    </>
  )
}

export default MobileMidSection