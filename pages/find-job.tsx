import CenterContent from '@/components/CenterContent'
import Header from '@/components/Header'
import { Col, Row } from 'antd'
import { getJobs } from 'backend-utils/tutor-utils'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'

function FindJob() {
  const user = useSelector(selectUser)
  const [jobs, setJobs] = useState([])
  const [err, setErr] = useState('')
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
      <div className="mt-8">
        <CenterContent>
          <Row gutter={[20, 20]}>
            {jobs.map((job: any) => {
              return (
                <Col md={12} lg={12} sm={24} key={job.id}>
                  <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:bg-white">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                        {job.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-black">
                      {job.subtitle}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-black">
                      {job.description}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-black">
                      <span className="font-bold text-gray-900">
                        Location:{' '}
                      </span>{' '}
                      {job.location}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-black">
                      <span className="font-bold text-gray-900">Grade: </span>{' '}
                      {job.grade}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-black">
                      <span className="font-bold text-gray-900">
                        Subjects:{' '}
                      </span>{' '}
                      {job.subjects.toString()}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Apply
                      <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>
        </CenterContent>
      </div>
    </div>
  )
}

export default FindJob
