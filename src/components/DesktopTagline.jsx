import React from 'react';
import bgImage from "../assets/bgImg.jpg"

export default function DesktopTagline() {
  return (
    <>
        <div className="relative justify-center items-center hidden md:flex">
        <img
          className="relative brightness-50 w-full h-[100dvh] object-cover"
          src={bgImage}
          alt=""
        />

        <div className="absolute text-center">
          <h3 className=" text-5xl font-semibold text-white mb-5">
            Explore the future of electronics.
          </h3>
          <h4 className=" text-xl font-medium text-white">
            Upgrade your life, one gadget at a time.
          </h4>
        </div>
      </div>
    </>
  )
}
