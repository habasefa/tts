import React from 'react'
import Sidebar from './Sidebar'
import Report from './Report'
import { API_URL } from '../../../utils/url'
// const API_URL = 'http://localhost:4000/'
const reportData = {
  id: '675c669faf42c54164f8137d',
  totalDays: '1',
  totalHours: '1',
  month: '12',
  week: '3',
  feedback: 'good',
  pastChallenge: 'good',
  futureChallenge: 'good',
  helpChallenge: 'good',
  dressing: '4',
  grooming: '6',
  hygiene: '8',
  punctuality: '10',
  manner: '10',
  elequence: '10',
  reports: {
    inputFields: [
      {
        name: 'Eba Adisu Kenea',
        subjects: [
          {
            subject: 'nmlk',
            chapters: [
              {
                chapter: '1',
                topics: [
                  { topic: 'dc', understanding: 'vxskakjc skj cjj j f' },
                ],
              },
            ],
          },
        ],
        assesments: [
          {
            course: 'blag',
            units: [
              {
                unit: 'as',
                types: [
                  {
                    typ: '',
                    result: 'sacsdcsjv ksjfd vkjad cjsakdavv',
                    type: 'cac',
                  },
                ],
              },
            ],
            assesment: 'math',
          },
          {
            course: 'blag',
            units: [
              {
                unit: 'as',
                types: [
                  {
                    typ: '',
                    result: 'sacsdcsjv ksjfd vkjad cjsakdavv',
                    type: 'cac',
                  },
                ],
              },
            ],
            assesment: 'math',
          },
        ],
      },
      {
        name: 'Eba Adisu Kenea',
        subjects: [
          {
            subject: 'nmlk',
            chapters: [
              {
                chapter: '1',
                topics: [{ topic: 'dc', understanding: 'vf' }],
              },
            ],
          },
        ],
        assesments: [
          {
            course: 'blag',
            units: [
              {
                unit: 'as',
                types: [{ typ: '', result: 'sacsavv', type: 'cac' }],
              },
            ],
            assesment: 'math',
          },
        ],
      },
    ],
  },
  reportDate: 13,
  reportMonth: 12,
  reportYear: 2024,
  tutorId: '675c648baf42c54164f81379',
  tutorName: 'Tutor Eba',
  rate: 4,
  status: 'SUCCESS',
  comment: 'good',
}

function App1() {
  return (
    <div className="flex  bg-gray-100 p-10">
      <div className="flex w-full rounded-3xl bg-gray-100 shadow-2xl">
        <main className=" flex-1 overflow-y-auto ">
          <Report report={report} />
        </main>
      </div>
    </div>
  )
}

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const App = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // setLoading(false)

  useEffect(() => {
    if (!id) return // Ensure we have the `id` before fetching

    const fetchReport = async () => {
      setLoading(true)
      setError(null)
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`${API_URL}api/v1/report/view/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch the report.')
        }
        const data = await response.json()
        console.log(data)
        if (data.success) {
          setReport(data.report)
        } else {
          throw new Error(data.message || 'Failed to fetch the report.')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchReport()
  }, [id])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Loading spinner */}
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-600"></div>
          {/* Loading message */}
          <p className="text-lg font-semibold text-gray-600">
            Loading, please wait...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Error icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <div className="h-6 w-6 rounded-full bg-red-600"></div>
          </div>
          {/* Error message */}
          <p className="text-lg font-semibold text-red-600">
            Oops! Something went wrong.
          </p>
          <p className="text-sm font-normal text-gray-500">{error}</p>
          {/* Reload button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Reload Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex bg-zinc-100 p-0 sm:p-10" id="report-pdf-content">
      <div className="flex w-full rounded-3xl bg-zinc-100 shadow-2xl">
        <main className="flex-1 overflow-y-auto p-0 sm:p-5">
          <Report report={report} />
        </main>
      </div>
    </div>
  )
}

export default App
