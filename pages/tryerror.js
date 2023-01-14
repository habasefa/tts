import React,  { useEffect, useState }  from 'react'
import Footer from '../components/historyComponents/footer'
import Header from '../components/historyComponents/header'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { createReport, fetchReport } from "../backend-utils/tutor-utils"
import { useRouter } from 'next/router'
import { getUserById } from '../backend-utils/user-utils'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { Input } from 'antd';
import { borderRadius, height } from '@mui/system'
import {
  Autocomplete,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Box,
  Item,
  Button,
  Tabs,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Tab,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
} from '@mui/material'

const tryerror = () => {
  const date = new Date();

const day = date.getDate()+1
const mont = date.getMonth() + 1;
const year = date.getFullYear();
const router = useRouter()


  const [userData, setUserData] = useState(null)
  const user = useSelector(selectUser)
  const [openDup,setOpenDup] = useState(false)
  const [reportData, setReportData] = useState(null)
  const [month,setMonth]=useState(null)
  const [week,setWeek]=useState(null)
  const [totaldays,setTotalDays]=useState(null)
  const [totalhours, setTotalHours] =useState(null)
  const [feedback, setFeedback] = useState(null)
  const [pastChallenge,setPastChallenge] =useState(null)
  const [futureChallenge,setFutureChallenge] =useState(null)
  const [helpChallenge,setHelpChallenge] = useState(null)
  const [ dressing, setDressing] =useState(null)
  const [ punctuality , setpunctuality ]= useState(null)

  const [grooming, setgrooming] =useState(null)
  const [manner, setmanner] =useState(null)

  const [hygiene, sethygiene] =useState(null)
  const [elequence, setelequence ] =useState(null)
  useEffect(()=>{
      if (!user){
    router.push('/')
  }

  },[])

 
  const handleFeedback =(event)=>{
    setFeedback(event.target.value)
  }

  const handlePastChallenge = (event) =>{
    setPastChallenge(event.target.value)
  }
  const handleFutureChallenge = (event) =>{
    setFutureChallenge(event.target.value)
  }
  const handleHelpChallenge = (event) =>{
    setHelpChallenge(event.target.value)
  }


  const handleDressing =(event)=>{
    console.log(event.target.value)
    setDressing(event.target.value)
  }
  const handlePunctuality =(event)=>{
    setpunctuality(event.target.value)
  }

  const handleGromming =(event) =>{
    setgrooming(event.target.value)
  }
  const handleManner =(event)=>{
    setmanner(event.target.value)
  }
  const handleHygiene =(event)=>{
    sethygiene(event.target.value)
  }
  const handleElequence =(event)=> {
    setelequence(event.target.value)
  }
  if (user) {
    
    var token = user.accessToken
    var id = user.user.id
  }
  useEffect(() => {
    console.log(token)
    console.log("hi")
    console.log(id)
    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((_) => {
       console.log("hi")
      })
  }, [])
  // useE
 

  
  const [numberOfTutee, setnumberOfTutee] = useState(1)

  const [inputFields, setinputFields] = useState([
    {
      name: '',
      subjects: [
        {
          subject: '',
          chapters: [
            {
              chapter: '',
              topics: [
                {
                  topic: '',
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
              unit: '',
              types: [
                {
                  typ: '',
                  result: '',
                },
              ],
            },
          ],
        },
      ],
    },
  ])

  const handleClick = () => {
    event.preventDefault()
    console.log(token)
    console.log(inputFields)
    console.log(userData)
    
    createReport({
      reports: {inputFields},
      token: token,
      tutorId: userData?.tutor.id,
      totalDays : totaldays,
      totalHours: totalhours,
      month :String(reportMonth),
      week : String(reportWeek),
      feedback :feedback,
      pastChallenge: pastChallenge,
      futureChallenge: futureChallenge,
      helpChallenge : helpChallenge,
      dressing    : dressing,
      grooming  : grooming,
      hygiene  :  hygiene,
      punctuality  : punctuality,
      manner    : manner,
      elequence : elequence,
      tutorName :  userData?.tutor.fullName,
      reportDate   : reportDate,
      reportMonth   : reportMonth,
      reportYear:  reportYear
          
    })
      .then((res) => res.json())
      .then((res)=>{
        console.log(res)
        if (res.success){
          console.log(res)
          setOpen(true)
        }
        else{
          if (res.duplication){
            console.log(res)
            setOpenDup(true)
          }
        }
      })
      .catch((err) => console.log(err))
      .finally(()=>{
        
      
      })
   
  }
  const handleMonth =(event)=>{
    setMonth(event.target.value)
  }
  const handleWeek = (event)=>{
    setWeek(event.target.value)
  }

  const handleDays =(event)=>{
    setTotalDays(event.target.value)

  }

  const handleHour = (event) =>{
    setTotalHours(event.target.value)
  }
  const addCourse = (index) => {
  
    event.preventDefault()
    let new_data = {
      course: '',
      units: [
        {
          unit: '',
          types: [
            {
              typ: '',
              result: '',
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
      unit: '',
      types: [
        {
          typ: '',
          result: '',
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
      typ: '',
      result: '',
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
              chapter: '',
              topics: [
                {
                  topic: '',
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
              unit: '',
              types: [
                {
                  typ: '',
                  result: '',
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
  const getDay = (date) => {
    // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
    return day - 1;
  };
  const createCalander =  (year, month, date) => {
    let data = [];
  
    
    let mon = month - 1;
    let d = new Date(year, mon);
    let temp = [];
   
    while (d.getMonth() == mon) {
      temp.push(d.getDate());
      if (date==d.getDate()){
        return data.length + 1
      }
      if (getDay(d) % 7 == 6) {
        // sunday, last day of week - newline

        data.push([temp[0], temp[temp.length - 1]]);
        temp = [];
      }

      console.log(d.getMonth());

      d.setDate(d.getDate() + 1);
    }
    if (temp.length > 0) {
      data.push([temp[0], temp[temp.length - 1]]);
      temp = [];
    }
    return None;
  };
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    router.push('/tryerror')
    setOpen(false)
    setOpenDup(false)
    
  }
  const [reportDate,setReportDate]= useState(day)
  const [reportMonth, setReportMonth] =useState(mont)
  const [reportYear,setReporYear]=useState(year)
  const [wholeDay, setWholeDay] =useState(dayjs());
  const [reportWeek,setReportWeek] =useState(createCalander(year,mont,day))

  const handleChangeForWholeDay = (newValue) => {
    
    setWholeDay(newValue);
    
  };
  useEffect (()=>{
    setReporYear(wholeDay.year())
    setReportMonth(wholeDay.month()+1)
    setReportDate(wholeDay.date())
    setReportWeek(createCalander(wholeDay.year(),wholeDay.month()+1,wholeDay.date()))
    console.log(reportDate)
    console.log(reportMonth)


  },[wholeDay])


  return (
    
    <LocalizationProvider  dateAdapter={AdapterDayjs }>
    <div className="min-h-screen px-20 font-minionPro text-[#1A3765] xl:px-24 ">
      <Header />
      <form
      method='post'
      onSubmit={handleClick}
      >
        <div className=" ">
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
        <div className="mt-5">
        <div>
          <div>
            <label className="col mt-2 text-lg font-semibold md:text-xl">
              Please Specify your report Date
            </label>
          </div>
       
          <DesktopDatePicker
          label=""
          inputFormat="MM/DD/YYYY"
          value={wholeDay}
          
          onChange={handleChangeForWholeDay}
          renderInput={(params) => <TextField {...params} />}
        
        />
         </div>
      
        </div>
        <div className=" mt-5 ">
          <div className="md:flex md:flex-row">
            <div className="col basis-1/4">
              <div className="mt-2  text-lg font-semibold md:text-xl">
                Month
              </div>
              <input
              disabled={true}
                className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                type="text"
                value={reportMonth}
                id="name"
                placeholder="Month"
              
              />
            </div>
            <div className="col basis-1/4">
              <div className="mt-2  text-lg font-semibold md:text-xl">Week</div>
              <input
               disabled={true}
                className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                type="text"
                
                value={reportWeek}
                id="name"
                placeholder="Week"
              
              />
            </div>

            <div className="col basis-1/4">
              <div className="mt-2  text-lg font-semibold md:text-xl">
                Total Days
              </div>
              <input
                className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                type="text"
                id="name"
                required={true}
                placeholder="Total Days"
                onChange={(event) => handleDays(event)}
              />
            </div>
            <div className="col ">
              <div className="mt-2  text-lg font-semibold md:text-xl">
                Total Hour
              </div>
              <input
                className="mr-1 w-full rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                type="text"
                id="name"
                required={true}
                placeholder="Total Hour"
                onChange={(event) => handleHour(event)}
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
                      required={true}
                      value={input.name}
                      onChange={(event) => handleinputFields(event, index)}
                    />
                  </div>
                </div>
                <div className=" w-fit my-10 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 md:px-3 md:py-2 ">
                  <div className="text-lg">On the Content</div>

                  {inputFields[index].subjects.map((input, valu) => {
                    return (
                      <div
                        className=" mt-10  flex flex-row px-3 py-2"
                        key={valu}
                      >
                        <div className="col basis-1/4 mr-2 md:mr-0">
                          { index==0 && valu==0 && (
                          <div className=" inline-block w-fit md:w-2/3  rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                            
                            Subject
                          </div>
                          )
                          
                  }
                          <input
                            className="mr-1 mb-2 w-fit rounded-lg text-xs border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            required={true}
                            value={input.subject}
                            onChange={(event) =>
                              handleinputFields(event, index, valu)
                            }
                          />
                          <button onClick={() => addSubject(index)}>
                            <svg
                              className="h-6 w-6 "
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
                                  className="row flex flex-row"
                                  key={chapter_index}
                                >
                                  <div className="col mr-2 md:mr-0">
                                  { index==0 && valu==0 && chapter_index==0 && (
                                    <div className=" w-fit  md:w-2/3 rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                      {' '}
                                      Chapter
                                    </div>
                                  )}
                                    <input
                                      className="mr-1 mb-2  w-fit rounded-lg text-xs border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                      type="text"
                                      placeholder="Chapter"
                                      name="chapter"
                                      required={true}
                                      
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
                                          className="row flex flex-row"
                                          key={topic_index}
                                        >
                                          <div className="col mr-2 md:mr-0">
                                          { index==0 && valu==0 && chapter_index==0 && topic_index==0 && (
                                            <div className="w-fit md:w-2/3  rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                              {' '}
                                              Topic
                                            </div>)}
                                            <input
                                              className="mr-1 mb-2  w-fit text-xs rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                              type="text"
                                              placeholder="Topic"
                                              required={true}
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
                                          <div className="col mr-2 md:mr-0">
                                          { index==0 && valu==0 && chapter_index==0 && topic_index==0 && (
                                            <div className=" mb-1 w-fit md:w-2/3 rounded bg-[#1A3765] text-center py-2.5 text-xs  uppercase  text-white shadow-md ">
                                              Understanding
                                            </div>
                                          )}
                                            <input
                                              className="mr-1 mb-2  w-fit text-xs rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                              type="text"
                                              placeholder="Understanding"
                                              required={true}
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

                <div className=" w-fit my-10 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 md:px-3 md:py-2 ">
                  <div className="text-lg">On Result</div>

                  {inputFields[index].assesments.map(
                    (input, assesments_index) => {
                      return (
                        <div
                        className=" mt-10  flex flex-row px-3 py-2"
                          key={assesments_index}
                        >
                          <div className="col basis-1/4 mr-2 md:mr-0">
                            { assesments_index==0 &&(
                             <div className=" inline-block w-fit md:w-2/3  rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                            
                         
                              Subject
                            </div>
                            )
                    }
                            <input
                              className="mr-1 mb-2 w-fit rounded-lg border text-xs border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                              type="text"
                              placeholder="Subject"
                              required={true}
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
                                  className="row flex flex-row"
                                  key={unit_index}
                                >
                                  <div className="col  mr-2 md:mr-0 ">
                                { assesments_index==0 && unit_index==0 &&
                                    <div className=" w-fit md:w-2/3  rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                      {' '}
                                      Chapter
                                    </div>
                            }
                                    <input
                                      className="mr-1 mb-2 w-fit text-xs rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                      type="text"
                                      name="unit"
                                      placeholder="Chapter"
                                      required={true}
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
                                            <div className="col  mr-2 md:mr-0">
                                            { assesments_index==0 && unit_index==0 && type_index==0 &&
                                              <div className=" mb-1  w-fit md:w-2/3  rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                                {' '}
                                                Type
                                              </div>
                                      }
                                              <input
                                                className="mr-1 mb-2 w-fit text-xs rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                                type="text"
                                                placeholder="Type"
                                                value={input.type}
                                                required={true}
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
                                            <div className="col mr-2 md:mr-0 ">
                                              { assesments_index==0 && unit_index==0 && type_index==0 &&
                                              <div className=" mb-1  w-fit md:w-2/3  rounded bg-[#1A3765] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out">
                                                Result
                                              </div>
                                      }
                                              <input
                                                 className="mr-1 mb-2 w-fit text-xs rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
                                                type="text"
                                                placeholder="Result"
                                                required={true}
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
        <div className="md:grid md:grid-cols-2 gap-4 my-2">
          <div>
            <div className="text-lg">

            1.How do the tutorial go?

            </div>
            <textarea  
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
            
            required={true}
            onChange={(event) => handleFeedback(event)}
            >
            
            </textarea >
           

          </div>
          <div>
          <div className="text-lg">


            2.Was there any Challenge?

            </div>
      
            <textarea  
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
            onChange={(event) => handlePastChallenge(event)}
            >
            
            </textarea>

          </div>
          <div>
          <div className="text-lg">


          3.What are you going to the Challenge?

            </div>
            <textarea  
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
            onChange={(event) => handleFutureChallenge(event)}
            required={true}
            >
            
            </textarea >

          </div>
          <div>
          <div className="text-lg">


            4.How can we help you with the Challenge?

            </div>
            <textarea  
            className="mr-1 w-full h-20 rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-3/4"
            onChange={(event) => handleHelpChallenge(event)}
            required={true}
            >
            
            </textarea >

          </div>



        </div>

        <div >
          <label className="text-xl">
            On Professionality(10%)
          </label>
        </div>

      <div className="w-1/2 my-5">
        <div className="md:grid md:grid-cols-2  gap-1 my-2">
          
          <div className="flex flex-row my-2">
            <label className="col basis-1/2">
              Dressing
            </label>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="dressing"
                margin="normal"
                size="small"
                required={true}
                value={dressing}
                sx={{
                  width:1/3,
                  borderRadius:3,
                  height:2/3,
                }}
                
               
                fullWidth
                onChange={(event) => handleDressing(event)}
              >
                <MenuItem  value="1">1%</MenuItem>
                <MenuItem value="2">2%</MenuItem>
                <MenuItem value="3">3%</MenuItem>
                <MenuItem value="4">4%</MenuItem>
                <MenuItem value="5">5%</MenuItem>
                <MenuItem value="6">6%</MenuItem>
                <MenuItem value="7">7%</MenuItem>
                <MenuItem value="8">8%</MenuItem>
                <MenuItem value="9">9%</MenuItem>
                <MenuItem value="10">10%</MenuItem>
               
              </Select>
            {/* <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6"
            onChange={(event) => handleDressing(event)}>
            </input> */}
           
          </div>
          
            <div className="flex flex-row my-2">
          <label className="col basis-1/2">
              Punctuality
            </label>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="punctuality"
                margin="normal"
                required={true}
                size="small"
                value={punctuality}
                sx={{
                  width:1/3,
                  borderRadius:3,
                  height:2/3,
                }}
                
               
                fullWidth
                onChange={(event) => handlePunctuality(event)}
              >
                <MenuItem  value="1">1%</MenuItem>
                <MenuItem value="2">2%</MenuItem>
                <MenuItem value="3">3%</MenuItem>
                <MenuItem value="4">4%</MenuItem>
                <MenuItem value="5">5%</MenuItem>
                <MenuItem value="6">6%</MenuItem>
                <MenuItem value="7">7%</MenuItem>
                <MenuItem value="8">8%</MenuItem>
                <MenuItem value="9">9%</MenuItem>
                <MenuItem value="10">10%</MenuItem>
               
              </Select>
            {/* <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6"
            onChange={(event) => handlePunctuality(event)}
            >
            
            </input> */}
            
            </div>
          <div className="flex flex-row my-2">
          <label className="col basis-1/2">
              Grooming
            </label>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="grooming"
                margin="normal"
                size="small"
                required={true}
                value={grooming}
                sx={{
                  width:1/3,
                  borderRadius:3,
                  height:2/3,
                }}
                
               
                fullWidth
                onChange={(event) => handleGromming(event)}
              >
                 <MenuItem  value="1">1%</MenuItem>
                <MenuItem value="2">2%</MenuItem>
                <MenuItem value="3">3%</MenuItem>
                <MenuItem value="4">4%</MenuItem>
                <MenuItem value="5">5%</MenuItem>
                <MenuItem value="6">6%</MenuItem>
                <MenuItem value="7">7%</MenuItem>
                <MenuItem value="8">8%</MenuItem>
                <MenuItem value="9">9%</MenuItem>
                <MenuItem value="10">10%</MenuItem>
               
              </Select>
            {/* <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6"
            onChange={(event) => handleGromming(event)}
            >
            
            </input> */}
          </div>

          <div className="flex flex-row my-2">
          <label
          className="col basis-1/2"
          >
              Manner
            </label>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="manner"
                margin="normal"
                size="small"
                value={manner}
                required={true}
                sx={{
                  width:1/3,
                  borderRadius:3,
                  height:2/3,
                }}
                
               
                fullWidth
                onChange={(event) => handleManner(event)}
              >
                   <MenuItem  value="1">1%</MenuItem>
                <MenuItem value="2">2%</MenuItem>
                <MenuItem value="3">3%</MenuItem>
                <MenuItem value="4">4%</MenuItem>
                <MenuItem value="5">5%</MenuItem>
                <MenuItem value="6">6%</MenuItem>
                <MenuItem value="7">7%</MenuItem>
                <MenuItem value="8">8%</MenuItem>
                <MenuItem value="9">9%</MenuItem>
                <MenuItem value="10">10%</MenuItem>
               
              </Select>
            {/* <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6"
            onChange={(event) => handleManner(event)}
            >
            
            </input> */}

          </div>
          <div className="flex flex-row my-2">
          <label
          className="col basis-1/2"
          >
              Hygiene
            </label>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="hygiene"
                margin="normal"
                size="small"
                value={hygiene}
                required={true}
                sx={{
                  width:1/3,
                  borderRadius:3,
                  height:2/3,
                }}
                
               
                fullWidth
                onChange={(event) => handleHygiene(event)}
              >
                  <MenuItem  value="1">1%</MenuItem>
                <MenuItem value="2">2%</MenuItem>
                <MenuItem value="3">3%</MenuItem>
                <MenuItem value="4">4%</MenuItem>
                <MenuItem value="5">5%</MenuItem>
                <MenuItem value="6">6%</MenuItem>
                <MenuItem value="7">7%</MenuItem>
                <MenuItem value="8">8%</MenuItem>
                <MenuItem value="9">9%</MenuItem>
                <MenuItem value="10">10%</MenuItem>
               
              </Select>
            {/* <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6"
            onChange={(event) => handleHygiene(event)}
            >
            
            </input> */}

          </div>
          <div className="flex flex-row my-2">
          <label
          className="col basis-1/2"
          >
             Elequence
            </label>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="elequence"
                margin="normal"
                size="small"
                value={elequence}
                required={true}
                sx={{
                  width:1/3,
                  borderRadius:3,
                  height:2/3,
                }}
                
               
                fullWidth
                onChange={(event) => handleElequence(event)}
              >
               <MenuItem  value="1">1%</MenuItem>
                <MenuItem value="2">2%</MenuItem>
                <MenuItem value="3">3%</MenuItem>
                <MenuItem value="4">4%</MenuItem>
                <MenuItem value="5">5%</MenuItem>
                <MenuItem value="6">6%</MenuItem>
                <MenuItem value="7">7%</MenuItem>
                <MenuItem value="8">8%</MenuItem>
                <MenuItem value="9">9%</MenuItem>
                <MenuItem value="10">10%</MenuItem>
               
              </Select>
            {/* <input 
            className="col baiss-1/4 mx-1 w-1/2  rounded-lg border border-gray-400 bg-gray-200 text-gray-700  transition duration-500 focus:border-gray-900 focus:outline-none md:w-1/6"
            onChange={(event) => handleElequence(event)}
            >
            
            </input> */}
          </div>

          </div>
        </div>
        <button
          class=" focus:shadow-outline md:w-1/12 rounded-xl bg-[#fdd507] py-2 px-4 font-bold text-white hover:bg-[#c6a917] focus:outline-none"
          type="submit"
        
        >
          Submit
        </button>
      </form>
      <div>
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          
        >
          <DialogTitle align="center">
            <label className="font-minionPro capitalize text-[#fdd507] md:text-3xl ">
              Successful
            </label>
          </DialogTitle>

          <DialogContent dividers>
            <Typography gutterBottom>
              You have successfully submitted your report for this Week
            </Typography>
            <br></br>
          </DialogContent>
          <div className="flex justify-center my-2">
          <button
              className=" focus:shadow-outline w-2/4  font-minionPro rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none  md:text-xl"
              type="button"
              onClick={handleClose}
            >
              Go To Home
            </button>
          
            </div>
        
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openDup}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle align="center">
            <label className="font-minionPro text-[#fd6907] md:text-3xl ">
              Alert
            </label>
          </DialogTitle>

          <DialogContent dividers>
          <label className="font-minionPro  md:text-xl ">
          Report is submitted for the this specific week.
            </label>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClose}
              autoFocus
            >
              Go to Home
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </div>
    </LocalizationProvider>
  )
}
export default tryerror
