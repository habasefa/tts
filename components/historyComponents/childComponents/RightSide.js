import React from 'react'
import SocialMedia from './SocialMedia'

const RightSide = (props) => {
  
  return (
    <div className=' w-fit md:w-2/3'>
      <div className='bg-[#fefefe] px-6 py-6 md:px-10 md:py-16 drop-shadow-xl text-[#1a3765]'>
        <h1 className='text-xl md:text-3xl bg-[#fefefe] text-[#1a3765] font-bold'> {props.text}</h1>
        
        <p className='text-justify md:text-left mt-3 md:text-base xl:text-lg'>
            {props.subtext}
        </p>
        
      </div  >
      <SocialMedia />
    </div>
    
  )
}

export default RightSide