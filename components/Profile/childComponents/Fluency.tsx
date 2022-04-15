import React from 'react'

const Fluency = (props: any) => {
  return (
    <div className="mt-4">
      {props.langs.map((item: any, idx: any) => (
        <p className="text-[#1a3765] md:text-base" key={idx}>
          {item[0]} : {item[1]}
        </p>
      ))}
    </div>
  )
}

export default Fluency
