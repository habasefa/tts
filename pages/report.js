import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/body'
import Footer from '../components/historyComponents/footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { createReport } from '../backend-utils/tutor-utils'
const report = () => {
  const router = useRouter()
  const user = useSelector((state) => state.user.user)
  const token = user.accessToken
  const tutor = useSelector((state) => state.tutor.tutor.tutor)
  const students = tutor.students.map((student) => {
    return { name: student.fullName, parentId: student.parentId }
  })
  // console.log(students)

  const currentDate = new Date()
  console.log('tutor: ', tutor)

  const maxTutees = tutor.students.length
  const [formData, setFormData] = useState({
    totalHours: '',
    totalDays: '',
    week: '',
    month: '',
    feedback: '',
    pastChallenge: '',
    futureChallenge: '',
    helpChallenge: '',
    dressing: '',
    grooming: '',
    hygiene: '',
    punctuality: '',
    manner: '',
    elequence: '',
    // reportDate: '',
    reportDate: currentDate.getTime(),
    reportMonth: currentDate.getMonth() + 1, // getMonth() returns 0-11, so we add 1
    reportYear: currentDate.getFullYear(),
    tutorId: tutor.id,
    parentId: students.length ? students[0].parentId : '',
    tutorName: tutor.fullName,
  })
  const reportSchema = {
    tuteeName: '',
    subject: '',
    chapter: '',
    topic: '',
    understanding: '',
    course: '',
    units: '',
    type: '',
    result: '',
  }
  const [reportJson, setReportJson] = useState([])
  const [totalTutees, setTotalTutees] = useState(0)

  const handleFormChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }
  const handleReportChange = (e, ind) => {
    const { id, value } = e.target
    // console.log(id, value)
    setReportJson((prevState) => {
      const newArr = [...prevState]
      newArr[ind] = { ...newArr[ind], [id]: value }
      return newArr
    })
  }
  const haldleTotalTutees = (e) => {
    const { id, value } = e.target
    let arr = []
    for (let i = 0; i < value; i++) {
      arr.push({ ...reportSchema })
    }
    setTotalTutees(value)
    setReportJson(arr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createReport(formData, reportJson, token)
  }
  if (maxTutees === 0) {
    alert('You need Student to do Report')
    router.push('/')
  }
  return (
    <div className="min-h-screen px-20 font-minionPro xl:px-24">
      <Header />
      {/* <div className='flex justify-end mt-14 mb-10'>
          <div className='md:mr-36'>
            <h1 className='text-[#1a3765] text-4xl'>History of Education</h1>
            <p className='text-[#1a3765] text-2xl'>Practical lesson on classic tutorials</p>
          </div>
        </div> */}
      {/* <Body /> */}

      <form onSubmit={handleSubmit}>
        <div className="text-center lg:text-left">
          <div className="flex flex-col">
            <div className="p-3">
              <label
                className="text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                Total Number of Tutee
              </label>
              <br />
              <input
                className="mt-4 w-1/5 rounded-sm"
                type="number"
                id="totalTutees"
                placeholder="How many tutees do you have?"
                min={1}
                max={maxTutees}
                value={totalTutees}
                onChange={(e) => haldleTotalTutees(e)} // Uncomment and update if you're managing state
                required
              />
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-row">
            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Hours
              </div>
              <input
                className="mx-1"
                type="text"
                id="totalHours"
                placeholder="total hours"
                value={formData.totalHours}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Days
              </div>
              <input
                className="mx-1"
                type="text"
                id="totalDays"
                placeholder="total days"
                value={formData.totalDays}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>

            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Weeks
              </div>
              <input
                className="mx-1"
                type="text"
                id="week"
                placeholder="week"
                value={formData.week}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
                on
              />
            </div>
            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Months
              </div>
              <input
                className="mx-1"
                type="text"
                id="month"
                placeholder="Month"
                value={formData.month}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>
          </div>
        </div>
        {reportJson.map((item, ind) => (
          <div key={ind}>
            <div className="p-3">
              <label
                className="mt-3 text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                Name of Tutee {ind + 1}
              </label>
              <br />
              <select
                className="mx-1"
                id="tuteeName"
                value={reportJson[ind].tuteeName || ''}
                required
                onChange={(e) => handleReportChange(e, ind)} // Update state management
              >
                <option value="" disabled>
                  Select a Tutee
                </option>
                {students.map((student) => (
                  <option key={student.parentId} value={student.name}>
                    {student.name}
                  </option>
                ))}
              </select>

              <br></br>
            </div>
            <div className="mt-10 rounded-md bg-[#f2f2f2] px-3 py-2 ">
              <label
                className="text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                On the Content
              </label>

              <div className="flex flex-row">
                <div className="col basis-1/4">
                  <div> Subject</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={reportJson[ind].subject}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
                <div className="col basis-1/4">
                  <div> Chapter</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="chapter"
                    placeholder="Chapter"
                    value={reportJson[ind].chapter}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
                <div className="col basis-1/4">
                  <div> Topic</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="topic"
                    placeholder="topic"
                    value={reportJson[ind].topic}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
                <div className="col basis-1/4">
                  <div className="justify-center">Understanding</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="understanding"
                    placeholder="text"
                    value={reportJson[ind].understanding}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-md bg-[#f2f2f2] px-3 py-2">
              <label
                className="text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                On Result
              </label>

              <div className="flex flex-row">
                <div className="col basis-1/4">
                  <div> Assessment</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="unit"
                    placeholder="unit"
                    value={reportJson[ind].unit}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
                <div className="col basis-1/4">
                  <div> Units</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="units"
                    placeholder="units"
                    value={reportJson[ind].units}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                    // value={formData.name}
                  />
                </div>
                <div className="col basis-1/4">
                  <div> Type</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="type"
                    placeholder="type"
                    value={reportJson[ind].type}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
                <div className="col basis-1/4">
                  <div className="justify-center">Result</div>
                  <input
                    className="mx-1"
                    type="text"
                    id="result"
                    placeholder="result"
                    value={reportJson[ind].result}
                    required
                    onChange={(e) => handleReportChange(e, ind)} // Uncomment and update if you're managing state
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-2 rounded-md bg-[#f2f2f2] px-3 py-2 ">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            On the Tutorial Delivery
          </label>

          <div className="flex flex-row">
            <div className="col basis-1/2">
              <div> 1.How Did the tutoring go?</div>
              <input
                className="mx-1"
                type="text"
                id="feedback"
                placeholder="feedback"
                value={formData.feedback}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />

              <div> 2.Was there any challenge?</div>
              <input
                className="mx-1"
                type="text"
                id="pastChallenge"
                placeholder="past challenge"
                value={formData.pastChallenge}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>

            <div className="col basis-1/2">
              <div> 3.What are you going to the challenge?</div>
              <input
                className="mx-1"
                type="text"
                id="futureChallenge"
                placeholder="future challenge"
                value={formData.futureChallenge}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div className="justify-center">
                4.How can we help you with the challenge?
              </div>
              <input
                className="mx-1"
                type="text"
                id="helpChallenge"
                placeholder="help challenge"
                value={formData.helpChallenge}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>
          </div>
        </div>
        <div className="mt-2 rounded-md bg-[#f2f2f2] px-3 py-2 ">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            On Professionality
          </label>

          <div className="flex flex-row">
            <div className="col basis-1/2">
              <div> Dressing</div>
              <input
                className="mx-1"
                type="text"
                id="dressing"
                placeholder="Subject"
                value={formData.dressing}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />

              <div> Grooming</div>
              <input
                className="mx-1"
                type="text"
                id="grooming"
                placeholder="grooming"
                value={formData.grooming}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div> Hygiene</div>
              <input
                className="mx-1"
                type="text"
                id="hygiene"
                placeholder="hygiene"
                value={formData.hygiene}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>

            <div className="col basis-1/2">
              <div className="justify-center">Punctuality</div>
              <input
                className="mx-1"
                type="text"
                id="punctuality"
                placeholder="punctuality"
                value={formData.punctuality}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div className="justify-center">Manner</div>
              <input
                className="mx-1"
                type="text"
                id="manner"
                placeholder="manner"
                value={formData.manner}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div className="justify-center">Elequence</div>
              <input
                className="mx-1"
                type="text"
                id="elequence"
                placeholder="elequence"
                value={formData.elequence}
                required
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>
          </div>
        </div>{' '}
        <button
          class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  )
}
export default report
