import Header from '@/components/Common/Header'
import Body from '@/components/Profile/Body'
import Footer from '@/components/Profile/Footer'
// import Header from '@/components/Profile/Header'
import React from 'react'
const profile = () => {
  return (
    <div
      className="
    px-20 xl:mx-36 xl:px-16"
    >
      {/* bg-[#f2f2f2]  */}
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default profile
