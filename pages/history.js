import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/body'
import Footer from '../components/historyComponents/footer'
const history = () => {
  return (
    <div className='px-20 xl:px-24  bg-[#f2f2f2] min-h-screen'>
        <Header />
        <div className='flex justify-end mt-14 mb-10'>
          <div className='md:mr-36'>
            <h1 className='text-[#1a3765] text-4xl'>History of Education</h1>
            <p className='text-[#1a3765] text-2xl'>Practical lesson on classic tutorials</p>
          </div>
        </div>
        <Body />
        <Footer />
    </div>
  )
}
export default history