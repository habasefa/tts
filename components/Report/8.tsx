import { createReport } from 'backend-utils/tutor-utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { ReportComponentProps } from 'utils/types'
export default function ReportRegistration_8({
  formData,
  setFormData,
  page,
  setPage,
}: ReportComponentProps) {
  const router = useRouter()
  const user = useSelector(selectUser)
  if (user) {
    var token = user.accessToken
    var id = user.user.tutor.id
  }
  const [data, setData] = useState(null)
  const [err, setErr] = useState('')
  const handleClick = () => {
    createReport({
      professionality: formData.professionality,
      assg: formData.assg,
      noDays: formData.noDays,
      feedback: formData.feedback,
      semiTotalHour: formData.semiTotalHour,
      quiz: formData.quiz,
      test: formData.test,
      envChallenge: formData.envChallenge,
      envHelp: formData.envHelp,
      envResponse: formData.envResponse,
      yourChallenge: formData.yourChallenge,
      yourHelp: formData.yourHelp,
      yourResponse: formData.yourResponse,
      tuteeChallenge: formData.tuteeChallenge,
      tuteeHelp: formData.tuteeHelp,
      tuteeResponse: formData.tuteeResponse,
      subjects: formData.subjects,
      topics: formData.topics,
      token: token,
      tutorId: id,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setErr(err))
    router.push('/')
  }
  return (
    <div>
      <div className="bg-[#FED607]">
        <div>
          <h1 className="mt-10 text-center text-3xl font-bold text-[#1A3765] lg:text-left ">
            Is there anything you want to tell us?
          </h1>
        </div>

        <div className="mt-10 text-center lg:text-left">
          <textarea
            value={formData.feedback}
            onChange={(e) =>
              setFormData({ ...formData, feedback: e.target.value })
            }
            className="mt-4  w-full resize-none py-5"
            id="phoneN"
            placeholder=""
          ></textarea>
        </div>

        <div className="mt-4 text-center lg:text-left">
          <button
            onClick={handleClick}
            className=" bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-4 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
            className=" bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
