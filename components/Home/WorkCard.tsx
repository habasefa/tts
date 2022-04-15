import React from 'react'
import Image from 'next/image'
import 'antd/dist/antd.css'

const WorkCard = (props: any) => {
  return (
    <div className="mt-10 flex flex-col items-center font-serif">
      <Image src={props.image} alt="me" width="300" height="250" />
      <div className="px-12">
        <h1 className="mt-5 text-xl font-bold text-[#1A3765] lg:text-3xl 2xl:text-5xl">
          {props.title}
        </h1>
        <p className="text-lg text-[#1A3765] lg:text-xl 2xl:text-3xl">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default WorkCard
