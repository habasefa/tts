import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'redux/userSlice'
import jwt_decode from 'jwt-decode'
import { refreshToken } from 'backend-utils/refresh-token'
import Cover from '@/components/Home/Cover'
import Description from '@/components/Home/Description'
import Service from '@/components/Home/Service'
import WhyUs from '@/components/Home/WhyUs'
import Achievement from '@/components/Home/Achievement'
import Feedback from '@/components/Home/Feedback'
import Another from '@/components/Home/Another'
import Header from '@/components/Common/Header'
import Work from '@/components/Home/Work'
import Footer from '@/components/Common/Footer'

const Home: NextPage = () => {
  const user = useSelector(selectUser)
  const router = useRouter()
  const dispatch = useDispatch()

  if (user) {
    const decodedToken: any = jwt_decode(user.accessToken)
    if (decodedToken.exp > Date.now()) {
      dispatch(logout())
    }
    // if (user.user.role === 'TUTOR' && user.user.tutor === null)
    //   router.push('/complete-profile')
  }
  const access = localStorage.getItem('persist:root')

  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Temaribet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Cover />
      <Description />
      <Service />
      <WhyUs />
      <Work />
      <Achievement />
      <Feedback />
      <Another />
      <Footer />
    </div>
  )
}

export default Home
