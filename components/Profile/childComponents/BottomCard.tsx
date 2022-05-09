import React from 'react'
import Availability from './Availability'
import BestAt from './BestAt'
import Fluency from './Fluency'
import Hobby from './Hobby'
import Vision from './Vision'

const BottomCard = (props: any) => {
  let child = null
  if (props.type == 'available') {
    child = (
      <Availability av={['Ayat', 'CMC', 'Summit', 'Gorro', 'Megenagna']} />
    )
  } else if (props.type == 'bestat') {
    child = <BestAt subjects={props.subjects} />
  } else if (props.type == 'fluency') {
    child = (
      <Fluency
        langs={[
          ['English', 'Pro'],
          ['Amharic', 'Native'],
          ['Afan Oromo', 'Pro'],
        ]}
      />
    )
  } else if (props.type == 'hobby') {
    child = <Hobby hobby={props.hobby} />
  } else if (props.type == 'vision') {
    child = (
      <Vision vision="It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed," />
    )
  }

  return (
    <div className="h-full bg-[#fefefe] p-5 drop-shadow-xl">
      <h1 className="text-sm text-[#1a3765] md:text-base xl:text-xl">
        {props.title}
      </h1>
      <div className="h-1 bg-gray-200"></div>
      {child}
    </div>
  )
}

export default BottomCard
