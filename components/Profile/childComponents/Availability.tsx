import React from 'react'

const Availability = (props: any) => {
  return (
    <div className="mt-4">
      {props.av.map((item: any, idx: any) => (
        <p
          className="md:max-w-1/3 mx-2 inline-block text-[#1a3765] md:text-base"
          key={idx}
        >
          {item}
        </p>
      ))}
    </div>
  )
}

export default Availability
