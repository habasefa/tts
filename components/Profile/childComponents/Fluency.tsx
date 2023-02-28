import React, { useEffect } from 'react'

const Fluency = (props: any) => {
  useEffect(()=>{
    console.log(props)
  },[])
  return (
    <div className="mt-4 w-fit">
      {props.langs.map((item: any, idx: any) => (
        <p className="text-[#1a3765] md:text-base w-fit" key={idx}>
          {item[0]} : {item[1]}
        </p>
      ))}
    </div>
  )
}

export default Fluency
