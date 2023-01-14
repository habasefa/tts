import React, { useState } from 'react'
import LeftSide from './childComponents/LeftSide'
import RightSide from './childComponents/RightSide'
const Body = () => {
  const [index,setIndex]=useState(0)
  const paragraphs=[["It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are nIt's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are eeded, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well Above are a few examples of how the random paragraph generator can be beneficial The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try Generate a number of paragraphs to see if they are beneficial to your current projectIf you do find this paragraph tool useful please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.","there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future."],
             ["1It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are nIt's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are eeded, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well Above are a few examples of how the random paragraph generator can be beneficial The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try Generate a number of paragraphs to see if they are beneficial to your current projectIf you do find this paragraph tool useful please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.",
             "there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future."],
             ["2It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are nIt's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are eeded, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well Above are a few examples of how the random paragraph generator can be beneficial The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try Generate a number of paragraphs to see if they are beneficial to your current projectIf you do find this paragraph tool useful please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.",
             "there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future."],
             ["3It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are nIt's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are eeded, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well Above are a few examples of how the random paragraph generator can be beneficial The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try Generate a number of paragraphs to see if they are beneficial to your current projectIf you do find this paragraph tool useful please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.",
             "there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future."],
             ["4It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are nIt's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are eeded, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well Above are a few examples of how the random paragraph generator can be beneficial The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try Generate a number of paragraphs to see if they are beneficial to your current projectIf you do find this paragraph tool useful please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.",
             "there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future."] 
             ]

  return (
    <div className='flex flex-col md:flex-row justify-between font-minionPro'>


<div className='md:w-1/3'>
        <button className="w-5/6  px-12 py-3 2xl:px-20 text-lg md:text-2xl font-bold bg-white text-[#1a3765] shadow-lg" >Back to menu</button>
        <div className='mt-10 mb-10'>
        <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
            onClick={()=>setIndex(0)}
            >1. Start of Education</button>
            <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
              onClick={()=>setIndex(1)}
            >2. Start of Education</button>
           <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(2)}
            >3. Start of Education</button>
           <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(3)}
            >4. Start of Education</button>
           <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(4)}
            >5. Start of Education</button>
        </div>
    </div>
        <RightSide 
            text = {paragraphs[index][0]}
            subtext = {paragraphs[index][1]}

        />
        
      </div>
  )
}

export default Body