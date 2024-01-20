import React from 'react'
import logo from "../assets/logoMobile.svg";
import { HiArrowRight } from 'react-icons/hi2'

function MobileFooter() {
  return (
    <>
 <footer className="bg-[#1E1E1E] flex items-center justify-between px-4 py-5 md:hidden">
        <div className="">
          <img className=" mb-1" src={logo} alt="" />

          <h4 className="text-[0.30625rem] text-white font-normal mb-2">
            loru, ipsum loru, ipsum loru, ipsum
          </h4>

          <section className="flex items-center relative">
            <input
              className="relative w-full h-5 text-[#F9F9F999] text-[0.4rem] bg-transparent border-b-[0.307px] border-b-[#FFFFFFB2] placeholder:font-serif placeholder:text-[#F9F9F999] placeholder:text-[0.30625rem] focus:outline-none focus:border-b-[1.3px]"
              placeholder="Email Address"
              type="text"
            />

            <button className="text-[#09A5F1] text-[5px] absolute right-1">
              <HiArrowRight />
            </button>
          </section>
        </div>

        <div className=" gap-4 flex justify-between">
          <section className="">
            <h3 className="text-[6px] text-[#FFFFFF80] font-semibold mb-2">
              Company
            </h3>

            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
          </section>
          <section className="">
            <h3 className="text-[6px] text-[#FFFFFF80] font-semibold mb-2">
              Company
            </h3>

            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
          </section>
          <section className="">
            <h3 className="text-[6px] text-[#FFFFFF80] font-semibold mb-2">
              Company
            </h3>

            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
            <h5 className="text-[5px] text-[#FFFFFF80] font-normal mb-1">
              About Us
            </h5>
          </section>
        </div>
      </footer>

    </>
  )
}

export default MobileFooter