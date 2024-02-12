import React from 'react'
import logo from "../assets/logoMobile.svg";
import { HiArrowRight } from 'react-icons/hi2';

function DesktopFooter() {
  return (
    <>
     <footer className="bg-[#1E1E1E] items-center justify-between px-32 py-11 hidden md:flex">
        <div className="">
          <img className=" mb-1 w-72" src={logo} alt="" />

          <h4 className=" text-xs text-white font-normal mb-5">
            loru, ipsum loru, ipsum loru, ipsum
          </h4>

          <section className="flex items-center relative">
            <input
              className="relative w-full h-8 text-[#F9F9F999] text-sm bg-transparent border-b-[0.307px] border-b-[#FFFFFFB2] placeholder:font-serif placeholder:text-[#F9F9F999] placeholder:text-xs focus:outline-none focus:border-b-[1.3px]"
              placeholder="Email Address"
              type="text"
            />

            <button className="text-[#09A5F1] text-xs absolute right-1">
              <HiArrowRight />
            </button>
          </section>
        </div>

        <div className=" gap-10 flex justify-between">
          <section className="">
            <h3 className=" text-lg text-[#FFFFFF80] font-semibold mb-4">
              Company
            </h3>

            <h5 className=" text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
          </section>
          <section className="">
            <h3 className=" text-lg text-[#FFFFFF80] font-semibold mb-4">
              Company
            </h3>

            <h5 className=" text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
          </section>
          <section className="">
            <h3 className=" text-lg text-[#FFFFFF80] font-semibold mb-4">
              Company
            </h3>

            <h5 className=" text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
            <h5 className="text-[0.9rem] text-[#FFFFFF80] font-normal mb-2">
              About Us
            </h5>
          </section>
        </div>
      </footer>   
    </>
  )
}

export default DesktopFooter