import React from 'react'

const KeyInfo = (props: any) => {
  return (
    <div className="mt-4 flex flex-col items-center bg-[#fefefe] p-5 text-[#1a3765] drop-shadow-xl md:mr-6 md:w-1/3 md:items-start xl:mr-14">
      <h1 className="mb-1 text-3xl text-[#1a3765]">Key Info</h1>
      <p className="md-text-lg mt-3 mb-2 text-2xl xl:text-2xl">{props.name}</p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        Gender: {props.gender}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">Age: {props.age}</p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        Grad Date: {props.graddate}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">cGPA: {props.cgpa}</p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">UEE: {props.UEE}</p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">SAT: {props.SAT}</p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        field: {props.field}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        Collage: {props.collage}
      </p>

      <h1 className="mt-8 text-base font-bold text-[#1a3765] md:text-xl">
        Preffered Bank
      </h1>
      <div className="h-1 w-1/2 bg-gray-200"></div>
      <p className="mt-0 mb-0 text-lg md:text-lg">CBE</p>
      <p className="mt-0 text-lg md:text-lg ">1000324523443</p>
    </div>
  )
}

export default KeyInfo
