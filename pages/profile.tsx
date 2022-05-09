import Header from '@/components/Common/Header'
import BottomRow from '@/components/Profile/BottomRow'
import KeyInfo from '@/components/Profile/childComponents/KeyInfo'
import SocialMedia from '@/components/Profile/childComponents/SocialMedia'
import Footer from '@/components/Profile/Footer'
import PersonalEssay from '@/components/Profile/PersonalEssay'
import { getUserById } from 'backend-utils/user-utils'
// import Header from '@/components/Profile/Header'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
const profile = () => {
  const user = useSelector(selectUser)
  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }
  const [userData, setUserData] = useState<any>(null)
  const [err, setErr] = useState('')

  useEffect(() => {
    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
  }, [])

  console.log(userData)
  const keyInfo = {
    name: userData?.tutor.fullName,
    gender: userData?.tutor.gender,
    age: userData?.tutor.age,
    phone: userData?.tutor.phone,
    location: userData?.tutor.location,
    graddate: userData?.tutor.acadStatus,
    cgpa: userData?.tutor.cGPA,
    UEE: userData?.tutor.UEE,
    field: userData?.tutor.field,
    college: userData?.tutor.college,
    bank: userData?.tutor.preferredBank,
    bankAccountNo: userData?.tutor.bankAccountNo,
    hobby: userData?.tutor.hobby,
    subjects: userData?.tutor.subjects,
  }
  return (
    <div
      className="
    px-20  xl:px-16"
    >
      {/* bg-[#f2f2f2]  */}
      <Header />
      <div className="mt-40">
        <SocialMedia />
        <div className="flex flex-col justify-between md:flex-row">
          <KeyInfo keyInfo={keyInfo} />
          <PersonalEssay essay={userData?.tutor.essay} />
        </div>

        <BottomRow userData={keyInfo} />
      </div>
      <Footer />
    </div>
  )
}

export default profile
