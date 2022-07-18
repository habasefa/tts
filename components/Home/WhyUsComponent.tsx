import React from 'react'
import Image from 'next/image'

const WhyUsComponent = (props: any) => {
  return (
    <div className="container flex h-full flex-col items-center bg-white py-5 px-4 lg:px-8 pb-0 drop-shadow-xl">
      <Image
        src={props.image}
        alt="Handpicked tutor image"
        width="280"
        height="250"
      />

      <h1 className="mt-3 text-center text-xl font-bold text-[#1A3765] lg:text-2xl 2xl:text-3xl">
        {props.title}
      </h1>
      <p
        className="text-center  text-[#1A3765] text-lg md:text-xl lg:text-xl 2xl:text-2xl"
      >
        {props.description}
      </p>
    </div>
  )
}

export default WhyUsComponent
