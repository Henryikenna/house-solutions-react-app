import React from 'react'

function MobileScrollingImages({imageList}) {
    
  return (
    <>
        <section className="ml-[0.875rem] mb-[1.8125rem] flex flex-row overflow-x-auto scrollbar-none scroll-smooth md:hidden">
        {imageList.map((item) => (
          <>
            <img
              className="relative h-[140px] flex mr-3 rounded-[10px] w-[15.375rem] object-cover"
              src={item.image}
              alt=""
            />
            <section className="absolute z-50">
              {/* <p className=" text-white text-[0.5125rem]">{item.bigText}</p>
              <p className="">{item.smallText}</p> */}
            </section>
          </>
        ))}
      </section>
    </>
  )
}

export default MobileScrollingImages