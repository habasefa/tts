import React from 'react'
import Image from 'next/image'

const TopLeftInfo = (props: any) => {
  return (
    <div className="mb-6 flex w-full justify-between md:mb-0 md:w-1/3 md:flex-col">
      <h1 className="my-3 text-xl text-[#fdd507] md:text-4xl 2xl:my-7 2xl:text-5xl">
        temaribet
      </h1>
      <div className="ml-2">
        <Image
          className="rounded-full"
          src={'/another.jpg'}
          alt="profile photo"
          width={150}
          height={150}
          objectFit={'cover'}
        ></Image>
      </div>
      <h1 className="mt-2 text-xl md:text-4xl 2xl:text-5xl">{props.name}</h1>
      <p className="m-1 text-base md:mt-0 2xl:text-lg">{props.status}</p>
    </div>
  )
}

export default TopLeftInfo
