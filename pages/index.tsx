import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import Header from '../components/Header'
import jwt_decode from 'jwt-decode'
import { refreshToken } from 'backend-utils/refresh-token'

const Home: NextPage = () => {
  const user = useSelector(selectUser)
  const router = useRouter()
  if (user) {
    const decodedToken = jwt_decode(user.accessToken)
  }
  const access = localStorage.getItem('persist:root')

  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Temaribet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
