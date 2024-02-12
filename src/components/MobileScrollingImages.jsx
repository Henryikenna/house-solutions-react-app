import React from "react";

function MobileScrollingImages({ imageList }) {
  return (
    <>
      <section className=" ml-[0.875rem] mb-[1.8125rem] flex flex-row gap-3 overflow-auto scrollbar-none scroll-smooth md:hidden">
        {imageList.map((item) => (
          <section className="relative flex-none w-[60%] h-[140px]">
            <img
              className=" brightness-90 rounded-[10px] h-full w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
              alt=""
            />
            <section className="absolute top-0 bottom-0 left-2 right-2 flex flex-col justify-center items-center text-center">
              <p className=" text-white text-[0.52rem]">
                Explore the future of electronics.
              </p>
              <p className="text-[0.2rem] text-white">
                Upgrade your life, one gadget at a time.
              </p>
            </section>
          </section>
        ))}

        {/* <section className="relative inline w-[60%] h-[140px]">
          <img
            className=" rounded-[10px] h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
          />
          <section className="absolute top-0 bottom-0 left-2 right-2 flex flex-col justify-center items-center text-center">
            <p className=" text-white text-[0.52rem]">
              Explore the future of electronics.
            </p>
            <p className="text-[0.2rem] text-white">Upgrade your life, one gadget at a time.</p>
          </section>
        </section>

        <section className="relative inline w-[60%] h-[140px]">
          <img
            className=" rounded-[10px] h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
          />
          <section className="absolute top-0 bottom-0 left-2 right-2 flex flex-col justify-center items-center text-center">
            <p className=" text-white text-[0.52rem]">
              Explore the future of electronics.
            </p>
            <p className="text-[0.2rem] text-white">Upgrade your life, one gadget at a time.</p>
          </section>
        </section>

        <section className="relative inline w-[60%] h-[140px]">
          <img
            className=" rounded-[10px] h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
          />
          <section className="absolute top-0 bottom-0 left-2 right-2 flex flex-col justify-center items-center text-center">
            <p className=" text-white text-[0.52rem]">
              Explore the future of electronics.
            </p>
            <p className="text-[0.2rem] text-white">Upgrade your life, one gadget at a time.</p>
          </section>
        </section> */}
      </section>
    </>
  );
}

export default MobileScrollingImages;
