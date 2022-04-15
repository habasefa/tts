import React from 'react'
import { List, Button } from 'antd'
import Image from 'next/image'

const ServiceCard = (props: any) => {
  return (
    <div className="flex h-full flex-col justify-between bg-[#E5EFFF] drop-shadow-lg">
      <div className="w-full px-11 py-9 ">
        <h1 className="text-3xl  font-bold text-[#1A3765] 2xl:text-5xl">
          {props.title}
        </h1>
        <p className="border-gray-500  font-sans text-lg text-gray-500  2xl:text-2xl">
          {props.description}
        </p>
        <hr style={{ border: '1px solid lightgray' }} />
        {props.subjects.map((item: any) => (
          <li
            key={item}
            className="m-5 ml-0  text-lg text-[#1A3765] lg:text-2xl 2xl:text-4xl"
            style={{
              listStyleType: 'none',
              listStyleImage: "url('../../../public/right.png')",
            }}
          >
            <Image src="/right.png" width="40" height="40" /> {item}
          </li>
        ))}
      </div>
      <button className="w-full bg-[#1A3765] py-3 text-xl text-white 2xl:text-3xl">
        Get a Tutor
      </button>
    </div>
  )
}
export default ServiceCard
