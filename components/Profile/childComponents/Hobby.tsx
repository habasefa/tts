import React from 'react'

const Hobby = (props: any) => {
  return (
    <div className="mt-4">
      {props.hobbies.map((item: any, idx: any) => (
        <p className="mx-2 inline-block text-[#1a3765] md:text-base" key={idx}>
          {item}
        </p>
      ))}
    </div>
  )
}

export default Hobby
