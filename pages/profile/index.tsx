import Header from '@/components/Common/Header'
import BottomRow from '@/components/Profile/BottomRow'
import KeyInfo from '@/components/Profile/childComponents/KeyInfo'
import SocialMedia from '@/components/Profile/childComponents/SocialMedia'
import Footer from '@/components/Profile/Footer'
import PersonalEssay from '@/components/Profile/PersonalEssay'
import { getTutorById } from 'backend-utils/tutor-utils'
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
  const [tutorData, setTutorData] = useState<any>(null)
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
  useEffect(() => {
    getTutorById(user.user.tutor?.id, token)
      .then((res) => res.json())
      .then((data) => {
        setTutorData(data)
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
  }, [])

  const keyInfo = {
    id: userData?.tutor.id,
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
        {tutorData?.user?.jobs
          .filter((val: any) => val.id == tutorData.user.hiredJobId)
          .map((val: any) => (
            <div className="mt-4 w-full bg-[#fefefe] px-10 py-5 text-[#1a3765] drop-shadow-xl md:w-2/3">
              <h1 className="bg-[#fefefe] text-xl text-[#1a3765] md:text-3xl">
                Your Job
              </h1>
              <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
                Location: {val.location}
              </p>
              <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
                Subjects: {val.subjects.toString()}
              </p>
              <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
                Grade: {val.grade}
              </p>
              <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
                Work Days: {val.workDays}
              </p>
              <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
                Work Hours: {val.workHour}
              </p>
              <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
                Description: {val.description}
              </p>
            </div>
          ))}
        {tutorData?.user?.students.map((val: any) => (
          <div className="mt-4 w-full bg-[#fefefe] px-10 py-5 text-[#1a3765] drop-shadow-xl md:w-2/3">
            <h1 className="bg-[#fefefe] text-xl text-[#1a3765] md:text-3xl">
              Student Info
            </h1>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Full Name: {val.fullName}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Nick Name: {val.nickName}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Subjects: {val.subjects.toString()}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Grade: {val.grade}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Age: {val.age}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              School: {val.school}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Location: {val.address}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Hobby: {val.hobby}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Work Days: {val.workDays}
            </p>
            <p className="mt-3 text-justify md:text-left md:text-base xl:text-lg">
              Work Hours: {val.workHour}
            </p>
          </div>
        ))}

        <SocialMedia id={keyInfo.id} />
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
