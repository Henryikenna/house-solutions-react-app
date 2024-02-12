import React from 'react'
import ShopbyPriceInput from './ShopbyPriceInput'
import DesktopItemBox from './DesktopItemBox'
import DesktopCategoryItem from './DesktopCategoryItem'

function DesktopMidSection({numbersList, categoryItemsList}) {
  return (
    <>
      <div className="w-[80%] ml-28 mr-20 mt-12 gap-9 hidden md:flex">
        <div className="w-[30%]">
          <p className=" text-base font-bold text-white bg-black py-3 px-3">
            SHOP BY
          </p>
          <div className="relative">
            <div className="categoryShadow text-[0.72rem] text-[#1E1E1E] font-semibold bg-white py-3 px-3 relative z-50">
              Category
            </div>
            <div className=" ">
              <div className="bg-white py-2 px-3 w-full">
                {categoryItemsList.map((item) => (
                  <DesktopCategoryItem item={item} />
                ))}
              </div>

              <div className=" ">
                <div className="priceShadow text-[0.72rem] text-[#1E1E1E] font-semibold bg-white py-3 px-3 w-full z-50 relative">
                  Price
                </div>

                <div className=" bg-white w-full px-3 py-3 flex items-center">
                  <ShopbyPriceInput />
                  <ShopbyPriceInput />
                  <button className=" bg-[#A6CC41] text-white text-[0.875rem] px-3 h-10">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[70%] flex flex-col gap-10 ">
          <div className="flex flex-wrap gap-5">
            <DesktopItemBox item={"Kitchen Appliances"} />
            <DesktopItemBox item={"Kitchen Appliances"} />
            <DesktopItemBox item={"Kitchen Appliances"} />
          </div>
          <div className="flex flex-col gap-4">
            <section className="">
              <h4 className=" text-2xl text-[#000000B2] font-bold mb-1">
                Today’s deal
              </h4>
              <p className=" text-base font-medium">
                Explore, shop, and experience the magic right at your fingertips
              </p>
            </section>
            <div className="flex flex-wrap gap-5">
              <DesktopItemBox item={"Electronics gadgets"} />
              <DesktopItemBox item={"Electronics gadgets"} />
              <DesktopItemBox item={"Electronics gadgets"} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <section className="">
              <h4 className=" text-2xl text-[#000000B2] font-bold mb-1">
                Featured deal
              </h4>
              <p className=" text-base font-medium">
                We're proud to partner with tons of local farms and artisans who
                bring us an array of incredible food all year round!
              </p>
            </section>
            <div className="flex flex-wrap gap-5">
              <DesktopItemBox item={"Kitchen Appliances"} />
              <DesktopItemBox item={"Kitchen Appliances"} />
              <DesktopItemBox item={"Kitchen Appliances"} />
            </div>
          </div>

          <div className=" w-[50%] my-12 flex items-center text-center mx-auto justify-between">
            <h3 className="text-[0.7rem] font-medium">Previous</h3>

            <div className="flex gap-3 items-center ">
              {numbersList.map((item) => (
                <h4
                  className={`${
                    item == 12 && "selectedNumber"
                  } text-[0.7rem] text-[#999CA0]`}
                >
                  {item}
                </h4>
              ))}
            </div>

            <h3 className="text-[0.7rem] font-medium">Next</h3>
          </div>
        </div>
      </div>   
    </>
  )
}

export default DesktopMidSection