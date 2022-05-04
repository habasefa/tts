import React from 'react'
import SocialMedia from './SocialMedia'

const RightSide = (props) => {
  
  return (
    <div className='md:w-2/3'>
      <div className='bg-[#fefefe] px-10 py-16 drop-shadow-xl text-[#1a3765]'>
        <h1 className='text-xl md:text-3xl bg-[#fefefe] text-[#1a3765] font-bold'>1. Start of Education</h1>
        <p className='text-justify md:text-left mt-3 md:text-base xl:text-lg'>
            {props.text}
        </p>
        <h1 className='text-lg md:text-2xl bg-[#fefefe] text-[#1a3765] mt-6'>
          In Summary
        </h1>
        <p className='text-justify md:text-left mt-3 md:text-base xl:text-lg'>
            {props.subtext}
        </p>
        
      </div  >
      <SocialMedia />
    </div>
    
  )
}

export default RightSide