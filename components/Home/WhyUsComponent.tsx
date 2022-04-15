import React from 'react'
import Image from 'next/image'

const WhyUsComponent = (props: any) => {
  return (
    <div className="container flex h-full flex-col items-center bg-white py-5 px-8 pb-0 drop-shadow-xl">
      <Image
        src={props.image}
        alt="Handpicked tutor image"
        width="200"
        height="200"
      />

      <h1 className="mt-3 text-center font-serif text-base font-bold text-[#1A3765] lg:text-2xl 2xl:text-3xl">
        {props.title}
      </h1>
      <p
        className="text-center font-serif text-sm text-[#1A3765] lg:text-lg 
         2xl:text-2xl"
      >
        {props.description}
      </p>
    </div>
  )
}

export default WhyUsComponent
