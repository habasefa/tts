import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/body'
import Footer from '../components/historyComponents/footer'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { createReport } from '../backend-utils/tutor-utils'
const report = () => {
  const currentDate = new Date()

  const tutor = useSelector((state) => state.user)
  console.log(tutor)
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
    eloquence: '',
    // reportDate: '',
    reportDate: currentDate.getTime(),
    reportMonth: currentDate.getMonth() + 1, // getMonth() returns 0-11, so we add 1
    reportYear: currentDate.getFullYear(),
    tutorId: tutor.id,
    parentId: '',
    tutorName: tutor.fullName,
    rate: 0,
    status: 'PENDING',
    view: 'PENDING',
    comment: '',
    viewUrl: '',
  })
  const [reportJson, setReportJson] = useState({
    totalTutees: 1,
    tuteeName: '',
    subject: '',
    chapter: '',
    topic: '',
    understanding: '',
    course: '',
    units: '',
    type: '',
    result: '',
  })

  const handleFormChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }
  const handleReportChange = (e) => {
    const { id, value } = e.target
    setReportJson((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createReport(formData)
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
                value={reportJson.totalTutees}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="p-3">
              <label
                className="mt-3 text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                Name of Tutee
              </label>
              <br></br>
              <input
                className="mx-1"
                type="text"
                id="tuteeName"
                placeholder="Tutee Name"
                value={reportJson.tuteeName}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
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
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>
          </div>
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
                value={reportJson.subject}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="col basis-1/4">
              <div> Chapter</div>
              <input
                className="mx-1"
                type="text"
                id="chapter"
                placeholder="Chapter"
                value={reportJson.chapter}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="col basis-1/4">
              <div> Topic</div>
              <input
                className="mx-1"
                type="text"
                id="topic"
                placeholder="topic"
                value={reportJson.topic}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="col basis-1/4">
              <div className="justify-center">Understanding</div>
              <input
                className="mx-1"
                type="text"
                id="understanding"
                placeholder="text"
                value={reportJson.understanding}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
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
                id="assessment"
                placeholder="assessment"
                value={reportJson.assessment}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="col basis-1/4">
              <div> Units</div>
              <input
                className="mx-1"
                type="text"
                id="units"
                placeholder="units"
                value={reportJson.units}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
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
                value={reportJson.type}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
            <div className="col basis-1/4">
              <div className="justify-center">Result</div>
              <input
                className="mx-1"
                type="text"
                id="result"
                placeholder="result"
                value={reportJson.result}
                onChange={(e) => handleReportChange(e)} // Uncomment and update if you're managing state
              />
            </div>
          </div>
        </div>
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
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />

              <div> 2.Was there any challenge?</div>
              <input
                className="mx-1"
                type="text"
                id="pastChallenge"
                placeholder="past challenge"
                value={formData.pastChallenge}
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
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />

              <div> Grooming</div>
              <input
                className="mx-1"
                type="text"
                id="grooming"
                placeholder="grooming"
                value={formData.grooming}
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div> Hygiene</div>
              <input
                className="mx-1"
                type="text"
                id="hygiene"
                placeholder="hygiene"
                value={formData.hygiene}
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
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div className="justify-center">Manner</div>
              <input
                className="mx-1"
                type="text"
                id="manner"
                placeholder="manner"
                value={formData.manner}
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
              <div className="justify-center">Eloquence</div>
              <input
                className="mx-1"
                type="text"
                id="eloquence"
                placeholder="eloquence"
                value={formData.eloquence}
                onChange={(e) => handleFormChange(e)} // Uncomment and update if you're managing state
              />
            </div>
          </div>
        </div>{' '}
        <button
          class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  )
}
export default report
