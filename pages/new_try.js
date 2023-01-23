import React,  { useEffect, useState }  from 'react'
import Footer from '../components/historyComponents/footer'
import Header from '../components/historyComponents/header'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { ReportComponentProps } from "../utils/types"
import { createReport, fetchReport } from "../backend-utils/tutor-utils"
import { useRouter } from 'next/router'
import { getUserById } from '../backend-utils/user-utils'
const newtry = () => {
  const [userData, setUserData] = useState(null)
  const user = useSelector(selectUser)
  const [reportData, setReportData] = useState(null)
  if (user) {
    
    var token = user.accessToken
    var id = user.user.id
  }
  useEffect(() => {
  
    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((_) => {
     
      })
  }, [])
  // useE
  const router = useRouter()

  
  const [numberOfTutee, setnumberOfTutee] = useState(1)

  const [inputFields, setinputFields] = useState([
    {
      name: '',
      subjects: [
        {
          subject: '',
          chapters: [
            {
              chapter: ' ',
              topics: [
                {
                  topic: ' ',
                  understanding: '',
                },
              ],
            },
          ],
        },
      ],
      assesments: [
        {
          course: '',
          units: [
            {
              unit: ' ',
              types: [
                {
                  typ: ' ',
                  result: ' ',
                },
              ],
            },
          ],
        },
      ],
    },
  ])

  const handleClick = () => {
    
    
    createReport({
      reports: {inputFields},
      token: token,
      tutorId: userData?.tutor.id,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setErr(err))
    router.push('/')
  }
  const addCourse = (index) => {
  
    event.preventDefault()
    let new_data = {
      course: '',
      units: [
        {
          unit: ' ',
          types: [
            {
              typ: ' ',
              result: ' ',
            },
          ],
        },
      ],
    }
    let data = [...inputFields]
    data[index].assesments.push(new_data)
    setinputFields(data)
  }

  const addUnit = (index, assesments_index) => {
    event.preventDefault()
    let new_data = {
      unit: ' ',
      types: [
        {
          typ: ' ',
          result: ' ',
        },
      ],
    }
    let data = [...inputFields]
    data[index].assesments[assesments_index].units.push(new_data)
    setinputFields(data)
  }

  const addType = (index, assesments_index, unit_index) => {
    event.preventDefault()

    let new_data = {
      typ: ' ',
      result: ' ',
    }

    let data = [...inputFields]

    data[index].assesments[assesments_index].units[unit_index].types.push(
      new_data
    )

    setinputFields(data)
  }
  const removeAssesment = (index, subject_index) => {
    event.preventDefault()
    let data = [...inputFields]
    if (data[index].assesments.length > 1) {
      data[index].assesments.splice(subject_index, 1)
      setinputFields(data)
    }
  }
  const removeUnit = (index, subject_index, chapter_index) => {
    event.preventDefault()
    let data = [...inputFields]
    if (data[index].assesments[subject_index].units.length > 1) {
      data[index].assesments[subject_index].units.splice(chapter_index, 1)
      setinputFields(data)
    }
  }
  const removeType = (index, subject_index, chapter_index, topic_index) => {
    event.preventDefault()
    let data = [...inputFields]

    if (
      data[index].assesments[subject_index].units[chapter_index].types.length >
      1
    ) {
      data[index].assesments[subject_index].units[chapter_index].types.splice(
        topic_index,
        1
      )
      setinputFields(data)
    }
  }
  const removeSubject = (index, subject_index) => {
    event.preventDefault()
    console.log(reportData)
    let data = [...inputFields]
    if (data[index].subjects.length > 1) {
      data[index].subjects.splice(subject_index, 1)
      setinputFields(data)
    }
  }
  const removeChapter = (index, subject_index, chapter_index) => {
    event.preventDefault()
    let data = [...inputFields]
    if (data[index].subjects[subject_index].chapters.length > 1) {
      data[index].subjects[subject_index].chapters.splice(chapter_index, 1)
      setinputFields(data)
    }
  }
  const removeTopic = (index, subject_index, chapter_index, topic_index) => {
    event.preventDefault()
    let data = [...inputFields]

    if (
      data[index].subjects[subject_index].chapters[chapter_index].topics
        .length > 1
    ) {
      data[index].subjects[subject_index].chapters[chapter_index].topics.splice(
        topic_index,
        1
      )
      setinputFields(data)
    }
  }
  const addSubject = (index) => {
    console.log(userData)
    event.preventDefault()
    fetchReport(userData?.tutor.id, token).
    then((res) => res.json())
    .then((data) => {
      setReportData(data)
    })
    .catch((_) => {
      console.log("hi")
    })
  


    let new_data = {
      subject: '',
      chapters: [
        {
          chapter: ' ',
          topics: [
            {
              topic: ' ',
              understanding: '',
            },
          ],
        },
      ],
    }
    let data = [...inputFields]
    data[index].subjects.push(new_data)

    setinputFields(data)
  }
  const addChapter = (index, subject_index) => {
    event.preventDefault()
    let new_data = {
      chapter: ' ',
      topics: [
        {
          topic: ' ',
          understanding: '',
        },
      ],
    }
    let data = [...inputFields]
    data[index].subjects[subject_index].chapters.push(new_data)
    setinputFields(data)
  }
  const addTopic = (index, subject_index, chapter_index) => {
    event.preventDefault()
    let new_data = {
      topic: ' ',
      understanding: '',
    }
    let data = [...inputFields]
    data[index].subjects[subject_index].chapters[chapter_index].topics.push(
      new_data
    )
    setinputFields(data)
  }

  const handleNumber = (event) => {
    setnumberOfTutee(parseInt(event.target.value))
  }
  const handleinputFields = (
    event,
    index,
    subject_index = 0,
    chapter_index = 0,
    topic_index = 0,
    assesments_index = 0,
    unit_index = 0,
    type_index = 0
  ) => {
    console.log(event)
    let data = [...inputFields]

    if (event.target.name == 'subject') {
      data[index].subjects[subject_index][event.target.name] =
        event.target.value
    } else if (event.target.name == 'chapter') {
      data[index].subjects[subject_index].chapters[chapter_index][
        event.target.name
      ] = event.target.value
    } else if (event.target.name == 'topic') {
      data[index].subjects[subject_index].chapters[chapter_index].topics[
        topic_index
      ][event.target.name] = event.target.value
    } else if (event.target.name == 'understanding') {
      data[index].subjects[subject_index].chapters[chapter_index].topics[
        topic_index
      ][event.target.name] = event.target.value
    } else if (event.target.name == 'assesment') {
      data[index].assesments[assesments_index][event.target.name] =
        event.target.value
    } else if (event.target.name == 'unit') {
      data[index].assesments[assesments_index].units[unit_index][
        event.target.name
      ] = event.target.value
    } else if (event.target.name == 'type') {
      data[index].assesments[assesments_index].units[unit_index].types[
        type_index
      ][event.target.name] = event.target.value
    } else if (event.target.name == 'result') {
      data[index].assesments[assesments_index].units[unit_index].types[
        type_index
      ][event.target.name] = event.target.value
    } else {
      data[index][event.target.name] = event.target.value
    }

    setinputFields(data)
    console.log(inputFields)
  }

  const addField = () => {
    event.preventDefault()

    let k = numberOfTutee
    let data = [...inputFields]
    let temp = {
      name: '',
      subjects: [
        {
          subject: '',
          chapters: [
            {
              chapter: ' ',
              topics: [
                {
                  topic: ' ',
                  understanding: '',
                },
              ],
            },
          ],
        },
      ],
      assesments: [
        {
          course: '',
          units: [
            {
              unit: ' ',
              types: [
                {
                  typ: ' ',
                  result: ' ',
                },
              ],
            },
          ],
        },
      ],
    }
    console.log(k)
    k -= data.length

    while (k > 0) {
      console.log(k)
      data.push(temp)
      k -= 1
    }
    setinputFields(data)
  }
  return (
    <div className="min-h-screen px-20 font-minionPro text-[#1A3765] xl:px-24 ">
      <Header />
      <form>
        <div className="">
          <label className="col mt-2 text-lg font-semibold md:text-xl">
            Total Number of Tutee
          </label>
          <br></br>

          <input
            className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/12"
            type="number"
            max={4}
            min={1}
            placeholder="Number of Tutee"
            onChange={(event) => handleNumber(event)}
          />
          <button
            class="ml-2 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            onClick={addField}
          >
            add
          </button>
        </div>
        <div className=" mt-5 ">
          <div className="flex flex-row">
            <div className="col basis-1/4">
              <div >
                Month
              </div>
              <input
                className="w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none"
                type="text"
                id="name"
                placeholder="Month"
              />
            </div>
            <div className="col basis-1/4">
              <div >Week</div>
              <input
                className="w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none"
                type="text"
                id="name"
                placeholder="Week"
              />
            </div>

            <div className="col basis-1/4">
              <div>
                Total Days
              </div>
              <input
                className="w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none"
                type="text"
                id="name"
                placeholder="Total Days"
              />
            </div>
            <div className="col basis-1/4 ">
              <div >
                Total Hour
              </div>
              <input
                className="w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none "
                type="text"
                id="name"
                placeholder="Total Hour"
              />
            </div>
          </div>
        </div>
        <div className=" mt-5 ">
          {inputFields.map((input, index) => {
            return (
              <div key={index} className="grid grid-cols-1 gap-4">
                <div className="flex flex-row">
                  <div className="">
                    <label className="col mt-2 text-lg font-semibold md:text-xl">
                      Tutee Name
                    </label>
                    <br></br>
                    <input
                      className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={input.name}
                      onChange={(event) => handleinputFields(event, index)}
                    />
                  </div>
                </div>
                <div className="my-10 rounded-md bg-[#f2f2f2] px-3 py-2 ">
                  <div className="text-lg">On the Content</div>

                  {inputFields[index].subjects.map((input, valu) => {
                    return (
                      <div
                        className=" border-8 md:border-none md:mt-10 flex flex-row md:px-3 md:py-2"
                        key={valu}
                      >
                        <div className="col basis-1/4">
                          <div className="mb-2 inline-block w-2/3  rounded bg-[#1A3765] md:px-3 md:py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                            {' '}
                            Subject
                          </div>
                          <input
                            className=" md:mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={input.subject}
                            onChange={(event) =>
                              handleinputFields(event, index, valu)
                            }
                          />
                          <button onClick={() => addSubject(index)}>
                            <svg
                              class=" h-6  w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </button>
                          <button onClick={() => removeSubject(index, valu)}>
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                          </button>
                        </div>
                        <div className="col flex basis-3/4 flex-col">
                          {inputFields[index].subjects[valu].chapters.map(
                            (input, chapter_index) => {
                              return (
                                <div
                                  className=" border-4 md:border-none row flex flex-row"
                                  key={chapter_index}
                                >
                                  <div className="col">
                                    <div className=" md:mb-2 w-2/3 rounded bg-[#1A3765] md:px-6 md:py-2.5 md:text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                      {' '}
                                      Chapter
                                    </div>
                                    <input
                                      className="md:mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                      type="text"
                                      placeholder="Chapter"
                                      name="chapter"
                                      value={input.chapter}
                                      onChange={(event) =>
                                        handleinputFields(
                                          event,
                                          index,
                                          valu,
                                          chapter_index
                                        )
                                      }
                                    />
                                    <button
                                      onClick={() => addChapter(index, valu)}
                                    >
                                      <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() =>
                                        removeChapter(
                                          index,
                                          valu,
                                          chapter_index
                                        )
                                      }
                                    >
                                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                  </div>
                                  <div className="col flex basis-2/3 flex-col">
                                    {inputFields[index].subjects[valu].chapters[
                                      chapter_index
                                    ].topics.map((input, topic_index) => {
                                      return (
                                        <div
                                          className=" border-2 md:border-none row flex flex-row"
                                          key={topic_index}
                                        >
                                          <div className="col">
                                            <div className="  md:mb-2 w-2/3  rounded bg-[#1A3765] md:px-6 md:py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                              {' '}
                                              Topic
                                            </div>
                                            <input
                                              className="md:mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                              type="text"
                                              placeholder="Topic"
                                              value={input.topic}
                                              name="topic"
                                              onChange={(event) =>
                                                handleinputFields(
                                                  event,
                                                  index,
                                                  valu,
                                                  chapter_index,
                                                  topic_index
                                                )
                                              }
                                            />
                                            <button
                                              onClick={() =>
                                                addTopic(
                                                  index,
                                                  valu,
                                                  chapter_index
                                                )
                                              }
                                            >
                                              <svg
                                                class="h-6 w-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() =>
                                                removeTopic(
                                                  index,
                                                  valu,
                                                  chapter_index,
                                                  topic_index
                                                )
                                              }
                                            >
                                           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </button>
                                          </div>
                                          <div className="col ">
                                            <div className=" mb-2 w-2/3 rounded bg-[#1A3765] px-2 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md  transition duration-150">
                                              Understanding
                                            </div>
                                            <input
                                              className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                              type="text"
                                              placeholder="Understanding"
                                              value={input.understanding}
                                              name="understanding"
                                              onChange={(event) =>
                                                handleinputFields(
                                                  event,
                                                  index,
                                                  valu,
                                                  chapter_index,
                                                  topic_index
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="my-10 rounded-md bg-[#f2f2f2] px-3 py-2 ">
                  <div className="text-lg">On Result</div>
                  {inputFields[index].assesments.map(
                    (input, assesments_index) => {
                      return (
                        <div
                          className="mt-10 md:flex  md:flex-row rounded-lg bg-[#f2f2f2] px-3 py-2 "
                          key={assesments_index}
                        >
                          <div className="col basis-1/4">
                            <div className=" mb-2 w-2/3 rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                              {' '}
                              Subject
                            </div>
                            <input
                              className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                              type="text"
                              placeholder="Subject"
                              name="assesment"
                              value={input.assesment}
                              onChange={(event) =>
                                handleinputFields(
                                  event,
                                  index,
                                  0,
                                  0,
                                  0,
                                  assesments_index
                                )
                              }
                            />
                            <button onClick={() => addCourse(index)}>
                              <svg
                                class="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </button>
                            <button
                              onClick={() =>
                                removeAssesment(index, assesments_index)
                              }
                            >
                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                          </div>
                          <div className="col flex basis-3/4 flex-col">
                            {inputFields[index].assesments[
                              assesments_index
                            ].units.map((input, unit_index) => {
                              return (
                                <div
                                  className=" border-solid border-2 md:border-none  md:row md:flex md:flex-row"
                                  key={unit_index}
                                >
                                  <div className="col ">
                                    <div className=" my-2 w-2/3 rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                      {' '}
                                      Chapter
                                    </div>
                                    <input
                                      className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                      type="text"
                                      name="unit"
                                      placeholder="Chapter"
                                      value={input.unit}
                                      onChange={(event) =>
                                        handleinputFields(
                                          event,
                                          index,
                                          0,
                                          0,
                                          0,
                                          assesments_index,
                                          unit_index
                                        )
                                      }
                                    />
                                    <button
                                      onClick={() =>
                                        addUnit(index, assesments_index)
                                      }
                                    >
                                      <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() =>
                                        removeUnit(
                                          index,
                                          assesments_index,
                                          unit_index
                                        )
                                      }
                                    >
                                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                  </div>
                                  <div className="col flex basis-2/3 flex-col">
                                    {inputFields[index].assesments[
                                      assesments_index
                                    ].units[unit_index].types.map(
                                      (input, type_index) => {
                                        return (
                                          <div
                                            className="row flex flex-row"
                                            key={type_index}
                                          >
                                            <div className="col">
                                              <div className=" my-2 w-2/3 rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                                {' '}
                                                Type
                                              </div>
                                              <input
                                                className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                                type="text"
                                                placeholder="Type"
                                                value={input.type}
                                                name="type"
                                                onChange={(event) =>
                                                  handleinputFields(
                                                    event,
                                                    index,
                                                    0,
                                                    0,
                                                    0,
                                                    assesments_index,
                                                    unit_index,
                                                    type_index
                                                  )
                                                }
                                              />
                                              <button
                                                onClick={() =>
                                                  addType(
                                                    index,
                                                    assesments_index,
                                                    unit_index
                                                  )
                                                }
                                              >
                                                <svg
                                                  class="h-6 w-6"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                  ></path>
                                                </svg>
                                              </button>
                                              <button
                                                onClick={() =>
                                                  removeType(
                                                    index,
                                                    assesments_index,
                                                    unit_index,
                                                    type_index
                                                  )
                                                }
                                              >
                                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                              </button>
                                            </div>
                                            <div className="col">
                                              <div className=" my-2 w-2/3 rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                                Result
                                              </div>
                                              <input
                                                className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                                type="text"
                                                placeholder="Result"
                                                value={input.result}
                                                name="result"
                                                onChange={(event) =>
                                                  handleinputFields(
                                                    event,
                                                    index,
                                                    0,
                                                    0,
                                                    0,
                                                    assesments_index,
                                                    unit_index,
                                                    type_index
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                        )
                                      }
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div >
          <label className="text-xl">
            On the Tutorial Delivary 
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
          <div>
            <div className="text-lg">

            1.How do the tutorial go?

            </div>
            <input 
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4">
            
            </input>
           

          </div>
          <div>
          <div className="text-lg">


            2.Was there any Challenge?

            </div>
            <input 
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4">
            
            </input>

          </div>
          <div>
          <div className="text-lg">


          3.What are you going to the Challenge?

            </div>
            <input 
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4">
            
            </input>

          </div>
          <div>
          <div className="text-lg">


            4.How can we help you with the Challenge?

            </div>
            <input 
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4">
            
            </input>

          </div>



        </div>

        <div >
          <label className="text-xl">
            On Professionality(10%)
          </label>
        </div>

      <div className="w-1/2 my-5">
        <div className="grid grid-cols-2  gap-1 my-2">
          
          <div className="flex flex-row">
            <label className="col basis-1/2">
              Dressing
            </label>
            
            <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6">
            
            </input>
           
          </div>
          
            <div className="flex flex-row">
          <label className="col basis-1/2">
              Punctuality
            </label>
            <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6">
            
            </input>
            
            </div>
          <div className="flex flex-row">
          <label className="col basis-1/2">
              Grooming
            </label>
            <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6">
            
            </input>
          </div>

          <div className="flex flex-row">
          <label
          className="col basis-1/2"
          >
              Manner
            </label>
            <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6">
            
            </input>

          </div>
          <div className="flex flex-row">
          <label
          className="col basis-1/2"
          >
              Hygiene
            </label>
            <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6">
            
            </input>

          </div>
          <div className="flex flex-row">
          <label
          className="col basis-1/2"
          >
             Elequence
            </label>
            <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6">
            
            </input>
          </div>

          </div>
        </div>
        <button
          class=" focus:shadow-outline w-1/12 rounded-xl bg-[#fdd507] py-2 px-4 font-bold text-white hover:bg-[#c6a917] focus:outline-none"
          type="button"
        onClick={handleClick}
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  )
}
export default newtry
