import React from 'react'

const TopRightInfo = (props: any) => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-10 sm:flex-row md:w-2/3 md:justify-start md:px-5 ">
      <div className="mr-2 text-base text-[#1a3765] md:text-lg xl:text-xl">
        <p>P: {props.phone1}</p>
        <p>P: {props.phone2}</p>
      </div>

      <div className="ml-2 text-base text-[#1a3765] md:text-lg xl:text-xl">
        <p>E: {props.email}</p>
        <p>A: {props.address}</p>
      </div>
    </div>
  )
}

export default TopRightInfo
