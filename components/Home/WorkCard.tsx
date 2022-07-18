import React from 'react'
import Image from 'next/image'
import 'antd/dist/antd.css'

const WorkCard = (props: any) => {
  return (
    <div className="mt-10 flex flex-col items-center font-minionPro">
      <Image src={props.image} alt="me" width="400" height="300" />
      <div className="px-4">
        <h1 className="text-[#1A3765] text-center text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#1A3765] font-bold font-minionPro mt-5">
          {props.title}
        </h1>
        <p className="text-[#1A3765] text-center text-lg md:text-xl lg:text-xl 2xl:text-2xl">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default WorkCard
