import React from 'react'

export default function DesktopTagline() {
  return (
    <>
        <div className="relative justify-center items-center hidden md:flex">
        <img
          className="relative brightness-50 w-full h-[100dvh] object-cover"
          src="https://s3-alpha-sig.figma.com/img/9f26/5a8e/14c4b1931ddc9cd4009e2c1bc9906619?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWB3zAiVg18y3AG3kiA18SK0eXPZ15W0oqoEfFcIYvzA~r1c7~Z2T4b23Av3KF~rBeZv~GhwXvhkJLnTN~1SpccOPGPQd8JxoNaCElIYH8yuwTouvYShDSgd0qmaiwdqlo1lbxnoiiJMXhhaIs1c0vsNkV8A3PfkqZDUWnpxnafe99CfGjSH6B4W6advav4OIXWo7ZfB7ZyMGmp9BCDPVeDgjBJNNs2oDCw5qNXWn97wsP29D67tBIJKOnRqs3PlMHjH~ZZ61eTB0RMXDjfFWJrZdleDqCoZO6CZbF9vlypeabxQ8O8FKMIY09MGLg1wFnGjJ~q74lUQkl0lt5exdw__"
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
