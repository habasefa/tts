import Header from '@/components/Common/Header'
import BottomRow from '@/components/Profile/BottomRow'
import KeyInfo from '@/components/Profile/childComponents/KeyInfo'
import SocialMedia from '@/components/Profile/childComponents/SocialMedia'
import Footer from '@/components/Profile/Footer'
import PersonalEssay from '@/components/Profile/PersonalEssay'
import { getTutorById } from 'backend-utils/tutor-utils'
import { getUserById } from 'backend-utils/user-utils'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Header from '@/components/Profile/Header'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { useRouter } from "next/router";
import { Avatar } from '@mui/material'


const profile = () => {
  const router = useRouter();
  const user = useSelector(selectUser)
  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }
  const [userData, setUserData] = useState<any>(null)
  const [tutorData, setTutorData] = useState<any>(null)
  const [err, setErr] = useState('')
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {

    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        setIsLoading(false)
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
  }, [])
  // useEffect(() => {
  //   getTutorById(user.user.tutor?.id, token)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTutorData(data)
  //     })
  //     .catch((_) => {
  //       setErr('Something went wrong')
  //     })
  // }, [])

  const keyInfo = {
    
    id: userData?.tutor.id,
    name: userData?.tutor.fullName,
    gender: userData?.tutor.gender,
    age: userData?.tutor.age,
    phone: userData?.tutor.phone,
    location: userData?.tutor.location,
    acadStatus : userData?.tutor.acadStatus,
    graddate: userData?.tutor.acadStatus,
    cgpa: userData?.tutor.cGPA,
    UEE: userData?.tutor.UEE,
    field: userData?.tutor.field,
    college: userData?.tutor.college,
    bank: userData?.tutor.preferredBank,
    bankAccountNo: userData?.tutor.bankAccountNo,
    hobby: userData?.tutor.hobby,
    subjects: userData?.tutor.subjects,
    profilePicture:  userData?.tutor.profilePicture,
    contactName: userData?.tutor.contactName,
    telegramUsername : userData?.tutor.telegramUsername,
    contactPhone1 : userData?.tutor.contactPhone1,
    contactPhone2 : userData?.tutor.contactPhone2,
    contactEmail : userData?.tutor.contactEmail
  }

  return (
    <div
      className="
   px-10 md:px-20  xl:px-16"
    >
      {/* bg-[#f2f2f2]  */}
      <Header />
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={isLoading}
  
>
  <CircularProgress color="inherit" />
</Backdrop>
      <div className="mt-40 font-minionPro">
        <div className="justify-center">
        <Avatar
            src={keyInfo.profilePicture}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
        </div>
        <div className="flex justify-end my-2">
        <button
              className=" focus:shadow-outline w-1/2 rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none md:w-1/6 md:text-xl"
              type="button"
              onClick={() => router.push("/profile/" + userData?.tutor.id )}
            >
              Edit Profile
            </button>
        </div>
        {tutorData?.user?.jobs
          .filter((val: any) => val.id == tutorData.user.hiredJobId)
          .map((val: any) => (
            <div className="mt-4 w-full  bg-[#fefefe] px-10 py-5 text-black drop-shadow-xl md:w-2/3">
              <h1 className="bg-[#fefefe] text-xl text-black md:text-3xl">
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
          <div className="mt-4 w-full bg-[#fefefe] px-10 py-5 text-black drop-shadow-xl md:w-2/3">
            <h1 className="bg-[#fefefe] text-xl  md:text-3xl">
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
