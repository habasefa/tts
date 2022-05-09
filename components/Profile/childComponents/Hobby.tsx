import React from 'react'

const Hobby = (props: any) => {
  return (
    <div className="mt-4">
      <p className="mx-2 inline-block text-[#1a3765] md:text-base">
        {props.hobby}
      </p>
    </div>
  )
}

export default Hobby
