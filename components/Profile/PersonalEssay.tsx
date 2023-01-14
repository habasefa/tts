import React from 'react'

const PersonalEssay = (props: any) => {
  return (
    <div className="mt-4 w-full bg-[#fefefe] px-10 py-5 text-[#1a3765] drop-shadow-xl md:w-2/3">
      <h1 className="bg-[#fefefe] text-xl text-[#1a3765] md:text-3xl">
        Personal Essay
      </h1>
      <p className="mt-3 text-justify text-black md:text-left md:text-base xl:text-lg">
        {props.essay}
      </p>
    </div>
  )
}

export default PersonalEssay
