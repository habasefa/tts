import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'redux/userSlice'
import jwt_decode from 'jwt-decode'
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
  const dispatch = useDispatch()

  if (user) {
    const decodedToken: any = jwt_decode(user.accessToken)
    if (decodedToken.exp > Date.now()) {
      dispatch(logout())
    }
  }

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
