import React from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const ProfessionalizationItem = ({ title, percentage }) => {
  // Determine feedback based on percentage
  const feedback =
    percentage >= 9
      ? 'Excellent'
      : percentage >= 7.5
      ? 'Good'
      : percentage >= 5
      ? 'Fair'
      : 'Needs Improvement'

  // Determine gradient width based on percentage
  const gradientStyle = {
    width: `${percentage * 10}%`,
  }
  const percentColor =
    percentage >= 9
      ? 'green-100'
      : percentage >= 7.5
      ? 'red-100'
      : percentage >= 5
      ? 'yellow-500'
      : 'red-500'
  // const percentColor = 'red-500'

  return (
    <div className=" rounded-xl bg-gray-50 p-0 ">
      {/* Title */}
      <h3 className=" font-semibold text-gray-900">{title}</h3>

      <div className="flex items-center space-x-4">
        {/* Gradient Bar */}
        <div
          className={`relative h-2 flex-[6] rounded-full bg-gradient-to-r from-orange-100 to-green-100`}
        >
          <div
            className={`to-${percentColor} absolute h-full rounded-full bg-gradient-to-r from-orange-100`}
            style={gradientStyle}
          ></div>
        </div>

        {/* Text */}
        <span className="flex-[4] text-xs font-medium text-gray-800">
          {percentage * 10}% {feedback}
        </span>
      </div>
    </div>
  )
}
const BackgroundField = ({ children, title }) => {
  return (
    <div>
      <p className="mb-2 ml-3 text-base font-semibold text-black">{title}</p>

      <div className="mb-8 flex w-full flex-col rounded-2xl border-t-2 bg-gray-50 p-6 shadow-lg ">
        {children}
      </div>
    </div>
  )
}
const OnTutorialDeliveryFields = ({ question, answer }) => {
  return (
    <div className="rounded-xl  p-4 ">
      <h3 className="font-semibold text-black">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  )
}

const TimeField = ({ text, value }) => {
  return (
    <div className=" flex items-center justify-center sm:mb-0">
      <div className="mb-2  w-5/6 rounded-2xl border border-gray-300 bg-gray-50 p-1 pl-3 sm:w-40 lg:w-64  xl:w-96">
        <div className="flex items-center pt-1">
          <p className="mr-2 text-xs font-semibold text-gray-700  lg:text-sm">
            {text}
          </p>
          <p className="text-xs  font-bold text-gray-700 sm:text-xs lg:text-sm">
            {value}
          </p>
        </div>
      </div>
    </div>
  )
  // shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]
}
const UserCard = ({ name, index }) => {
  return (
    <div className="w-full md:w-2/5 lg:w-1/3">
      {index === 0 && (
        <p className="ml-2 hidden font-bold text-gray-400 md:block">Users</p>
      )}
      <div className="flex h-64 items-center justify-center">
        <div className="flex w-full flex-row items-center gap-2 rounded-2xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <i className="fas fa-user text-gray-500"></i>
          </div>
          <div className="mt-3 flex flex-col items-start">
            <h2 className="text-xs font-bold text-gray-700 lg:text-sm">
              {name}
            </h2>
            <p className="text-xs text-gray-500 lg:text-sm">
              637 Points - 98% Correct
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Report = ({ report }) => {
  const {
    reports: { inputFields },
    totalDays,
    totalHours,
    reportDate,
    reportMonth,
    reportYear,
    comment,
    rate,
  } = report

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const downloadPDF = () => {
    const element = document.getElementById('report-pdf-content') // Target the section
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('report.pdf')
    })
  }

  return (
    <div className="rounded-3xl bg-zinc-100 p-6 ">
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-sm  font-bold text-gray-800 sm:text-2xl">
          Reports
        </h1>
        <button
          onClick={downloadPDF}
          className="text-xs font-bold text-gray-600 hover:text-gray-800 sm:text-sm"
        >
          <i className="fas fa-download"></i> Download
        </button>
      </div>
      <div className="mb-8 h-0.5 bg-gray-300"></div>

      {/* Date, Total Hours, and Days */}
      <div className="mt-4 mb-4 flex flex-col justify-start bg-gray-100 sm:flex-row sm:justify-between">
        <TimeField
          text={months[reportMonth - 1]}
          value={`${reportDate}, ${reportYear}`}
        />
        <TimeField text="Total Hours:" value={totalHours} />
        <TimeField text="Total Hours:" value={totalDays} />
      </div>

      {/* Report Content */}
      {inputFields.map((user, index) => (
        <BackgroundField>
          <div className="mb-8 flex w-full flex-col  md:flex-row">
            {/* User Name */}
            <UserCard name={user.name} index={index} />

            <div className="flex w-full flex-col">
              {index === 0 && (
                <p className="ml-2 hidden font-bold text-gray-400 md:block">
                  Report
                </p>
              )}
              {/* grid */}
              <div>
                <h3 className="ml-3 font-semibold text-gray-800">On Content</h3>
                <div className="mb-4 w-full rounded-xl border-2 border-gray-200 p-4 text-xs md:text-sm">
                  <div className="grid grid-cols-4 gap-1 border-0 pb-2">
                    <span className="font-normal text-gray-400">Subject</span>
                    <span className="font-normal text-gray-400">Chapter</span>
                    <span className="font-normal text-gray-400">Topic</span>
                    <span className="font-normal text-gray-400">
                      Understanding
                    </span>
                  </div>
                  {user.subjects.map((subject, idx) =>
                    subject.chapters.map((chapter, i) =>
                      chapter.topics.map((topic, j) => (
                        <div
                          key={`${idx}-${i}-${j}`}
                          className="grid grid-cols-4 gap-1 border-0 py-2"
                        >
                          <span className="font-bold text-gray-800">
                            {subject.subject || '-'}
                          </span>
                          <span className="font-bold text-gray-800">
                            {chapter.chapter || '-'}
                          </span>
                          <span className="font-bold text-gray-800">
                            {topic.topic || '-'}
                          </span>
                          <span className="font-bold text-gray-800">
                            {topic.understanding || '-'}
                          </span>
                        </div>
                      ))
                    )
                  )}
                </div>

                <h3 className="ml-3 font-semibold text-gray-800">On Result</h3>
                <div className="mb-4 w-full rounded-xl border-2 border-gray-200 p-4  text-xs md:text-sm">
                  <div className="grid grid-cols-4 gap-1 border-0 pb-2">
                    <span className="font-normal text-gray-400">Cource</span>
                    <span className="font-normal text-gray-400">Unit</span>
                    <span className="font-normal text-gray-400">Type</span>
                    <span className="font-normal text-gray-400">Result</span>
                  </div>
                  {user.assesments.map((assessment, idx) =>
                    assessment.units.map((unit, i) =>
                      unit.types.map((type, j) => (
                        <div
                          key={`${idx}-${i}-${j}`}
                          className="grid grid-cols-4 gap-1 border-0 py-2"
                        >
                          <span className="font-bold text-gray-800">
                            {assessment.course || '-'}
                          </span>
                          <span className="font-bold text-gray-800">
                            {unit.unit || '-'}
                          </span>
                          <span className="font-bold text-gray-800">
                            {type.type || '-'}
                          </span>
                          <span className="font-bold text-gray-800">
                            {type.result || '-'}
                          </span>
                        </div>
                      ))
                    )
                  )}
                </div>
              </div>

              {/* <div className="flex justify-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-500 hover:text-blue-700"
                >
                  View Full Report {'>'}
                </a>
              </div> */}
            </div>
          </div>
        </BackgroundField>
      ))}

      <BackgroundField title={'On the tutorial Delivery'}>
        {/* Tutorial Feedback */}
        <div className="grid grid-cols-1 justify-between gap-4 lg:grid-cols-2 lg:gap-x-20">
          <OnTutorialDeliveryFields
            question="1. How do the tutorials go?"
            answer="The tutorials go well and the content is engaging."
          />
          <OnTutorialDeliveryFields
            question="2. Was there any challenges?"
            answer="Yes, the learning pace can be a bit challenging at times."
          />
          <OnTutorialDeliveryFields
            question="3. What are the challenges you go through?"
            answer="The major challenges include understanding advanced concepts."
          />
          <OnTutorialDeliveryFields
            question="4. How can we help you to pass the challenges?"
            answer="Provide more real-world examples and more interactive sessions."
          />
        </div>
      </BackgroundField>
      <BackgroundField title={'On Professionalization(100%)'}>
        {' '}
        <div className=" grid grid-cols-1 pb-3 sm:grid-cols-2">
          <ProfessionalizationItem
            title="Dressing"
            percentage={report.dressing}
          />
          <ProfessionalizationItem
            title="Grooming"
            percentage={report.grooming}
          />
          <ProfessionalizationItem
            title="Hygiene"
            percentage={report.hygiene}
          />
          <ProfessionalizationItem
            title="Punctuality"
            percentage={report.punctuality}
          />
          <ProfessionalizationItem title="Manner" percentage={report.manner} />
          <ProfessionalizationItem
            title="Elequence"
            percentage={report.elequence}
          />
        </div>
      </BackgroundField>
      <BackgroundField title={'Comment'}>
        <p className="text-gray-700">{comment}</p>
      </BackgroundField>
      <BackgroundField title={'Rating'}>
        {/* Comment and Rating Section */}
        <div className=" m-auto">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-4xl ${
                    star <= rate ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </BackgroundField>
    </div>
  )
}

export default Report
