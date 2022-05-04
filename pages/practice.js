import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/practiceBody'
import Footer from '../components/historyComponents/footer'
const report = () => {
  return (
    <div className='px-20 xl:px-24  bg-[#f2f2f2] min-h-screen'>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}
export default report;