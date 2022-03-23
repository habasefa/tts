import React, { useEffect } from 'react'

import CenterContent from '@/components/CenterContent'
import Tutor from '@/views/completeProfile/tutor'
import Parent from '@/views/completeProfile/parent'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
// import { IdTokenResult, User } from "firebase/auth";

// interface IProps {
//   userInfo: IdTokenResult | null | undefined;
//   authUser: User | null;
// }

export default function CompleteProfile() {
  //   useEffect(() => {
  //     if ((userInfo?.claims.profileCompletionLevel as unknown as number) !== 2) {
  //       window.location.href = "/";
  //     }
  //   }, []);
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
