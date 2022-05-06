import React from 'react'

const KeyInfo = (props: any) => {
  console.log(props)
  return (
    <div className="mt-4 flex flex-col items-center bg-[#fefefe] p-5 text-[#1a3765] drop-shadow-xl md:mr-6 md:w-1/3 md:items-start xl:mr-14">
      <h1 className="mb-1 text-3xl text-[#1a3765]">Key Info</h1>
      <p className="md-text-lg mt-3 mb-2 text-2xl xl:text-2xl">
        {props.keyInfo.name}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        Gender: {props.keyInfo.gender}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        Age: {props.keyInfo.age}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        Grad Date: {props.keyInfo.graddate}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        cGPA: {props.keyInfo.cgpa}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        UEE: {props.keyInfo.UEE}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        SAT: {props.keyInfo.SAT}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        field: {props.keyInfo.field}
      </p>
      <p className="mb-2 text-xl md:text-base xl:text-xl">
        College: {props.keyInfo.college}
      </p>

      <h1 className="mt-8 text-base font-bold text-[#1a3765] md:text-xl">
        Preffered Bank
      </h1>
      <div className="h-1 w-1/2 bg-gray-200"></div>
      <p className="mt-0 mb-0 text-lg md:text-lg">{props.keyInfo.bank}</p>
      <p className="mt-0 text-lg md:text-lg ">{props.keyInfo.bankAccountNo}</p>
    </div>
  )
}

export default KeyInfo
