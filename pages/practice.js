import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/practiceBody'
import Footer from '../components/historyComponents/footer'
const report = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]  px-20 xl:px-24">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default report
