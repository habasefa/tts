import React from 'react'

const BestAt = (props: any) => {
  return (
    <div className="mt-4">
      {props.subjects.map((item: any, idx: any) => (
        <p key={idx} className="text-[#1a3765] md:text-base">
          {item}
        </p>
      ))}
    </div>
  )
}

export default BestAt
