import React, { useEffect } from 'react'

import CenterContent from '@/components/CenterContent'
import Tutor from '@/views/completeProfile/tutor'
import Parent from '@/views/completeProfile/parent'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { useRouter } from 'next/router'
import Header from '@/components/Common/Header'

export default function CompleteProfile() {
  const user = useSelector(selectUser)
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push('/')
  }, [])
  return (
    <div className="mainContentWithLeftMargin">
      <Header />
      <CenterContent>
        {user && user.user.role == 'TUTOR' ? (
          <Tutor user={user} />
        ) : (
          <Parent user={user} />
        )}
      </CenterContent>
    </div>
  )
}
