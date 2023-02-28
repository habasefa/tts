import React, { useEffect } from 'react'

const Availability = (props: any) => {

  useEffect(()=>{
    console.log(props.av)
  },[props.av])
  return (
    <div className="mt-4">
      <p
          className="md:max-w-1/3 mx-2 inline-block text-[#1a3765] md:text-base"
          
        >
          {props.av!}
        </p>
    
    </div>
  )
}

export default Availability
