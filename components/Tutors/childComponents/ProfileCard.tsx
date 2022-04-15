import React from 'react'
import { Button } from 'antd'

const ProfileCard = (props: any) => {
  return (
    <div
      className="mb-5 flex flex-col rounded-2xl bg-[#fcfcfc] p-5 text-[#1a3465]"
      style={{ border: '1px solid lightgray' }}
    >
      <p className="mb-3 font-serif text-lg font-bold uppercase md:text-xl lg:text-2xl">
        {props.place}
      </p>
      <div className="flex">
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          choice1
        </button>
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          choice1
        </button>
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          choice1
        </button>
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          choice1
        </button>
      </div>

      <p className="mt-4 text-base">{props.description}</p>

      <div className="flex ">
        <button className="mx-1 flex-auto transform rounded-full bg-[#1A3765] px-6 py-1 font-serif text-xl capitalize tracking-wide text-white transition-colors duration-200  hover:bg-white hover:text-[#1A3765] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Apply
        </button>
        <button
          style={{ border: '1px solid gray' }}
          className="mx-1 flex-auto transform rounded-full bg-white px-6 py-1 font-serif text-xl capitalize tracking-wide transition-colors duration-200  hover:bg-[#1A3765] hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          More
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
