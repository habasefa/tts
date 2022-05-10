import Header from '@/components/Common/Header'
import Footer from '@/components/Profile/Footer'
import GradeLevel from '@/components/Tutors/childComponents/GradeLevel'
import ProfileCard from '@/components/Tutors/childComponents/ProfileCard'
import { Col, Row } from 'antd'
import { getJobs } from 'backend-utils/tutor-utils'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'

const JobsList = () => {
  const user = useSelector(selectUser)
  const [jobs, setJobs] = useState([])
  const [err, setErr] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  if (user) {
    var token = user.accessToken
  }
  useEffect(() => {
    getJobs(token)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setJobs(data.users)
        } else {
          setErr(data.message)
        }
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
  }, [])
  return (
    <div>
      <Header />
      <div className="mx-12 mt-40">
        <Row gutter={[8, 8]} justify={'space-between'} className="">
          <Col xs={6} xl={5} md={6}>
            <div className="flex flex-col">
              <GradeLevel />
            </div>
          </Col>

          <Col xs={18} xl={19} md={18}>
            <div className="sticky top-36 z-50 w-full bg-white shadow-sm">
              <input
                onChange={(event) => setSearchTerm(event.target.value)}
                type={'search'}
                name="search"
                placeholder="Search by location"
                style={{ border: '1px solid lightgray' }}
                className="w-3/4 rounded-lg py-4 px-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] focus:shadow-[2px_2px_2px_2px_rgba(0,0,0,0.3)] focus:outline-none md:text-lg lg:w-3/5"
              />
              <div className="mt-4 text-right">
                <p className="mr-20 text-base font-bold opacity-70 md:text-lg">
                  Sort by last period
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Row gutter={[8, 20]} justify={'space-between'}>
                {jobs
                  .filter((job: any) => job.hiredTutorId == null)
                  .filter((job: any) => {
                    if (searchTerm == '') {
                      return job
                    } else if (
                      job.location
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return job
                    }
                  })
                  .map((job: any, idx: any) => (
                    <Col key={idx} xs={24} xl={8} md={12}>
                      <ProfileCard job={job} />
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default JobsList
