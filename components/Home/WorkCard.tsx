import React from 'react'
import 'antd/dist/antd.css'

const WorkCard = (props: any) => {
  return (
    <div className="mt-5 flex flex-col items-center font-minionPro">
      <div
      // style={{
      //   width: '400px',
      //   height: '300px',
      //   overflow: 'hidden',
      //   objectFit: 'cover',
      // }}
      >
        {props.children}
      </div>
      <div className="px-4">
        <h1 className="mt-1 text-center font-minionPro text-xl font-bold text-[#1A3765] md:text-2xl xl:text-3xl 2xl:text-4xl">
          {props.title}
        </h1>
        <p className="text-center text-lg text-[#1A3765] md:text-xl lg:text-xl 2xl:text-2xl">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default WorkCard
