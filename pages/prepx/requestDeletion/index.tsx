import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'
import { Button } from 'antd'
import { Typography } from '@mui/material'

const index = () => {
  const router = useRouter()

  return (
    <>
      <div className="h-screen overflow-y-scroll bg-gray-50   font-minionPro scrollbar-hide">
        <Header />
        {/* Title of the page */}
        <div className="mt-16 px-10 pt-20 xl:px-16">
          <h1 className="text-center text-4xl font-bold text-black">
            Prepx: Account Deletion Request
          </h1>
        </div>
        <div className="mt-16 px-10 xl:px-16">
          <div className="my-2 p-3 md:p-5">
            <Typography variant="body1" paragraph>
              For the termination of your Prepx account, please send an email to{' '}
              <a href="mailto:nazrihabtish@gmail.com">nazrihabtish@gmail.com</a>{' '}
              with the subject "Account Deletion Request". In the email, please
              include your full name and phone number. We will process your
              request within 7 working days.
            </Typography>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default index
