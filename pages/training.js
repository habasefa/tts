import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/body'
import Footer from '../components/historyComponents/footer'
const history = () => {
  return (
    <div className='px-20 xl:px-20  bg-[#f2f2f2] min-h-screen'>
        <Header />
        <div className='flex justify-center mt-14 mb-10'>
          <div className=' font-minionPro mt-1'>
            <h1 className='text-[#1a3765] text-4xl'>Trainning</h1>
            <p className='text-[#1a3765] text-2xl'>Practical lesson on classic tutorials</p>
          </div>
        </div>
        <Body />
        <Footer />
    </div>
  )
}
export default history