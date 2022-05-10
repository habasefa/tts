import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { selectUser } from 'redux/userSlice'
import { useSelector } from 'react-redux'
import { getTutorById, linkJobAndTutor } from 'backend-utils/tutor-utils'
import { getUserById } from 'backend-utils/user-utils'
import { useRouter } from 'next/router'

const ProfileCard = (props: any) => {
  const user = useSelector(selectUser)
  const router = useRouter()

  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }
  const [userData, setUserData] = useState<any>(null)
  const [applied, setApplied] = useState(false)
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
  const tutorId = userData?.tutor.id
  const handleApply = (id: number) => {
    linkJobAndTutor(token, id, tutorId)
      .then((res) => res.json())
      .then((data) => {
        setApplied(true)
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
    // router.push('/job-list')
  }
  const haveApplied = (tutors: any[]) => {
    const jobTutorId = tutors.map((tutor: any) => tutor.id)
    return jobTutorId.includes(tutorId) ? true : false
  }
  return (
    <div
      className="mb-5 flex flex-col  rounded-2xl bg-[#fcfcfc] p-5 text-[#1a3465]"
      style={{ border: '1px solid lightgray', height: '300px' }}
    >
      <p className="mb-3 flex-none font-serif text-lg font-bold uppercase md:text-xl lg:text-2xl">
        {props.job.location}
      </p>
      <div className="flex">
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          {props.job.grade}
        </button>
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          {props.job.subjects.toString()}
        </button>

        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          {props.job.workDays}
        </button>
        <button className="mx-1 flex-auto transform rounded-full bg-[#dfe1e4] px-1 font-serif text-sm tracking-wide transition-colors duration-200 hover:bg-blue-700 focus:outline-none  focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mx-0 lg:mx-1">
          {props.job.workHour}
        </button>
      </div>

      <p className="mt-4 flex-auto text-base ">{props.job.description}</p>

      <div className="flex-none">
        <button
          disabled={haveApplied(props.job.tutors)}
          style={
            haveApplied(props.job.tutors) || applied
              ? {
                  backgroundColor: '#343536',
                  cursor: 'not-allowed',
                  width: '100%',
                }
              : { width: '100%' }
          }
          onClick={() => handleApply(props.job.id)}
          className="mx-1 flex-auto transform rounded-full bg-[#1A3765] px-6 py-1 font-serif text-xl capitalize tracking-wide text-white transition-colors duration-200  hover:bg-white hover:text-[#1A3765] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Apply
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
